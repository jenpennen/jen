class PrefixMiddleware:
    """Create global prefix middleware"""

    def __init__(self, app, prefix=""):
        self.app = app
        self.prefix = prefix

    def __call__(self, environ, start_response):
        if environ["PATH_INFO"].startswith(self.prefix):
            environ["PATH_INFO"] = environ["PATH_INFO"][len(self.prefix):]
            environ["SCRIPT_NAME"] = self.prefix
            return self.app(environ, start_response)
        else:
            start_response("200", [("Content-Type", "application/json")])
            return [
                "{msg: please prefix all routes with /api to correctly route requests}".encode()
            ]
