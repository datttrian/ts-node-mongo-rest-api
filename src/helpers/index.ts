import crypto from "crypto";

const SECRET =
  "5b349476267f819e71b7f19a171373174c7c11da5c47466e91587648211e9b72";

export const random = () => crypto.randomBytes(128).toString("base64");
export const authentication = (salt: string, password: string) => {
  return crypto
    .createHmac("sha256", [salt, password].join("/"))
    .update(SECRET)
    .digest("hex");
};
