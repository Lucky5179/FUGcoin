"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [714],
  {
    37714: (e, t, i) => {
      i.r(t), i.d(t, { W3mModal: () => h });
      var o = i(63685),
        a = i(30052),
        s = i(56545),
        r = i(57521);
      let n = (0, s.iv)`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;
      var l = i(94653),
        c = function (e, t, i, o) {
          var a,
            s = arguments.length,
            r =
              s < 3
                ? t
                : null === o
                ? (o = Object.getOwnPropertyDescriptor(t, i))
                : o;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            r = Reflect.decorate(e, t, i, o);
          else
            for (var n = e.length - 1; n >= 0; n--)
              (a = e[n]) &&
                (r = (s < 3 ? a(r) : s > 3 ? a(t, i, r) : a(t, i)) || r);
          return s > 3 && r && Object.defineProperty(t, i, r), r;
        };
      let d = "scroll-lock",
        h = class extends s.oi {
          constructor() {
            super(),
              (this.unsubscribe = []),
              (this.abortController = void 0),
              (this.open = o.IN.state.open),
              (this.caipAddress = o.RY.state.activeCaipAddress),
              (this.caipNetwork = o.RY.state.activeCaipNetwork),
              (this.isSiweEnabled = o.OptionsController.state.isSiweEnabled),
              (this.shake = o.IN.state.shake),
              this.initializeTheming(),
              o.ApiController.prefetch(),
              this.unsubscribe.push(
                o.IN.subscribeKey("open", (e) =>
                  e ? this.onOpen() : this.onClose()
                ),
                o.IN.subscribeKey("shake", (e) => (this.shake = e)),
                o.Ni.subscribeKey(
                  "siweStatus",
                  (e) => this.onSiweStatusChange(e),
                  "eip155"
                ),
                o.RY.subscribeKey("activeCaipNetwork", (e) =>
                  this.onNewNetwork(e)
                ),
                o.RY.subscribeKey("activeCaipAddress", (e) =>
                  this.onNewAddress(e)
                ),
                o.OptionsController.subscribeKey(
                  "isSiweEnabled",
                  (e) => (this.isSiweEnabled = e)
                )
              ),
              o.Xs.sendEvent({ type: "track", event: "MODAL_LOADED" });
          }
          disconnectedCallback() {
            this.unsubscribe.forEach((e) => e()),
              this.onRemoveKeyboardListener();
          }
          render() {
            return this.open
              ? (0, s.dy)`
          <wui-flex @click=${this.onOverlayClick.bind(
            this
          )} data-testid="w3m-modal-overlay">
            <wui-card
              shake="${this.shake}"
              role="alertdialog"
              aria-modal="true"
              tabindex="0"
              data-testid="w3m-modal-card"
            >
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
              <w3m-alertbar></w3m-alertbar>
            </wui-card>
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `
              : null;
          }
          async onOverlayClick(e) {
            e.target === e.currentTarget && (await this.handleClose());
          }
          async handleClose() {
            let e = "ConnectingSiwe" === o.RouterController.state.view,
              t = "ApproveTransaction" === o.RouterController.state.view;
            if (this.isSiweEnabled) {
              let { SIWEController: a } = await i.e(196).then(i.bind(i, 54166));
              "success" !== a.state.status && (e || t)
                ? o.IN.shake()
                : o.IN.close();
            } else o.IN.close();
          }
          initializeTheming() {
            let { themeVariables: e, themeMode: t } = o.ThemeController.state,
              i = a.UiHelperUtil.getColorTheme(t);
            (0, a.initializeTheming)(e, i);
          }
          onClose() {
            (this.open = !1),
              this.classList.remove("open"),
              this.onScrollUnlock(),
              o.SnackController.hide(),
              this.onRemoveKeyboardListener();
          }
          onOpen() {
            (this.open = !0),
              this.classList.add("open"),
              this.onScrollLock(),
              this.onAddKeyboardListener();
          }
          onScrollLock() {
            let e = document.createElement("style");
            (e.dataset.w3m = d),
              (e.textContent = `
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `),
              document.head.appendChild(e);
          }
          onScrollUnlock() {
            let e = document.head.querySelector(`style[data-w3m="${d}"]`);
            e && e.remove();
          }
          onAddKeyboardListener() {
            this.abortController = new AbortController();
            let e = this.shadowRoot?.querySelector("wui-card");
            e?.focus(),
              window.addEventListener(
                "keydown",
                (t) => {
                  if ("Escape" === t.key) this.handleClose();
                  else if ("Tab" === t.key) {
                    let { tagName: i } = t.target;
                    !i ||
                      i.includes("W3M-") ||
                      i.includes("WUI-") ||
                      e?.focus();
                  }
                },
                this.abortController
              );
          }
          onRemoveKeyboardListener() {
            this.abortController?.abort(), (this.abortController = void 0);
          }
          onSiweStatusChange(e) {
            "success" === e && o.IN.close();
          }
          async onNewAddress(e) {
            let t = this.caipAddress,
              a = t ? o.j1.getPlainAddress(t) : void 0,
              s = e ? o.j1.getPlainAddress(e) : void 0;
            if (((this.caipAddress = e), s && a !== s && this.isSiweEnabled))
              try {
                let { SIWEController: e } = await i
                    .e(196)
                    .then(i.bind(i, 54166)),
                  t = "success" === o.Ni.state.siweStatus;
                !a && s
                  ? this.onSiweNavigation()
                  : t &&
                    a &&
                    s &&
                    a !== s &&
                    e.state._client?.options.signOutOnAccountChange &&
                    (await e.signOut(), this.onSiweNavigation());
              } catch (e) {
                throw ((this.caipAddress = t), e);
              }
            s || o.IN.close();
          }
          async onNewNetwork(e) {
            if (!this.caipAddress) {
              (this.caipNetwork = e), o.RouterController.goBack();
              return;
            }
            let t = this.caipNetwork?.caipNetworkId?.toString(),
              a = e?.caipNetworkId?.toString();
            if (t && a && t !== a) {
              if (this.isSiweEnabled) {
                let { SIWEController: e } = await i
                  .e(196)
                  .then(i.bind(i, 54166));
                e.state._client?.options.signOutOnNetworkChange
                  ? (await e.signOut(), this.onSiweNavigation())
                  : o.RouterController.goBack();
              } else o.RouterController.goBack();
            }
            this.caipNetwork = e;
          }
          onSiweNavigation() {
            let e = o.RY.state.activeChain === l.bq.CHAIN.EVM;
            "success" !== o.Ni.state.siweStatus && e
              ? this.open
                ? o.RouterController.replace("ConnectingSiwe")
                : o.IN.open({ view: "ConnectingSiwe" })
              : o.RouterController.goBack();
          }
        };
      (h.styles = n),
        c([(0, r.SB)()], h.prototype, "open", void 0),
        c([(0, r.SB)()], h.prototype, "caipAddress", void 0),
        c([(0, r.SB)()], h.prototype, "caipNetwork", void 0),
        c([(0, r.SB)()], h.prototype, "isSiweEnabled", void 0),
        c([(0, r.SB)()], h.prototype, "shake", void 0),
        (h = c([(0, a.customElement)("w3m-modal")], h));
    },
  },
]);
