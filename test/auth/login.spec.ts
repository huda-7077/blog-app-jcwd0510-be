import app from "../../src/app";
import { prismaMock } from "../prisma";
import request from "supertest";
import * as argonLib from "../../src/lib/argon";

const reqBody = {
  email: "4lV8d@example.com",
  password: "password",
};

beforeAll(() => {
  // before
  // ini adalah fungsi yang akan dijalankan sebelum testing pertama dijalankan
});

beforeEach(() => {
  // ini bakalan dijalankan sebelum setiap test dijalankan
});

afterEach(() => {
  // ini bakalan dijalankan setelah setiap test dijalankan
});

afterAll(() => {
  // ini bakalan dijalankan setelah semua test dijalankan
});

describe("POST /auth/login", () => {
  it("should login successfully", async () => {
    prismaMock.user.findFirst.mockResolvedValueOnce({
      ...reqBody,

      id: 1,
      name: "John Doe",
      referralCode: "",
      totalPoints: 0,
      profilPicture: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    jest.spyOn(argonLib, "comparePassword").mockResolvedValue(true);

    const response = await request(app).post("/auth/login").send(reqBody);

    expect(response.status).toBe(200);
    expect(response.body.id).toBeDefined();
  });

  it("shoul return error if email not found", async () => {
    prismaMock.user.findFirst.mockResolvedValueOnce(null);

    const response = await request(app).post("/auth/login").send(reqBody);

    expect(response.status).toBe(400);
    expect(response.text).toBe("Invalid email address");
  });

  it("shoul return error if password not match", async () => {
    prismaMock.user.findFirst.mockResolvedValueOnce({
      ...reqBody,

      id: 1,
      name: "John Doe",
      referralCode: "",
      totalPoints: 0,
      profilPicture: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    jest.spyOn(argonLib, "comparePassword").mockResolvedValue(false);

    const response = await request(app).post("/auth/login").send(reqBody);

    expect(response.status).toBe(400);
    expect(response.text).toBe("Incorrect password");
  });
});
