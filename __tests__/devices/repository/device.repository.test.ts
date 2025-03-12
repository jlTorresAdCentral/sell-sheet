import { getDeviceTypes } from "../../../src/devices/repository/device.repository";
import axios from "axios";

jest.mock("axios");

describe("getDeviceTypes", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("request fails, returns empty list", async () => {
        (axios.get as jest.Mock).mockRejectedValue(new Error("Network Error"));

        const result = await getDeviceTypes();

        expect(result).toHaveLength(1);
    })
});