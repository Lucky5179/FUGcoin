(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [577],
  {
    88677: () => {},
    62808: () => {},
    11922: () => {},
    35883: () => {},
    46601: () => {},
    71456: () => {},
    89214: () => {},
    42480: () => {},
    91235: (e, t, n) => {
      "use strict";
      n.d(t, { TG: () => b, Wt: () => m, Yr: () => f });
      var i = n(57437),
        a = n(75895),
        r = n(82343),
        l = n(20873),
        u = n(28782),
        o = n(2265),
        s = n(81978),
        c = n(21449),
        d = n(70738),
        p = n(73391);
      let h = (0, o.createContext)({ umi: null, umi2: null }),
        f = (e) => {
          let { endpoint: t, connRPC: n, children: o } = e,
            f = (0, u.O)(),
            m = (0, a.i)(t).use((0, l.mplTokenMetadata)());
          m.use((0, s.mplCandyMachine)());
          let b = (0, a.i)(n).use((0, l.mplTokenMetadata)());
          if ((b.use((0, s.mplCandyMachine)()), null === f.publicKey)) {
            let e = (0, c.rO)(p.CK);
            m.use((0, d.pI)(e));
          } else m.use((0, r.t)(f));
          return (0, i.jsx)(h.Provider, {
            value: { umi: m, umi2: b },
            children: o,
          });
        };
      function m() {
        let e = (0, o.useContext)(h).umi;
        if (!e)
          throw Error(
            "Umi context was not initialized. Did you forget to wrap your app with <UmiProvider />?"
          );
        return e;
      }
      function b() {
        let e = (0, o.useContext)(h).umi2;
        if (!e)
          throw Error(
            "Umi context was not initialized. Did you forget to wrap your app with <UmiProvider />?"
          );
        return e;
      }
    },
    56818: (e, t, n) => {
      "use strict";
      n.d(t, { $G: () => r, X2: () => a, aD: () => o, fZ: () => u });
      var i = n(57818);
      n(18508);
      let a = "FUGAHW7K49G6h5yFa5s95WHjtoGfYiV8QhiZugn5DjMe",
        r =
          "https://mainnet.helius-rpc.com/?api-key=50ec02b7-754c-4936-b9ee-d698c238951d",
        l = [
          "https://mainnet.helius-rpc.com/?api-key=629a1de2-de1f-43ac-8d25-6a6975b2279f",
          "https://mainnet.helius-rpc.com/?api-key=5e7e2dfc-a20f-4dbe-b7ac-0d1f0f86bd33",
          "https://mainnet.helius-rpc.com/?api-key=c79b7c32-d9e8-4d8b-82ab-311dfe1f5b5b",
        ],
        u = l[Math.floor(Math.random() * l.length)],
        o = (0, i.default)(
          () =>
            n
              .e(901)
              .then(n.bind(n, 69901))
              .then((e) => e.WalletMultiButton),
          { loadableGenerated: { webpack: () => [null] }, ssr: !1 }
        );
    },
    73391: (e, t, n) => {
      "use strict";
      n.d(t, { CK: () => w, ZP: () => C });
      var i = n(57437),
        a = n(74418),
        r = n(56432),
        l = n(94526),
        u = n(33494),
        o = n(50836),
        s = n(45429),
        c = n(2265),
        d = n(65442),
        p = n(91235),
        h = n(59405),
        f = n(56818),
        m = n(25566);
      let b = d.Q.Devnet;
      ("mainnet-beta" === m.env.NEXT_PUBLIC_ENVIRONMENT ||
        "mainnet" === m.env.NEXT_PUBLIC_ENVIRONMENT) &&
        (b = d.Q.Mainnet),
        new s.Connection(f.fZ, "finalized");
      let w = (0, h.ZL)("11111111111111111111111111111111"),
        C = (e) => {
          let { children: t } = e,
            n = f.$G,
            s = (0, c.useMemo)(() => [new l.A(), new u.e(), new o.P()], [b]);
          return (0, i.jsx)(a.n, {
            wallets: s,
            autoConnect: !0,
            children: (0, i.jsx)(p.Yr, {
              endpoint: n,
              connRPC: f.fZ,
              children: (0, i.jsx)(r.s, { children: t }),
            }),
          });
        };
    },
  },
]);
