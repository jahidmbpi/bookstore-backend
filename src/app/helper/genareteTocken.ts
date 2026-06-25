import jwt from "jsonwebtoken";
import type { JwtPayload, SignOptions } from "jsonwebtoken";

const genaretTocken = (
  payload: JwtPayload,
  secret: string,
  expiresIn: string
) => {
  const tocken = jwt.sign(payload, secret, {
    expiresIn,
  } as SignOptions);
  return tocken;
};

export default genaretTocken;
