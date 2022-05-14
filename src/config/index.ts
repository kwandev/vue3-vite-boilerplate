const getConfigJson = async (mode: string) => {
  if (mode === 'dev') {
    mode = 'development';
  }

  return await import(`./conf.d/config.${mode}.json`);
};

interface ConfigParams {
  mode: string;
  configJson: any;
}

class Config {
  private _mode: string = '';
  private _config: any = {};

  constructor(params: ConfigParams) {
    const { mode, configJson } = params;

    this._mode = mode;
    this._config = configJson;
  }

  get mode() {
    return this._mode;
  }

  get api() {
    return this._config.api;
  }

  get web() {
    return this._config.web;
  }
}

const mode = import.meta.env.VITE_APP_MODE?.toString() || import.meta.env.MODE;
const configJson = await getConfigJson(mode);

export default new Config({
  mode,
  configJson,
});
