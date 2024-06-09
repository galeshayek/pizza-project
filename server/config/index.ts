import { config } from "dotenv";

const configDevEnv = () => {
  config({ path: "config/.env" });

  const mode = process.env.NODE_ENV; //dev|test|prod
  console.log(`running on ${mode} mode`)

  config({ path: `config/${mode}.env` });
};

export default configDevEnv;