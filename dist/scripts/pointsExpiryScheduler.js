"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_schedule_1 = require("node-schedule");
const prisma_1 = __importDefault(require("../lib/prisma"));
const expirePoints = () => __awaiter(void 0, void 0, void 0, function* () {
    const now = new Date();
    const expiredPoints = yield prisma_1.default.point.findMany({
        where: {
            expiredAt: { lte: now },
        },
    });
    for (const point of expiredPoints) {
        yield prisma_1.default.user.update({
            where: { id: point.userId },
            data: {
                totalPoints: {
                    decrement: point.points,
                },
            },
        });
        yield prisma_1.default.point.delete({
            where: {
                id: point.id,
            },
        });
    }
    //   console.log("Expired points have been removed.");
});
// Atur jadwal untuk menjalankan fungsi expirePoints setiap hari pada pukul 00:00
(0, node_schedule_1.scheduleJob)("*/1 * * * *", expirePoints);
