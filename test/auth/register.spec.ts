import app from "../../src/app";
import { prismaMock } from "../prisma";
import request from "supertest";

const reqBody = {
  name: "John Doe",
  email: "4lV8d@example.com",
  password: "password",
};

describe("POST /auth/register", () => {
  it("should register successfully", async () => {
    prismaMock.user.findFirst.mockResolvedValueOnce(null);

    prismaMock.user.create.mockResolvedValueOnce({
      ...reqBody,

      id: 1,
      referralCode: "",
      totalPoints: 0,
      profilPicture: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const response = await request(app).post("/auth/register").send(reqBody);

    expect(response.status).toBe(200);
    expect(response.body.id).toBeDefined();
  });

  it("should return error if email already exist", async () => {
    prismaMock.user.findFirst.mockResolvedValueOnce({
      ...reqBody,
      id: 1,
      referralCode: "",
      totalPoints: 0,
      profilPicture: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const response = await request(app).post("/auth/register").send(reqBody);

    console.log(response.text);

    expect(response.status).toBe(400);
    expect(response.text).toBe("Email already exist!");
  });
});
