import { ConfigPlugin, withAppBuildGradle } from "@expo/config-plugins";

type Config = ReadonlyArray<string>;

const escape = (input: string): string => `'${input.replace(/'/g, "\\'")}'`;

const configPlugin: ConfigPlugin<Config> = (config, props) =>
  withAppBuildGradle(config, (config) => {
    for (const value of props) {
      config.modResults.contents += `\nandroid {\n\tpackagingOptions {\n\t\tpickFirst ${escape(
        value
      )}\n\t}\n}\n`;
    }

    return config;
  });

export default configPlugin;
