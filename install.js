module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/peanutcocktail/cube app",
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install -e .[meshlab]",
          "uv pip install gradio"
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "app",
          // xformers: true
        }
      }
    },
    {
      method: "hf.download",
      params: {
        path: "app",
        _: ["Roblox/cube3d-v0.1"],
        "local-dir": "./model_weights",
      }
    }
  ]
}
