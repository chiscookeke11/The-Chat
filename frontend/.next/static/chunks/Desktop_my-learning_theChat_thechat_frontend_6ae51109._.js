(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/my-learning/theChat/thechat/frontend/src/providers/LenisProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LenisProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function LenisProvider(param) {
    let { children } = param;
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LenisProvider.useEffect": ()=>{
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 0.8,
                smoothWheel: true
            });
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
            return ({
                "LenisProvider.useEffect": ()=>{
                    lenis.destroy();
                }
            })["LenisProvider.useEffect"];
        }
    }["LenisProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(LenisProvider, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = LenisProvider;
var _c;
__turbopack_context__.k.register(_c, "LenisProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/my-learning/theChat/thechat/frontend/data/navbar_data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navbar_data",
    ()=>navbar_data
]);
const navbar_data = [
    {
        label: "Podcasts",
        path: "#"
    },
    {
        label: "Over",
        path: "#"
    },
    {
        label: "Contact",
        path: "#"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/my-learning/theChat/thechat/frontend/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$data$2f$navbar_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/data/navbar_data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Navbar() {
    _s();
    const navRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hidden, setHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showMenu, setShowMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // this hides the navbar on scroll
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            let lastScrollY = window.scrollY;
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    const currentScrollY = window.scrollY;
                    // if scrolling down → hide
                    if (currentScrollY > lastScrollY && currentScrollY > 200) {
                        setHidden(true);
                    } else {
                        setHidden(false);
                    }
                    lastScrollY = currentScrollY;
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    // This hides the scrollbar if the mobile menu is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            document.body.style.overflowY = showMenu ? "auto" : "hidden";
        }
    }["Navbar.useEffect"], [
        showMenu
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        ref: navRef,
        className: "\n                w-full flex items-center justify-between gap-10 px-[6%] lg:px-[7%] py-3\n                fixed top-0 left-0 bg-[#000000]\n                transition-transform duration-300 ease-in-out\n                ".concat(hidden ? "-translate-y-full" : "translate-y-0", "\n            "),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/logo/logo.png",
                    alt: "logo",
                    width: 1000,
                    height: 1000,
                    className: "w-30 md:w-42.5 transition-all duration-300 ease-in-out ".concat(showMenu ? "invert" : "")
                }, void 0, false, {
                    fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/components/Navbar.tsx",
                    lineNumber: 58,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/components/Navbar.tsx",
                lineNumber: 57,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "w-fit items-center gap-15 font-agrandir hidden md:flex",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$data$2f$navbar_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbar_data"].map((link, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "text-2xl lg:text-[32px] tracking-wide text-white hover:text-[#b3a8ff] transition-all duration-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: link.path,
                            children: link.label
                        }, void 0, false, {
                            fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/components/Navbar.tsx",
                            lineNumber: 73,
                            columnNumber: 25
                        }, this)
                    }, i, false, {
                        fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/components/Navbar.tsx",
                        lineNumber: 69,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/components/Navbar.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShowMenu((prev)=>!prev),
                className: "flex flex-col gap-2 md:hidden z-10 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-9 h-0.75\n                    ".concat(showMenu ? "bg-[#000000]" : "bg-white", "\n                    block transform transition-all duration-200 ease-in-out\n                    ").concat(showMenu ? "rotate-45 translate-y-1.5 " : " rotate-0 translate-y-0 ")
                    }, void 0, false, {
                        fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/components/Navbar.tsx",
                        lineNumber: 84,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-9 h-0.75\n                      ".concat(showMenu ? "bg-[#000000]" : "bg-white", "\n                    block transform transition-all duration-200 ease-in-out\n                    ").concat(showMenu ? "-rotate-45 -translate-y-1.5" : "rotate-0 translate-y-0", " ")
                    }, void 0, false, {
                        fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/components/Navbar.tsx",
                        lineNumber: 90,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/components/Navbar.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "\n                w-full  fixed bg-[#b3a8ff] top-0 left-0 z-0 transition-all duration-400 ease-in-out\n                pt-[40%] px-[8%] pb-[5%] overflow-hidden\n".concat(showMenu ? "h-screen opacity-100 " : "h-10 opacity-0", "\n                "),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: " w-full flex flex-col items-start gap-6 ",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$data$2f$navbar_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbar_data"].map((link, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            onClick: ()=>{
                                setShowMenu(false);
                            },
                            className: "\n                                font-agrandir text-[28px] text-[#000000] transition-all duration-200 ease-in-out\n".concat(showMenu ? " opacity-100 " : " opacity-0", "\n                                "),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: link.path,
                                children: [
                                    " ",
                                    link.label,
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/components/Navbar.tsx",
                                lineNumber: 122,
                                columnNumber: 29
                            }, this)
                        }, i, false, {
                            fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/components/Navbar.tsx",
                            lineNumber: 110,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/components/Navbar.tsx",
                    lineNumber: 108,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/components/Navbar.tsx",
                lineNumber: 101,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/components/Navbar.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, this);
}
_s(Navbar, "UmUa+dqPfTexDaYm5u8PrIzzBA0=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/my-learning/theChat/thechat/frontend/src/components/CustomCursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-learning/theChat/thechat/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CustomCursor() {
    _s();
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            const cursor = cursorRef.current;
            if (!cursor) return;
            let mouseX = 0;
            let mouseY = 0;
            let currentX = 0;
            let currentY = 0;
            const handleMouseMove = {
                "CustomCursor.useEffect.handleMouseMove": (e)=>{
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                }
            }["CustomCursor.useEffect.handleMouseMove"];
            window.addEventListener("mousemove", handleMouseMove);
            const animate = {
                "CustomCursor.useEffect.animate": ()=>{
                    currentX = mouseX;
                    currentY = mouseY;
                    cursor.style.transform = "translate(".concat(currentX, "px, ").concat(currentY, "px) translate(-50%, -50%)");
                    requestAnimationFrame(animate);
                }
            }["CustomCursor.useEffect.animate"];
            animate();
            return ({
                "CustomCursor.useEffect": ()=>{
                    window.removeEventListener("mousemove", handleMouseMove);
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$learning$2f$theChat$2f$thechat$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "custom-cursor ",
        ref: cursorRef
    }, void 0, false, {
        fileName: "[project]/Desktop/my-learning/theChat/thechat/frontend/src/components/CustomCursor.tsx",
        lineNumber: 41,
        columnNumber: 12
    }, this);
}
_s(CustomCursor, "BAOXNtFTrLv46f15Gc0vVLC8KO4=");
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_my-learning_theChat_thechat_frontend_6ae51109._.js.map