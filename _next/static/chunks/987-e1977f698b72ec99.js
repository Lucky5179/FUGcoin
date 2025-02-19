(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [987],
  {
    5777: function (e, t, r) {
      "use strict";
      var s =
        (this && this.__rest) ||
        function (e, t) {
          var r = {};
          for (var s in e)
            Object.prototype.hasOwnProperty.call(e, s) &&
              0 > t.indexOf(s) &&
              (r[s] = e[s]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var i = 0, s = Object.getOwnPropertySymbols(e);
              i < s.length;
              i++
            )
              0 > t.indexOf(s[i]) &&
                Object.prototype.propertyIsEnumerable.call(e, s[i]) &&
                (r[s[i]] = e[s[i]]);
          return r;
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CoinbaseWalletProvider = void 0);
      let i = r(39172),
        n = r(47224),
        a = r(47977),
        o = r(96741),
        c = r(66320),
        l = r(42057),
        d = r(83465),
        h = r(98997);
      class u extends a.ProviderEventEmitter {
        constructor(e) {
          var { metadata: t } = e,
            r = e.preference,
            { keysUrl: i } = r,
            n = s(r, ["keysUrl"]);
          super(),
            (this.signer = null),
            (this.isCoinbaseWallet = !0),
            (this.metadata = t),
            (this.preference = n),
            (this.communicator = new l.Communicator(i, t));
          let a = (0, o.loadSignerType)();
          a && (this.signer = this.initSigner(a));
        }
        async request(e) {
          try {
            if (((0, c.checkErrorForInvalidRequestArgs)(e), !this.signer))
              switch (e.method) {
                case "eth_requestAccounts": {
                  let t = await this.requestSignerSelection(e),
                    r = this.initSigner(t);
                  await r.handshake(e),
                    (this.signer = r),
                    (0, o.storeSignerType)(t);
                  break;
                }
                case "net_version":
                  return 1;
                case "eth_chainId":
                  return (0, h.hexStringFromNumber)(1);
                default:
                  throw i.standardErrors.provider.unauthorized(
                    "Must call 'eth_requestAccounts' before other methods"
                  );
              }
            return this.signer.request(e);
          } catch (t) {
            let { code: e } = t;
            return (
              e === i.standardErrorCodes.provider.unauthorized &&
                this.disconnect(),
              Promise.reject((0, n.serializeError)(t))
            );
          }
        }
        async enable() {
          return (
            console.warn(
              '.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'
            ),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async disconnect() {
          var e;
          await (null === (e = this.signer) || void 0 === e
            ? void 0
            : e.cleanup()),
            (this.signer = null),
            d.ScopedLocalStorage.clearAll(),
            this.emit(
              "disconnect",
              i.standardErrors.provider.disconnected(
                "User initiated disconnection"
              )
            );
        }
        requestSignerSelection(e) {
          return (0, o.fetchSignerType)({
            communicator: this.communicator,
            preference: this.preference,
            metadata: this.metadata,
            handshakeRequest: e,
          });
        }
        initSigner(e) {
          return (0, o.createSigner)({
            signerType: e,
            metadata: this.metadata,
            communicator: this.communicator,
            callback: this.emit.bind(this),
          });
        }
      }
      t.CoinbaseWalletProvider = u;
    },
    46111: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CoinbaseWalletSDK = void 0);
      let s = r(5814),
        i = r(5777),
        n = r(54750),
        a = r(83465),
        o = r(98997),
        c = r(66320);
      class l {
        constructor(e) {
          (this.metadata = {
            appName: e.appName || "Dapp",
            appLogoUrl: e.appLogoUrl || (0, o.getFavicon)(),
            appChainIds: e.appChainIds || [],
          }),
            this.storeLatestVersion();
        }
        makeWeb3Provider(e = { options: "all" }) {
          var t;
          let r = { metadata: this.metadata, preference: e };
          return null !== (t = (0, c.getCoinbaseInjectedProvider)(r)) &&
            void 0 !== t
            ? t
            : new i.CoinbaseWalletProvider(r);
        }
        getCoinbaseWalletLogo(e, t = 240) {
          return (0, s.walletLogo)(e, t);
        }
        storeLatestVersion() {
          new a.ScopedLocalStorage("CBWSDK").setItem("VERSION", n.LIB_VERSION);
        }
      }
      t.CoinbaseWalletSDK = l;
    },
    5814: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.walletLogo = void 0),
        (t.walletLogo = (e, t) => {
          let r;
          switch (e) {
            case "standard":
            default:
              return (
                (r = t),
                `data:image/svg+xml,%3Csvg width='${t}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `
              );
            case "circle":
              return (
                (r = t),
                `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${t}' height='${r}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`
              );
            case "text":
              return (
                (r = (0.1 * t).toFixed(2)),
                `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`
              );
            case "textWithLogo":
              return (
                (r = (0.25 * t).toFixed(2)),
                `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
              );
            case "textLight":
              return (
                (r = (0.1 * t).toFixed(2)),
                `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`
              );
            case "textWithLogoLight":
              return (
                (r = (0.25 * t).toFixed(2)),
                `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
              );
          }
        });
    },
    42057: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Communicator = void 0);
      let s = r(54750),
        i = r(99285),
        n = r(39172),
        a = r(46662);
      class o {
        constructor(e = i.CB_KEYS_URL, t) {
          (this.popup = null),
            (this.listeners = new Map()),
            (this.postMessage = async (e) => {
              (await this.waitForPopupLoaded()).postMessage(e, this.url.origin);
            }),
            (this.postRequestAndWaitForResponse = async (e) => {
              let t = this.onMessage(({ requestId: t }) => t === e.id);
              return this.postMessage(e), await t;
            }),
            (this.onMessage = async (e) =>
              new Promise((t, r) => {
                let s = (r) => {
                  if (r.origin !== this.url.origin) return;
                  let i = r.data;
                  e(i) &&
                    (t(i),
                    window.removeEventListener("message", s),
                    this.listeners.delete(s));
                };
                window.addEventListener("message", s),
                  this.listeners.set(s, { reject: r });
              })),
            (this.disconnect = () => {
              (0, a.closePopup)(this.popup),
                (this.popup = null),
                this.listeners.forEach(({ reject: e }, t) => {
                  e(
                    n.standardErrors.provider.userRejectedRequest(
                      "Request rejected"
                    )
                  ),
                    window.removeEventListener("message", t);
                }),
                this.listeners.clear();
            }),
            (this.waitForPopupLoaded = async () =>
              this.popup && !this.popup.closed
                ? (this.popup.focus(), this.popup)
                : ((this.popup = (0, a.openPopup)(this.url)),
                  this.onMessage(({ event: e }) => "PopupUnload" === e)
                    .then(this.disconnect)
                    .catch(() => {}),
                  this.onMessage(({ event: e }) => "PopupLoaded" === e)
                    .then((e) => {
                      this.postMessage({
                        requestId: e.id,
                        data: {
                          version: s.LIB_VERSION,
                          metadata: this.metadata,
                        },
                      });
                    })
                    .then(() => {
                      if (!this.popup) throw n.standardErrors.rpc.internal();
                      return this.popup;
                    }))),
            (this.url = new URL(e)),
            (this.metadata = t);
        }
      }
      t.Communicator = o;
    },
    99285: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CBW_MOBILE_DEEPLINK_URL = t.WALLETLINK_URL = t.CB_KEYS_URL = void 0),
        (t.CB_KEYS_URL = "https://keys.coinbase.com/connect"),
        (t.WALLETLINK_URL = "https://www.walletlink.org"),
        (t.CBW_MOBILE_DEEPLINK_URL = "https://go.cb-w.com/walletlink");
    },
    4406: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.errorValues = t.standardErrorCodes = void 0),
        (t.standardErrorCodes = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
            unsupportedChain: 4902,
          },
        }),
        (t.errorValues = {
          "-32700": {
            standard: "JSON RPC 2.0",
            message:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          },
          "-32600": {
            standard: "JSON RPC 2.0",
            message: "The JSON sent is not a valid Request object.",
          },
          "-32601": {
            standard: "JSON RPC 2.0",
            message: "The method does not exist / is not available.",
          },
          "-32602": {
            standard: "JSON RPC 2.0",
            message: "Invalid method parameter(s).",
          },
          "-32603": {
            standard: "JSON RPC 2.0",
            message: "Internal JSON-RPC error.",
          },
          "-32000": { standard: "EIP-1474", message: "Invalid input." },
          "-32001": { standard: "EIP-1474", message: "Resource not found." },
          "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
          "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
          "-32004": { standard: "EIP-1474", message: "Method not supported." },
          "-32005": {
            standard: "EIP-1474",
            message: "Request limit exceeded.",
          },
          4001: { standard: "EIP-1193", message: "User rejected the request." },
          4100: {
            standard: "EIP-1193",
            message:
              "The requested account and/or method has not been authorized by the user.",
          },
          4200: {
            standard: "EIP-1193",
            message:
              "The requested method is not supported by this Ethereum provider.",
          },
          4900: {
            standard: "EIP-1193",
            message: "The provider is disconnected from all chains.",
          },
          4901: {
            standard: "EIP-1193",
            message: "The provider is disconnected from the specified chain.",
          },
          4902: { standard: "EIP-3085", message: "Unrecognized chain ID." },
        });
    },
    71839: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.standardErrors = void 0);
      let s = r(4406),
        i = r(86687);
      function n(e, t) {
        let [r, s] = o(t);
        return new c(e, r || (0, i.getMessageFromCode)(e), s);
      }
      function a(e, t) {
        let [r, s] = o(t);
        return new l(e, r || (0, i.getMessageFromCode)(e), s);
      }
      function o(e) {
        if (e) {
          if ("string" == typeof e) return [e];
          if ("object" == typeof e && !Array.isArray(e)) {
            let { message: t, data: r } = e;
            if (t && "string" != typeof t)
              throw Error("Must specify string message.");
            return [t || void 0, r];
          }
        }
        return [];
      }
      t.standardErrors = {
        rpc: {
          parse: (e) => n(s.standardErrorCodes.rpc.parse, e),
          invalidRequest: (e) => n(s.standardErrorCodes.rpc.invalidRequest, e),
          invalidParams: (e) => n(s.standardErrorCodes.rpc.invalidParams, e),
          methodNotFound: (e) => n(s.standardErrorCodes.rpc.methodNotFound, e),
          internal: (e) => n(s.standardErrorCodes.rpc.internal, e),
          server: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum RPC Server errors must provide single object argument."
              );
            let { code: t } = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
              throw Error(
                '"code" must be an integer such that: -32099 <= code <= -32005'
              );
            return n(t, e);
          },
          invalidInput: (e) => n(s.standardErrorCodes.rpc.invalidInput, e),
          resourceNotFound: (e) =>
            n(s.standardErrorCodes.rpc.resourceNotFound, e),
          resourceUnavailable: (e) =>
            n(s.standardErrorCodes.rpc.resourceUnavailable, e),
          transactionRejected: (e) =>
            n(s.standardErrorCodes.rpc.transactionRejected, e),
          methodNotSupported: (e) =>
            n(s.standardErrorCodes.rpc.methodNotSupported, e),
          limitExceeded: (e) => n(s.standardErrorCodes.rpc.limitExceeded, e),
        },
        provider: {
          userRejectedRequest: (e) =>
            a(s.standardErrorCodes.provider.userRejectedRequest, e),
          unauthorized: (e) => a(s.standardErrorCodes.provider.unauthorized, e),
          unsupportedMethod: (e) =>
            a(s.standardErrorCodes.provider.unsupportedMethod, e),
          disconnected: (e) => a(s.standardErrorCodes.provider.disconnected, e),
          chainDisconnected: (e) =>
            a(s.standardErrorCodes.provider.chainDisconnected, e),
          unsupportedChain: (e) =>
            a(s.standardErrorCodes.provider.unsupportedChain, e),
          custom: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum Provider custom errors must provide single object argument."
              );
            let { code: t, message: r, data: s } = e;
            if (!r || "string" != typeof r)
              throw Error('"message" must be a nonempty string');
            return new l(t, r, s);
          },
        },
      };
      class c extends Error {
        constructor(e, t, r) {
          if (!Number.isInteger(e)) throw Error('"code" must be an integer.');
          if (!t || "string" != typeof t)
            throw Error('"message" must be a nonempty string.');
          super(t), (this.code = e), void 0 !== r && (this.data = r);
        }
      }
      class l extends c {
        constructor(e, t, r) {
          if (
            !(function (e) {
              return Number.isInteger(e) && e >= 1e3 && e <= 4999;
            })(e)
          )
            throw Error(
              '"code" must be an integer such that: 1000 <= code <= 4999'
            );
          super(e, t, r);
        }
      }
    },
    39172: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.standardErrors = t.standardErrorCodes = void 0);
      var s = r(4406);
      Object.defineProperty(t, "standardErrorCodes", {
        enumerable: !0,
        get: function () {
          return s.standardErrorCodes;
        },
      });
      var i = r(71839);
      Object.defineProperty(t, "standardErrors", {
        enumerable: !0,
        get: function () {
          return i.standardErrors;
        },
      });
    },
    47224: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.serializeError = function (e) {
          let t = (0, a.serialize)(
              (function (e) {
                var t;
                if ("string" == typeof e)
                  return {
                    message: e,
                    code: n.standardErrorCodes.rpc.internal,
                  };
                if ((0, s.isErrorResponse)(e)) {
                  let r = e.errorMessage,
                    s =
                      null !== (t = e.errorCode) && void 0 !== t
                        ? t
                        : r.match(/(denied|rejected)/i)
                        ? n.standardErrorCodes.provider.userRejectedRequest
                        : void 0;
                  return Object.assign(Object.assign({}, e), {
                    message: r,
                    code: s,
                    data: { method: e.method },
                  });
                }
                return e;
              })(e),
              { shouldIncludeStack: !0 }
            ),
            r = new URL(
              "https://docs.cloud.coinbase.com/wallet-sdk/docs/errors"
            );
          return (
            r.searchParams.set("version", i.LIB_VERSION),
            r.searchParams.set("code", t.code.toString()),
            r.searchParams.set("message", t.message),
            Object.assign(Object.assign({}, t), { docUrl: r.href })
          );
        });
      let s = r(83705),
        i = r(54750),
        n = r(4406),
        a = r(86687);
    },
    86687: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.JSON_RPC_SERVER_ERROR_MESSAGE = void 0),
        (t.getMessageFromCode = n),
        (t.isValidCode = a),
        (t.getErrorCode = function (e) {
          var t;
          return "number" == typeof e
            ? e
            : "object" == typeof e &&
              null !== e &&
              ("number" == typeof e.code || "number" == typeof e.errorCode)
            ? null !== (t = e.code) && void 0 !== t
              ? t
              : e.errorCode
            : void 0;
        }),
        (t.serialize = function (e, { shouldIncludeStack: t = !1 } = {}) {
          let r = {};
          return (
            e &&
            "object" == typeof e &&
            !Array.isArray(e) &&
            c(e, "code") &&
            a(e.code)
              ? ((r.code = e.code),
                e.message && "string" == typeof e.message
                  ? ((r.message = e.message), c(e, "data") && (r.data = e.data))
                  : ((r.message = n(r.code)),
                    (r.data = { originalError: o(e) })))
              : ((r.code = s.standardErrorCodes.rpc.internal),
                (r.message = l(e, "message") ? e.message : i),
                (r.data = { originalError: o(e) })),
            t && (r.stack = l(e, "stack") ? e.stack : void 0),
            r
          );
        });
      let s = r(4406),
        i = "Unspecified error message.";
      function n(e, r = i) {
        if (e && Number.isInteger(e)) {
          let r = e.toString();
          if (c(s.errorValues, r)) return s.errorValues[r].message;
          if (e >= -32099 && e <= -32e3) return t.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
        return r;
      }
      function a(e) {
        if (!Number.isInteger(e)) return !1;
        let t = e.toString();
        return !!(s.errorValues[t] || (e >= -32099 && e <= -32e3));
      }
      function o(e) {
        return e && "object" == typeof e && !Array.isArray(e)
          ? Object.assign({}, e)
          : e;
      }
      function c(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function l(e, t) {
        return (
          "object" == typeof e &&
          null !== e &&
          t in e &&
          "string" == typeof e[t]
        );
      }
      t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
    },
    47977: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ProviderEventEmitter = void 0);
      let s = r(37836);
      class i extends s.EventEmitter {}
      t.ProviderEventEmitter = i;
    },
    83465: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ScopedLocalStorage = void 0);
      class r {
        constructor(e, t) {
          (this.scope = e), (this.module = t);
        }
        storeObject(e, t) {
          this.setItem(e, JSON.stringify(t));
        }
        loadObject(e) {
          let t = this.getItem(e);
          return t ? JSON.parse(t) : void 0;
        }
        setItem(e, t) {
          localStorage.setItem(this.scopedKey(e), t);
        }
        getItem(e) {
          return localStorage.getItem(this.scopedKey(e));
        }
        removeItem(e) {
          localStorage.removeItem(this.scopedKey(e));
        }
        clear() {
          let e = this.scopedKey(""),
            t = [];
          for (let r = 0; r < localStorage.length; r++) {
            let s = localStorage.key(r);
            "string" == typeof s && s.startsWith(e) && t.push(s);
          }
          t.forEach((e) => localStorage.removeItem(e));
        }
        scopedKey(e) {
          return `-${this.scope}${this.module ? `:${this.module}` : ""}:${e}`;
        }
        static clearAll() {
          new r("CBWSDK").clear(), new r("walletlink").clear();
        }
      }
      t.ScopedLocalStorage = r;
    },
    34468: (e, t) => {
      "use strict";
      function r() {
        return (e) => e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RegExpString =
          t.BigIntString =
          t.AddressString =
          t.HexString =
            void 0),
        (t.OpaqueType = r),
        (t.IntNumber = function (e) {
          return Math.floor(e);
        }),
        (t.HexString = r()),
        (t.AddressString = r()),
        (t.BigIntString = r()),
        (t.RegExpString = r());
    },
    98997: (e, t, r) => {
      "use strict";
      var s = r(9109).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.randomBytesHex = function (e) {
          return c(crypto.getRandomValues(new Uint8Array(e)));
        }),
        (t.uint8ArrayToHex = c),
        (t.hexStringToUint8Array = function (e) {
          return new Uint8Array(e.match(/.{1,2}/g).map((e) => parseInt(e, 16)));
        }),
        (t.hexStringFromBuffer = l),
        (t.encodeToHexString = function (e) {
          return l(g(e), !0);
        }),
        (t.bigIntStringFromBigInt = function (e) {
          return (0, n.BigIntString)(e.toString(10));
        }),
        (t.intNumberFromHexString = function (e) {
          return (0, n.IntNumber)(Number(BigInt(m(e, !0))));
        }),
        (t.hexStringFromNumber = function (e) {
          return (0, n.HexString)(`0x${BigInt(e).toString(16)}`);
        }),
        (t.has0xPrefix = d),
        (t.strip0x = h),
        (t.prepend0x = u),
        (t.isHexString = p),
        (t.ensureHexString = f),
        (t.ensureEvenLengthHexString = m),
        (t.ensureAddressString = function (e) {
          if ("string" == typeof e) {
            let t = h(e).toLowerCase();
            if (p(t) && 40 === t.length) return (0, n.AddressString)(u(t));
          }
          throw i.standardErrors.rpc.invalidParams(
            `Invalid Ethereum address: ${String(e)}`
          );
        }),
        (t.ensureBuffer = g),
        (t.ensureIntNumber = _),
        (t.ensureRegExpString = function (e) {
          if (e instanceof RegExp) return (0, n.RegExpString)(e.toString());
          throw i.standardErrors.rpc.invalidParams(
            `Not a RegExp: ${String(e)}`
          );
        }),
        (t.ensureBigInt = function (e) {
          if (null !== e && ("bigint" == typeof e || b(e)))
            return BigInt(e.toString(10));
          if ("number" == typeof e) return BigInt(_(e));
          if ("string" == typeof e) {
            if (a.test(e)) return BigInt(e);
            if (p(e)) return BigInt(m(e, !0));
          }
          throw i.standardErrors.rpc.invalidParams(
            `Not an integer: ${String(e)}`
          );
        }),
        (t.ensureParsedJSONObject = function (e) {
          if ("string" == typeof e) return JSON.parse(e);
          if ("object" == typeof e) return e;
          throw i.standardErrors.rpc.invalidParams(
            `Not a JSON string or an object: ${String(e)}`
          );
        }),
        (t.isBigNumber = b),
        (t.range = function (e, t) {
          return Array.from({ length: t - e }, (t, r) => e + r);
        }),
        (t.getFavicon = function () {
          let e =
              document.querySelector('link[sizes="192x192"]') ||
              document.querySelector('link[sizes="180x180"]') ||
              document.querySelector('link[rel="icon"]') ||
              document.querySelector('link[rel="shortcut icon"]'),
            { protocol: t, host: r } = document.location,
            s = e ? e.getAttribute("href") : null;
          return !s || s.startsWith("javascript:") || s.startsWith("vbscript:")
            ? null
            : s.startsWith("http://") ||
              s.startsWith("https://") ||
              s.startsWith("data:")
            ? s
            : s.startsWith("//")
            ? t + s
            : `${t}//${r}${s}`;
        }),
        (t.areAddressArraysEqual = function (e, t) {
          return e.length === t.length && e.every((e, r) => e === t[r]);
        });
      let i = r(39172),
        n = r(34468),
        a = /^[0-9]*$/,
        o = /^[a-f0-9]*$/;
      function c(e) {
        return [...e].map((e) => e.toString(16).padStart(2, "0")).join("");
      }
      function l(e, t = !1) {
        let r = e.toString("hex");
        return (0, n.HexString)(t ? `0x${r}` : r);
      }
      function d(e) {
        return e.startsWith("0x") || e.startsWith("0X");
      }
      function h(e) {
        return d(e) ? e.slice(2) : e;
      }
      function u(e) {
        return d(e) ? `0x${e.slice(2)}` : `0x${e}`;
      }
      function p(e) {
        if ("string" != typeof e) return !1;
        let t = h(e).toLowerCase();
        return o.test(t);
      }
      function f(e, t = !1) {
        if ("string" == typeof e) {
          let r = h(e).toLowerCase();
          if (o.test(r)) return (0, n.HexString)(t ? `0x${r}` : r);
        }
        throw i.standardErrors.rpc.invalidParams(
          `"${String(e)}" is not a hexadecimal string`
        );
      }
      function m(e, t = !1) {
        let r = f(e, !1);
        return (
          r.length % 2 == 1 && (r = (0, n.HexString)(`0${r}`)),
          t ? (0, n.HexString)(`0x${r}`) : r
        );
      }
      function g(e) {
        if (s.isBuffer(e)) return e;
        if ("string" == typeof e) {
          if (p(e)) {
            let t = m(e, !1);
            return s.from(t, "hex");
          }
          return s.from(e, "utf8");
        }
        throw i.standardErrors.rpc.invalidParams(
          `Not binary data: ${String(e)}`
        );
      }
      function _(e) {
        if ("number" == typeof e && Number.isInteger(e))
          return (0, n.IntNumber)(e);
        if ("string" == typeof e) {
          if (a.test(e)) return (0, n.IntNumber)(Number(e));
          if (p(e)) return (0, n.IntNumber)(Number(BigInt(m(e, !0))));
        }
        throw i.standardErrors.rpc.invalidParams(
          `Not an integer: ${String(e)}`
        );
      }
      function b(e) {
        if (null == e || "function" != typeof e.constructor) return !1;
        let { constructor: t } = e;
        return "function" == typeof t.config && "number" == typeof t.EUCLID;
      }
    },
    86080: (e, t, r) => {
      "use strict";
      (t.jp = void 0), r(46111).CoinbaseWalletSDK;
      var s = r(46111);
      Object.defineProperty(t, "jp", {
        enumerable: !0,
        get: function () {
          return s.CoinbaseWalletSDK;
        },
      });
    },
    7977: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SCWKeyManager = void 0);
      let s = r(83465),
        i = r(89665),
        n = { storageKey: "ownPrivateKey", keyType: "private" },
        a = { storageKey: "ownPublicKey", keyType: "public" },
        o = { storageKey: "peerPublicKey", keyType: "public" };
      class c {
        constructor() {
          (this.storage = new s.ScopedLocalStorage("CBWSDK", "SCWKeyManager")),
            (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null);
        }
        async getOwnPublicKey() {
          return await this.loadKeysIfNeeded(), this.ownPublicKey;
        }
        async getSharedSecret() {
          return await this.loadKeysIfNeeded(), this.sharedSecret;
        }
        async setPeerPublicKey(e) {
          (this.sharedSecret = null),
            (this.peerPublicKey = e),
            await this.storeKey(o, e),
            await this.loadKeysIfNeeded();
        }
        async clear() {
          (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null),
            this.storage.removeItem(a.storageKey),
            this.storage.removeItem(n.storageKey),
            this.storage.removeItem(o.storageKey);
        }
        async generateKeyPair() {
          let e = await (0, i.generateKeyPair)();
          (this.ownPrivateKey = e.privateKey),
            (this.ownPublicKey = e.publicKey),
            await this.storeKey(n, e.privateKey),
            await this.storeKey(a, e.publicKey);
        }
        async loadKeysIfNeeded() {
          null === this.ownPrivateKey &&
            (this.ownPrivateKey = await this.loadKey(n)),
            null === this.ownPublicKey &&
              (this.ownPublicKey = await this.loadKey(a)),
            (null === this.ownPrivateKey || null === this.ownPublicKey) &&
              (await this.generateKeyPair()),
            null === this.peerPublicKey &&
              (this.peerPublicKey = await this.loadKey(o)),
            null === this.sharedSecret &&
              null !== this.ownPrivateKey &&
              null !== this.peerPublicKey &&
              (this.sharedSecret = await (0, i.deriveSharedSecret)(
                this.ownPrivateKey,
                this.peerPublicKey
              ));
        }
        async loadKey(e) {
          let t = this.storage.getItem(e.storageKey);
          return t ? (0, i.importKeyFromHexString)(e.keyType, t) : null;
        }
        async storeKey(e, t) {
          let r = await (0, i.exportKeyToHexString)(e.keyType, t);
          this.storage.setItem(e.storageKey, r);
        }
      }
      t.SCWKeyManager = c;
    },
    51902: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SCWSigner = void 0);
      let s = r(7977),
        i = r(39172),
        n = r(83465),
        a = r(98997),
        o = r(89665),
        c = r(66320),
        l = "accounts",
        d = "activeChain",
        h = "availableChains",
        u = "walletCapabilities";
      class p {
        constructor(e) {
          var t, r, i;
          (this.metadata = e.metadata),
            (this.communicator = e.communicator),
            (this.callback = e.callback),
            (this.keyManager = new s.SCWKeyManager()),
            (this.storage = new n.ScopedLocalStorage(
              "CBWSDK",
              "SCWStateManager"
            )),
            (this.accounts =
              null !== (t = this.storage.loadObject(l)) && void 0 !== t
                ? t
                : []),
            (this.chain = this.storage.loadObject(d) || {
              id:
                null !==
                  (i =
                    null === (r = e.metadata.appChainIds) || void 0 === r
                      ? void 0
                      : r[0]) && void 0 !== i
                  ? i
                  : 1,
            }),
            (this.handshake = this.handshake.bind(this)),
            (this.request = this.request.bind(this)),
            (this.createRequestMessage = this.createRequestMessage.bind(this)),
            (this.decryptResponseMessage =
              this.decryptResponseMessage.bind(this));
        }
        async handshake(e) {
          var t, r;
          let s = await this.createRequestMessage({
              handshake: {
                method: e.method,
                params: Object.assign(
                  {},
                  this.metadata,
                  null !== (t = e.params) && void 0 !== t ? t : {}
                ),
              },
            }),
            i = await this.communicator.postRequestAndWaitForResponse(s);
          if ("failure" in i.content) throw i.content.failure;
          let n = await (0, o.importKeyFromHexString)("public", i.sender);
          await this.keyManager.setPeerPublicKey(n);
          let a = (await this.decryptResponseMessage(i)).result;
          if ("error" in a) throw a.error;
          let c = a.value;
          (this.accounts = c),
            this.storage.storeObject(l, c),
            null === (r = this.callback) ||
              void 0 === r ||
              r.call(this, "accountsChanged", c);
        }
        async request(e) {
          var t;
          if (0 === this.accounts.length)
            throw i.standardErrors.provider.unauthorized();
          switch (e.method) {
            case "eth_requestAccounts":
              return (
                null === (t = this.callback) ||
                  void 0 === t ||
                  t.call(this, "connect", {
                    chainId: (0, a.hexStringFromNumber)(this.chain.id),
                  }),
                this.accounts
              );
            case "eth_accounts":
              return this.accounts;
            case "eth_coinbase":
              return this.accounts[0];
            case "net_version":
              return this.chain.id;
            case "eth_chainId":
              return (0, a.hexStringFromNumber)(this.chain.id);
            case "wallet_getCapabilities":
              return this.storage.loadObject(u);
            case "wallet_switchEthereumChain":
              return this.handleSwitchChainRequest(e);
            case "eth_ecRecover":
            case "personal_sign":
            case "personal_ecRecover":
            case "eth_signTransaction":
            case "eth_sendTransaction":
            case "eth_signTypedData_v1":
            case "eth_signTypedData_v3":
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
            case "wallet_addEthereumChain":
            case "wallet_watchAsset":
            case "wallet_sendCalls":
            case "wallet_showCallsStatus":
            case "wallet_grantPermissions":
              return this.sendRequestToPopup(e);
            default:
              if (!this.chain.rpcUrl)
                throw i.standardErrors.rpc.internal("No RPC URL set for chain");
              return (0, c.fetchRPCRequest)(e, this.chain.rpcUrl);
          }
        }
        async sendRequestToPopup(e) {
          var t, r;
          await (null === (r = (t = this.communicator).waitForPopupLoaded) ||
          void 0 === r
            ? void 0
            : r.call(t));
          let s = await this.sendEncryptedRequest(e),
            i = (await this.decryptResponseMessage(s)).result;
          if ("error" in i) throw i.error;
          return i.value;
        }
        async cleanup() {
          var e, t;
          this.storage.clear(),
            await this.keyManager.clear(),
            (this.accounts = []),
            (this.chain = {
              id:
                null !==
                  (t =
                    null === (e = this.metadata.appChainIds) || void 0 === e
                      ? void 0
                      : e[0]) && void 0 !== t
                  ? t
                  : 1,
            });
        }
        async handleSwitchChainRequest(e) {
          var t;
          let r = e.params;
          if (!r || !(null === (t = r[0]) || void 0 === t ? void 0 : t.chainId))
            throw i.standardErrors.rpc.invalidParams();
          let s = (0, a.ensureIntNumber)(r[0].chainId);
          if (this.updateChain(s)) return null;
          let n = await this.sendRequestToPopup(e);
          return null === n && this.updateChain(s), n;
        }
        async sendEncryptedRequest(e) {
          let t = await this.keyManager.getSharedSecret();
          if (!t)
            throw i.standardErrors.provider.unauthorized(
              "No valid session found, try requestAccounts before other methods"
            );
          let r = await (0, o.encryptContent)(
              { action: e, chainId: this.chain.id },
              t
            ),
            s = await this.createRequestMessage({ encrypted: r });
          return this.communicator.postRequestAndWaitForResponse(s);
        }
        async createRequestMessage(e) {
          let t = await (0, o.exportKeyToHexString)(
            "public",
            await this.keyManager.getOwnPublicKey()
          );
          return {
            id: crypto.randomUUID(),
            sender: t,
            content: e,
            timestamp: new Date(),
          };
        }
        async decryptResponseMessage(e) {
          var t, r;
          let s = e.content;
          if ("failure" in s) throw s.failure;
          let n = await this.keyManager.getSharedSecret();
          if (!n)
            throw i.standardErrors.provider.unauthorized("Invalid session");
          let a = await (0, o.decryptContent)(s.encrypted, n),
            c = null === (t = a.data) || void 0 === t ? void 0 : t.chains;
          if (c) {
            let e = Object.entries(c).map(([e, t]) => ({
              id: Number(e),
              rpcUrl: t,
            }));
            this.storage.storeObject(h, e), this.updateChain(this.chain.id, e);
          }
          let l =
            null === (r = a.data) || void 0 === r ? void 0 : r.capabilities;
          return l && this.storage.storeObject(u, l), a;
        }
        updateChain(e, t) {
          var r;
          let s = null != t ? t : this.storage.loadObject(h),
            i = null == s ? void 0 : s.find((t) => t.id === e);
          return (
            !!i &&
            (i !== this.chain &&
              ((this.chain = i),
              this.storage.storeObject(d, i),
              null === (r = this.callback) ||
                void 0 === r ||
                r.call(this, "chainChanged", (0, a.hexStringFromNumber)(i.id))),
            !0)
          );
        }
      }
      t.SCWSigner = p;
    },
    96741: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.loadSignerType = function () {
          return o.getItem(a);
        }),
        (t.storeSignerType = function (e) {
          o.setItem(a, e);
        }),
        (t.fetchSignerType = c),
        (t.createSigner = function (e) {
          let { signerType: t, metadata: r, communicator: n, callback: a } = e;
          switch (t) {
            case "scw":
              return new s.SCWSigner({
                metadata: r,
                callback: a,
                communicator: n,
              });
            case "walletlink":
              return new i.WalletLinkSigner({ metadata: r, callback: a });
          }
        });
      let s = r(51902),
        i = r(86510),
        n = r(83465),
        a = "SignerType",
        o = new n.ScopedLocalStorage("CBWSDK", "SignerConfigurator");
      async function c(e) {
        let { communicator: t, metadata: r, handshakeRequest: s } = e;
        l(t, r).catch(() => {});
        let i = {
            id: crypto.randomUUID(),
            event: "selectSignerType",
            data: Object.assign(Object.assign({}, e.preference), {
              handshakeRequest: s,
            }),
          },
          { data: n } = await t.postRequestAndWaitForResponse(i);
        return n;
      }
      async function l(e, t) {
        await e.onMessage(({ event: e }) => "WalletLinkSessionRequest" === e);
        let r = new i.WalletLinkSigner({ metadata: t });
        e.postMessage({
          event: "WalletLinkUpdate",
          data: { session: r.getSession() },
        }),
          await r.handshake(),
          e.postMessage({ event: "WalletLinkUpdate", data: { connected: !0 } });
      }
    },
    86510: function (e, t, r) {
      "use strict";
      var s = r(9109).Buffer,
        i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WalletLinkSigner = void 0);
      let n = i(r(80745)),
        a = r(56663),
        o = r(83705),
        c = r(78461),
        l = r(99285),
        d = r(39172),
        h = r(83465),
        u = r(98997),
        p = r(66320),
        f = "DefaultChainId",
        m = "DefaultJsonRpcUrl";
      class g {
        constructor(e) {
          (this._relay = null),
            (this._addresses = []),
            (this.metadata = e.metadata),
            (this._storage = new h.ScopedLocalStorage(
              "walletlink",
              l.WALLETLINK_URL
            )),
            (this.callback = e.callback || null);
          let t = this._storage.getItem(a.LOCAL_STORAGE_ADDRESSES_KEY);
          if (t) {
            let e = t.split(" ");
            "" !== e[0] &&
              (this._addresses = e.map((e) => (0, u.ensureAddressString)(e)));
          }
          this.initializeRelay();
        }
        getSession() {
          let { id: e, secret: t } =
            this.initializeRelay().getWalletLinkSession();
          return { id: e, secret: t };
        }
        async handshake() {
          await this._eth_requestAccounts();
        }
        get selectedAddress() {
          return this._addresses[0] || void 0;
        }
        get jsonRpcUrl() {
          var e;
          return null !== (e = this._storage.getItem(m)) && void 0 !== e
            ? e
            : void 0;
        }
        set jsonRpcUrl(e) {
          this._storage.setItem(m, e);
        }
        updateProviderInfo(e, t) {
          var r;
          this.jsonRpcUrl = e;
          let s = this.getChainId();
          this._storage.setItem(f, t.toString(10)),
            (0, u.ensureIntNumber)(t) !== s &&
              (null === (r = this.callback) ||
                void 0 === r ||
                r.call(this, "chainChanged", (0, u.hexStringFromNumber)(t)));
        }
        async watchAsset(e) {
          let t = Array.isArray(e) ? e[0] : e;
          if (!t.type)
            throw d.standardErrors.rpc.invalidParams("Type is required");
          if ((null == t ? void 0 : t.type) !== "ERC20")
            throw d.standardErrors.rpc.invalidParams(
              `Asset of type '${t.type}' is not supported`
            );
          if (!(null == t ? void 0 : t.options))
            throw d.standardErrors.rpc.invalidParams("Options are required");
          if (!(null == t ? void 0 : t.options.address))
            throw d.standardErrors.rpc.invalidParams("Address is required");
          let r = this.getChainId(),
            { address: s, symbol: i, image: n, decimals: a } = t.options,
            c = this.initializeRelay(),
            l = await c.watchAsset(
              t.type,
              s,
              i,
              a,
              n,
              null == r ? void 0 : r.toString()
            );
          return !(0, o.isErrorResponse)(l) && !!l.result;
        }
        async addEthereumChain(e) {
          var t, r;
          let s = e[0];
          if (
            (null === (t = s.rpcUrls) || void 0 === t ? void 0 : t.length) === 0
          )
            throw d.standardErrors.rpc.invalidParams(
              "please pass in at least 1 rpcUrl"
            );
          if (!s.chainName || "" === s.chainName.trim())
            throw d.standardErrors.rpc.invalidParams(
              "chainName is a required field"
            );
          if (!s.nativeCurrency)
            throw d.standardErrors.rpc.invalidParams(
              "nativeCurrency is a required field"
            );
          let i = parseInt(s.chainId, 16);
          if (i === this.getChainId()) return !1;
          let n = this.initializeRelay(),
            {
              rpcUrls: a = [],
              blockExplorerUrls: c = [],
              chainName: l,
              iconUrls: h = [],
              nativeCurrency: u,
            } = s,
            p = await n.addEthereumChain(i.toString(), a, h, c, l, u);
          if ((0, o.isErrorResponse)(p)) return !1;
          if (
            (null === (r = p.result) || void 0 === r
              ? void 0
              : r.isApproved) === !0
          )
            return this.updateProviderInfo(a[0], i), null;
          throw d.standardErrors.rpc.internal("unable to add ethereum chain");
        }
        async switchEthereumChain(e) {
          let t = parseInt(e[0].chainId, 16),
            r = this.initializeRelay(),
            s = await r.switchEthereumChain(
              t.toString(10),
              this.selectedAddress || void 0
            );
          if ((0, o.isErrorResponse)(s)) throw s;
          let i = s.result;
          return (
            i.isApproved &&
              i.rpcUrl.length > 0 &&
              this.updateProviderInfo(i.rpcUrl, t),
            null
          );
        }
        async cleanup() {
          (this.callback = null),
            this._relay && this._relay.resetAndReload(),
            this._storage.clear();
        }
        _setAddresses(e, t) {
          var r;
          if (!Array.isArray(e)) throw Error("addresses is not an array");
          let s = e.map((e) => (0, u.ensureAddressString)(e));
          JSON.stringify(s) !== JSON.stringify(this._addresses) &&
            ((this._addresses = s),
            null === (r = this.callback) ||
              void 0 === r ||
              r.call(this, "accountsChanged", s),
            this._storage.setItem(a.LOCAL_STORAGE_ADDRESSES_KEY, s.join(" ")));
        }
        async request(e) {
          let t = e.params || [];
          switch (e.method) {
            case "eth_accounts":
              return [...this._addresses];
            case "eth_coinbase":
              return this.selectedAddress || null;
            case "net_version":
              return this.getChainId().toString(10);
            case "eth_chainId":
              return (0, u.hexStringFromNumber)(this.getChainId());
            case "eth_requestAccounts":
              return this._eth_requestAccounts();
            case "eth_ecRecover":
            case "personal_ecRecover":
              return this.ecRecover(e);
            case "personal_sign":
              return this.personalSign(e);
            case "eth_signTransaction":
              return this._eth_signTransaction(t);
            case "eth_sendRawTransaction":
              return this._eth_sendRawTransaction(t);
            case "eth_sendTransaction":
              return this._eth_sendTransaction(t);
            case "eth_signTypedData_v1":
            case "eth_signTypedData_v3":
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
              return this.signTypedData(e);
            case "wallet_addEthereumChain":
              return this.addEthereumChain(t);
            case "wallet_switchEthereumChain":
              return this.switchEthereumChain(t);
            case "wallet_watchAsset":
              return this.watchAsset(t);
            default:
              if (!this.jsonRpcUrl)
                throw d.standardErrors.rpc.internal("No RPC URL set for chain");
              return (0, p.fetchRPCRequest)(e, this.jsonRpcUrl);
          }
        }
        _ensureKnownAddress(e) {
          let t = (0, u.ensureAddressString)(e);
          if (
            !this._addresses
              .map((e) => (0, u.ensureAddressString)(e))
              .includes(t)
          )
            throw Error("Unknown Ethereum address");
        }
        _prepareTransactionParams(e) {
          let t = e.from
            ? (0, u.ensureAddressString)(e.from)
            : this.selectedAddress;
          if (!t) throw Error("Ethereum address is unavailable");
          this._ensureKnownAddress(t);
          let r = e.to ? (0, u.ensureAddressString)(e.to) : null,
            i = null != e.value ? (0, u.ensureBigInt)(e.value) : BigInt(0),
            n = e.data ? (0, u.ensureBuffer)(e.data) : s.alloc(0),
            a = null != e.nonce ? (0, u.ensureIntNumber)(e.nonce) : null,
            o = null != e.gasPrice ? (0, u.ensureBigInt)(e.gasPrice) : null,
            c =
              null != e.maxFeePerGas
                ? (0, u.ensureBigInt)(e.maxFeePerGas)
                : null;
          return {
            fromAddress: t,
            toAddress: r,
            weiValue: i,
            data: n,
            nonce: a,
            gasPriceInWei: o,
            maxFeePerGas: c,
            maxPriorityFeePerGas:
              null != e.maxPriorityFeePerGas
                ? (0, u.ensureBigInt)(e.maxPriorityFeePerGas)
                : null,
            gasLimit: null != e.gas ? (0, u.ensureBigInt)(e.gas) : null,
            chainId: e.chainId
              ? (0, u.ensureIntNumber)(e.chainId)
              : this.getChainId(),
          };
        }
        async ecRecover(e) {
          let { method: t, params: r } = e;
          if (!Array.isArray(r)) throw d.standardErrors.rpc.invalidParams();
          let s = this.initializeRelay(),
            i = await s.sendRequest({
              method: "ethereumAddressFromSignedMessage",
              params: {
                message: (0, u.encodeToHexString)(r[0]),
                signature: (0, u.encodeToHexString)(r[1]),
                addPrefix: "personal_ecRecover" === t,
              },
            });
          if ((0, o.isErrorResponse)(i)) throw i;
          return i.result;
        }
        getChainId() {
          var e;
          return parseInt(
            null !== (e = this._storage.getItem(f)) && void 0 !== e ? e : "1",
            10
          );
        }
        async _eth_requestAccounts() {
          var e, t;
          if (this._addresses.length > 0)
            return (
              null === (e = this.callback) ||
                void 0 === e ||
                e.call(this, "connect", {
                  chainId: (0, u.hexStringFromNumber)(this.getChainId()),
                }),
              this._addresses
            );
          let r = this.initializeRelay(),
            s = await r.requestEthereumAccounts();
          if ((0, o.isErrorResponse)(s)) throw s;
          if (!s.result) throw Error("accounts received is empty");
          return (
            this._setAddresses(s.result),
            null === (t = this.callback) ||
              void 0 === t ||
              t.call(this, "connect", {
                chainId: (0, u.hexStringFromNumber)(this.getChainId()),
              }),
            this._addresses
          );
        }
        async personalSign({ params: e }) {
          if (!Array.isArray(e)) throw d.standardErrors.rpc.invalidParams();
          let t = e[1],
            r = e[0];
          this._ensureKnownAddress(t);
          let s = this.initializeRelay(),
            i = await s.sendRequest({
              method: "signEthereumMessage",
              params: {
                address: (0, u.ensureAddressString)(t),
                message: (0, u.encodeToHexString)(r),
                addPrefix: !0,
                typedDataJson: null,
              },
            });
          if ((0, o.isErrorResponse)(i)) throw i;
          return i.result;
        }
        async _eth_signTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            r = this.initializeRelay(),
            s = await r.signEthereumTransaction(t);
          if ((0, o.isErrorResponse)(s)) throw s;
          return s.result;
        }
        async _eth_sendRawTransaction(e) {
          let t = (0, u.ensureBuffer)(e[0]),
            r = this.initializeRelay(),
            s = await r.submitEthereumTransaction(t, this.getChainId());
          if ((0, o.isErrorResponse)(s)) throw s;
          return s.result;
        }
        async _eth_sendTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            r = this.initializeRelay(),
            s = await r.signAndSubmitEthereumTransaction(t);
          if ((0, o.isErrorResponse)(s)) throw s;
          return s.result;
        }
        async signTypedData(e) {
          let { method: t, params: r } = e;
          if (!Array.isArray(r)) throw d.standardErrors.rpc.invalidParams();
          let s = r["eth_signTypedData_v1" === t ? 1 : 0],
            i = r["eth_signTypedData_v1" === t ? 0 : 1];
          this._ensureKnownAddress(s);
          let a = this.initializeRelay(),
            c = await a.sendRequest({
              method: "signEthereumMessage",
              params: {
                address: (0, u.ensureAddressString)(s),
                message: ((e) => {
                  let r = {
                    eth_signTypedData_v1: n.default.hashForSignTypedDataLegacy,
                    eth_signTypedData_v3: n.default.hashForSignTypedData_v3,
                    eth_signTypedData_v4: n.default.hashForSignTypedData_v4,
                    eth_signTypedData: n.default.hashForSignTypedData_v4,
                  };
                  return (0, u.hexStringFromBuffer)(
                    r[t]({ data: (0, u.ensureParsedJSONObject)(e) }),
                    !0
                  );
                })(i),
                typedDataJson: JSON.stringify(i, null, 2),
                addPrefix: !1,
              },
            });
          if ((0, o.isErrorResponse)(c)) throw c;
          return c.result;
        }
        initializeRelay() {
          return (
            this._relay ||
              (this._relay = new c.WalletLinkRelay({
                linkAPIUrl: l.WALLETLINK_URL,
                storage: this._storage,
                metadata: this.metadata,
                accountsCallback: this._setAddresses.bind(this),
                chainCallback: this.updateProviderInfo.bind(this),
              })),
            this._relay
          );
        }
      }
      t.WalletLinkSigner = g;
    },
    65896: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RelayEventManager = void 0);
      let s = r(98997);
      class i {
        constructor() {
          (this._nextRequestId = 0), (this.callbacks = new Map());
        }
        makeRequestId() {
          this._nextRequestId = (this._nextRequestId + 1) % 0x7fffffff;
          let e = this._nextRequestId,
            t = (0, s.prepend0x)(e.toString(16));
          return this.callbacks.get(t) && this.callbacks.delete(t), e;
        }
      }
      t.RelayEventManager = i;
    },
    78461: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WalletLinkRelay = void 0);
      let s = r(32485),
        i = r(56663),
        n = r(65896),
        a = r(42922),
        o = r(83705),
        c = r(44412),
        l = r(34614),
        d = r(78826),
        h = r(39172),
        u = r(83465),
        p = r(98997);
      class f {
        constructor(e) {
          (this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" }),
            (this.isMobileWeb = (0, c.isMobileWeb)()),
            (this.linkedUpdated = (e) => {
              this.isLinked = e;
              let t = this.storage.getItem(i.LOCAL_STORAGE_ADDRESSES_KEY);
              if (
                (e && (this._session.linked = e),
                (this.isUnlinkedErrorState = !1),
                t)
              ) {
                let r = t.split(" "),
                  s = "true" === this.storage.getItem("IsStandaloneSigning");
                "" === r[0] ||
                  e ||
                  !this._session.linked ||
                  s ||
                  (this.isUnlinkedErrorState = !0);
              }
            }),
            (this.metadataUpdated = (e, t) => {
              this.storage.setItem(e, t);
            }),
            (this.chainUpdated = (e, t) => {
              (this.chainCallbackParams.chainId !== e ||
                this.chainCallbackParams.jsonRpcUrl !== t) &&
                ((this.chainCallbackParams = { chainId: e, jsonRpcUrl: t }),
                this.chainCallback && this.chainCallback(t, parseInt(e, 10)));
            }),
            (this.accountUpdated = (e) => {
              this.accountsCallback && this.accountsCallback([e]),
                f.accountRequestCallbackIds.size > 0 &&
                  (Array.from(f.accountRequestCallbackIds.values()).forEach(
                    (t) => {
                      this.invokeCallback(t, {
                        method: "requestEthereumAccounts",
                        result: [e],
                      });
                    }
                  ),
                  f.accountRequestCallbackIds.clear());
            }),
            (this.resetAndReload = this.resetAndReload.bind(this)),
            (this.linkAPIUrl = e.linkAPIUrl),
            (this.storage = e.storage),
            (this.metadata = e.metadata),
            (this.accountsCallback = e.accountsCallback),
            (this.chainCallback = e.chainCallback);
          let { session: t, ui: r, connection: s } = this.subscribe();
          (this._session = t),
            (this.connection = s),
            (this.relayEventManager = new n.RelayEventManager()),
            (this.ui = r),
            this.ui.attach();
        }
        subscribe() {
          let e =
              a.WalletLinkSession.load(this.storage) ||
              a.WalletLinkSession.create(this.storage),
            { linkAPIUrl: t } = this,
            r = new s.WalletLinkConnection({
              session: e,
              linkAPIUrl: t,
              listener: this,
            }),
            i = this.isMobileWeb
              ? new d.WLMobileRelayUI()
              : new l.WalletLinkRelayUI();
          return r.connect(), { session: e, ui: i, connection: r };
        }
        resetAndReload() {
          this.connection
            .destroy()
            .then(() => {
              let e = a.WalletLinkSession.load(this.storage);
              (null == e ? void 0 : e.id) === this._session.id &&
                u.ScopedLocalStorage.clearAll(),
                document.location.reload();
            })
            .catch((e) => {});
        }
        signEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: (0, p.bigIntStringFromBigInt)(e.weiValue),
              data: (0, p.hexStringFromBuffer)(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei
                ? (0, p.bigIntStringFromBigInt)(e.gasPriceInWei)
                : null,
              maxFeePerGas: e.gasPriceInWei
                ? (0, p.bigIntStringFromBigInt)(e.gasPriceInWei)
                : null,
              maxPriorityFeePerGas: e.gasPriceInWei
                ? (0, p.bigIntStringFromBigInt)(e.gasPriceInWei)
                : null,
              gasLimit: e.gasLimit
                ? (0, p.bigIntStringFromBigInt)(e.gasLimit)
                : null,
              chainId: e.chainId,
              shouldSubmit: !1,
            },
          });
        }
        signAndSubmitEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: (0, p.bigIntStringFromBigInt)(e.weiValue),
              data: (0, p.hexStringFromBuffer)(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei
                ? (0, p.bigIntStringFromBigInt)(e.gasPriceInWei)
                : null,
              maxFeePerGas: e.maxFeePerGas
                ? (0, p.bigIntStringFromBigInt)(e.maxFeePerGas)
                : null,
              maxPriorityFeePerGas: e.maxPriorityFeePerGas
                ? (0, p.bigIntStringFromBigInt)(e.maxPriorityFeePerGas)
                : null,
              gasLimit: e.gasLimit
                ? (0, p.bigIntStringFromBigInt)(e.gasLimit)
                : null,
              chainId: e.chainId,
              shouldSubmit: !0,
            },
          });
        }
        submitEthereumTransaction(e, t) {
          return this.sendRequest({
            method: "submitEthereumTransaction",
            params: {
              signedTransaction: (0, p.hexStringFromBuffer)(e, !0),
              chainId: t,
            },
          });
        }
        getWalletLinkSession() {
          return this._session;
        }
        sendRequest(e) {
          let t = null,
            r = (0, p.randomBytesHex)(8),
            s = (s) => {
              this.publishWeb3RequestCanceledEvent(r),
                this.handleErrorResponse(r, e.method, s),
                null == t || t();
            };
          return new Promise((i, n) => {
            (t = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: s,
              onResetConnection: this.resetAndReload,
            })),
              this.relayEventManager.callbacks.set(r, (e) => {
                if ((null == t || t(), (0, o.isErrorResponse)(e)))
                  return n(Error(e.errorMessage));
                i(e);
              }),
              this.publishWeb3RequestEvent(r, e);
          });
        }
        publishWeb3RequestEvent(e, t) {
          let r = { type: "WEB3_REQUEST", id: e, request: t };
          this.publishEvent("Web3Request", r, !0)
            .then((e) => {})
            .catch((e) => {
              this.handleWeb3ResponseMessage(r.id, {
                method: t.method,
                errorMessage: e.message,
              });
            }),
            this.isMobileWeb && this.openCoinbaseWalletDeeplink(t.method);
        }
        openCoinbaseWalletDeeplink(e) {
          if (this.ui instanceof d.WLMobileRelayUI)
            switch (e) {
              case "requestEthereumAccounts":
              case "switchEthereumChain":
                return;
              default:
                window.addEventListener(
                  "blur",
                  () => {
                    window.addEventListener(
                      "focus",
                      () => {
                        this.connection.checkUnseenEvents();
                      },
                      { once: !0 }
                    );
                  },
                  { once: !0 }
                ),
                  this.ui.openCoinbaseWalletDeeplink();
            }
        }
        publishWeb3RequestCanceledEvent(e) {
          this.publishEvent(
            "Web3RequestCanceled",
            { type: "WEB3_REQUEST_CANCELED", id: e },
            !1
          ).then();
        }
        publishEvent(e, t, r) {
          return this.connection.publishEvent(e, t, r);
        }
        handleWeb3ResponseMessage(e, t) {
          if ("requestEthereumAccounts" === t.method) {
            f.accountRequestCallbackIds.forEach((e) =>
              this.invokeCallback(e, t)
            ),
              f.accountRequestCallbackIds.clear();
            return;
          }
          this.invokeCallback(e, t);
        }
        handleErrorResponse(e, t, r) {
          var s;
          let i =
            null !== (s = null == r ? void 0 : r.message) && void 0 !== s
              ? s
              : "Unspecified error message.";
          this.handleWeb3ResponseMessage(e, { method: t, errorMessage: i });
        }
        invokeCallback(e, t) {
          let r = this.relayEventManager.callbacks.get(e);
          r && (r(t), this.relayEventManager.callbacks.delete(e));
        }
        requestEthereumAccounts() {
          let { appName: e, appLogoUrl: t } = this.metadata,
            r = {
              method: "requestEthereumAccounts",
              params: { appName: e, appLogoUrl: t },
            },
            s = (0, p.randomBytesHex)(8);
          return new Promise((e, t) => {
            this.relayEventManager.callbacks.set(s, (r) => {
              if ((0, o.isErrorResponse)(r)) return t(Error(r.errorMessage));
              e(r);
            }),
              f.accountRequestCallbackIds.add(s),
              this.publishWeb3RequestEvent(s, r);
          });
        }
        watchAsset(e, t, r, s, i, n) {
          let a = {
              method: "watchAsset",
              params: {
                type: e,
                options: { address: t, symbol: r, decimals: s, image: i },
                chainId: n,
              },
            },
            c = null,
            l = (0, p.randomBytesHex)(8);
          return (
            (c = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(l),
                  this.handleErrorResponse(l, a.method, e),
                  null == c || c();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(l, (r) => {
                if ((null == c || c(), (0, o.isErrorResponse)(r)))
                  return t(Error(r.errorMessage));
                e(r);
              }),
                this.publishWeb3RequestEvent(l, a);
            })
          );
        }
        addEthereumChain(e, t, r, s, i, n) {
          let a = {
              method: "addEthereumChain",
              params: {
                chainId: e,
                rpcUrls: t,
                blockExplorerUrls: s,
                chainName: i,
                iconUrls: r,
                nativeCurrency: n,
              },
            },
            c = null,
            l = (0, p.randomBytesHex)(8);
          return (
            (c = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(l),
                  this.handleErrorResponse(l, a.method, e),
                  null == c || c();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(l, (r) => {
                if ((null == c || c(), (0, o.isErrorResponse)(r)))
                  return t(Error(r.errorMessage));
                e(r);
              }),
                this.publishWeb3RequestEvent(l, a);
            })
          );
        }
        switchEthereumChain(e, t) {
          let r = {
              method: "switchEthereumChain",
              params: Object.assign({ chainId: e }, { address: t }),
            },
            s = null,
            i = (0, p.randomBytesHex)(8);
          return (
            (s = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(i),
                  this.handleErrorResponse(i, r.method, e),
                  null == s || s();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(i, (r) =>
                (null == s || s(), (0, o.isErrorResponse)(r) && r.errorCode)
                  ? t(
                      h.standardErrors.provider.custom({
                        code: r.errorCode,
                        message:
                          "Unrecognized chain ID. Try adding the chain using addEthereumChain first.",
                      })
                    )
                  : (0, o.isErrorResponse)(r)
                  ? t(Error(r.errorMessage))
                  : void e(r)
              ),
                this.publishWeb3RequestEvent(i, r);
            })
          );
        }
      }
      (t.WalletLinkRelay = f), (f.accountRequestCallbackIds = new Set());
    },
    93007: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WalletLinkCipher = void 0);
      let s = r(98997);
      class i {
        constructor(e) {
          this.secret = e;
        }
        async encrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          let r = crypto.getRandomValues(new Uint8Array(12)),
            i = await crypto.subtle.importKey(
              "raw",
              (0, s.hexStringToUint8Array)(t),
              { name: "aes-gcm" },
              !1,
              ["encrypt", "decrypt"]
            ),
            n = new TextEncoder(),
            a = await window.crypto.subtle.encrypt(
              { name: "AES-GCM", iv: r },
              i,
              n.encode(e)
            ),
            o = a.slice(a.byteLength - 16),
            c = a.slice(0, a.byteLength - 16),
            l = new Uint8Array(o),
            d = new Uint8Array(c),
            h = new Uint8Array([...r, ...l, ...d]);
          return (0, s.uint8ArrayToHex)(h);
        }
        async decrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          return new Promise((r, i) => {
            !(async function () {
              let n = await crypto.subtle.importKey(
                  "raw",
                  (0, s.hexStringToUint8Array)(t),
                  { name: "aes-gcm" },
                  !1,
                  ["encrypt", "decrypt"]
                ),
                a = (0, s.hexStringToUint8Array)(e),
                o = a.slice(0, 12),
                c = a.slice(12, 28),
                l = new Uint8Array([...a.slice(28), ...c]),
                d = { name: "AES-GCM", iv: new Uint8Array(o) };
              try {
                let e = await window.crypto.subtle.decrypt(d, n, l),
                  t = new TextDecoder();
                r(t.decode(e));
              } catch (e) {
                i(e);
              }
            })();
          });
        }
      }
      t.WalletLinkCipher = i;
    },
    32485: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WalletLinkConnection = void 0);
      let s = r(56663),
        i = r(93007),
        n = r(99085),
        a = r(77730),
        o = r(34468);
      class c {
        constructor({ session: e, linkAPIUrl: t, listener: r }) {
          (this.destroyed = !1),
            (this.lastHeartbeatResponse = 0),
            (this.nextReqId = (0, o.IntNumber)(1)),
            (this._connected = !1),
            (this._linked = !1),
            (this.shouldFetchUnseenEventsOnConnect = !1),
            (this.requestResolutions = new Map()),
            (this.handleSessionMetadataUpdated = (e) => {
              e &&
                new Map([
                  ["__destroyed", this.handleDestroyed],
                  ["EthereumAddress", this.handleAccountUpdated],
                  ["WalletUsername", this.handleWalletUsernameUpdated],
                  ["AppVersion", this.handleAppVersionUpdated],
                  [
                    "ChainId",
                    (t) =>
                      e.JsonRpcUrl && this.handleChainUpdated(t, e.JsonRpcUrl),
                  ],
                ]).forEach((t, r) => {
                  let s = e[r];
                  void 0 !== s && t(s);
                });
            }),
            (this.handleDestroyed = (e) => {
              var t;
              "1" === e &&
                (null === (t = this.listener) ||
                  void 0 === t ||
                  t.resetAndReload());
            }),
            (this.handleAccountUpdated = async (e) => {
              var t;
              let r = await this.cipher.decrypt(e);
              null === (t = this.listener) ||
                void 0 === t ||
                t.accountUpdated(r);
            }),
            (this.handleMetadataUpdated = async (e, t) => {
              var r;
              let s = await this.cipher.decrypt(t);
              null === (r = this.listener) ||
                void 0 === r ||
                r.metadataUpdated(e, s);
            }),
            (this.handleWalletUsernameUpdated = async (e) => {
              this.handleMetadataUpdated(s.WALLET_USER_NAME_KEY, e);
            }),
            (this.handleAppVersionUpdated = async (e) => {
              this.handleMetadataUpdated(s.APP_VERSION_KEY, e);
            }),
            (this.handleChainUpdated = async (e, t) => {
              var r;
              let s = await this.cipher.decrypt(e),
                i = await this.cipher.decrypt(t);
              null === (r = this.listener) ||
                void 0 === r ||
                r.chainUpdated(s, i);
            }),
            (this.session = e),
            (this.cipher = new i.WalletLinkCipher(e.secret)),
            (this.listener = r);
          let c = new a.WalletLinkWebSocket(`${t}/rpc`, WebSocket);
          c.setConnectionStateListener(async (e) => {
            let t = !1;
            switch (e) {
              case a.ConnectionState.DISCONNECTED:
                if (!this.destroyed) {
                  let e = async () => {
                    await new Promise((e) => setTimeout(e, 5e3)),
                      this.destroyed ||
                        c.connect().catch(() => {
                          e();
                        });
                  };
                  e();
                }
                break;
              case a.ConnectionState.CONNECTED:
                (t = await this.handleConnected()),
                  this.updateLastHeartbeat(),
                  setInterval(() => {
                    this.heartbeat();
                  }, 1e4),
                  this.shouldFetchUnseenEventsOnConnect &&
                    this.fetchUnseenEventsAPI();
              case a.ConnectionState.CONNECTING:
            }
            this.connected !== t && (this.connected = t);
          }),
            c.setIncomingDataListener((e) => {
              var t;
              switch (e.type) {
                case "Heartbeat":
                  this.updateLastHeartbeat();
                  return;
                case "IsLinkedOK":
                case "Linked": {
                  let t = "IsLinkedOK" === e.type ? e.linked : void 0;
                  this.linked = t || e.onlineGuests > 0;
                  break;
                }
                case "GetSessionConfigOK":
                case "SessionConfigUpdated":
                  this.handleSessionMetadataUpdated(e.metadata);
                  break;
                case "Event":
                  this.handleIncomingEvent(e);
              }
              void 0 !== e.id &&
                (null === (t = this.requestResolutions.get(e.id)) ||
                  void 0 === t ||
                  t(e));
            }),
            (this.ws = c),
            (this.http = new n.WalletLinkHTTP(t, e.id, e.key));
        }
        connect() {
          if (this.destroyed) throw Error("instance is destroyed");
          this.ws.connect();
        }
        async destroy() {
          this.destroyed ||
            (await this.makeRequest(
              {
                type: "SetSessionConfig",
                id: (0, o.IntNumber)(this.nextReqId++),
                sessionId: this.session.id,
                metadata: { __destroyed: "1" },
              },
              { timeout: 1e3 }
            ),
            (this.destroyed = !0),
            this.ws.disconnect(),
            (this.listener = void 0));
        }
        get connected() {
          return this._connected;
        }
        set connected(e) {
          this._connected = e;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          var t, r;
          (this._linked = e),
            e &&
              (null === (t = this.onceLinked) || void 0 === t || t.call(this)),
            null === (r = this.listener) || void 0 === r || r.linkedUpdated(e);
        }
        setOnceLinked(e) {
          return new Promise((t) => {
            this.linked
              ? e().then(t)
              : (this.onceLinked = () => {
                  e().then(t), (this.onceLinked = void 0);
                });
          });
        }
        async handleIncomingEvent(e) {
          var t;
          if ("Event" !== e.type || "Web3Response" !== e.event) return;
          let r = JSON.parse(await this.cipher.decrypt(e.data));
          if ("WEB3_RESPONSE" !== r.type) return;
          let { id: s, response: i } = r;
          null === (t = this.listener) ||
            void 0 === t ||
            t.handleWeb3ResponseMessage(s, i);
        }
        async checkUnseenEvents() {
          if (!this.connected) {
            this.shouldFetchUnseenEventsOnConnect = !0;
            return;
          }
          await new Promise((e) => setTimeout(e, 250));
          try {
            await this.fetchUnseenEventsAPI();
          } catch (e) {
            console.error("Unable to check for unseen events", e);
          }
        }
        async fetchUnseenEventsAPI() {
          (this.shouldFetchUnseenEventsOnConnect = !1),
            (await this.http.fetchUnseenEvents()).forEach((e) =>
              this.handleIncomingEvent(e)
            );
        }
        async publishEvent(e, t, r = !1) {
          let s = await this.cipher.encrypt(
              JSON.stringify(
                Object.assign(Object.assign({}, t), {
                  origin: location.origin,
                  relaySource:
                    "coinbaseWalletExtension" in window &&
                    window.coinbaseWalletExtension
                      ? "injected_sdk"
                      : "sdk",
                })
              )
            ),
            i = {
              type: "PublishEvent",
              id: (0, o.IntNumber)(this.nextReqId++),
              sessionId: this.session.id,
              event: e,
              data: s,
              callWebhook: r,
            };
          return this.setOnceLinked(async () => {
            let e = await this.makeRequest(i);
            if ("Fail" === e.type)
              throw Error(e.error || "failed to publish event");
            return e.eventId;
          });
        }
        sendData(e) {
          this.ws.sendData(JSON.stringify(e));
        }
        updateLastHeartbeat() {
          this.lastHeartbeatResponse = Date.now();
        }
        heartbeat() {
          if (Date.now() - this.lastHeartbeatResponse > 2e4) {
            this.ws.disconnect();
            return;
          }
          try {
            this.ws.sendData("h");
          } catch (e) {}
        }
        async makeRequest(e, t = { timeout: 6e4 }) {
          let r;
          let s = e.id;
          return (
            this.sendData(e),
            Promise.race([
              new Promise((e, i) => {
                r = window.setTimeout(() => {
                  i(Error(`request ${s} timed out`));
                }, t.timeout);
              }),
              new Promise((e) => {
                this.requestResolutions.set(s, (t) => {
                  clearTimeout(r), e(t), this.requestResolutions.delete(s);
                });
              }),
            ])
          );
        }
        async handleConnected() {
          return (
            "Fail" !==
              (
                await this.makeRequest({
                  type: "HostSession",
                  id: (0, o.IntNumber)(this.nextReqId++),
                  sessionId: this.session.id,
                  sessionKey: this.session.key,
                })
              ).type &&
            (this.sendData({
              type: "IsLinked",
              id: (0, o.IntNumber)(this.nextReqId++),
              sessionId: this.session.id,
            }),
            this.sendData({
              type: "GetSessionConfig",
              id: (0, o.IntNumber)(this.nextReqId++),
              sessionId: this.session.id,
            }),
            !0)
          );
        }
      }
      t.WalletLinkConnection = c;
    },
    99085: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WalletLinkHTTP = void 0);
      class r {
        constructor(e, t, r) {
          (this.linkAPIUrl = e), (this.sessionId = t);
          let s = `${t}:${r}`;
          this.auth = `Basic ${btoa(s)}`;
        }
        async markUnseenEventsAsSeen(e) {
          return Promise.all(
            e.map((e) =>
              fetch(`${this.linkAPIUrl}/events/${e.eventId}/seen`, {
                method: "POST",
                headers: { Authorization: this.auth },
              })
            )
          ).catch((e) => console.error("Unabled to mark event as failed:", e));
        }
        async fetchUnseenEvents() {
          var e;
          let t = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
            headers: { Authorization: this.auth },
          });
          if (t.ok) {
            let { events: r, error: s } = await t.json();
            if (s) throw Error(`Check unseen events failed: ${s}`);
            let i =
              null !==
                (e =
                  null == r
                    ? void 0
                    : r
                        .filter((e) => "Web3Response" === e.event)
                        .map((e) => ({
                          type: "Event",
                          sessionId: this.sessionId,
                          eventId: e.id,
                          event: e.event,
                          data: e.data,
                        }))) && void 0 !== e
                ? e
                : [];
            return this.markUnseenEventsAsSeen(i), i;
          }
          throw Error(`Check unseen events failed: ${t.status}`);
        }
      }
      t.WalletLinkHTTP = r;
    },
    77730: (e, t) => {
      "use strict";
      var r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WalletLinkWebSocket = t.ConnectionState = void 0),
        (function (e) {
          (e[(e.DISCONNECTED = 0)] = "DISCONNECTED"),
            (e[(e.CONNECTING = 1)] = "CONNECTING"),
            (e[(e.CONNECTED = 2)] = "CONNECTED");
        })(r || (t.ConnectionState = r = {}));
      class s {
        setConnectionStateListener(e) {
          this.connectionStateListener = e;
        }
        setIncomingDataListener(e) {
          this.incomingDataListener = e;
        }
        constructor(e, t = WebSocket) {
          (this.WebSocketClass = t),
            (this.webSocket = null),
            (this.pendingData = []),
            (this.url = e.replace(/^http/, "ws"));
        }
        async connect() {
          if (this.webSocket) throw Error("webSocket object is not null");
          return new Promise((e, t) => {
            var s;
            let i;
            try {
              this.webSocket = i = new this.WebSocketClass(this.url);
            } catch (e) {
              t(e);
              return;
            }
            null === (s = this.connectionStateListener) ||
              void 0 === s ||
              s.call(this, r.CONNECTING),
              (i.onclose = (e) => {
                var s;
                this.clearWebSocket(),
                  t(Error(`websocket error ${e.code}: ${e.reason}`)),
                  null === (s = this.connectionStateListener) ||
                    void 0 === s ||
                    s.call(this, r.DISCONNECTED);
              }),
              (i.onopen = (t) => {
                var s;
                e(),
                  null === (s = this.connectionStateListener) ||
                    void 0 === s ||
                    s.call(this, r.CONNECTED),
                  this.pendingData.length > 0 &&
                    ([...this.pendingData].forEach((e) => this.sendData(e)),
                    (this.pendingData = []));
              }),
              (i.onmessage = (e) => {
                var t, r;
                if ("h" === e.data)
                  null === (t = this.incomingDataListener) ||
                    void 0 === t ||
                    t.call(this, { type: "Heartbeat" });
                else
                  try {
                    let t = JSON.parse(e.data);
                    null === (r = this.incomingDataListener) ||
                      void 0 === r ||
                      r.call(this, t);
                  } catch (e) {}
              });
          });
        }
        disconnect() {
          var e;
          let { webSocket: t } = this;
          if (t) {
            this.clearWebSocket(),
              null === (e = this.connectionStateListener) ||
                void 0 === e ||
                e.call(this, r.DISCONNECTED),
              (this.connectionStateListener = void 0),
              (this.incomingDataListener = void 0);
            try {
              t.close();
            } catch (e) {}
          }
        }
        sendData(e) {
          let { webSocket: t } = this;
          if (!t) {
            this.pendingData.push(e), this.connect();
            return;
          }
          t.send(e);
        }
        clearWebSocket() {
          let { webSocket: e } = this;
          e &&
            ((this.webSocket = null),
            (e.onclose = null),
            (e.onerror = null),
            (e.onmessage = null),
            (e.onopen = null));
        }
      }
      t.WalletLinkWebSocket = s;
    },
    56663: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.APP_VERSION_KEY =
          t.LOCAL_STORAGE_ADDRESSES_KEY =
          t.WALLET_USER_NAME_KEY =
            void 0),
        (t.WALLET_USER_NAME_KEY = "walletUsername"),
        (t.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses"),
        (t.APP_VERSION_KEY = "AppVersion");
    },
    42922: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WalletLinkSession = void 0);
      let s = r(44212),
        i = r(85758),
        n = r(98997),
        a = "session:id",
        o = "session:secret",
        c = "session:linked";
      class l {
        constructor(e, t, r, n = !1) {
          (this.storage = e),
            (this.id = t),
            (this.secret = r),
            (this.key = (0, i.bytesToHex)(
              (0, s.sha256)(`${t}, ${r} WalletLink`)
            )),
            (this._linked = !!n);
        }
        static create(e) {
          return new l(
            e,
            (0, n.randomBytesHex)(16),
            (0, n.randomBytesHex)(32)
          ).save();
        }
        static load(e) {
          let t = e.getItem(a),
            r = e.getItem(c),
            s = e.getItem(o);
          return t && s ? new l(e, t, s, "1" === r) : null;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          (this._linked = e), this.persistLinked();
        }
        save() {
          return (
            this.storage.setItem(a, this.id),
            this.storage.setItem(o, this.secret),
            this.persistLinked(),
            this
          );
        }
        persistLinked() {
          this.storage.setItem(c, this._linked ? "1" : "0");
        }
      }
      t.WalletLinkSession = l;
    },
    83705: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isErrorResponse = function (e) {
          return void 0 !== e.errorMessage;
        });
    },
    78826: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WLMobileRelayUI = void 0);
      let s = r(43986),
        i = r(44412),
        n = r(99285);
      class a {
        constructor() {
          (this.attached = !1), (this.redirectDialog = new s.RedirectDialog());
        }
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          this.redirectDialog.attach(), (this.attached = !0);
        }
        redirectToCoinbaseWallet(e) {
          let t = new URL(n.CBW_MOBILE_DEEPLINK_URL);
          t.searchParams.append("redirect_url", (0, i.getLocation)().href),
            e && t.searchParams.append("wl_url", e);
          let r = document.createElement("a");
          (r.target = "cbw-opener"),
            (r.href = t.href),
            (r.rel = "noreferrer noopener"),
            r.click();
        }
        openCoinbaseWalletDeeplink(e) {
          this.redirectDialog.present({
            title: "Redirecting to Coinbase Wallet...",
            buttonText: "Open",
            onButtonClick: () => {
              this.redirectToCoinbaseWallet(e);
            },
          }),
            setTimeout(() => {
              this.redirectToCoinbaseWallet(e);
            }, 99);
        }
        showConnecting(e) {
          return () => {
            this.redirectDialog.clear();
          };
        }
      }
      t.WLMobileRelayUI = a;
    },
    34614: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WalletLinkRelayUI = void 0);
      let s = r(69573),
        i = r(91989);
      class n {
        constructor() {
          (this.attached = !1), (this.snackbar = new i.Snackbar());
        }
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          let e = document.documentElement,
            t = document.createElement("div");
          (t.className = "-cbwsdk-css-reset"),
            e.appendChild(t),
            this.snackbar.attach(t),
            (this.attached = !0),
            (0, s.injectCssReset)();
        }
        showConnecting(e) {
          let t;
          return (
            (t = e.isUnlinkedErrorState
              ? {
                  autoExpand: !0,
                  message: "Connection lost",
                  menuItems: [
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }
              : {
                  message: "Confirm on phone",
                  menuItems: [
                    {
                      isRed: !0,
                      info: "Cancel transaction",
                      svgWidth: "11",
                      svgHeight: "11",
                      path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                      defaultFillRule: "inherit",
                      defaultClipRule: "inherit",
                      onClick: e.onCancel,
                    },
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }),
            this.snackbar.presentItem(t)
          );
        }
      }
      t.WalletLinkRelayUI = n;
    },
    7568: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default =
          ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}");
    },
    43986: function (e, t, r) {
      "use strict";
      var s =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RedirectDialog = void 0);
      let i = s(r(25796)),
        n = r(57764),
        a = r(69573),
        o = r(91989),
        c = r(44412),
        l = s(r(7568));
      class d {
        constructor() {
          (this.root = null), (this.darkMode = (0, c.isDarkMode)());
        }
        attach() {
          let e = document.documentElement;
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-css-reset"),
            e.appendChild(this.root),
            (0, a.injectCssReset)();
        }
        present(e) {
          this.render(e);
        }
        clear() {
          this.render(null);
        }
        render(e) {
          this.root &&
            ((0, n.render)(null, this.root),
            e &&
              (0, n.render)(
                (0, n.h)(
                  h,
                  Object.assign({}, e, {
                    onDismiss: () => {
                      this.clear();
                    },
                    darkMode: this.darkMode,
                  })
                ),
                this.root
              ));
        }
      }
      t.RedirectDialog = d;
      let h = ({
        title: e,
        buttonText: t,
        darkMode: r,
        onButtonClick: s,
        onDismiss: a,
      }) =>
        (0, n.h)(
          o.SnackbarContainer,
          { darkMode: r },
          (0, n.h)(
            "div",
            { class: "-cbwsdk-redirect-dialog" },
            (0, n.h)("style", null, l.default),
            (0, n.h)("div", {
              class: "-cbwsdk-redirect-dialog-backdrop",
              onClick: a,
            }),
            (0, n.h)(
              "div",
              {
                class: (0, i.default)(
                  "-cbwsdk-redirect-dialog-box",
                  r ? "dark" : "light"
                ),
              },
              (0, n.h)("p", null, e),
              (0, n.h)("button", { onClick: s }, t)
            )
          )
        );
    },
    91931: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default =
          ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}");
    },
    91989: function (e, t, r) {
      "use strict";
      var s =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SnackbarInstance = t.SnackbarContainer = t.Snackbar = void 0);
      let i = s(r(25796)),
        n = r(57764),
        a = r(83148),
        o = r(44412),
        c = s(r(91931));
      class l {
        constructor() {
          (this.items = new Map()),
            (this.nextItemKey = 0),
            (this.root = null),
            (this.darkMode = (0, o.isDarkMode)());
        }
        attach(e) {
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-snackbar-root"),
            e.appendChild(this.root),
            this.render();
        }
        presentItem(e) {
          let t = this.nextItemKey++;
          return (
            this.items.set(t, e),
            this.render(),
            () => {
              this.items.delete(t), this.render();
            }
          );
        }
        clear() {
          this.items.clear(), this.render();
        }
        render() {
          this.root &&
            (0, n.render)(
              (0, n.h)(
                "div",
                null,
                (0, n.h)(
                  t.SnackbarContainer,
                  { darkMode: this.darkMode },
                  Array.from(this.items.entries()).map(([e, r]) =>
                    (0, n.h)(
                      t.SnackbarInstance,
                      Object.assign({}, r, { key: e })
                    )
                  )
                )
              ),
              this.root
            );
        }
      }
      (t.Snackbar = l),
        (t.SnackbarContainer = (e) =>
          (0, n.h)(
            "div",
            { class: (0, i.default)("-cbwsdk-snackbar-container") },
            (0, n.h)("style", null, c.default),
            (0, n.h)("div", { class: "-cbwsdk-snackbar" }, e.children)
          )),
        (t.SnackbarInstance = ({ autoExpand: e, message: t, menuItems: r }) => {
          let [s, o] = (0, a.useState)(!0),
            [c, l] = (0, a.useState)(null != e && e);
          return (
            (0, a.useEffect)(() => {
              let e = [
                window.setTimeout(() => {
                  o(!1);
                }, 1),
                window.setTimeout(() => {
                  l(!0);
                }, 1e4),
              ];
              return () => {
                e.forEach(window.clearTimeout);
              };
            }),
            (0, n.h)(
              "div",
              {
                class: (0, i.default)(
                  "-cbwsdk-snackbar-instance",
                  s && "-cbwsdk-snackbar-instance-hidden",
                  c && "-cbwsdk-snackbar-instance-expanded"
                ),
              },
              (0, n.h)(
                "div",
                {
                  class: "-cbwsdk-snackbar-instance-header",
                  onClick: () => {
                    l(!c);
                  },
                },
                (0, n.h)("img", {
                  src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                  class: "-cbwsdk-snackbar-instance-header-cblogo",
                }),
                " ",
                (0, n.h)(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-header-message" },
                  t
                ),
                (0, n.h)(
                  "div",
                  { class: "-gear-container" },
                  !c &&
                    (0, n.h)(
                      "svg",
                      {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      (0, n.h)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "12",
                        fill: "#F5F7F8",
                      })
                    ),
                  (0, n.h)("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                    class: "-gear-icon",
                    title: "Expand",
                  })
                )
              ),
              r &&
                r.length > 0 &&
                (0, n.h)(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-menu" },
                  r.map((e, t) =>
                    (0, n.h)(
                      "div",
                      {
                        class: (0, i.default)(
                          "-cbwsdk-snackbar-instance-menu-item",
                          e.isRed &&
                            "-cbwsdk-snackbar-instance-menu-item-is-red"
                        ),
                        onClick: e.onClick,
                        key: t,
                      },
                      (0, n.h)(
                        "svg",
                        {
                          width: e.svgWidth,
                          height: e.svgHeight,
                          viewBox: "0 0 10 11",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        (0, n.h)("path", {
                          "fill-rule": e.defaultFillRule,
                          "clip-rule": e.defaultClipRule,
                          d: e.path,
                          fill: "#AAAAAA",
                        })
                      ),
                      (0, n.h)(
                        "span",
                        {
                          class: (0, i.default)(
                            "-cbwsdk-snackbar-instance-menu-item-info",
                            e.isRed &&
                              "-cbwsdk-snackbar-instance-menu-item-info-is-red"
                          ),
                        },
                        e.info
                      )
                    )
                  )
                )
            )
          );
        });
    },
    4316: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default =
          '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}');
    },
    69573: function (e, t, r) {
      "use strict";
      var s =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.injectCssReset = function () {
          let e = document.createElement("style");
          (e.type = "text/css"),
            e.appendChild(document.createTextNode(i.default)),
            document.documentElement.appendChild(e);
        });
      let i = s(r(4316));
    },
    44412: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createQrUrl = function (e, t, r, s, i, n) {
          let a = new URLSearchParams({
            [s ? "parent-id" : "id"]: e,
            secret: t,
            server: r,
            v: i,
            chainId: n.toString(),
          }).toString();
          return `${r}/#/link?${a}`;
        }),
        (t.getLocation = function () {
          try {
            if (
              (function () {
                try {
                  return null !== window.frameElement;
                } catch (e) {
                  return !1;
                }
              })() &&
              window.top
            )
              return window.top.location;
            return window.location;
          } catch (e) {
            return window.location;
          }
        }),
        (t.isMobileWeb = function () {
          var e;
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            null === (e = null == window ? void 0 : window.navigator) ||
              void 0 === e
              ? void 0
              : e.userAgent
          );
        }),
        (t.isDarkMode = function () {
          var e, t;
          return (
            null !==
              (t =
                null === (e = null == window ? void 0 : window.matchMedia) ||
                void 0 === e
                  ? void 0
                  : e.call(window, "(prefers-color-scheme: dark)").matches) &&
            void 0 !== t &&
            t
          );
        });
    },
    89665: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.generateKeyPair = i),
        (t.deriveSharedSecret = n),
        (t.encrypt = a),
        (t.decrypt = o),
        (t.exportKeyToHexString = l),
        (t.importKeyFromHexString = d),
        (t.encryptContent = h),
        (t.decryptContent = u);
      let s = r(98997);
      async function i() {
        return crypto.subtle.generateKey(
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          ["deriveKey"]
        );
      }
      async function n(e, t) {
        return crypto.subtle.deriveKey(
          { name: "ECDH", public: t },
          e,
          { name: "AES-GCM", length: 256 },
          !1,
          ["encrypt", "decrypt"]
        );
      }
      async function a(e, t) {
        let r = crypto.getRandomValues(new Uint8Array(12)),
          s = await crypto.subtle.encrypt(
            { name: "AES-GCM", iv: r },
            e,
            new TextEncoder().encode(t)
          );
        return { iv: r, cipherText: s };
      }
      async function o(e, { iv: t, cipherText: r }) {
        let s = await crypto.subtle.decrypt({ name: "AES-GCM", iv: t }, e, r);
        return new TextDecoder().decode(s);
      }
      function c(e) {
        switch (e) {
          case "public":
            return "spki";
          case "private":
            return "pkcs8";
        }
      }
      async function l(e, t) {
        let r = c(e),
          i = await crypto.subtle.exportKey(r, t);
        return (0, s.uint8ArrayToHex)(new Uint8Array(i));
      }
      async function d(e, t) {
        let r = c(e),
          i = (0, s.hexStringToUint8Array)(t).buffer;
        return await crypto.subtle.importKey(
          r,
          i,
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          "private" === e ? ["deriveKey"] : []
        );
      }
      async function h(e, t) {
        return a(
          t,
          JSON.stringify(e, (e, t) =>
            t instanceof Error
              ? Object.assign(
                  Object.assign({}, t.code ? { code: t.code } : {}),
                  { message: t.message }
                )
              : t
          )
        );
      }
      async function u(e, t) {
        return JSON.parse(await o(t, e));
      }
    },
    66320: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.fetchRPCRequest = n),
        (t.getCoinbaseInjectedProvider = function ({
          metadata: e,
          preference: t,
        }) {
          var r;
          if ("smartWalletOnly" !== t.options) {
            let t = globalThis.coinbaseWalletExtension;
            if (t) {
              let { appName: s, appLogoUrl: i, appChainIds: n } = e;
              return (
                null === (r = t.setAppInfo) ||
                  void 0 === r ||
                  r.call(t, s, i, n),
                t
              );
            }
          }
          let s = (function () {
            var e, t;
            try {
              let r = globalThis;
              return null !== (e = r.ethereum) && void 0 !== e
                ? e
                : null === (t = r.top) || void 0 === t
                ? void 0
                : t.ethereum;
            } catch (e) {
              return;
            }
          })();
          if (null == s ? void 0 : s.isCoinbaseBrowser) return s;
        }),
        (t.checkErrorForInvalidRequestArgs = function (e) {
          if (!e || "object" != typeof e || Array.isArray(e))
            throw i.standardErrors.rpc.invalidParams({
              message: "Expected a single, non-array, object argument.",
              data: e,
            });
          let { method: t, params: r } = e;
          if ("string" != typeof t || 0 === t.length)
            throw i.standardErrors.rpc.invalidParams({
              message: "'args.method' must be a non-empty string.",
              data: e,
            });
          if (
            void 0 !== r &&
            !Array.isArray(r) &&
            ("object" != typeof r || null === r)
          )
            throw i.standardErrors.rpc.invalidParams({
              message: "'args.params' must be an object or array if provided.",
              data: e,
            });
          switch (t) {
            case "eth_sign":
            case "eth_signTypedData_v2":
            case "eth_subscribe":
            case "eth_unsubscribe":
              throw i.standardErrors.provider.unsupportedMethod();
          }
        });
      let s = r(54750),
        i = r(39172);
      async function n(e, t) {
        let r = Object.assign(Object.assign({}, e), {
            jsonrpc: "2.0",
            id: crypto.randomUUID(),
          }),
          i = await window.fetch(t, {
            method: "POST",
            body: JSON.stringify(r),
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "X-Cbw-Sdk-Version": s.LIB_VERSION,
            },
          }),
          { result: n, error: a } = await i.json();
        if (a) throw a;
        return n;
      }
    },
    46662: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.openPopup = function (e) {
          let t = (window.innerWidth - 420) / 2 + window.screenX,
            r = (window.innerHeight - 540) / 2 + window.screenY,
            i = window.open(
              e,
              "Smart Wallet",
              `width=420, height=540, left=${t}, top=${r}`
            );
          if ((null == i || i.focus(), !i))
            throw s.standardErrors.rpc.internal("Pop up window failed to open");
          return i;
        }),
        (t.closePopup = function (e) {
          e && !e.closed && e.close();
        });
      let s = r(39172);
    },
    86105: (e, t, r) => {
      var s = r(9109).Buffer;
      let i = r(77114);
      function n(e) {
        if (e.startsWith("int[")) return "int256" + e.slice(3);
        if ("int" === e) return "int256";
        if (e.startsWith("uint[")) return "uint256" + e.slice(4);
        if ("uint" === e) return "uint256";
        if (e.startsWith("fixed[")) return "fixed128x128" + e.slice(5);
        if ("fixed" === e) return "fixed128x128";
        if (e.startsWith("ufixed[")) return "ufixed128x128" + e.slice(6);
        else if ("ufixed" === e) return "ufixed128x128";
        return e;
      }
      function a(e) {
        return parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
      }
      function o(e) {
        var t = /^\D+(\d+)x(\d+)$/.exec(e);
        return [parseInt(t[1], 10), parseInt(t[2], 10)];
      }
      function c(e) {
        var t = e.match(/(.*)\[(.*?)\]$/);
        return t ? ("" === t[2] ? "dynamic" : parseInt(t[2], 10)) : null;
      }
      function l(e) {
        var t = typeof e;
        if ("string" === t || "number" === t) return BigInt(e);
        if ("bigint" === t) return e;
        throw Error("Argument is not a number");
      }
      function d(e, t) {
        if ("address" === e) return d("uint160", l(t));
        if ("bool" === e) return d("uint8", t ? 1 : 0);
        if ("string" === e) return d("bytes", new s(t, "utf8"));
        if ((p = e).lastIndexOf("]") === p.length - 1) {
          if (void 0 === t.length) throw Error("Not an array?");
          if ("dynamic" !== (r = c(e)) && 0 !== r && t.length > r)
            throw Error("Elements exceed array size: " + r);
          for (u in ((h = []),
          (e = e.slice(0, e.lastIndexOf("["))),
          "string" == typeof t && (t = JSON.parse(t)),
          t))
            h.push(d(e, t[u]));
          if ("dynamic" === r) {
            var r,
              n,
              h,
              u,
              p,
              f = d("uint256", t.length);
            h.unshift(f);
          }
          return s.concat(h);
        }
        if ("bytes" === e)
          return (
            (t = new s(t)),
            (h = s.concat([d("uint256", t.length), t])),
            t.length % 32 != 0 &&
              (h = s.concat([h, i.zeros(32 - (t.length % 32))])),
            h
          );
        if (e.startsWith("bytes")) {
          if ((r = a(e)) < 1 || r > 32)
            throw Error("Invalid bytes<N> width: " + r);
          return i.setLengthRight(t, 32);
        } else if (e.startsWith("uint")) {
          if ((r = a(e)) % 8 || r < 8 || r > 256)
            throw Error("Invalid uint<N> width: " + r);
          n = l(t);
          let s = i.bitLengthFromBigInt(n);
          if (s > r)
            throw Error("Supplied uint exceeds width: " + r + " vs " + s);
          if (n < 0) throw Error("Supplied uint is negative");
          return i.bufferBEFromBigInt(n, 32);
        } else if (e.startsWith("int")) {
          if ((r = a(e)) % 8 || r < 8 || r > 256)
            throw Error("Invalid int<N> width: " + r);
          n = l(t);
          let s = i.bitLengthFromBigInt(n);
          if (s > r)
            throw Error("Supplied int exceeds width: " + r + " vs " + s);
          let o = i.twosFromBigInt(n, 256);
          return i.bufferBEFromBigInt(o, 32);
        } else if (e.startsWith("ufixed")) {
          if (((r = o(e)), (n = l(t)) < 0))
            throw Error("Supplied ufixed is negative");
          return d("uint256", n * BigInt(2) ** BigInt(r[1]));
        } else if (e.startsWith("fixed"))
          return (r = o(e)), d("int256", l(t) * BigInt(2) ** BigInt(r[1]));
        throw Error("Unsupported or invalid type: " + e);
      }
      function h(e, t) {
        if (e.length !== t.length)
          throw Error("Number of types are not matching the values");
        for (var r, o, c = [], d = 0; d < e.length; d++) {
          var h = n(e[d]),
            u = t[d];
          if ("bytes" === h) c.push(u);
          else if ("string" === h) c.push(new s(u, "utf8"));
          else if ("bool" === h) c.push(new s(u ? "01" : "00", "hex"));
          else if ("address" === h) c.push(i.setLength(u, 20));
          else if (h.startsWith("bytes")) {
            if ((r = a(h)) < 1 || r > 32)
              throw Error("Invalid bytes<N> width: " + r);
            c.push(i.setLengthRight(u, r));
          } else if (h.startsWith("uint")) {
            if ((r = a(h)) % 8 || r < 8 || r > 256)
              throw Error("Invalid uint<N> width: " + r);
            o = l(u);
            let e = i.bitLengthFromBigInt(o);
            if (e > r)
              throw Error("Supplied uint exceeds width: " + r + " vs " + e);
            c.push(i.bufferBEFromBigInt(o, r / 8));
          } else if (h.startsWith("int")) {
            if ((r = a(h)) % 8 || r < 8 || r > 256)
              throw Error("Invalid int<N> width: " + r);
            o = l(u);
            let e = i.bitLengthFromBigInt(o);
            if (e > r)
              throw Error("Supplied int exceeds width: " + r + " vs " + e);
            let t = i.twosFromBigInt(o, r);
            c.push(i.bufferBEFromBigInt(t, r / 8));
          } else throw Error("Unsupported or invalid type: " + h);
        }
        return s.concat(c);
      }
      e.exports = {
        rawEncode: function (e, t) {
          var r = [],
            i = [],
            a = 32 * e.length;
          for (var o in e) {
            var l = n(e[o]),
              h = d(l, t[o]);
            "string" === l || "bytes" === l || "dynamic" === c(l)
              ? (r.push(d("uint256", a)), i.push(h), (a += h.length))
              : r.push(h);
          }
          return s.concat(r.concat(i));
        },
        solidityPack: h,
        soliditySHA3: function (e, t) {
          return i.keccak(h(e, t));
        },
      };
    },
    80745: (e, t, r) => {
      var s = r(9109).Buffer;
      let i = r(77114),
        n = r(86105),
        a = {
          type: "object",
          properties: {
            types: {
              type: "object",
              additionalProperties: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    type: { type: "string" },
                  },
                  required: ["name", "type"],
                },
              },
            },
            primaryType: { type: "string" },
            domain: { type: "object" },
            message: { type: "object" },
          },
          required: ["types", "primaryType", "domain", "message"],
        },
        o = {
          encodeData(e, t, r, a = !0) {
            let o = ["bytes32"],
              c = [this.hashType(e, r)];
            if (a) {
              let l = (e, t, o) => {
                if (void 0 !== r[t])
                  return [
                    "bytes32",
                    null == o
                      ? "0xcomingsoon000000000000000000000000000000000000000000000000"
                      : i.keccak(this.encodeData(t, o, r, a)),
                  ];
                if (void 0 === o)
                  throw Error(`missing value for field ${e} of type ${t}`);
                if ("bytes" === t) return ["bytes32", i.keccak(o)];
                if ("string" === t)
                  return (
                    "string" == typeof o && (o = s.from(o, "utf8")),
                    ["bytes32", i.keccak(o)]
                  );
                if (t.lastIndexOf("]") === t.length - 1) {
                  let r = t.slice(0, t.lastIndexOf("[")),
                    s = o.map((t) => l(e, r, t));
                  return [
                    "bytes32",
                    i.keccak(
                      n.rawEncode(
                        s.map(([e]) => e),
                        s.map(([, e]) => e)
                      )
                    ),
                  ];
                }
                return [t, o];
              };
              for (let s of r[e]) {
                let [e, r] = l(s.name, s.type, t[s.name]);
                o.push(e), c.push(r);
              }
            } else
              for (let n of r[e]) {
                let e = t[n.name];
                if (void 0 !== e) {
                  if ("bytes" === n.type)
                    o.push("bytes32"), (e = i.keccak(e)), c.push(e);
                  else if ("string" === n.type)
                    o.push("bytes32"),
                      "string" == typeof e && (e = s.from(e, "utf8")),
                      (e = i.keccak(e)),
                      c.push(e);
                  else if (void 0 !== r[n.type])
                    o.push("bytes32"),
                      (e = i.keccak(this.encodeData(n.type, e, r, a))),
                      c.push(e);
                  else if (n.type.lastIndexOf("]") === n.type.length - 1)
                    throw Error("Arrays currently unimplemented in encodeData");
                  else o.push(n.type), c.push(e);
                }
              }
            return n.rawEncode(o, c);
          },
          encodeType(e, t) {
            let r = "",
              s = this.findTypeDependencies(e, t).filter((t) => t !== e);
            for (let i of (s = [e].concat(s.sort()))) {
              if (!t[i]) throw Error("No type definition specified: " + i);
              r +=
                i +
                "(" +
                t[i].map(({ name: e, type: t }) => t + " " + e).join(",") +
                ")";
            }
            return r;
          },
          findTypeDependencies(e, t, r = []) {
            if (((e = e.match(/^\w*/)[0]), r.includes(e) || void 0 === t[e]))
              return r;
            for (let s of (r.push(e), t[e]))
              for (let e of this.findTypeDependencies(s.type, t, r))
                r.includes(e) || r.push(e);
            return r;
          },
          hashStruct(e, t, r, s = !0) {
            return i.keccak(this.encodeData(e, t, r, s));
          },
          hashType(e, t) {
            return i.keccak(this.encodeType(e, t));
          },
          sanitizeData(e) {
            let t = {};
            for (let r in a.properties) e[r] && (t[r] = e[r]);
            return (
              t.types &&
                (t.types = Object.assign({ EIP712Domain: [] }, t.types)),
              t
            );
          },
          hash(e, t = !0) {
            let r = this.sanitizeData(e),
              n = [s.from("1901", "hex")];
            return (
              n.push(this.hashStruct("EIP712Domain", r.domain, r.types, t)),
              "EIP712Domain" !== r.primaryType &&
                n.push(this.hashStruct(r.primaryType, r.message, r.types, t)),
              i.keccak(s.concat(n))
            );
          },
        };
      e.exports = {
        TYPED_MESSAGE_SCHEMA: a,
        TypedDataUtils: o,
        hashForSignTypedDataLegacy: function (e) {
          return (function (e) {
            let t = Error("Expect argument to be non-empty array");
            if ("object" != typeof e || !e.length) throw t;
            let r = e.map(function (e) {
                return "bytes" === e.type ? i.toBuffer(e.value) : e.value;
              }),
              s = e.map(function (e) {
                return e.type;
              }),
              a = e.map(function (e) {
                if (!e.name) throw t;
                return e.type + " " + e.name;
              });
            return n.soliditySHA3(
              ["bytes32", "bytes32"],
              [
                n.soliditySHA3(Array(e.length).fill("string"), a),
                n.soliditySHA3(s, r),
              ]
            );
          })(e.data);
        },
        hashForSignTypedData_v3: function (e) {
          return o.hash(e.data, !1);
        },
        hashForSignTypedData_v4: function (e) {
          return o.hash(e.data);
        },
      };
    },
    77114: (e, t, r) => {
      var s = r(9109).Buffer;
      let { keccak_256: i } = r(52975);
      function n(e) {
        return s.allocUnsafe(e).fill(0);
      }
      function a(e, t) {
        let r = e.toString(16);
        r.length % 2 != 0 && (r = "0" + r);
        let i = r.match(/.{1,2}/g).map((e) => parseInt(e, 16));
        for (; i.length < t; ) i.unshift(0);
        return s.from(i);
      }
      function o(e, t, r) {
        let s = n(t);
        return ((e = c(e)), r)
          ? e.length < t
            ? (e.copy(s), s)
            : e.slice(0, t)
          : e.length < t
          ? (e.copy(s, t - e.length), s)
          : e.slice(-t);
      }
      function c(e) {
        if (!s.isBuffer(e)) {
          if (Array.isArray(e)) e = s.from(e);
          else if ("string" == typeof e) {
            var t;
            e = l(e)
              ? s.from((t = d(e)).length % 2 ? "0" + t : t, "hex")
              : s.from(e);
          } else if ("number" == typeof e) e = intToBuffer(e);
          else if (null == e) e = s.allocUnsafe(0);
          else if ("bigint" == typeof e) e = a(e);
          else if (e.toArray) e = s.from(e.toArray());
          else throw Error("invalid type");
        }
        return e;
      }
      function l(e) {
        return "string" == typeof e && e.match(/^0x[0-9A-Fa-f]*$/);
      }
      function d(e) {
        return "string" == typeof e && e.startsWith("0x") ? e.slice(2) : e;
      }
      e.exports = {
        zeros: n,
        setLength: o,
        setLengthRight: function (e, t) {
          return o(e, t, !0);
        },
        isHexString: l,
        stripHexPrefix: d,
        toBuffer: c,
        bufferToHex: function (e) {
          return "0x" + (e = c(e)).toString("hex");
        },
        keccak: function (e, t) {
          if (((e = c(e)), t || (t = 256), 256 !== t))
            throw Error("unsupported");
          return s.from(i(new Uint8Array(e)));
        },
        bitLengthFromBigInt: function (e) {
          return e.toString(2).length;
        },
        bufferBEFromBigInt: a,
        twosFromBigInt: function (e, t) {
          return (
            (e < 0n ? (~e & ((1n << BigInt(t)) - 1n)) + 1n : e) &
            ((1n << BigInt(t)) - 1n)
          );
        },
      };
    },
    54750: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LIB_VERSION = void 0),
        (t.LIB_VERSION = "4.1.0");
    },
    25796: (e, t, r) => {
      "use strict";
      function s() {
        for (var e, t, r = 0, s = ""; r < arguments.length; )
          (e = arguments[r++]) &&
            (t = (function e(t) {
              var r,
                s,
                i = "";
              if ("string" == typeof t || "number" == typeof t) i += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t))
                  for (r = 0; r < t.length; r++)
                    t[r] && (s = e(t[r])) && (i && (i += " "), (i += s));
                else for (r in t) t[r] && (i && (i += " "), (i += r));
              }
              return i;
            })(e)) &&
            (s && (s += " "), (s += t));
        return s;
      }
      r.r(t), r.d(t, { clsx: () => s, default: () => i });
      let i = s;
    },
    6423: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HashMD = t.Maj = t.Chi = void 0);
      let s = r(67021),
        i = r(85758);
      (t.Chi = (e, t, r) => (e & t) ^ (~e & r)),
        (t.Maj = (e, t, r) => (e & t) ^ (e & r) ^ (t & r));
      class n extends i.Hash {
        constructor(e, t, r, s) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = s),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, i.createView)(this.buffer));
        }
        update(e) {
          (0, s.exists)(this);
          let { view: t, buffer: r, blockLen: n } = this,
            a = (e = (0, i.toBytes)(e)).length;
          for (let s = 0; s < a; ) {
            let o = Math.min(n - this.pos, a - s);
            if (o === n) {
              let t = (0, i.createView)(e);
              for (; n <= a - s; s += n) this.process(t, s);
              continue;
            }
            r.set(e.subarray(s, s + o), this.pos),
              (this.pos += o),
              (s += o),
              this.pos === n && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          (0, s.exists)(this), (0, s.output)(e, this), (this.finished = !0);
          let { buffer: t, view: r, blockLen: n, isLE: a } = this,
            { pos: o } = this;
          (t[o++] = 128),
            this.buffer.subarray(o).fill(0),
            this.padOffset > n - o && (this.process(r, 0), (o = 0));
          for (let e = o; e < n; e++) t[e] = 0;
          !(function (e, t, r, s) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, r, s);
            let i = BigInt(32),
              n = BigInt(0xffffffff),
              a = Number((r >> i) & n),
              o = Number(r & n),
              c = s ? 4 : 0,
              l = s ? 0 : 4;
            e.setUint32(t + c, a, s), e.setUint32(t + l, o, s);
          })(r, n - 8, BigInt(8 * this.length), a),
            this.process(r, 0);
          let c = (0, i.createView)(e),
            l = this.outputLen;
          if (l % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let d = l / 4,
            h = this.get();
          if (d > h.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < d; e++) c.setUint32(4 * e, h[e], a);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: r,
            length: s,
            finished: i,
            destroyed: n,
            pos: a,
          } = this;
          return (
            (e.length = s),
            (e.pos = a),
            (e.finished = i),
            (e.destroyed = n),
            s % t && e.buffer.set(r),
            e
          );
        }
      }
      t.HashMD = n;
    },
    44212: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sha224 = t.sha256 = t.SHA256 = void 0);
      let s = r(6423),
        i = r(85758),
        n = new Uint32Array([
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
          0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
          0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
          0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d,
          0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967,
          0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354,
          0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585,
          0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
          0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee,
          0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb,
          0xbef9a3f7, 0xc67178f2,
        ]),
        a = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        o = new Uint32Array(64);
      class c extends s.HashMD {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | a[0]),
            (this.B = 0 | a[1]),
            (this.C = 0 | a[2]),
            (this.D = 0 | a[3]),
            (this.E = 0 | a[4]),
            (this.F = 0 | a[5]),
            (this.G = 0 | a[6]),
            (this.H = 0 | a[7]);
        }
        get() {
          let { A: e, B: t, C: r, D: s, E: i, F: n, G: a, H: o } = this;
          return [e, t, r, s, i, n, a, o];
        }
        set(e, t, r, s, i, n, a, o) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | r),
            (this.D = 0 | s),
            (this.E = 0 | i),
            (this.F = 0 | n),
            (this.G = 0 | a),
            (this.H = 0 | o);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4) o[r] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = o[e - 15],
              r = o[e - 2],
              s = (0, i.rotr)(t, 7) ^ (0, i.rotr)(t, 18) ^ (t >>> 3),
              n = (0, i.rotr)(r, 17) ^ (0, i.rotr)(r, 19) ^ (r >>> 10);
            o[e] = (n + o[e - 7] + s + o[e - 16]) | 0;
          }
          let { A: r, B: a, C: c, D: l, E: d, F: h, G: u, H: p } = this;
          for (let e = 0; e < 64; e++) {
            let t =
                (p +
                  ((0, i.rotr)(d, 6) ^
                    (0, i.rotr)(d, 11) ^
                    (0, i.rotr)(d, 25)) +
                  (0, s.Chi)(d, h, u) +
                  n[e] +
                  o[e]) |
                0,
              f =
                (((0, i.rotr)(r, 2) ^ (0, i.rotr)(r, 13) ^ (0, i.rotr)(r, 22)) +
                  (0, s.Maj)(r, a, c)) |
                0;
            (p = u),
              (u = h),
              (h = d),
              (d = (l + t) | 0),
              (l = c),
              (c = a),
              (a = r),
              (r = (t + f) | 0);
          }
          (r = (r + this.A) | 0),
            (a = (a + this.B) | 0),
            (c = (c + this.C) | 0),
            (l = (l + this.D) | 0),
            (d = (d + this.E) | 0),
            (h = (h + this.F) | 0),
            (u = (u + this.G) | 0),
            (p = (p + this.H) | 0),
            this.set(r, a, c, l, d, h, u, p);
        }
        roundClean() {
          o.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      t.SHA256 = c;
      class l extends c {
        constructor() {
          super(),
            (this.A = -0x3efa6128),
            (this.B = 0x367cd507),
            (this.C = 0x3070dd17),
            (this.D = -0x8f1a6c7),
            (this.E = -4191439),
            (this.F = 0x68581511),
            (this.G = 0x64f98fa7),
            (this.H = -0x4105b05c),
            (this.outputLen = 28);
        }
      }
      (t.sha256 = (0, i.wrapConstructor)(() => new c())),
        (t.sha224 = (0, i.wrapConstructor)(() => new l()));
    },
    57764: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          Component: () => I,
          Fragment: () => k,
          cloneElement: () => K,
          createContext: () => W,
          createElement: () => v,
          createRef: () => C,
          h: () => v,
          hydrate: () => U,
          isValidElement: () => a,
          options: () => i,
          render: () => j,
          toChildArray: () =>
            function e(t, r) {
              return (
                (r = r || []),
                null == t ||
                  "boolean" == typeof t ||
                  (b(t)
                    ? t.some(function (t) {
                        e(t, r);
                      })
                    : r.push(t)),
                r
              );
            },
        });
      var s,
        i,
        n,
        a,
        o,
        c,
        l,
        d,
        h,
        u,
        p,
        f,
        m = {},
        g = [],
        _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        b = Array.isArray;
      function y(e, t) {
        for (var r in t) e[r] = t[r];
        return e;
      }
      function w(e) {
        e && e.parentNode && e.parentNode.removeChild(e);
      }
      function v(e, t, r) {
        var i,
          n,
          a,
          o = {};
        for (a in t)
          "key" == a ? (i = t[a]) : "ref" == a ? (n = t[a]) : (o[a] = t[a]);
        if (
          (arguments.length > 2 &&
            (o.children = arguments.length > 3 ? s.call(arguments, 2) : r),
          "function" == typeof e && null != e.defaultProps)
        )
          for (a in e.defaultProps)
            void 0 === o[a] && (o[a] = e.defaultProps[a]);
        return E(e, o, i, n, null);
      }
      function E(e, t, r, s, a) {
        var o = {
          type: e,
          props: t,
          key: r,
          ref: s,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          constructor: void 0,
          __v: null == a ? ++n : a,
          __i: -1,
          __u: 0,
        };
        return null == a && null != i.vnode && i.vnode(o), o;
      }
      function C() {
        return { current: null };
      }
      function k(e) {
        return e.children;
      }
      function I(e, t) {
        (this.props = e), (this.context = t);
      }
      function N(e, t) {
        if (null == t) return e.__ ? N(e.__, e.__i + 1) : null;
        for (var r; t < e.__k.length; t++)
          if (null != (r = e.__k[t]) && null != r.__e) return r.__e;
        return "function" == typeof e.type ? N(e) : null;
      }
      function S(e) {
        ((!e.__d && (e.__d = !0) && o.push(e) && !A.__r++) ||
          c !== i.debounceRendering) &&
          ((c = i.debounceRendering) || l)(A);
      }
      function A() {
        var e, t, r, s, n, a, c, l;
        for (o.sort(d); (e = o.shift()); )
          e.__d &&
            ((t = o.length),
            (s = void 0),
            (a = (n = (r = e).__v).__e),
            (c = []),
            (l = []),
            r.__P &&
              (((s = y({}, n)).__v = n.__v + 1),
              i.vnode && i.vnode(s),
              L(
                r.__P,
                s,
                n,
                r.__n,
                r.__P.namespaceURI,
                32 & n.__u ? [a] : null,
                c,
                null == a ? N(n) : a,
                !!(32 & n.__u),
                l
              ),
              (s.__v = n.__v),
              (s.__.__k[s.__i] = s),
              O(c, s, l),
              s.__e != a &&
                (function e(t) {
                  var r, s;
                  if (null != (t = t.__) && null != t.__c) {
                    for (
                      t.__e = t.__c.base = null, r = 0;
                      r < t.__k.length;
                      r++
                    )
                      if (null != (s = t.__k[r]) && null != s.__e) {
                        t.__e = t.__c.base = s.__e;
                        break;
                      }
                    return e(t);
                  }
                })(s)),
            o.length > t && o.sort(d));
        A.__r = 0;
      }
      function x(e, t, r, s, n, a, o, c, l, d, h) {
        var u,
          p,
          f,
          _,
          y,
          v = (s && s.__k) || g,
          C = t.length;
        for (
          r.__d = l,
            (function (e, t, r) {
              var s,
                n,
                a,
                o,
                c,
                l = t.length,
                d = r.length,
                h = d,
                u = 0;
              for (e.__k = [], s = 0; s < l; s++)
                null != (n = t[s]) &&
                "boolean" != typeof n &&
                "function" != typeof n
                  ? ((o = s + u),
                    ((n = e.__k[s] =
                      "string" == typeof n ||
                      "number" == typeof n ||
                      "bigint" == typeof n ||
                      n.constructor == String
                        ? E(null, n, null, null, null)
                        : b(n)
                        ? E(k, { children: n }, null, null, null)
                        : void 0 === n.constructor && n.__b > 0
                        ? E(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v)
                        : n).__ = e),
                    (n.__b = e.__b + 1),
                    (a = null),
                    -1 !==
                      (c = n.__i =
                        (function (e, t, r, s) {
                          var i = e.key,
                            n = e.type,
                            a = r - 1,
                            o = r + 1,
                            c = t[r];
                          if (
                            null === c ||
                            (c &&
                              i == c.key &&
                              n === c.type &&
                              0 == (131072 & c.__u))
                          )
                            return r;
                          if (s > (null != c && 0 == (131072 & c.__u) ? 1 : 0))
                            for (; a >= 0 || o < t.length; ) {
                              if (a >= 0) {
                                if (
                                  (c = t[a]) &&
                                  0 == (131072 & c.__u) &&
                                  i == c.key &&
                                  n === c.type
                                )
                                  return a;
                                a--;
                              }
                              if (o < t.length) {
                                if (
                                  (c = t[o]) &&
                                  0 == (131072 & c.__u) &&
                                  i == c.key &&
                                  n === c.type
                                )
                                  return o;
                                o++;
                              }
                            }
                          return -1;
                        })(n, r, o, h)) &&
                      (h--, (a = r[c]) && (a.__u |= 131072)),
                    null == a || null === a.__v
                      ? (-1 == c && u--,
                        "function" != typeof n.type && (n.__u |= 65536))
                      : c !== o &&
                        (c == o - 1
                          ? u--
                          : c == o + 1
                          ? u++
                          : (c > o ? u-- : u++, (n.__u |= 65536))))
                  : (n = e.__k[s] = null);
              if (h)
                for (s = 0; s < d; s++)
                  null != (a = r[s]) &&
                    0 == (131072 & a.__u) &&
                    (a.__e == e.__d && (e.__d = N(a)),
                    (function e(t, r, s) {
                      var n, a;
                      if (
                        (i.unmount && i.unmount(t),
                        (n = t.ref) &&
                          ((n.current && n.current !== t.__e) || T(n, null, r)),
                        null != (n = t.__c))
                      ) {
                        if (n.componentWillUnmount)
                          try {
                            n.componentWillUnmount();
                          } catch (e) {
                            i.__e(e, r);
                          }
                        n.base = n.__P = null;
                      }
                      if ((n = t.__k))
                        for (a = 0; a < n.length; a++)
                          n[a] && e(n[a], r, s || "function" != typeof t.type);
                      s || w(t.__e), (t.__c = t.__ = t.__e = t.__d = void 0);
                    })(a, a));
            })(r, t, v),
            l = r.__d,
            u = 0;
          u < C;
          u++
        )
          null != (f = r.__k[u]) &&
            ((p = -1 === f.__i ? m : v[f.__i] || m),
            (f.__i = u),
            L(e, f, p, n, a, o, c, l, d, h),
            (_ = f.__e),
            f.ref &&
              p.ref != f.ref &&
              (p.ref && T(p.ref, null, f), h.push(f.ref, f.__c || _, f)),
            null == y && null != _ && (y = _),
            65536 & f.__u || p.__k === f.__k
              ? (l = (function e(t, r, s) {
                  var i, n;
                  if ("function" == typeof t.type) {
                    for (i = t.__k, n = 0; i && n < i.length; n++)
                      i[n] && ((i[n].__ = t), (r = e(i[n], r, s)));
                    return r;
                  }
                  t.__e != r &&
                    (r && t.type && !s.contains(r) && (r = N(t)),
                    s.insertBefore(t.__e, r || null),
                    (r = t.__e));
                  do r = r && r.nextSibling;
                  while (null != r && 8 === r.nodeType);
                  return r;
                })(f, l, e))
              : "function" == typeof f.type && void 0 !== f.__d
              ? (l = f.__d)
              : _ && (l = _.nextSibling),
            (f.__d = void 0),
            (f.__u &= -196609));
        (r.__d = l), (r.__e = y);
      }
      function P(e, t, r) {
        "-" === t[0]
          ? e.setProperty(t, null == r ? "" : r)
          : (e[t] =
              null == r
                ? ""
                : "number" != typeof r || _.test(t)
                ? r
                : r + "px");
      }
      function R(e, t, r, s, i) {
        var n;
        e: if ("style" === t) {
          if ("string" == typeof r) e.style.cssText = r;
          else {
            if (("string" == typeof s && (e.style.cssText = s = ""), s))
              for (t in s) (r && t in r) || P(e.style, t, "");
            if (r) for (t in r) (s && r[t] === s[t]) || P(e.style, t, r[t]);
          }
        } else if ("o" === t[0] && "n" === t[1])
          (n = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1"))),
            (t =
              t.toLowerCase() in e || "onFocusOut" === t || "onFocusIn" === t
                ? t.toLowerCase().slice(2)
                : t.slice(2)),
            e.l || (e.l = {}),
            (e.l[t + n] = r),
            r
              ? s
                ? (r.u = s.u)
                : ((r.u = h), e.addEventListener(t, n ? p : u, n))
              : e.removeEventListener(t, n ? p : u, n);
        else {
          if ("http://www.w3.org/2000/svg" == i)
            t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
          else if (
            "width" != t &&
            "height" != t &&
            "href" != t &&
            "list" != t &&
            "form" != t &&
            "tabIndex" != t &&
            "download" != t &&
            "rowSpan" != t &&
            "colSpan" != t &&
            "role" != t &&
            "popover" != t &&
            t in e
          )
            try {
              e[t] = null == r ? "" : r;
              break e;
            } catch (e) {}
          "function" == typeof r ||
            (null == r || (!1 === r && "-" !== t[4])
              ? e.removeAttribute(t)
              : e.setAttribute(t, "popover" == t && 1 == r ? "" : r));
        }
      }
      function M(e) {
        return function (t) {
          if (this.l) {
            var r = this.l[t.type + e];
            if (null == t.t) t.t = h++;
            else if (t.t < r.u) return;
            return r(i.event ? i.event(t) : t);
          }
        };
      }
      function L(e, t, r, n, a, o, c, l, d, h) {
        var u,
          p,
          f,
          g,
          _,
          v,
          E,
          C,
          S,
          A,
          P,
          M,
          L,
          O,
          T,
          j,
          U = t.type;
        if (void 0 !== t.constructor) return null;
        128 & r.__u && ((d = !!(32 & r.__u)), (o = [(l = t.__e = r.__e)])),
          (u = i.__b) && u(t);
        e: if ("function" == typeof U)
          try {
            if (
              ((C = t.props),
              (S = "prototype" in U && U.prototype.render),
              (A = (u = U.contextType) && n[u.__c]),
              (P = u ? (A ? A.props.value : u.__) : n),
              r.__c
                ? (E = (p = t.__c = r.__c).__ = p.__E)
                : (S
                    ? (t.__c = p = new U(C, P))
                    : ((t.__c = p = new I(C, P)),
                      (p.constructor = U),
                      (p.render = D)),
                  A && A.sub(p),
                  (p.props = C),
                  p.state || (p.state = {}),
                  (p.context = P),
                  (p.__n = n),
                  (f = p.__d = !0),
                  (p.__h = []),
                  (p._sb = [])),
              S && null == p.__s && (p.__s = p.state),
              S &&
                null != U.getDerivedStateFromProps &&
                (p.__s == p.state && (p.__s = y({}, p.__s)),
                y(p.__s, U.getDerivedStateFromProps(C, p.__s))),
              (g = p.props),
              (_ = p.state),
              (p.__v = t),
              f)
            )
              S &&
                null == U.getDerivedStateFromProps &&
                null != p.componentWillMount &&
                p.componentWillMount(),
                S &&
                  null != p.componentDidMount &&
                  p.__h.push(p.componentDidMount);
            else {
              if (
                (S &&
                  null == U.getDerivedStateFromProps &&
                  C !== g &&
                  null != p.componentWillReceiveProps &&
                  p.componentWillReceiveProps(C, P),
                !p.__e &&
                  ((null != p.shouldComponentUpdate &&
                    !1 === p.shouldComponentUpdate(C, p.__s, P)) ||
                    t.__v === r.__v))
              ) {
                for (
                  t.__v !== r.__v &&
                    ((p.props = C), (p.state = p.__s), (p.__d = !1)),
                    t.__e = r.__e,
                    t.__k = r.__k,
                    t.__k.some(function (e) {
                      e && (e.__ = t);
                    }),
                    M = 0;
                  M < p._sb.length;
                  M++
                )
                  p.__h.push(p._sb[M]);
                (p._sb = []), p.__h.length && c.push(p);
                break e;
              }
              null != p.componentWillUpdate &&
                p.componentWillUpdate(C, p.__s, P),
                S &&
                  null != p.componentDidUpdate &&
                  p.__h.push(function () {
                    p.componentDidUpdate(g, _, v);
                  });
            }
            if (
              ((p.context = P),
              (p.props = C),
              (p.__P = e),
              (p.__e = !1),
              (L = i.__r),
              (O = 0),
              S)
            ) {
              for (
                p.state = p.__s,
                  p.__d = !1,
                  L && L(t),
                  u = p.render(p.props, p.state, p.context),
                  T = 0;
                T < p._sb.length;
                T++
              )
                p.__h.push(p._sb[T]);
              p._sb = [];
            } else
              do
                (p.__d = !1),
                  L && L(t),
                  (u = p.render(p.props, p.state, p.context)),
                  (p.state = p.__s);
              while (p.__d && ++O < 25);
            (p.state = p.__s),
              null != p.getChildContext &&
                (n = y(y({}, n), p.getChildContext())),
              S &&
                !f &&
                null != p.getSnapshotBeforeUpdate &&
                (v = p.getSnapshotBeforeUpdate(g, _)),
              x(
                e,
                b(
                  (j =
                    null != u && u.type === k && null == u.key
                      ? u.props.children
                      : u)
                )
                  ? j
                  : [j],
                t,
                r,
                n,
                a,
                o,
                c,
                l,
                d,
                h
              ),
              (p.base = t.__e),
              (t.__u &= -161),
              p.__h.length && c.push(p),
              E && (p.__E = p.__ = null);
          } catch (e) {
            if (((t.__v = null), d || null != o)) {
              for (
                t.__u |= d ? 160 : 128;
                l && 8 === l.nodeType && l.nextSibling;

              )
                l = l.nextSibling;
              (o[o.indexOf(l)] = null), (t.__e = l);
            } else (t.__e = r.__e), (t.__k = r.__k);
            i.__e(e, t, r);
          }
        else
          null == o && t.__v === r.__v
            ? ((t.__k = r.__k), (t.__e = r.__e))
            : (t.__e = (function (e, t, r, n, a, o, c, l, d) {
                var h,
                  u,
                  p,
                  f,
                  g,
                  _,
                  y,
                  v = r.props,
                  E = t.props,
                  C = t.type;
                if (
                  ("svg" === C
                    ? (a = "http://www.w3.org/2000/svg")
                    : "math" === C
                    ? (a = "http://www.w3.org/1998/Math/MathML")
                    : a || (a = "http://www.w3.org/1999/xhtml"),
                  null != o)
                ) {
                  for (h = 0; h < o.length; h++)
                    if (
                      (g = o[h]) &&
                      "setAttribute" in g == !!C &&
                      (C ? g.localName === C : 3 === g.nodeType)
                    ) {
                      (e = g), (o[h] = null);
                      break;
                    }
                }
                if (null == e) {
                  if (null === C) return document.createTextNode(E);
                  (e = document.createElementNS(a, C, E.is && E)),
                    l && (i.__m && i.__m(t, o), (l = !1)),
                    (o = null);
                }
                if (null === C) v === E || (l && e.data === E) || (e.data = E);
                else {
                  if (
                    ((o = o && s.call(e.childNodes)),
                    (v = r.props || m),
                    !l && null != o)
                  )
                    for (v = {}, h = 0; h < e.attributes.length; h++)
                      v[(g = e.attributes[h]).name] = g.value;
                  for (h in v)
                    if (((g = v[h]), "children" == h));
                    else if ("dangerouslySetInnerHTML" == h) p = g;
                    else if (!(h in E)) {
                      if (
                        ("value" == h && "defaultValue" in E) ||
                        ("checked" == h && "defaultChecked" in E)
                      )
                        continue;
                      R(e, h, null, g, a);
                    }
                  for (h in E)
                    (g = E[h]),
                      "children" == h
                        ? (f = g)
                        : "dangerouslySetInnerHTML" == h
                        ? (u = g)
                        : "value" == h
                        ? (_ = g)
                        : "checked" == h
                        ? (y = g)
                        : (l && "function" != typeof g) ||
                          v[h] === g ||
                          R(e, h, g, v[h], a);
                  if (u)
                    l ||
                      (p &&
                        (u.__html === p.__html || u.__html === e.innerHTML)) ||
                      (e.innerHTML = u.__html),
                      (t.__k = []);
                  else if (
                    (p && (e.innerHTML = ""),
                    x(
                      e,
                      b(f) ? f : [f],
                      t,
                      r,
                      n,
                      "foreignObject" === C
                        ? "http://www.w3.org/1999/xhtml"
                        : a,
                      o,
                      c,
                      o ? o[0] : r.__k && N(r, 0),
                      l,
                      d
                    ),
                    null != o)
                  )
                    for (h = o.length; h--; ) w(o[h]);
                  l ||
                    ((h = "value"),
                    "progress" === C && null == _
                      ? e.removeAttribute("value")
                      : void 0 === _ ||
                        (_ === e[h] &&
                          ("progress" !== C || _) &&
                          ("option" !== C || _ === v[h])) ||
                        R(e, h, _, v[h], a),
                    (h = "checked"),
                    void 0 !== y && y !== e[h] && R(e, h, y, v[h], a));
                }
                return e;
              })(r.__e, t, r, n, a, o, c, d, h));
        (u = i.diffed) && u(t);
      }
      function O(e, t, r) {
        t.__d = void 0;
        for (var s = 0; s < r.length; s++) T(r[s], r[++s], r[++s]);
        i.__c && i.__c(t, e),
          e.some(function (t) {
            try {
              (e = t.__h),
                (t.__h = []),
                e.some(function (e) {
                  e.call(t);
                });
            } catch (e) {
              i.__e(e, t.__v);
            }
          });
      }
      function T(e, t, r) {
        try {
          if ("function" == typeof e) {
            var s = "function" == typeof e.__u;
            s && e.__u(), (s && null == t) || (e.__u = e(t));
          } else e.current = t;
        } catch (e) {
          i.__e(e, r);
        }
      }
      function D(e, t, r) {
        return this.constructor(e, r);
      }
      function j(e, t, r) {
        var n, a, o, c;
        i.__ && i.__(e, t),
          (a = (n = "function" == typeof r) ? null : (r && r.__k) || t.__k),
          (o = []),
          (c = []),
          L(
            t,
            (e = ((!n && r) || t).__k = v(k, null, [e])),
            a || m,
            m,
            t.namespaceURI,
            !n && r
              ? [r]
              : a
              ? null
              : t.firstChild
              ? s.call(t.childNodes)
              : null,
            o,
            !n && r ? r : a ? a.__e : t.firstChild,
            n,
            c
          ),
          O(o, e, c);
      }
      function U(e, t) {
        j(e, t, U);
      }
      function K(e, t, r) {
        var i,
          n,
          a,
          o,
          c = y({}, e.props);
        for (a in (e.type && e.type.defaultProps && (o = e.type.defaultProps),
        t))
          "key" == a
            ? (i = t[a])
            : "ref" == a
            ? (n = t[a])
            : (c[a] = void 0 === t[a] && void 0 !== o ? o[a] : t[a]);
        return (
          arguments.length > 2 &&
            (c.children = arguments.length > 3 ? s.call(arguments, 2) : r),
          E(e.type, c, i || e.key, n || e.ref, null)
        );
      }
      function W(e, t) {
        var r = {
          __c: (t = "__cC" + f++),
          __: e,
          Consumer: function (e, t) {
            return e.children(t);
          },
          Provider: function (e) {
            var r, s;
            return (
              this.getChildContext ||
                ((r = new Set()),
                ((s = {})[t] = this),
                (this.getChildContext = function () {
                  return s;
                }),
                (this.componentWillUnmount = function () {
                  r = null;
                }),
                (this.shouldComponentUpdate = function (e) {
                  this.props.value !== e.value &&
                    r.forEach(function (e) {
                      (e.__e = !0), S(e);
                    });
                }),
                (this.sub = function (e) {
                  r.add(e);
                  var t = e.componentWillUnmount;
                  e.componentWillUnmount = function () {
                    r && r.delete(e), t && t.call(e);
                  };
                })),
              e.children
            );
          },
        };
        return (r.Provider.__ = r.Consumer.contextType = r);
      }
      (s = g.slice),
        (i = {
          __e: function (e, t, r, s) {
            for (var i, n, a; (t = t.__); )
              if ((i = t.__c) && !i.__)
                try {
                  if (
                    ((n = i.constructor) &&
                      null != n.getDerivedStateFromError &&
                      (i.setState(n.getDerivedStateFromError(e)), (a = i.__d)),
                    null != i.componentDidCatch &&
                      (i.componentDidCatch(e, s || {}), (a = i.__d)),
                    a)
                  )
                    return (i.__E = i);
                } catch (t) {
                  e = t;
                }
            throw e;
          },
        }),
        (n = 0),
        (a = function (e) {
          return null != e && null == e.constructor;
        }),
        (I.prototype.setState = function (e, t) {
          var r;
          (r =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = y({}, this.state))),
            "function" == typeof e && (e = e(y({}, r), this.props)),
            e && y(r, e),
            null != e && this.__v && (t && this._sb.push(t), S(this));
        }),
        (I.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), S(this));
        }),
        (I.prototype.render = k),
        (o = []),
        (l =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (d = function (e, t) {
          return e.__v.__b - t.__v.__b;
        }),
        (A.__r = 0),
        (h = 0),
        (u = M(!1)),
        (p = M(!0)),
        (f = 0);
    },
    83148: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          useCallback: () => I,
          useContext: () => N,
          useDebugValue: () => S,
          useEffect: () => w,
          useErrorBoundary: () => A,
          useId: () => x,
          useImperativeHandle: () => C,
          useLayoutEffect: () => v,
          useMemo: () => k,
          useReducer: () => y,
          useRef: () => E,
          useState: () => b,
        });
      var s,
        i,
        n,
        a,
        o = r(57764),
        c = 0,
        l = [],
        d = o.options,
        h = d.__b,
        u = d.__r,
        p = d.diffed,
        f = d.__c,
        m = d.unmount,
        g = d.__;
      function _(e, t) {
        d.__h && d.__h(i, e, c || t), (c = 0);
        var r = i.__H || (i.__H = { __: [], __h: [] });
        return e >= r.__.length && r.__.push({}), r.__[e];
      }
      function b(e) {
        return (c = 1), y(T, e);
      }
      function y(e, t, r) {
        var n = _(s++, 2);
        if (
          ((n.t = e),
          !n.__c &&
            ((n.__ = [
              r ? r(t) : T(void 0, t),
              function (e) {
                var t = n.__N ? n.__N[0] : n.__[0],
                  r = n.t(t, e);
                t !== r && ((n.__N = [r, n.__[1]]), n.__c.setState({}));
              },
            ]),
            (n.__c = i),
            !i.u))
        ) {
          var a = function (e, t, r) {
            if (!n.__c.__H) return !0;
            var s = n.__c.__H.__.filter(function (e) {
              return !!e.__c;
            });
            if (
              s.every(function (e) {
                return !e.__N;
              })
            )
              return !o || o.call(this, e, t, r);
            var i = !1;
            return (
              s.forEach(function (e) {
                if (e.__N) {
                  var t = e.__[0];
                  (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (i = !0);
                }
              }),
              !(!i && n.__c.props === e) && (!o || o.call(this, e, t, r))
            );
          };
          i.u = !0;
          var o = i.shouldComponentUpdate,
            c = i.componentWillUpdate;
          (i.componentWillUpdate = function (e, t, r) {
            if (this.__e) {
              var s = o;
              (o = void 0), a(e, t, r), (o = s);
            }
            c && c.call(this, e, t, r);
          }),
            (i.shouldComponentUpdate = a);
        }
        return n.__N || n.__;
      }
      function w(e, t) {
        var r = _(s++, 3);
        !d.__s && O(r.__H, t) && ((r.__ = e), (r.i = t), i.__H.__h.push(r));
      }
      function v(e, t) {
        var r = _(s++, 4);
        !d.__s && O(r.__H, t) && ((r.__ = e), (r.i = t), i.__h.push(r));
      }
      function E(e) {
        return (
          (c = 5),
          k(function () {
            return { current: e };
          }, [])
        );
      }
      function C(e, t, r) {
        (c = 6),
          v(
            function () {
              return "function" == typeof e
                ? (e(t()),
                  function () {
                    return e(null);
                  })
                : e
                ? ((e.current = t()),
                  function () {
                    return (e.current = null);
                  })
                : void 0;
            },
            null == r ? r : r.concat(e)
          );
      }
      function k(e, t) {
        var r = _(s++, 7);
        return O(r.__H, t) && ((r.__ = e()), (r.__H = t), (r.__h = e)), r.__;
      }
      function I(e, t) {
        return (
          (c = 8),
          k(function () {
            return e;
          }, t)
        );
      }
      function N(e) {
        var t = i.context[e.__c],
          r = _(s++, 9);
        return (
          (r.c = e),
          t ? (null == r.__ && ((r.__ = !0), t.sub(i)), t.props.value) : e.__
        );
      }
      function S(e, t) {
        d.useDebugValue && d.useDebugValue(t ? t(e) : e);
      }
      function A(e) {
        var t = _(s++, 10),
          r = b();
        return (
          (t.__ = e),
          i.componentDidCatch ||
            (i.componentDidCatch = function (e, s) {
              t.__ && t.__(e, s), r[1](e);
            }),
          [
            r[0],
            function () {
              r[1](void 0);
            },
          ]
        );
      }
      function x() {
        var e = _(s++, 11);
        if (!e.__) {
          for (var t = i.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
          var r = t.__m || (t.__m = [0, 0]);
          e.__ = "P" + r[0] + "-" + r[1]++;
        }
        return e.__;
      }
      function P() {
        for (var e; (e = l.shift()); )
          if (e.__P && e.__H)
            try {
              e.__H.__h.forEach(M), e.__H.__h.forEach(L), (e.__H.__h = []);
            } catch (t) {
              (e.__H.__h = []), d.__e(t, e.__v);
            }
      }
      (d.__b = function (e) {
        (i = null), h && h(e);
      }),
        (d.__ = function (e, t) {
          e && t.__k && t.__k.__m && (e.__m = t.__k.__m), g && g(e, t);
        }),
        (d.__r = function (e) {
          u && u(e), (s = 0);
          var t = (i = e.__c).__H;
          t &&
            (n === i
              ? ((t.__h = []),
                (i.__h = []),
                t.__.forEach(function (e) {
                  e.__N && (e.__ = e.__N), (e.i = e.__N = void 0);
                }))
              : (t.__h.forEach(M), t.__h.forEach(L), (t.__h = []), (s = 0))),
            (n = i);
        }),
        (d.diffed = function (e) {
          p && p(e);
          var t = e.__c;
          t &&
            t.__H &&
            (t.__H.__h.length &&
              ((1 !== l.push(t) && a === d.requestAnimationFrame) ||
                (
                  (a = d.requestAnimationFrame) ||
                  function (e) {
                    var t,
                      r = function () {
                        clearTimeout(s),
                          R && cancelAnimationFrame(t),
                          setTimeout(e);
                      },
                      s = setTimeout(r, 100);
                    R && (t = requestAnimationFrame(r));
                  }
                )(P)),
            t.__H.__.forEach(function (e) {
              e.i && (e.__H = e.i), (e.i = void 0);
            })),
            (n = i = null);
        }),
        (d.__c = function (e, t) {
          t.some(function (e) {
            try {
              e.__h.forEach(M),
                (e.__h = e.__h.filter(function (e) {
                  return !e.__ || L(e);
                }));
            } catch (r) {
              t.some(function (e) {
                e.__h && (e.__h = []);
              }),
                (t = []),
                d.__e(r, e.__v);
            }
          }),
            f && f(e, t);
        }),
        (d.unmount = function (e) {
          m && m(e);
          var t,
            r = e.__c;
          r &&
            r.__H &&
            (r.__H.__.forEach(function (e) {
              try {
                M(e);
              } catch (e) {
                t = e;
              }
            }),
            (r.__H = void 0),
            t && d.__e(t, r.__v));
        });
      var R = "function" == typeof requestAnimationFrame;
      function M(e) {
        var t = i,
          r = e.__c;
        "function" == typeof r && ((e.__c = void 0), r()), (i = t);
      }
      function L(e) {
        var t = i;
        (e.__c = e.__()), (i = t);
      }
      function O(e, t) {
        return (
          !e ||
          e.length !== t.length ||
          t.some(function (t, r) {
            return t !== e[r];
          })
        );
      }
      function T(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
    },
    22544: (e) => {
      e.exports = {
        style: { fontFamily: "'geistMono', 'geistMono Fallback'" },
        className: "__className_c3aa02",
        variable: "__variable_c3aa02",
      };
    },
    87800: (e) => {
      e.exports = {
        style: { fontFamily: "'geistSans', 'geistSans Fallback'" },
        className: "__className_1e4310",
        variable: "__variable_1e4310",
      };
    },
    22187: (e) => {
      e.exports = {
        style: { fontFamily: "'VT323', 'VT323 Fallback'", fontWeight: 400 },
        className: "__className_c90135",
        variable: "__variable_c90135",
      };
    },
    95525: (e, t, r) => {
      "use strict";
      r.d(t, { mt: () => W }), r(26181);
      var s = r(94653),
        i = r(63685),
        n = r(31345);
      let a = {
        hexStringToNumber: (e) =>
          parseInt(e.startsWith("0x") ? e.slice(2) : e, 16),
        numberToHexString: (e) => `0x${e.toString(16)}`,
        async getUserInfo(e) {
          let [t, r] = await Promise.all([a.getAddresses(e), a.getChainId(e)]);
          return { chainId: r, addresses: t };
        },
        getChainId: async (e) =>
          Number(await e.request({ method: "eth_chainId" })),
        async getAddress(e) {
          let [t] = await e.request({ method: "eth_accounts" });
          return t;
        },
        getAddresses: async (e) => await e.request({ method: "eth_accounts" }),
        async addEthereumChain(e, t) {
          await e.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: a.numberToHexString(t.id),
                rpcUrls: t.rpcUrls.default.http,
                chainName: t.name,
                nativeCurrency: t.nativeCurrency,
                blockExplorerUrls: t.blockExplorers,
                iconUrls: [n.C.NetworkImageIds[t.id]],
              },
            ],
          });
        },
      };
      var o = r(7941),
        c = r(30526);
      r(33987), r(54308), r(51873);
      var l = r(8574),
        d = r(9784),
        h = r(5271),
        u = r(36173),
        p = r(13421),
        f = r(86365),
        m = r(13346);
      let g = new p.Yd(f.i),
        _ = 1;
      function b(e, t) {
        let r = "Web3LegacyFetcher";
        return function (e, s) {
          let i = { method: e, params: s, id: _++, jsonrpc: "2.0" };
          return new Promise((e, s) => {
            this.emit("debug", {
              action: "request",
              fetcher: r,
              request: (0, u.p$)(i),
              provider: this,
            }),
              t(i, (t, n) => {
                if (t)
                  return (
                    this.emit("debug", {
                      action: "response",
                      fetcher: r,
                      error: t,
                      request: i,
                      provider: this,
                    }),
                    s(t)
                  );
                if (
                  (this.emit("debug", {
                    action: "response",
                    fetcher: r,
                    request: i,
                    response: n,
                    provider: this,
                  }),
                  n.error)
                ) {
                  let e = Error(n.error.message);
                  return (e.code = n.error.code), (e.data = n.error.data), s(e);
                }
                e(n.result);
              });
          });
        };
      }
      class y extends m.r {
        constructor(e, t) {
          null == e && g.throwArgumentError("missing provider", "provider", e);
          let r = null,
            s = null,
            i = null;
          "function" == typeof e
            ? ((r = "unknown:"), (s = e))
            : (((r = e.host || e.path || "") ||
                !e.isMetaMask ||
                (r = "metamask"),
              (i = e),
              e.request)
                ? ("" === r && (r = "eip-1193:"),
                  (s = function (t, r) {
                    null == r && (r = []);
                    let s = { method: t, params: r };
                    return (
                      this.emit("debug", {
                        action: "request",
                        fetcher: "Eip1193Fetcher",
                        request: (0, u.p$)(s),
                        provider: this,
                      }),
                      e.request(s).then(
                        (e) => (
                          this.emit("debug", {
                            action: "response",
                            fetcher: "Eip1193Fetcher",
                            request: s,
                            response: e,
                            provider: this,
                          }),
                          e
                        ),
                        (e) => {
                          throw (
                            (this.emit("debug", {
                              action: "response",
                              fetcher: "Eip1193Fetcher",
                              request: s,
                              error: e,
                              provider: this,
                            }),
                            e)
                          );
                        }
                      )
                    );
                  }))
                : e.sendAsync
                ? (s = b(e, e.sendAsync.bind(e)))
                : e.send
                ? (s = b(e, e.send.bind(e)))
                : g.throwArgumentError("unsupported provider", "provider", e),
              r || (r = "unknown:")),
            super(r, t),
            (0, u.zG)(this, "jsonRpcFetchFunc", s),
            (0, u.zG)(this, "provider", i);
        }
        send(e, t) {
          return this.jsonRpcFetchFunc(e, t);
        }
      }
      var w = r(22554),
        v = r(22594);
      let E = null;
      try {
        if (((E = WebSocket), null == E)) throw Error("inject please");
      } catch (t) {
        let e = new p.Yd(f.i);
        E = function () {
          e.throwError(
            "WebSockets not supported in this environment",
            p.Yd.errors.UNSUPPORTED_OPERATION,
            { operation: "new WebSocket()" }
          );
        };
      }
      var C = function (e, t, r, s) {
        return new (r || (r = Promise))(function (i, n) {
          function a(e) {
            try {
              c(s.next(e));
            } catch (e) {
              n(e);
            }
          }
          function o(e) {
            try {
              c(s.throw(e));
            } catch (e) {
              n(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          c((s = s.apply(e, t || [])).next());
        });
      };
      let k = new p.Yd(f.i),
        I = 1;
      class N extends m.r {
        constructor(e, t) {
          "any" === t &&
            k.throwError(
              "WebSocketProvider does not support 'any' network yet",
              p.Yd.errors.UNSUPPORTED_OPERATION,
              { operation: "network:any" }
            ),
            "string" == typeof e ? super(e, t) : super("_websocket", t),
            (this._pollingInterval = -1),
            (this._wsReady = !1),
            "string" == typeof e
              ? (0, u.zG)(this, "_websocket", new E(this.connection.url))
              : (0, u.zG)(this, "_websocket", e),
            (0, u.zG)(this, "_requests", {}),
            (0, u.zG)(this, "_subs", {}),
            (0, u.zG)(this, "_subIds", {}),
            (0, u.zG)(this, "_detectNetwork", super.detectNetwork()),
            (this.websocket.onopen = () => {
              (this._wsReady = !0),
                Object.keys(this._requests).forEach((e) => {
                  this.websocket.send(this._requests[e].payload);
                });
            }),
            (this.websocket.onmessage = (e) => {
              let t = e.data,
                r = JSON.parse(t);
              if (null != r.id) {
                let e = String(r.id),
                  s = this._requests[e];
                if ((delete this._requests[e], void 0 !== r.result))
                  s.callback(null, r.result),
                    this.emit("debug", {
                      action: "response",
                      request: JSON.parse(s.payload),
                      response: r.result,
                      provider: this,
                    });
                else {
                  let e = null;
                  r.error
                    ? ((e = Error(r.error.message || "unknown error")),
                      (0, u.zG)(e, "code", r.error.code || null),
                      (0, u.zG)(e, "response", t))
                    : (e = Error("unknown error")),
                    s.callback(e, void 0),
                    this.emit("debug", {
                      action: "response",
                      error: e,
                      request: JSON.parse(s.payload),
                      provider: this,
                    });
                }
              } else if ("eth_subscription" === r.method) {
                let e = this._subs[r.params.subscription];
                e && e.processFunc(r.params.result);
              } else console.warn("this should not happen");
            });
          let r = setInterval(() => {
            this.emit("poll");
          }, 1e3);
          r.unref && r.unref();
        }
        get websocket() {
          return this._websocket;
        }
        detectNetwork() {
          return this._detectNetwork;
        }
        get pollingInterval() {
          return 0;
        }
        resetEventsBlock(e) {
          k.throwError(
            "cannot reset events block on WebSocketProvider",
            p.Yd.errors.UNSUPPORTED_OPERATION,
            { operation: "resetEventBlock" }
          );
        }
        set pollingInterval(e) {
          k.throwError(
            "cannot set polling interval on WebSocketProvider",
            p.Yd.errors.UNSUPPORTED_OPERATION,
            { operation: "setPollingInterval" }
          );
        }
        poll() {
          return C(this, void 0, void 0, function* () {
            return null;
          });
        }
        set polling(e) {
          e &&
            k.throwError(
              "cannot set polling on WebSocketProvider",
              p.Yd.errors.UNSUPPORTED_OPERATION,
              { operation: "setPolling" }
            );
        }
        send(e, t) {
          let r = I++;
          return new Promise((s, i) => {
            let n = JSON.stringify({
              method: e,
              params: t,
              id: r,
              jsonrpc: "2.0",
            });
            this.emit("debug", {
              action: "request",
              request: JSON.parse(n),
              provider: this,
            }),
              (this._requests[String(r)] = {
                callback: function (e, t) {
                  return e ? i(e) : s(t);
                },
                payload: n,
              }),
              this._wsReady && this.websocket.send(n);
          });
        }
        static defaultUrl() {
          return "ws://localhost:8546";
        }
        _subscribe(e, t, r) {
          return C(this, void 0, void 0, function* () {
            let s = this._subIds[e];
            null == s &&
              ((s = Promise.all(t).then((e) => this.send("eth_subscribe", e))),
              (this._subIds[e] = s));
            let i = yield s;
            this._subs[i] = { tag: e, processFunc: r };
          });
        }
        _startEvent(e) {
          switch (e.type) {
            case "block":
              this._subscribe("block", ["newHeads"], (e) => {
                let t = v.O$.from(e.number).toNumber();
                (this._emitted.block = t), this.emit("block", t);
              });
              break;
            case "pending":
              this._subscribe("pending", ["newPendingTransactions"], (e) => {
                this.emit("pending", e);
              });
              break;
            case "filter":
              this._subscribe(
                e.tag,
                ["logs", this._getFilter(e.filter)],
                (t) => {
                  null == t.removed && (t.removed = !1),
                    this.emit(e.filter, this.formatter.filterLog(t));
                }
              );
              break;
            case "tx": {
              let t = (e) => {
                let t = e.hash;
                this.getTransactionReceipt(t).then((e) => {
                  e && this.emit(t, e);
                });
              };
              t(e),
                this._subscribe("tx", ["newHeads"], (e) => {
                  this._events.filter((e) => "tx" === e.type).forEach(t);
                });
              break;
            }
            case "debug":
            case "poll":
            case "willPoll":
            case "didPoll":
            case "error":
              break;
            default:
              console.log("unhandled:", e);
          }
        }
        _stopEvent(e) {
          let t = e.tag;
          if ("tx" === e.type) {
            if (this._events.filter((e) => "tx" === e.type).length) return;
            t = "tx";
          } else if (this.listenerCount(e.event)) return;
          let r = this._subIds[t];
          r &&
            (delete this._subIds[t],
            r.then((e) => {
              this._subs[e] &&
                (delete this._subs[e], this.send("eth_unsubscribe", [e]));
            }));
        }
        destroy() {
          return C(this, void 0, void 0, function* () {
            this.websocket.readyState === E.CONNECTING &&
              (yield new Promise((e) => {
                (this.websocket.onopen = function () {
                  e(!0);
                }),
                  (this.websocket.onerror = function () {
                    e(!1);
                  });
              })),
              this.websocket.close(1e3);
          });
        }
      }
      var S = r(86160);
      let A = new p.Yd(f.i);
      class x extends m.r {
        detectNetwork() {
          var e, t, r, s;
          let i = Object.create(null, {
            detectNetwork: { get: () => super.detectNetwork },
          });
          return (
            (e = this),
            (t = void 0),
            (r = void 0),
            (s = function* () {
              let e = this.network;
              return (
                null == e &&
                  ((e = yield i.detectNetwork.call(this)) ||
                    A.throwError(
                      "no network detected",
                      p.Yd.errors.UNKNOWN_ERROR,
                      {}
                    ),
                  null == this._network &&
                    ((0, u.zG)(this, "_network", e),
                    this.emit("network", e, null))),
                e
              );
            }),
            new (r || (r = Promise))(function (i, n) {
              function a(e) {
                try {
                  c(s.next(e));
                } catch (e) {
                  n(e);
                }
              }
              function o(e) {
                try {
                  c(s.throw(e));
                } catch (e) {
                  n(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value) instanceof r
                      ? t
                      : new r(function (e) {
                          e(t);
                        })
                    ).then(a, o);
              }
              c((s = s.apply(e, t || [])).next());
            })
          );
        }
      }
      class P extends x {
        constructor(e, t) {
          A.checkAbstract(new.target, P),
            (e = (0, u.tu)(new.target, "getNetwork")(e)),
            super(
              (0, u.tu)(new.target, "getUrl")(
                e,
                (t = (0, u.tu)(new.target, "getApiKey")(t))
              ),
              e
            ),
            "string" == typeof t
              ? (0, u.zG)(this, "apiKey", t)
              : null != t &&
                Object.keys(t).forEach((e) => {
                  (0, u.zG)(this, e, t[e]);
                });
        }
        _startPending() {
          A.warn("WARNING: API provider does not support pending filters");
        }
        isCommunityResource() {
          return !1;
        }
        getSigner(e) {
          return A.throwError(
            "API provider does not support signing",
            p.Yd.errors.UNSUPPORTED_OPERATION,
            { operation: "getSigner" }
          );
        }
        listAccounts() {
          return Promise.resolve([]);
        }
        static getApiKey(e) {
          return e;
        }
        static getUrl(e, t) {
          return A.throwError(
            "not implemented; sub-classes must override getUrl",
            p.Yd.errors.NOT_IMPLEMENTED,
            { operation: "getUrl" }
          );
        }
      }
      let R = new p.Yd(f.i),
        M = "84842078b09946638c03157f83405213";
      class L extends N {
        constructor(e, t) {
          let r = new O(e, t),
            s = r.connection;
          s.password &&
            R.throwError(
              "INFURA WebSocket project secrets unsupported",
              p.Yd.errors.UNSUPPORTED_OPERATION,
              { operation: "InfuraProvider.getWebSocketProvider()" }
            ),
            super(s.url.replace(/^http/i, "ws").replace("/v3/", "/ws/v3/"), e),
            (0, u.zG)(this, "apiKey", r.projectId),
            (0, u.zG)(this, "projectId", r.projectId),
            (0, u.zG)(this, "projectSecret", r.projectSecret);
        }
        isCommunityResource() {
          return this.projectId === M;
        }
      }
      class O extends P {
        static getWebSocketProvider(e, t) {
          return new L(e, t);
        }
        static getApiKey(e) {
          let t = { apiKey: M, projectId: M, projectSecret: null };
          return (
            null == e ||
              ("string" == typeof e
                ? (t.projectId = e)
                : null != e.projectSecret
                ? (R.assertArgument(
                    "string" == typeof e.projectId,
                    "projectSecret requires a projectId",
                    "projectId",
                    e.projectId
                  ),
                  R.assertArgument(
                    "string" == typeof e.projectSecret,
                    "invalid projectSecret",
                    "projectSecret",
                    "[REDACTED]"
                  ),
                  (t.projectId = e.projectId),
                  (t.projectSecret = e.projectSecret))
                : e.projectId && (t.projectId = e.projectId),
              (t.apiKey = t.projectId)),
            t
          );
        }
        static getUrl(e, t) {
          let r = null;
          switch (e ? e.name : "unknown") {
            case "homestead":
              r = "mainnet.infura.io";
              break;
            case "goerli":
              r = "goerli.infura.io";
              break;
            case "sepolia":
              r = "sepolia.infura.io";
              break;
            case "matic":
              r = "polygon-mainnet.infura.io";
              break;
            case "maticmum":
              r = "polygon-mumbai.infura.io";
              break;
            case "optimism":
              r = "optimism-mainnet.infura.io";
              break;
            case "optimism-goerli":
              r = "optimism-goerli.infura.io";
              break;
            case "arbitrum":
              r = "arbitrum-mainnet.infura.io";
              break;
            case "arbitrum-goerli":
              r = "arbitrum-goerli.infura.io";
              break;
            default:
              R.throwError(
                "unsupported network",
                p.Yd.errors.INVALID_ARGUMENT,
                { argument: "network", value: e }
              );
          }
          let s = {
            allowGzip: !0,
            url: "https://" + r + "/v3/" + t.projectId,
            throttleCallback: (e, r) => (
              t.projectId === M && (0, S.vh)(), Promise.resolve(!0)
            ),
          };
          return (
            null != t.projectSecret &&
              ((s.user = ""), (s.password = t.projectSecret)),
            s
          );
        }
        isCommunityResource() {
          return this.projectId === M;
        }
      }
      var T = r(58789);
      let D = {
        signMessage: async (e, t, r) => {
          if (!t) throw Error("signMessage - provider is undefined");
          let s = d.A7(e) ? e : d.Dv(h.Y0(e));
          return await t.request({ method: "personal_sign", params: [s, r] });
        },
        estimateGas: async (e, t, r, s) => {
          if (!t) throw Error("estimateGas - provider is undefined");
          if (!r) throw Error("estimateGas - address is undefined");
          if (e.chainNamespace && "eip155" !== e.chainNamespace)
            throw Error("estimateGas - chainNamespace is not eip155");
          let i = { from: e.address, to: e.to, data: e.data, type: 0 },
            n = new y(t, s).getSigner(r);
          return (await n.estimateGas(i)).toBigInt();
        },
        sendTransaction: async (e, t, r, s) => {
          if (!t) throw Error("sendTransaction - provider is undefined");
          if (!r) throw Error("sendTransaction - address is undefined");
          if (e.chainNamespace && "eip155" !== e.chainNamespace)
            throw Error("sendTransaction - chainNamespace is not eip155");
          let i = {
              to: e.to,
              value: e.value,
              gasLimit: e.gas,
              gasPrice: e.gasPrice,
              data: e.data,
              type: 0,
            },
            n = new y(t, s).getSigner(r),
            a = await n.sendTransaction(i),
            o = await a.wait();
          return o?.blockHash || null;
        },
        writeContract: async (e, t, r, s) => {
          if (!t) throw Error("writeContract - provider is undefined");
          if (!r) throw Error("writeContract - address is undefined");
          let i = new y(t, s).getSigner(r),
            n = new w.CH(e.tokenAddress, e.abi, i);
          if (!n || !e.method) throw Error("Contract method is undefined");
          let a = n[e.method];
          if (a) return await a(e.receiverAddress, e.tokenAmount);
          throw Error("Contract method is undefined");
        },
        getEnsAddress: async (e, t) => {
          try {
            let r = Number(t.getCaipNetwork()?.id),
              i = null,
              n = !1;
            if (
              ((0, s.oL)(e) && (n = (await t?.resolveReownName(e)) || !1),
              1 === r)
            ) {
              let t = new O("mainnet");
              i = await t.resolveName(e);
            }
            return i || n || !1;
          } catch {
            return !1;
          }
        },
        getEnsAvatar: async (e, t) => {
          if (1 === t) {
            let t = new O("mainnet");
            return (await t.getAvatar(e)) || !1;
          }
          return !1;
        },
        parseUnits: (e, t) => T.vz(e, "gwei").toBigInt(),
        formatUnits: T.bM,
      };
      var j = r(37099),
        U = r(86080);
      class K {
        constructor() {}
        static getInstance({ projectId: e, chainId: t, onTimeout: r }) {
          return (
            K.instance ||
              (K.instance = new o.Sd({
                projectId: e,
                chainId: t,
                onTimeout: r,
              })),
            K.instance
          );
        }
      }
      class W {
        createEthersConfig(e) {
          let t, r;
          if (!e.metadata) return;
          let s = { metadata: e.metadata };
          return (
            !1 !== e.enableInjected &&
              (s.injected =
                t ||
                ("undefined" != typeof window && window.ethereum
                  ? (t = window.ethereum)
                  : void 0)),
            !1 !== e.enableCoinbase &&
              (s.coinbase =
                r ||
                ("undefined" != typeof window
                  ? (r = new U.jp({
                      appName: e?.metadata?.name,
                      appLogoUrl: e?.metadata?.icons[0],
                      appChainIds: e.networks?.map((e) => e.id) || [1, 84532],
                    }).makeWeb3Provider({
                      options: e.coinbasePreference ?? "all",
                    }))
                  : void 0)),
            (s.EIP6963 = !1 !== e.enableEIP6963),
            s
          );
        }
        constructor() {
          (this.appKit = void 0),
            (this.EIP6963Providers = []),
            (this.options = void 0),
            (this.caipNetworks = []),
            (this.chainNamespace = s.bq.CHAIN.EVM),
            (this.siweControllerClient = this.options?.siweConfig),
            (this.tokens = c.gk.getCaipTokens(this.options?.tokens)),
            (this.defaultCaipNetwork = void 0),
            (this.adapterType = "ethers"),
            (this.providerHandlers = null),
            i.RY.subscribeKey("activeCaipNetwork", (e) => {
              let t = this.appKit?.getCaipAddress(this.chainNamespace),
                r = t?.startsWith("eip155:"),
                s = e?.chainNamespace === this.chainNamespace;
              r &&
                s &&
                t &&
                (this.syncBalance(i.j1.getPlainAddress(t), e),
                this.syncAccount({
                  address: i.j1.getPlainAddress(t),
                  caipNetwork: e,
                }));
            }),
            i.RY.subscribeKey("activeCaipAddress", (e) => {
              let t = e?.startsWith("eip155:"),
                r = i.RY.state.activeCaipNetwork,
                s = r?.chainNamespace === this.chainNamespace;
              t &&
                (s && this.syncBalance(i.j1.getPlainAddress(e), r),
                this.syncAccount({ address: i.j1.getPlainAddress(e) }));
            }),
            i.Ni.subscribeKey(
              "shouldUpdateToAddress",
              (e) => {
                e?.startsWith("0x") && this.syncAccount({ address: e });
              },
              this.chainNamespace
            );
        }
        construct(e, t) {
          (this.appKit = e),
            (this.options = t),
            (this.caipNetworks = t.networks),
            (this.defaultCaipNetwork = t.defaultNetwork
              ? c.fZ.extendCaipNetwork(t.defaultNetwork, {
                  customNetworkImageUrls: t.chainImages,
                  projectId: t.projectId,
                })
              : this.caipNetworks[0]),
            (this.tokens = c.gk.getCaipTokens(t.tokens)),
            (this.ethersConfig = this.createEthersConfig(t)),
            (this.networkControllerClient = {
              switchCaipNetwork: async (e) => {
                if (e?.id)
                  try {
                    await this.switchNetwork(e);
                  } catch (e) {
                    throw Error(
                      "networkControllerClient:switchCaipNetwork - unable to switch chain"
                    );
                  }
              },
              getApprovedCaipNetworksData: async () =>
                this.getApprovedCaipNetworksData(),
            }),
            (this.connectionControllerClient = {
              connectWalletConnect: async (e) => {
                await this.appKit?.universalAdapter?.connectionControllerClient?.connectWalletConnect?.(
                  e
                );
              },
              connectExternal: async ({ id: e, info: t, provider: r }) => {
                this.appKit?.setClientId(null);
                let s = {
                  [c.bq.INJECTED_CONNECTOR_ID]: {
                    getProvider: () => this.ethersConfig?.injected,
                    providerType: "injected",
                  },
                  [c.bq.EIP6963_CONNECTOR_ID]: {
                    getProvider: () => r,
                    providerType: "eip6963",
                  },
                  [c.bq.COINBASE_SDK_CONNECTOR_ID]: {
                    getProvider: () => this.ethersConfig?.coinbase,
                    providerType: "coinbase",
                  },
                  [c.bq.AUTH_CONNECTOR_ID]: {
                    getProvider: () => this.authProvider,
                    providerType: "w3mAuth",
                  },
                }[e];
                if (!s) throw Error(`Unsupported connector ID: ${e}`);
                let i = s.getProvider();
                if (!i) throw Error(`Provider for connector ${e} is undefined`);
                try {
                  i &&
                    e !== c.bq.AUTH_CONNECTOR_ID &&
                    (await i.request({ method: "eth_requestAccounts" })),
                    await this.setProvider(i, s.providerType, t?.name);
                } catch (t) {
                  if (e === c.bq.COINBASE_SDK_CONNECTOR_ID)
                    throw Error(t.message);
                }
              },
              checkInstalled: (e) =>
                e
                  ? (!this.ethersConfig?.injected || !!window?.ethereum) &&
                    e.some((e) => !!window.ethereum?.[String(e)])
                  : !!window.ethereum,
              disconnect: async () => {
                let e = j.h.getProvider("eip155"),
                  t = j.h.state.providerIds.eip155;
                if (
                  (this.appKit?.setClientId(null),
                  this.options?.siweConfig?.options?.signOutOnDisconnect)
                ) {
                  let { SIWEController: e } = await r
                    .e(196)
                    .then(r.bind(r, 54166));
                  await e.signOut();
                }
                let i = {
                  [c.bq.WALLET_CONNECT_CONNECTOR_ID]: async () =>
                    await this.appKit?.universalAdapter?.connectionControllerClient?.disconnect(),
                  coinbaseWalletSDK: async () =>
                    await this.appKit?.universalAdapter?.connectionControllerClient?.disconnect(),
                  [c.bq.AUTH_CONNECTOR_ID]: async () => {
                    await this.authProvider?.disconnect();
                  },
                  [c.bq.EIP6963_CONNECTOR_ID]: async () => {
                    e && (await this.revokeProviderPermissions(e));
                  },
                  [c.bq.INJECTED_CONNECTOR_ID]: async () => {
                    e &&
                      (e.emit("disconnect"),
                      await this.revokeProviderPermissions(e));
                  },
                }[t];
                i
                  ? await i()
                  : console.warn(
                      `No disconnect function found for provider type: ${t}`
                    ),
                  s.mr.removeItem(s.uJ.WALLET_ID),
                  this.appKit?.resetAccount(this.chainNamespace);
              },
              signMessage: async (e) => {
                let t = j.h.getProvider(this.chainNamespace),
                  r = i.RY.state.activeCaipAddress,
                  s = i.j1.getPlainAddress(r);
                if (!s) throw Error("Address is undefined");
                if (!t) throw Error("Provider is undefined");
                return await D.signMessage(e, t, s);
              },
              parseUnits: D.parseUnits,
              formatUnits: D.formatUnits,
              estimateGas: async (e) => {
                if (e.chainNamespace && "eip155" !== e.chainNamespace)
                  throw Error(
                    `Invalid chain namespace - Expected eip155, got ${e.chainNamespace}`
                  );
                let t = j.h.getProvider("eip155"),
                  r = i.RY.state.activeCaipAddress,
                  s = i.j1.getPlainAddress(r),
                  n = this.appKit?.getCaipNetwork();
                if (!s) throw Error("Address is undefined");
                if (!t) throw Error("Provider is undefined");
                return await D.estimateGas(e, t, s, Number(n?.id));
              },
              sendTransaction: async (e) => {
                if (e.chainNamespace && "eip155" !== e.chainNamespace)
                  throw Error(
                    `Invalid chain namespace - Expected eip155, got ${e.chainNamespace}`
                  );
                let t = j.h.getProvider("eip155"),
                  r = i.RY.state.activeCaipAddress,
                  s = i.j1.getPlainAddress(r),
                  n = this.appKit?.getCaipNetwork();
                if (!s) throw Error("Address is undefined");
                if (!t) throw Error("Provider is undefined");
                return await D.sendTransaction(e, t, s, Number(n?.id));
              },
              writeContract: async (e) => {
                let t = j.h.getProvider("eip155"),
                  r = i.RY.state.activeCaipAddress,
                  s = i.j1.getPlainAddress(r),
                  n = this.appKit?.getCaipNetwork();
                if (!s) throw Error("Address is undefined");
                if (!t) throw Error("Provider is undefined");
                return await D.writeContract(e, t, s, Number(n?.id));
              },
              getEnsAddress: async (e) =>
                !!this.appKit && (await D.getEnsAddress(e, this.appKit)),
              getEnsAvatar: async (e) => {
                let t = this.appKit?.getCaipNetwork();
                return await D.getEnsAvatar(e, Number(t?.id));
              },
              grantPermissions: async (e) => {
                let t = j.h.getProvider(s.bq.CHAIN.EVM);
                if (!t) throw Error("Provider is undefined");
                return await t.request({
                  method: "wallet_grantPermissions",
                  params: e,
                });
              },
              revokePermissions: async (e) => {
                let t = j.h.getProvider(s.bq.CHAIN.EVM);
                if (!t) throw Error("Provider is undefined");
                return await t.request({
                  method: "wallet_revokePermissions",
                  params: [e],
                });
              },
            }),
            i.RY.state.chains.set(this.chainNamespace, {
              chainNamespace: this.chainNamespace,
              connectionControllerClient: this.connectionControllerClient,
              networkControllerClient: this.networkControllerClient,
              adapterType: this.adapterType,
              caipNetworks: this.caipNetworks,
            }),
            this.ethersConfig && this.syncConnectors(this.ethersConfig),
            "undefined" != typeof window && this.listenConnectors(!0),
            this.appKit?.setEIP6963Enabled(this.ethersConfig?.EIP6963);
          let n =
              t.features?.email === void 0
                ? i.bq.DEFAULT_FEATURES.email
                : t.features?.email,
            a = t.features?.socials
              ? t.features?.socials?.length > 0
              : i.bq.DEFAULT_FEATURES.socials;
          (n || a) && this.syncAuthConnector(this.options.projectId),
            this.ethersConfig && this.checkActiveProviders(this.ethersConfig),
            this.syncRequestedNetworks(this.caipNetworks);
        }
        subscribeState(e) {
          return this.appKit?.subscribeState((t) => e(t));
        }
        async disconnect() {
          await this.connectionControllerClient?.disconnect();
        }
        async revokeProviderPermissions(e) {
          try {
            (await e.request({ method: "wallet_getPermissions" })).find(
              (e) => "eth_accounts" === e.parentCapability
            ) &&
              (await e.request({
                method: "wallet_revokePermissions",
                params: [{ eth_accounts: {} }],
              }));
          } catch (e) {
            console.info(
              "Could not revoke permissions from wallet. Disconnecting...",
              e
            );
          }
        }
        getApprovedCaipNetworksData() {
          return new Promise((e) => {
            let t = s.mr.getItem(s.uJ.WALLET_ID);
            if (!t)
              throw Error("No wallet id found to get approved networks data");
            e(
              {
                [c.bq.AUTH_CONNECTOR_ID]: {
                  supportsAllNetworks: !0,
                  approvedCaipNetworkIds: c.CK.WalletConnectRpcChainIds.map(
                    (e) => `${c.bq.EIP155}:${e}`
                  ),
                },
              }[t] || { supportsAllNetworks: !0, approvedCaipNetworkIds: [] }
            );
          });
        }
        checkActiveProviders(e) {
          let t = s.mr.getItem(s.uJ.WALLET_ID),
            r = s.mr.getItem(s.uJ.WALLET_NAME);
          if (!t) return;
          let i = {
            [c.bq.INJECTED_CONNECTOR_ID]: { provider: e.injected },
            [c.bq.COINBASE_SDK_CONNECTOR_ID]: { provider: e.coinbase },
            [c.bq.EIP6963_CONNECTOR_ID]: {
              provider: this.EIP6963Providers.find((e) => e.info.name === r)
                ?.provider,
            },
          }[t];
          i?.provider &&
            (this.setProvider(i.provider, t),
            this.setupProviderListeners(i.provider, t));
        }
        async setProvider(e, t, r) {
          if ("w3mAuth" === t) this.setAuthProvider();
          else if (
            (s.mr.setItem(s.uJ.WALLET_ID, t),
            r && s.mr.setItem(s.uJ.WALLET_NAME, r),
            e)
          ) {
            let { addresses: r, chainId: s } = await a.getUserInfo(e),
              i = r?.[0],
              n =
                this.caipNetworks.find((e) => e.id === s) ??
                this.caipNetworks[0],
              o = `${this.chainNamespace}:${n?.id}:${i}`;
            i &&
              n &&
              (this.appKit?.setCaipNetwork(n),
              this.appKit?.setCaipAddress(o, this.chainNamespace),
              j.h.setProviderId("eip155", t),
              j.h.setProvider("eip155", e),
              this.appKit?.setStatus("connected", this.chainNamespace),
              this.appKit?.setAllAccounts(
                r.map((e) => ({ address: e, type: "eoa" })),
                this.chainNamespace
              ));
          }
        }
        async setAuthProvider() {
          if (
            (s.mr.setItem(s.uJ.WALLET_ID, c.bq.AUTH_CONNECTOR_ID),
            this.authProvider)
          ) {
            this.appKit?.setLoading(!0);
            let {
                address: e,
                chainId: t,
                smartAccountDeployed: r,
                preferredAccountType: s,
                accounts: i = [],
              } = await this.authProvider.connect({
                chainId: Number(
                  this.appKit?.getCaipNetwork()?.id || this.caipNetworks[0]?.id
                ),
              }),
              { smartAccountEnabledNetworks: n } =
                await this.authProvider.getSmartAccountEnabledNetworks();
            this.appKit?.setSmartAccountEnabledNetworks(n, this.chainNamespace),
              e &&
                t &&
                (this.appKit?.setAllAccounts(
                  i.length > 0 ? i : [{ address: e, type: s }],
                  this.chainNamespace
                ),
                this.appKit?.setStatus("connected", this.chainNamespace),
                this.appKit?.setCaipAddress(
                  `${this.chainNamespace}:${t}:${e}`,
                  this.chainNamespace
                ),
                this.appKit?.setPreferredAccountType(s, this.chainNamespace),
                this.appKit?.setSmartAccountDeployed(!!r, this.chainNamespace),
                j.h.setProvider("eip155", this.authProvider),
                j.h.setProviderId("eip155", c.bq.AUTH_CONNECTOR_ID),
                this.setupProviderListeners(this.authProvider, "w3mAuth"),
                this.watchModal()),
              this.appKit?.setLoading(!1);
          }
        }
        watchModal() {
          this.authProvider &&
            this.subscribeState((e) => {
              e.open || this.authProvider?.rejectRpcRequests();
            });
        }
        setupProviderListeners(e, t) {
          let r = () => {
              s.mr.removeItem(s.uJ.WALLET_ID), this.removeListeners(e);
            },
            i = (e) => {
              let r = e?.[0];
              r
                ? (this.appKit?.setCaipAddress(r, this.chainNamespace),
                  t === c.bq.EIP6963_CONNECTOR_ID &&
                    this.appKit?.setAllAccounts(
                      e.map((e) => ({ address: e, type: "eoa" })),
                      this.chainNamespace
                    ))
                : (t === c.bq.EIP6963_CONNECTOR_ID &&
                    this.appKit?.setAllAccounts([], this.chainNamespace),
                  s.mr.removeItem(s.uJ.WALLET_ID),
                  this.appKit?.resetAccount(this.chainNamespace));
            },
            n = (e) => {
              let t = "string" == typeof e ? a.hexStringToNumber(e) : Number(e),
                r = this.caipNetworks.find((e) => e.id === t),
                s = this.appKit?.getCaipNetwork();
              (s && s?.id === r?.id) || this.appKit?.setCaipNetwork(r);
            };
          t === c.bq.AUTH_CONNECTOR_ID
            ? this.setupAuthListeners(e)
            : (e.on("disconnect", r),
              e.on("accountsChanged", i),
              e.on("chainChanged", n)),
            (this.providerHandlers = {
              disconnect: r,
              accountsChanged: i,
              chainChanged: n,
            });
        }
        removeListeners(e) {
          this.providerHandlers &&
            (e.removeListener("disconnect", this.providerHandlers.disconnect),
            e.removeListener(
              "accountsChanged",
              this.providerHandlers.accountsChanged
            ),
            e.removeListener(
              "chainChanged",
              this.providerHandlers.chainChanged
            ),
            (this.providerHandlers = null));
        }
        setupAuthListeners(e) {
          e.onRpcRequest((e) => {
            o.$D.checkIfRequestExists(e)
              ? o.$D.checkIfRequestIsSafe(e) ||
                this.appKit?.handleUnsafeRPCRequest()
              : this.handleInvalidAuthRequest();
          }),
            e.onRpcError(() => this.handleAuthRpcError()),
            e.onRpcSuccess((e, t) => this.handleAuthRpcSuccess(e, t)),
            e.onNotConnected(() => this.handleAuthNotConnected()),
            e.onConnect(({ preferredAccountType: e }) =>
              this.handleAuthIsConnected(e)
            ),
            e.onSetPreferredAccount(({ address: e, type: t }) => {
              e && this.handleAuthSetPreferredAccount(e, t);
            });
        }
        handleInvalidAuthRequest() {
          this.appKit?.open(),
            setTimeout(() => {
              this.appKit?.showErrorMessage(
                o.y_.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE
              );
            }, 300);
        }
        handleAuthRpcError() {
          this.appKit?.isOpen() &&
            (this.appKit?.isTransactionStackEmpty()
              ? this.appKit?.close()
              : this.appKit?.popTransactionStack(!0));
        }
        handleAuthRpcSuccess(e, t) {
          o.$D.checkIfRequestIsSafe(t) ||
            (this.appKit?.isTransactionStackEmpty()
              ? this.appKit?.close()
              : this.appKit?.popTransactionStack());
        }
        handleAuthNotConnected() {
          this.appKit?.setCaipAddress(void 0, this.chainNamespace);
        }
        handleAuthIsConnected(e) {
          this.appKit?.getActiveChainNamespace() === this.chainNamespace &&
            this.appKit?.setPreferredAccountType(e, this.chainNamespace);
        }
        handleAuthSetPreferredAccount(e, t) {
          if (!e) return;
          this.appKit?.setLoading(!0);
          let r = this.appKit?.getCaipNetwork()?.id;
          this.appKit?.setCaipAddress(
            `${this.chainNamespace}:${r}:${e}`,
            this.chainNamespace
          ),
            this.appKit?.setStatus("connected", this.chainNamespace),
            this.appKit?.setPreferredAccountType(t, this.chainNamespace),
            this.syncAccount({ address: e }).then(() =>
              this.appKit?.setLoading(!1)
            ),
            this.appKit?.setLoading(!1);
        }
        async syncReownName(e) {
          try {
            let t = await this.appKit?.getReownName(e);
            if (t?.[0]) {
              let e = t[0];
              this.appKit?.setProfileName(e.name, this.chainNamespace);
            } else this.appKit?.setProfileName(null, this.chainNamespace);
          } catch {
            this.appKit?.setProfileName(null, this.chainNamespace);
          }
        }
        async syncAccount({ address: e, caipNetwork: t }) {
          let r = t || this.appKit?.getCaipNetwork(),
            i = this.appKit?.getPreferredAccountType(),
            n = r?.chainNamespace === s.bq.CHAIN.EVM,
            a = r?.id;
          e
            ? n &&
              (this.appKit?.setPreferredAccountType(i, this.chainNamespace),
              this.appKit?.setCaipAddress(
                `${this.chainNamespace}:${a}:${e}`,
                this.chainNamespace
              ),
              this.syncConnectedWalletInfo(),
              r?.blockExplorers &&
                this.appKit?.setAddressExplorerUrl(
                  `${r.blockExplorers.default.url}/address/${e}`,
                  this.chainNamespace
                ),
              await Promise.all([
                this.syncProfile(e),
                this.appKit?.setApprovedCaipNetworksData(this.chainNamespace),
              ]))
            : (this.appKit?.resetWcConnection(),
              this.appKit?.resetNetwork(this.chainNamespace),
              this.appKit?.setAllAccounts([], this.chainNamespace));
        }
        async syncProfile(e) {
          let t = this.appKit?.getCaipNetwork();
          try {
            let t = await this.appKit?.fetchIdentity({ address: e }),
              r = t?.name,
              s = t?.avatar;
            this.appKit?.setProfileName(r, this.chainNamespace),
              this.appKit?.setProfileImage(s, this.chainNamespace),
              r || (await this.syncReownName(e));
          } catch {
            if (t?.id === 1) {
              let t = new O("mainnet"),
                r = await t.lookupAddress(e),
                s = await t.getAvatar(e);
              r
                ? this.appKit?.setProfileName(r, this.chainNamespace)
                : await this.syncReownName(e),
                s && this.appKit?.setProfileImage(s, this.chainNamespace);
            } else
              await this.syncReownName(e),
                this.appKit?.setProfileImage(null, this.chainNamespace);
          }
        }
        async syncBalance(e, t) {
          let r = this.appKit
              ?.getCaipNetworks(t.chainNamespace)
              .find((e) => e.id === t.id),
            i = t.chainNamespace === s.bq.CHAIN.EVM;
          if (t && r && i) {
            let r = new m.r(t.rpcUrls.default.http[0], {
              chainId: t.id,
              name: t.name,
            });
            if (r) {
              let s = await r.getBalance(e),
                i = T.dF(s);
              this.appKit?.setBalance(
                i,
                t.nativeCurrency.symbol,
                this.chainNamespace
              );
            }
          }
        }
        syncConnectedWalletInfo() {
          let e = s.mr.getItem(s.uJ.WALLET_ID),
            t = j.h.state.providerIds.eip155;
          if (t === c.bq.EIP6963_CONNECTOR_ID) {
            if (e) {
              let t = this.EIP6963Providers.find((t) => t.info.name === e);
              t &&
                this.appKit?.setConnectedWalletInfo(
                  { ...t.info },
                  this.chainNamespace
                );
            }
          } else if (t === c.bq.WALLET_CONNECT_CONNECTOR_ID) {
            let e = j.h.getProvider("eip155");
            e?.session &&
              this.appKit?.setConnectedWalletInfo(
                {
                  ...e.session.peer.metadata,
                  name: e.session.peer.metadata.name,
                  icon: e.session.peer.metadata.icons?.[0],
                },
                this.chainNamespace
              );
          } else if (t === c.bq.COINBASE_SDK_CONNECTOR_ID) {
            let e = this.appKit
              ?.getConnectors()
              .find((e) => e.id === c.bq.COINBASE_SDK_CONNECTOR_ID);
            this.appKit?.setConnectedWalletInfo(
              {
                name: "Coinbase Wallet",
                icon: this.appKit?.getConnectorImage(e),
              },
              this.chainNamespace
            );
          } else
            e &&
              this.appKit?.setConnectedWalletInfo(
                { name: e },
                this.chainNamespace
              );
        }
        syncRequestedNetworks(e) {
          [...new Set(e.map((e) => e.chainNamespace))].forEach((t) => {
            this.appKit?.setRequestedCaipNetworks(
              e.filter((e) => e.chainNamespace === t),
              t
            );
          });
        }
        async switchNetwork(e) {
          async function t(t) {
            try {
              await t.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: a.numberToHexString(e.id) }],
              });
            } catch (r) {
              if (
                r.code === l.T.ERROR_CODE_UNRECOGNIZED_CHAIN_ID ||
                r.code === l.T.ERROR_CODE_DEFAULT ||
                r?.data?.originalError?.code ===
                  l.T.ERROR_CODE_UNRECOGNIZED_CHAIN_ID
              )
                await a.addEthereumChain(t, e);
              else throw Error("Chain is not supported");
            }
          }
          let r = j.h.getProvider("eip155"),
            s = j.h.state.providerIds.eip155;
          if (r)
            switch (s) {
              case c.bq.WALLET_CONNECT_CONNECTOR_ID:
                this.appKit?.universalAdapter?.networkControllerClient.switchCaipNetwork(
                  e
                );
                break;
              case c.bq.INJECTED_CONNECTOR_ID:
              case c.bq.EIP6963_CONNECTOR_ID:
              case c.bq.COINBASE_SDK_CONNECTOR_ID:
                r && (await t(r));
                break;
              case c.bq.AUTH_CONNECTOR_ID:
                if (this.authProvider)
                  try {
                    this.appKit?.setLoading(!0);
                    let { chainId: t } = await this.authProvider.switchNetwork(
                        e.id
                      ),
                      { address: r, preferredAccountType: s } =
                        await this.authProvider.connect({ chainId: e.id }),
                      i = `${this.chainNamespace}:${t}:${r}`;
                    this.appKit?.setCaipNetwork(e),
                      this.appKit?.setCaipAddress(i, this.chainNamespace),
                      this.appKit?.setPreferredAccountType(
                        s,
                        this.chainNamespace
                      ),
                      await this.syncAccount({ address: r }),
                      this.appKit?.setLoading(!1);
                  } catch {
                    throw Error("Switching chain failed");
                  } finally {
                    this.appKit?.setLoading(!1);
                  }
                break;
              default:
                throw Error("Unsupported provider type");
            }
        }
        syncConnectors(e) {
          let t = [];
          if (e.injected) {
            let e = c.CK.ConnectorTypesMap[c.bq.INJECTED_CONNECTOR_ID];
            e &&
              t.push({
                id: c.bq.INJECTED_CONNECTOR_ID,
                explorerId:
                  c.CK.ConnectorExplorerIds[c.bq.INJECTED_CONNECTOR_ID],
                imageId: c.CK.ConnectorImageIds[c.bq.INJECTED_CONNECTOR_ID],
                imageUrl:
                  this.options?.connectorImages?.[c.bq.INJECTED_CONNECTOR_ID],
                name: c.CK.ConnectorNamesMap[c.bq.INJECTED_CONNECTOR_ID],
                type: e,
                chain: this.chainNamespace,
              });
          }
          e.coinbase &&
            t.push({
              id: c.bq.COINBASE_SDK_CONNECTOR_ID,
              explorerId:
                c.CK.ConnectorExplorerIds[c.bq.COINBASE_SDK_CONNECTOR_ID],
              imageId: c.CK.ConnectorImageIds[c.bq.COINBASE_SDK_CONNECTOR_ID],
              imageUrl:
                this.options?.connectorImages?.[c.bq.COINBASE_SDK_CONNECTOR_ID],
              name: c.CK.ConnectorNamesMap[c.bq.COINBASE_SDK_CONNECTOR_ID],
              type: "EXTERNAL",
              chain: this.chainNamespace,
            }),
            this.appKit?.setConnectors(t);
        }
        async syncAuthConnector(e, t = !1) {
          if (t || "undefined" != typeof window) {
            (this.authProvider = K.getInstance({
              projectId: e,
              onTimeout: () => {
                i.AlertController.open(
                  c.jD.ALERT_ERRORS.INVALID_APP_CONFIGURATION_SOCIALS,
                  "error"
                );
              },
            })),
              this.appKit?.addConnector({
                id: c.bq.AUTH_CONNECTOR_ID,
                type: "AUTH",
                name: "Auth",
                provider: this.authProvider,
                chain: this.chainNamespace,
              }),
              this.appKit?.setLoading(!0);
            let t = this.authProvider.getLoginEmailUsed();
            if ((this.appKit?.setLoading(t), t)) {
              let { isConnected: e } = await this.authProvider.isConnected();
              e ? await this.setAuthProvider() : this.appKit?.setLoading(!1);
            }
          }
        }
        eip6963EventHandler(e) {
          if (e.detail) {
            let { info: t, provider: r } = e.detail,
              s = this.appKit?.getConnectors(),
              i = s?.find((e) => e.name === t.name),
              n =
                s?.find((e) => e.id === c.bq.COINBASE_SDK_CONNECTOR_ID) &&
                e.detail.info.rdns ===
                  c.bq.CONNECTOR_RDNS_MAP[c.bq.COINBASE_SDK_CONNECTOR_ID];
            if (!i && !n) {
              let e = c.CK.ConnectorTypesMap[c.bq.EIP6963_CONNECTOR_ID];
              e &&
                (this.appKit?.addConnector({
                  id: c.bq.EIP6963_CONNECTOR_ID,
                  type: e,
                  imageUrl:
                    t.icon ??
                    this.options?.connectorImages?.[c.bq.EIP6963_CONNECTOR_ID],
                  name: t.name,
                  provider: r,
                  info: t,
                  chain: this.chainNamespace,
                }),
                this.EIP6963Providers.push({ provider: r, info: t }));
            }
          }
        }
        listenConnectors(e) {
          if ("undefined" != typeof window && e) {
            let e = this.eip6963EventHandler.bind(this);
            window.addEventListener(c.bq.EIP6963_ANNOUNCE_EVENT, e),
              window.dispatchEvent(new Event(c.bq.EIP6963_REQUEST_EVENT));
          }
        }
      }
    },
    29428: (e, t, r) => {
      "use strict";
      r.d(t, { RJ0: () => s });
      let s = {
        formatters: void 0,
        fees: void 0,
        serializers: void 0,
        id: 1,
        name: "Ethereum",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://cloudflare-eth.com"] } },
        blockExplorers: {
          default: {
            name: "Etherscan",
            url: "https://etherscan.io",
            apiUrl: "https://api.etherscan.io/api",
          },
        },
        contracts: {
          ensRegistry: {
            address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          },
          ensUniversalResolver: {
            address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
            blockCreated: 0x125db65,
          },
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 0xdb04c1,
          },
        },
      };
      function i(e) {
        return { formatters: void 0, fees: void 0, serializers: void 0, ...e };
      }
      i({
        id: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
        name: "Solana",
        network: "solana-mainnet",
        nativeCurrency: { name: "Solana", symbol: "ETH", decimals: 9 },
        rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } },
        blockExplorers: {
          default: { name: "Solscan", url: "https://solscan.io" },
        },
        testnet: !1,
        chainNamespace: "solana",
        caipNetworkId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
      }),
        i({
          id: "EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
          name: "Solana Devnet",
          network: "solana-devnet",
          nativeCurrency: { name: "Solana", symbol: "ETH", decimals: 9 },
          rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } },
          blockExplorers: {
            default: { name: "Solscan", url: "https://solscan.io" },
          },
          testnet: !0,
          chainNamespace: "solana",
          caipNetworkId: "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
        }),
        i({
          id: "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
          name: "Solana Testnet",
          network: "solana-testnet",
          nativeCurrency: { name: "Solana", symbol: "ETH", decimals: 9 },
          rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } },
          blockExplorers: {
            default: { name: "Solscan", url: "https://solscan.io" },
          },
          testnet: !0,
          chainNamespace: "solana",
          caipNetworkId: "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
        });
    },
  },
]);
