(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/my-learning/theChat/thechat/frontend/src/instrumentation-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
__turbopack_context__.s([
    "onRouterTransitionStart",
    ()=>onRouterTransitionStart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@sentry/nextjs/build/esm/client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$replay$2f$build$2f$npm$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@sentry/replay/build/npm/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$routing$2f$appRouterRoutingInstrumentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@sentry/nextjs/build/esm/client/routing/appRouterRoutingInstrumentation.js [app-client] (ecmascript)");
globalThis["_sentryRouteManifest"] = "{\"dynamicRoutes\":[],\"staticRoutes\":[{\"path\":\"/\"},{\"path\":\"/sentry-example-page\"}],\"isrRoutes\":[]}";
globalThis["_sentryNextJsVersion"] = "15.5.7";
globalThis["_sentryRewritesTunnelPath"] = "/monitoring";
;
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["init"]({
    dsn: "https://c2ac819b61ce9463d6877b482cab05b5@o4511644968747008.ingest.us.sentry.io/4511644968943616",
    // Add optional integrations for additional features
    integrations: [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$replay$2f$build$2f$npm$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replayIntegration"]()
    ],
    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: 1,
    // Enable logs to be sent to Sentry
    enableLogs: true,
    // Define how likely Replay events are sampled.
    // This sets the sample rate to be 10%. You may want this to be 100% while
    // in development and sample at a lower rate in production
    replaysSessionSampleRate: 0.1,
    // Define how likely Replay events are sampled when an error occurs.
    replaysOnErrorSampleRate: 1.0,
    // Enable sending user PII (Personally Identifiable Information)
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
    sendDefaultPii: true
});
const onRouterTransitionStart = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$routing$2f$appRouterRoutingInstrumentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureRouterTransitionStart"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=3d860_my-learning_theChat_thechat_frontend_src_instrumentation-client_ts_16926394._.js.map