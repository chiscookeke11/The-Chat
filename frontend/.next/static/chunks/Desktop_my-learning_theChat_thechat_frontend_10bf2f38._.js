(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/my-learning/theChat/thechat/frontend/src/app/sentry-example-page/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$public$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__logger$3e$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@sentry/core/build/esm/logs/public-api.js [app-client] (ecmascript) <export * as logger>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$dev$2f$diagnose$2d$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@sentry/browser/build/npm/esm/dev/diagnose-sdk.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$utils$2f$nextSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@sentry/nextjs/build/esm/common/utils/nextSpan.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/next/dist/client/components/noop-head.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
class SentryExampleFrontendError extends Error {
    constructor(message){
        super(message);
        this.name = "SentryExampleFrontendError";
    }
}
function Page() {
    _s();
    const [hasSentError, setHasSentError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$public$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__logger$3e$__["logger"].info("Sentry example page loaded");
            async function checkConnectivity() {
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$dev$2f$diagnose$2d$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["diagnoseSdkConnectivity"]();
                setIsConnected(result !== "sentry-unreachable");
            }
            checkConnectivity();
        }
    }["Page.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "sentry-example-page"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/app/sentry-example-page/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Test Sentry for your Next.js app!"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/app/sentry-example-page/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/app/sentry-example-page/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-spacer"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/app/sentry-example-page/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        height: "40",
                        width: "40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        role: "img",
                        "aria-label": "Sentry logo",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M21.85 2.995a3.698 3.698 0 0 1 1.353 1.354l16.303 28.278a3.703 3.703 0 0 1-1.354 5.053 3.694 3.694 0 0 1-1.848.496h-3.828a31.149 31.149 0 0 0 0-3.09h3.815a.61.61 0 0 0 .537-.917L20.523 5.893a.61.61 0 0 0-1.057 0l-3.739 6.494a28.948 28.948 0 0 1 9.63 10.453 28.988 28.988 0 0 1 3.499 13.78v1.542h-9.852v-1.544a19.106 19.106 0 0 0-2.182-8.85 19.08 19.08 0 0 0-6.032-6.829l-1.85 3.208a15.377 15.377 0 0 1 6.382 12.484v1.542H3.696A3.694 3.694 0 0 1 0 34.473c0-.648.17-1.286.494-1.849l2.33-4.074a8.562 8.562 0 0 1 2.689 1.536L3.158 34.17a.611.611 0 0 0 .538.917h8.448a12.481 12.481 0 0 0-6.037-9.09l-1.344-.772 4.908-8.545 1.344.77a22.16 22.16 0 0 1 7.705 7.444 22.193 22.193 0 0 1 3.316 10.193h3.699a25.892 25.892 0 0 0-3.811-12.033 25.856 25.856 0 0 0-9.046-8.796l-1.344-.772 5.269-9.136a3.698 3.698 0 0 1 3.2-1.849c.648 0 1.285.17 1.847.495Z",
                            fill: "currentcolor"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/app/sentry-example-page/page.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/app/sentry-example-page/page.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "sentry-example-page"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/app/sentry-example-page/page.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "description",
                        children: [
                            "Click the button below, and view the sample error on the Sentry",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                target: "_blank",
                                rel: "noopener",
                                href: "https://thegreyit.sentry.io/issues/?project=4511644968943616",
                                children: "Issues Page"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/app/sentry-example-page/page.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            ". For more details about setting up Sentry,",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                target: "_blank",
                                rel: "noopener",
                                href: "https://docs.sentry.io/platforms/javascript/guides/nextjs/",
                                children: "read our docs"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/app/sentry-example-page/page.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/app/sentry-example-page/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: async ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$public$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__logger$3e$__["logger"].info("User clicked the button, throwing a sample error");
                            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$utils$2f$nextSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startSpan"]({
                                name: "Example Frontend/Backend Span",
                                op: "test"
                            }, async ()=>{
                                const res = await fetch("/api/sentry-example-api");
                                if (!res.ok) {
                                    setHasSentError(true);
                                }
                            });
                            throw new SentryExampleFrontendError("This error is raised on the frontend of the example page.");
                        },
                        disabled: !isConnected,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Throw Sample Error"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/app/sentry-example-page/page.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/app/sentry-example-page/page.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    hasSentError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "success",
                        children: "Error sent to Sentry."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/app/sentry-example-page/page.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this) : !isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "connectivity-error",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "It looks like network requests to Sentry are being blocked, which will prevent errors from being captured. Try disabling your ad-blocker to complete the test."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/app/sentry-example-page/page.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/app/sentry-example-page/page.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "success_placeholder"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/app/sentry-example-page/page.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-spacer"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/app/sentry-example-page/page.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/app/sentry-example-page/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: '\n        main {\n          display: flex;\n          min-height: 100vh;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          gap: 16px;\n          padding: 16px;\n          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;\n        }\n\n        h1 {\n          padding: 0px 4px;\n          border-radius: 4px;\n          background-color: rgba(24, 20, 35, 0.03);\n          font-family: monospace;\n          font-size: 20px;\n          line-height: 1.2;\n        }\n\n        p {\n          margin: 0;\n          font-size: 20px;\n        }\n\n        a {\n          color: #6341F0;\n          text-decoration: underline;\n          cursor: pointer;\n\n          @media (prefers-color-scheme: dark) {\n            color: #B3A1FF;\n          }\n        }\n\n        button {\n          border-radius: 8px;\n          color: white;\n          cursor: pointer;\n          background-color: #553DB8;\n          border: none;\n          padding: 0;\n          margin-top: 4px;\n\n          & > span {\n            display: inline-block;\n            padding: 12px 16px;\n            border-radius: inherit;\n            font-size: 20px;\n            font-weight: bold;\n            line-height: 1;\n            background-color: #7553FF;\n            border: 1px solid #553DB8;\n            transform: translateY(-4px);\n          }\n\n          &:hover > span {\n            transform: translateY(-8px);\n          }\n\n          &:active > span {\n            transform: translateY(0);\n          }\n\n          &:disabled {\n	            cursor: not-allowed;\n	            opacity: 0.6;\n\n	            & > span {\n	              transform: translateY(0);\n	              border: none\n	            }\n	          }\n        }\n\n        .description {\n          text-align: center;\n          color: #6E6C75;\n          max-width: 500px;\n          line-height: 1.5;\n          font-size: 20px;\n\n          @media (prefers-color-scheme: dark) {\n            color: #A49FB5;\n          }\n        }\n\n        .flex-spacer {\n          flex: 1;\n        }\n\n        .success {\n          padding: 12px 16px;\n          border-radius: 8px;\n          font-size: 20px;\n          line-height: 1;\n          background-color: #00F261;\n          border: 1px solid #00BF4D;\n          color: #181423;\n        }\n\n        .success_placeholder {\n          height: 46px;\n        }\n\n        .connectivity-error {\n          padding: 12px 16px;\n          background-color: #E50045;\n          border-radius: 8px;\n          width: 500px;\n          color: #FFFFFF;\n          border: 1px solid #A80033;\n          text-align: center;\n          margin: 0;\n        }\n\n        .connectivity-error a {\n          color: #FFFFFF;\n          text-decoration: underline;\n        }\n      '
            }, void 0, false, {
                fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/app/sentry-example-page/page.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/app/sentry-example-page/page.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(Page, "jx3dwGT/RcZwLcYwfUIR6NKu4P8=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@sentry/core/build/esm/logs/public-api.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "debug",
    ()=>debug,
    "error",
    ()=>error,
    "fatal",
    ()=>fatal,
    "info",
    ()=>info,
    "trace",
    ()=>trace,
    "warn",
    ()=>warn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@sentry/core/build/esm/logs/internal.js [app-client] (ecmascript)");
;
;
function captureLog(level, message, attributes, scope, severityNumber) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_INTERNAL_captureLog"])({
        level,
        message,
        attributes,
        severityNumber
    }, scope);
}
function trace(message, attributes) {
    let { scope } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    captureLog("trace", message, attributes, scope);
}
function debug(message, attributes) {
    let { scope } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    captureLog("debug", message, attributes, scope);
}
function info(message, attributes) {
    let { scope } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    captureLog("info", message, attributes, scope);
}
function warn(message, attributes) {
    let { scope } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    captureLog("warn", message, attributes, scope);
}
function error(message, attributes) {
    let { scope } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    captureLog("error", message, attributes, scope);
}
function fatal(message, attributes) {
    let { scope } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    captureLog("fatal", message, attributes, scope);
}
;
 //# sourceMappingURL=public-api.js.map
}),
"[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@sentry/core/build/esm/utils/parameterize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fmt",
    ()=>fmt,
    "parameterize",
    ()=>parameterize
]);
function parameterize(strings) {
    for(var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        values[_key - 1] = arguments[_key];
    }
    const formatted = new String(String.raw(strings, ...values));
    formatted.__sentry_template_string__ = strings.join("\0").replace(/%/g, "%%").replace(/\0/g, "%s");
    formatted.__sentry_template_values__ = values;
    return formatted;
}
const fmt = parameterize;
;
 //# sourceMappingURL=parameterize.js.map
}),
"[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@sentry/core/build/esm/logs/public-api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "debug",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$public$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["debug"],
    "error",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$public$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["error"],
    "fatal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$public$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fatal"],
    "fmt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$parameterize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"],
    "info",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$public$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["info"],
    "trace",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$public$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["trace"],
    "warn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$public$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["warn"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$public$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@sentry/core/build/esm/logs/public-api.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$parameterize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@sentry/core/build/esm/utils/parameterize.js [app-client] (ecmascript)");
}),
"[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@sentry/core/build/esm/logs/public-api.js [app-client] (ecmascript) <export * as logger>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "logger",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$public$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$public$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@sentry/core/build/esm/logs/public-api.js [app-client] (ecmascript)");
}),
"[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@sentry/browser/build/npm/esm/dev/diagnose-sdk.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "diagnoseSdkConnectivity",
    ()=>diagnoseSdkConnectivity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@sentry/core/build/esm/tracing/trace.js [app-client] (ecmascript)");
;
async function diagnoseSdkConnectivity() {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
    if (!client) {
        return "no-client-active";
    }
    if (!client.getDsn()) {
        return "no-dsn-configured";
    }
    const tunnel = client.getOptions().tunnel;
    const defaultUrl = "https://o447951.ingest.sentry.io/api/4509632503087104/envelope/?sentry_version=7&sentry_key=c1dfb07d783ad5325c245c1fd3725390&sentry_client=sentry.javascript.browser%2F1.33.7";
    const url = tunnel || defaultUrl;
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["suppressTracing"])(()=>// If fetch throws, there is likely an ad blocker active or there are other connective issues.
            fetch(url, {
                body: "{}",
                method: "POST",
                mode: "cors",
                credentials: "omit"
            }));
    } catch (e) {
        return "sentry-unreachable";
    }
}
;
 //# sourceMappingURL=diagnose-sdk.js.map
}),
"[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/next/dist/shared/lib/modern-browserslist-target.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Note: This file is JS because it's used by the taskfile-swc.js file, which is JS.
// Keep file changes in sync with the corresponding `.d.ts` files.
/**
 * These are the browser versions that support all of the following:
 * static import: https://caniuse.com/es6-module
 * dynamic import: https://caniuse.com/es6-module-dynamic-import
 * import.meta: https://caniuse.com/mdn-javascript_operators_import_meta
 */ const MODERN_BROWSERSLIST_TARGET = [
    'chrome 64',
    'edge 79',
    'firefox 67',
    'opera 51',
    'safari 12'
];
module.exports = MODERN_BROWSERSLIST_TARGET; //# sourceMappingURL=modern-browserslist-target.js.map
}),
"[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/next/dist/shared/lib/constants.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    APP_BUILD_MANIFEST: null,
    APP_CLIENT_INTERNALS: null,
    APP_PATHS_MANIFEST: null,
    APP_PATH_ROUTES_MANIFEST: null,
    AdapterOutputType: null,
    BARREL_OPTIMIZATION_PREFIX: null,
    BLOCKED_PAGES: null,
    BUILD_ID_FILE: null,
    BUILD_MANIFEST: null,
    CLIENT_PUBLIC_FILES_PATH: null,
    CLIENT_REFERENCE_MANIFEST: null,
    CLIENT_STATIC_FILES_PATH: null,
    CLIENT_STATIC_FILES_RUNTIME_AMP: null,
    CLIENT_STATIC_FILES_RUNTIME_MAIN: null,
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP: null,
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS: null,
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL: null,
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH: null,
    CLIENT_STATIC_FILES_RUNTIME_WEBPACK: null,
    COMPILER_INDEXES: null,
    COMPILER_NAMES: null,
    CONFIG_FILES: null,
    DEFAULT_RUNTIME_WEBPACK: null,
    DEFAULT_SANS_SERIF_FONT: null,
    DEFAULT_SERIF_FONT: null,
    DEV_CLIENT_MIDDLEWARE_MANIFEST: null,
    DEV_CLIENT_PAGES_MANIFEST: null,
    DYNAMIC_CSS_MANIFEST: null,
    EDGE_RUNTIME_WEBPACK: null,
    EDGE_UNSUPPORTED_NODE_APIS: null,
    EXPORT_DETAIL: null,
    EXPORT_MARKER: null,
    FUNCTIONS_CONFIG_MANIFEST: null,
    IMAGES_MANIFEST: null,
    INTERCEPTION_ROUTE_REWRITE_MANIFEST: null,
    MIDDLEWARE_BUILD_MANIFEST: null,
    MIDDLEWARE_MANIFEST: null,
    MIDDLEWARE_REACT_LOADABLE_MANIFEST: null,
    MODERN_BROWSERSLIST_TARGET: null,
    NEXT_BUILTIN_DOCUMENT: null,
    NEXT_FONT_MANIFEST: null,
    PAGES_MANIFEST: null,
    PHASE_DEVELOPMENT_SERVER: null,
    PHASE_EXPORT: null,
    PHASE_INFO: null,
    PHASE_PRODUCTION_BUILD: null,
    PHASE_PRODUCTION_SERVER: null,
    PHASE_TEST: null,
    PRERENDER_MANIFEST: null,
    REACT_LOADABLE_MANIFEST: null,
    ROUTES_MANIFEST: null,
    RSC_MODULE_TYPES: null,
    SERVER_DIRECTORY: null,
    SERVER_FILES_MANIFEST: null,
    SERVER_PROPS_ID: null,
    SERVER_REFERENCE_MANIFEST: null,
    STATIC_PROPS_ID: null,
    STATIC_STATUS_PAGES: null,
    STRING_LITERAL_DROP_BUNDLE: null,
    SUBRESOURCE_INTEGRITY_MANIFEST: null,
    SYSTEM_ENTRYPOINTS: null,
    TRACE_OUTPUT_VERSION: null,
    TURBOPACK_CLIENT_BUILD_MANIFEST: null,
    TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST: null,
    TURBO_TRACE_DEFAULT_MEMORY_LIMIT: null,
    UNDERSCORE_NOT_FOUND_ROUTE: null,
    UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: null,
    WEBPACK_STATS: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    APP_BUILD_MANIFEST: function() {
        return APP_BUILD_MANIFEST;
    },
    APP_CLIENT_INTERNALS: function() {
        return APP_CLIENT_INTERNALS;
    },
    APP_PATHS_MANIFEST: function() {
        return APP_PATHS_MANIFEST;
    },
    APP_PATH_ROUTES_MANIFEST: function() {
        return APP_PATH_ROUTES_MANIFEST;
    },
    AdapterOutputType: function() {
        return AdapterOutputType;
    },
    BARREL_OPTIMIZATION_PREFIX: function() {
        return BARREL_OPTIMIZATION_PREFIX;
    },
    BLOCKED_PAGES: function() {
        return BLOCKED_PAGES;
    },
    BUILD_ID_FILE: function() {
        return BUILD_ID_FILE;
    },
    BUILD_MANIFEST: function() {
        return BUILD_MANIFEST;
    },
    CLIENT_PUBLIC_FILES_PATH: function() {
        return CLIENT_PUBLIC_FILES_PATH;
    },
    CLIENT_REFERENCE_MANIFEST: function() {
        return CLIENT_REFERENCE_MANIFEST;
    },
    CLIENT_STATIC_FILES_PATH: function() {
        return CLIENT_STATIC_FILES_PATH;
    },
    CLIENT_STATIC_FILES_RUNTIME_AMP: function() {
        return CLIENT_STATIC_FILES_RUNTIME_AMP;
    },
    CLIENT_STATIC_FILES_RUNTIME_MAIN: function() {
        return CLIENT_STATIC_FILES_RUNTIME_MAIN;
    },
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP: function() {
        return CLIENT_STATIC_FILES_RUNTIME_MAIN_APP;
    },
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS: function() {
        return CLIENT_STATIC_FILES_RUNTIME_POLYFILLS;
    },
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL: function() {
        return CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL;
    },
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH: function() {
        return CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH;
    },
    CLIENT_STATIC_FILES_RUNTIME_WEBPACK: function() {
        return CLIENT_STATIC_FILES_RUNTIME_WEBPACK;
    },
    COMPILER_INDEXES: function() {
        return COMPILER_INDEXES;
    },
    COMPILER_NAMES: function() {
        return COMPILER_NAMES;
    },
    CONFIG_FILES: function() {
        return CONFIG_FILES;
    },
    DEFAULT_RUNTIME_WEBPACK: function() {
        return DEFAULT_RUNTIME_WEBPACK;
    },
    DEFAULT_SANS_SERIF_FONT: function() {
        return DEFAULT_SANS_SERIF_FONT;
    },
    DEFAULT_SERIF_FONT: function() {
        return DEFAULT_SERIF_FONT;
    },
    DEV_CLIENT_MIDDLEWARE_MANIFEST: function() {
        return DEV_CLIENT_MIDDLEWARE_MANIFEST;
    },
    DEV_CLIENT_PAGES_MANIFEST: function() {
        return DEV_CLIENT_PAGES_MANIFEST;
    },
    DYNAMIC_CSS_MANIFEST: function() {
        return DYNAMIC_CSS_MANIFEST;
    },
    EDGE_RUNTIME_WEBPACK: function() {
        return EDGE_RUNTIME_WEBPACK;
    },
    EDGE_UNSUPPORTED_NODE_APIS: function() {
        return EDGE_UNSUPPORTED_NODE_APIS;
    },
    EXPORT_DETAIL: function() {
        return EXPORT_DETAIL;
    },
    EXPORT_MARKER: function() {
        return EXPORT_MARKER;
    },
    FUNCTIONS_CONFIG_MANIFEST: function() {
        return FUNCTIONS_CONFIG_MANIFEST;
    },
    IMAGES_MANIFEST: function() {
        return IMAGES_MANIFEST;
    },
    INTERCEPTION_ROUTE_REWRITE_MANIFEST: function() {
        return INTERCEPTION_ROUTE_REWRITE_MANIFEST;
    },
    MIDDLEWARE_BUILD_MANIFEST: function() {
        return MIDDLEWARE_BUILD_MANIFEST;
    },
    MIDDLEWARE_MANIFEST: function() {
        return MIDDLEWARE_MANIFEST;
    },
    MIDDLEWARE_REACT_LOADABLE_MANIFEST: function() {
        return MIDDLEWARE_REACT_LOADABLE_MANIFEST;
    },
    MODERN_BROWSERSLIST_TARGET: function() {
        return _modernbrowserslisttarget.default;
    },
    NEXT_BUILTIN_DOCUMENT: function() {
        return NEXT_BUILTIN_DOCUMENT;
    },
    NEXT_FONT_MANIFEST: function() {
        return NEXT_FONT_MANIFEST;
    },
    PAGES_MANIFEST: function() {
        return PAGES_MANIFEST;
    },
    PHASE_DEVELOPMENT_SERVER: function() {
        return PHASE_DEVELOPMENT_SERVER;
    },
    PHASE_EXPORT: function() {
        return PHASE_EXPORT;
    },
    PHASE_INFO: function() {
        return PHASE_INFO;
    },
    PHASE_PRODUCTION_BUILD: function() {
        return PHASE_PRODUCTION_BUILD;
    },
    PHASE_PRODUCTION_SERVER: function() {
        return PHASE_PRODUCTION_SERVER;
    },
    PHASE_TEST: function() {
        return PHASE_TEST;
    },
    PRERENDER_MANIFEST: function() {
        return PRERENDER_MANIFEST;
    },
    REACT_LOADABLE_MANIFEST: function() {
        return REACT_LOADABLE_MANIFEST;
    },
    ROUTES_MANIFEST: function() {
        return ROUTES_MANIFEST;
    },
    RSC_MODULE_TYPES: function() {
        return RSC_MODULE_TYPES;
    },
    SERVER_DIRECTORY: function() {
        return SERVER_DIRECTORY;
    },
    SERVER_FILES_MANIFEST: function() {
        return SERVER_FILES_MANIFEST;
    },
    SERVER_PROPS_ID: function() {
        return SERVER_PROPS_ID;
    },
    SERVER_REFERENCE_MANIFEST: function() {
        return SERVER_REFERENCE_MANIFEST;
    },
    STATIC_PROPS_ID: function() {
        return STATIC_PROPS_ID;
    },
    STATIC_STATUS_PAGES: function() {
        return STATIC_STATUS_PAGES;
    },
    STRING_LITERAL_DROP_BUNDLE: function() {
        return STRING_LITERAL_DROP_BUNDLE;
    },
    SUBRESOURCE_INTEGRITY_MANIFEST: function() {
        return SUBRESOURCE_INTEGRITY_MANIFEST;
    },
    SYSTEM_ENTRYPOINTS: function() {
        return SYSTEM_ENTRYPOINTS;
    },
    TRACE_OUTPUT_VERSION: function() {
        return TRACE_OUTPUT_VERSION;
    },
    TURBOPACK_CLIENT_BUILD_MANIFEST: function() {
        return TURBOPACK_CLIENT_BUILD_MANIFEST;
    },
    TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST: function() {
        return TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST;
    },
    TURBO_TRACE_DEFAULT_MEMORY_LIMIT: function() {
        return TURBO_TRACE_DEFAULT_MEMORY_LIMIT;
    },
    UNDERSCORE_NOT_FOUND_ROUTE: function() {
        return UNDERSCORE_NOT_FOUND_ROUTE;
    },
    UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: function() {
        return UNDERSCORE_NOT_FOUND_ROUTE_ENTRY;
    },
    WEBPACK_STATS: function() {
        return WEBPACK_STATS;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _modernbrowserslisttarget = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/next/dist/shared/lib/modern-browserslist-target.js [app-client] (ecmascript)"));
const COMPILER_NAMES = {
    client: 'client',
    server: 'server',
    edgeServer: 'edge-server'
};
var AdapterOutputType = /*#__PURE__*/ function(AdapterOutputType) {
    /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ AdapterOutputType["PAGES"] = "PAGES";
    /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ AdapterOutputType["PAGES_API"] = "PAGES_API";
    /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ AdapterOutputType["APP_PAGE"] = "APP_PAGE";
    /**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ AdapterOutputType["APP_ROUTE"] = "APP_ROUTE";
    /**
   * `PRERENDER` represents an ISR enabled route that might
   * have a seeded cache entry or fallback generated during build
   */ AdapterOutputType["PRERENDER"] = "PRERENDER";
    /**
   * `STATIC_FILE` represents a static file (ie /_next/static)
   */ AdapterOutputType["STATIC_FILE"] = "STATIC_FILE";
    /**
   * `MIDDLEWARE` represents the middleware output if present
   */ AdapterOutputType["MIDDLEWARE"] = "MIDDLEWARE";
    return AdapterOutputType;
}({});
const COMPILER_INDEXES = {
    [COMPILER_NAMES.client]: 0,
    [COMPILER_NAMES.server]: 1,
    [COMPILER_NAMES.edgeServer]: 2
};
const UNDERSCORE_NOT_FOUND_ROUTE = '/_not-found';
const UNDERSCORE_NOT_FOUND_ROUTE_ENTRY = "" + UNDERSCORE_NOT_FOUND_ROUTE + "/page";
const PHASE_EXPORT = 'phase-export';
const PHASE_PRODUCTION_BUILD = 'phase-production-build';
const PHASE_PRODUCTION_SERVER = 'phase-production-server';
const PHASE_DEVELOPMENT_SERVER = 'phase-development-server';
const PHASE_TEST = 'phase-test';
const PHASE_INFO = 'phase-info';
const PAGES_MANIFEST = 'pages-manifest.json';
const WEBPACK_STATS = 'webpack-stats.json';
const APP_PATHS_MANIFEST = 'app-paths-manifest.json';
const APP_PATH_ROUTES_MANIFEST = 'app-path-routes-manifest.json';
const BUILD_MANIFEST = 'build-manifest.json';
const APP_BUILD_MANIFEST = 'app-build-manifest.json';
const FUNCTIONS_CONFIG_MANIFEST = 'functions-config-manifest.json';
const SUBRESOURCE_INTEGRITY_MANIFEST = 'subresource-integrity-manifest';
const NEXT_FONT_MANIFEST = 'next-font-manifest';
const EXPORT_MARKER = 'export-marker.json';
const EXPORT_DETAIL = 'export-detail.json';
const PRERENDER_MANIFEST = 'prerender-manifest.json';
const ROUTES_MANIFEST = 'routes-manifest.json';
const IMAGES_MANIFEST = 'images-manifest.json';
const SERVER_FILES_MANIFEST = 'required-server-files.json';
const DEV_CLIENT_PAGES_MANIFEST = '_devPagesManifest.json';
const MIDDLEWARE_MANIFEST = 'middleware-manifest.json';
const TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST = '_clientMiddlewareManifest.json';
const TURBOPACK_CLIENT_BUILD_MANIFEST = 'client-build-manifest.json';
const DEV_CLIENT_MIDDLEWARE_MANIFEST = '_devMiddlewareManifest.json';
const REACT_LOADABLE_MANIFEST = 'react-loadable-manifest.json';
const SERVER_DIRECTORY = 'server';
const CONFIG_FILES = [
    'next.config.js',
    'next.config.mjs',
    'next.config.ts'
];
const BUILD_ID_FILE = 'BUILD_ID';
const BLOCKED_PAGES = [
    '/_document',
    '/_app',
    '/_error'
];
const CLIENT_PUBLIC_FILES_PATH = 'public';
const CLIENT_STATIC_FILES_PATH = 'static';
const STRING_LITERAL_DROP_BUNDLE = '__NEXT_DROP_CLIENT_FILE__';
const NEXT_BUILTIN_DOCUMENT = '__NEXT_BUILTIN_DOCUMENT__';
const BARREL_OPTIMIZATION_PREFIX = '__barrel_optimize__';
const CLIENT_REFERENCE_MANIFEST = 'client-reference-manifest';
const SERVER_REFERENCE_MANIFEST = 'server-reference-manifest';
const MIDDLEWARE_BUILD_MANIFEST = 'middleware-build-manifest';
const MIDDLEWARE_REACT_LOADABLE_MANIFEST = 'middleware-react-loadable-manifest';
const INTERCEPTION_ROUTE_REWRITE_MANIFEST = 'interception-route-rewrite-manifest';
const DYNAMIC_CSS_MANIFEST = 'dynamic-css-manifest';
const CLIENT_STATIC_FILES_RUNTIME_MAIN = "main";
const CLIENT_STATIC_FILES_RUNTIME_MAIN_APP = "" + CLIENT_STATIC_FILES_RUNTIME_MAIN + "-app";
const APP_CLIENT_INTERNALS = 'app-pages-internals';
const CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = "react-refresh";
const CLIENT_STATIC_FILES_RUNTIME_AMP = "amp";
const CLIENT_STATIC_FILES_RUNTIME_WEBPACK = "webpack";
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = 'polyfills';
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL = Symbol(CLIENT_STATIC_FILES_RUNTIME_POLYFILLS);
const DEFAULT_RUNTIME_WEBPACK = 'webpack-runtime';
const EDGE_RUNTIME_WEBPACK = 'edge-runtime-webpack';
const STATIC_PROPS_ID = '__N_SSG';
const SERVER_PROPS_ID = '__N_SSP';
const DEFAULT_SERIF_FONT = {
    name: 'Times New Roman',
    xAvgCharWidth: 821,
    azAvgWidth: 854.3953488372093,
    unitsPerEm: 2048
};
const DEFAULT_SANS_SERIF_FONT = {
    name: 'Arial',
    xAvgCharWidth: 904,
    azAvgWidth: 934.5116279069767,
    unitsPerEm: 2048
};
const STATIC_STATUS_PAGES = [
    '/500'
];
const TRACE_OUTPUT_VERSION = 1;
const TURBO_TRACE_DEFAULT_MEMORY_LIMIT = 6000;
const RSC_MODULE_TYPES = {
    client: 'client',
    server: 'server'
};
const EDGE_UNSUPPORTED_NODE_APIS = [
    'clearImmediate',
    'setImmediate',
    'BroadcastChannel',
    'ByteLengthQueuingStrategy',
    'CompressionStream',
    'CountQueuingStrategy',
    'DecompressionStream',
    'DomException',
    'MessageChannel',
    'MessageEvent',
    'MessagePort',
    'ReadableByteStreamController',
    'ReadableStreamBYOBRequest',
    'ReadableStreamDefaultController',
    'TransformStreamDefaultController',
    'WritableStreamDefaultController'
];
const SYSTEM_ENTRYPOINTS = new Set([
    CLIENT_STATIC_FILES_RUNTIME_MAIN,
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH,
    CLIENT_STATIC_FILES_RUNTIME_AMP,
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP
]);
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=constants.js.map
}),
"[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/next/constants.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/next/dist/shared/lib/constants.js [app-client] (ecmascript)");
}),
"[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@sentry/nextjs/build/esm/common/utils/isBuild.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBuild",
    ()=>isBuild
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/next/constants.js [app-client] (ecmascript)");
;
function isBuild() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PHASE === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHASE_PRODUCTION_BUILD"];
}
;
 //# sourceMappingURL=isBuild.js.map
}),
"[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@sentry/nextjs/build/esm/common/utils/isUseCacheFunction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isUseCacheFunction",
    ()=>isUseCacheFunction
]);
function extractInfoFromServerReferenceId(id) {
    const infoByte = parseInt(id.slice(0, 2), 16);
    const typeBit = infoByte >> 7 & 1;
    const argMask = infoByte >> 1 & 63;
    const restArgs = infoByte & 1;
    const usedArgs = Array(6);
    for(let index = 0; index < 6; index++){
        const bitPosition = 5 - index;
        const bit = argMask >> bitPosition & 1;
        usedArgs[index] = bit === 1;
    }
    return {
        type: typeBit === 1 ? "use-cache" : "server-action",
        usedArgs,
        hasRestArgs: restArgs === 1
    };
}
function isServerReference(value) {
    return value.$$typeof === /* @__PURE__ */ Symbol.for("react.server.reference");
}
function isUseCacheFunction(value) {
    if (!isServerReference(value)) {
        return false;
    }
    const { type } = extractInfoFromServerReferenceId(value.$$id);
    return type === "use-cache";
}
;
 //# sourceMappingURL=isUseCacheFunction.js.map
}),
"[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@sentry/nextjs/build/esm/common/utils/nextSpan.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "startInactiveSpan",
    ()=>startInactiveSpan,
    "startSpan",
    ()=>startSpan,
    "startSpanManual",
    ()=>startSpanManual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@sentry/core/build/esm/tracing/trace.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@sentry/core/build/esm/utils/debug-logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$sentryNonRecordingSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@sentry/core/build/esm/tracing/sentryNonRecordingSpan.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@sentry/nextjs/build/esm/common/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$utils$2f$isBuild$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@sentry/nextjs/build/esm/common/utils/isBuild.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$utils$2f$isUseCacheFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/@sentry/nextjs/build/esm/common/utils/isUseCacheFunction.js [app-client] (ecmascript)");
;
;
;
;
function shouldNoopSpan(callback) {
    const isBuildContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$utils$2f$isBuild$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBuild"])();
    const isUseCacheFunctionContext = callback ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$utils$2f$isUseCacheFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUseCacheFunction"])(callback) : false;
    if (isUseCacheFunctionContext) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].log("Skipping span creation in Cache Components context");
    }
    return isBuildContext || isUseCacheFunctionContext;
}
function createNonRecordingSpan() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$sentryNonRecordingSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentryNonRecordingSpan"]({
        traceId: "00000000000000000000000000000000",
        spanId: "0000000000000000"
    });
}
function startSpan(options, callback) {
    if (shouldNoopSpan(callback)) {
        return callback(createNonRecordingSpan());
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startSpan"])(options, callback);
}
function startSpanManual(options, callback) {
    if (shouldNoopSpan(callback)) {
        const nonRecordingSpan = createNonRecordingSpan();
        return callback(nonRecordingSpan, ()=>nonRecordingSpan.end());
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startSpanManual"])(options, callback);
}
function startInactiveSpan(options) {
    if (shouldNoopSpan()) {
        return createNonRecordingSpan();
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startInactiveSpan"])(options);
}
;
 //# sourceMappingURL=nextSpan.js.map
}),
"[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/next/dist/client/components/noop-head.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NoopHead;
    }
});
function NoopHead() {
    return null;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=noop-head.js.map
}),
]);

//# sourceMappingURL=Desktop_my-learning_theChat_thechat_frontend_10bf2f38._.js.map