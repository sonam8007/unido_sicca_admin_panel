(this["webpackJsonpblack-dashboard-react"] =
  this["webpackJsonpblack-dashboard-react"] || []).push([
  [0],
  {
    100: function (e, a) {},
    101: function (e, a) {},
    102: function (e, a) {},
    103: function (e, a, t) {
      e.exports = t.p + "static/media/react-logo.eb6be414.png";
    },
    106: function (e, a, t) {
      e.exports = t(244);
    },
    123: function (e, a, t) {
      e.exports = t.p + "static/media/anime3.bd6820f1.png";
    },
    18: function (e, a) {
      var t = {
          layout: { padding: { left: 20, right: 20, top: 0, bottom: 0 } },
          maintainAspectRatio: !1,
          tooltips: {
            backgroundColor: "#fff",
            titleFontColor: "#333",
            bodyFontColor: "#666",
            bodySpacing: 8,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest",
          },
          legend: { position: "bottom", fillStyle: "#fff", display: !1 },
          scales: {
            yAxes: [
              {
                ticks: {
                  fontColor: "rgba(255,255,255,0.8)",
                  fontSize: 14,
                  beginAtZero: !0,
                  callback: function (e, a, t) {
                    return 0 === e ? "Litres" : e;
                  },
                  maxTicksLimit: 10,
                  padding: 5,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  drawTicks: !0,
                  drawBorder: !1,
                  display: !0,
                  color: "rgba(255,255,255,0.1)",
                  zeroLineColor: "rgba(255,255,255,0.1)",
                  zeroLineWidth: 1,
                },
                ticks: {
                  padding: 10,
                  fontColor: "rgba(255,255,255,0.8)",
                  fontSize: 16,
                },
              },
            ],
          },
        },
        r = {
          data: function (e) {
            var a = e.getContext("2d").createLinearGradient(0, 230, 0, 50);
            return (
              a.addColorStop(1, "rgba(29,140,248,0.2)"),
              a.addColorStop(0.4, "rgba(29,140,248,0.0)"),
              a.addColorStop(0, "rgba(29,140,248,0)"),
              {
                labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
                datasets: [
                  {
                    label: "Data",
                    fill: !0,
                    backgroundColor: a,
                    borderColor: "#1f8ef1",
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0,
                    pointBackgroundColor: "#1f8ef1",
                    pointBorderColor: "rgba(255,255,255,0)",
                    pointHoverBackgroundColor: "#1f8ef1",
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: [80, 100, 70, 80, 120, 80],
                  },
                ],
              }
            );
          },
          options: t,
        };
      e.exports = {
        chart1_2_options: t,
        bar1_2_options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  fontColor: "#bbb",
                  beginAtZero: !1,
                  callback: function (e, a, t) {
                    return 0 === e ? "Kwh" : e;
                  },
                  maxTicksLimit: 5,
                },
              },
            ],
            xAxes: [{ ticks: { fontColor: "#bbb" }, barThickness: 20 }],
          },
          legend: { display: !1 },
        },
        pump_options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  fontColor: "#bbb",
                  beginAtZero: !0,
                  maxTicksLimit: 5,
                  padding: 10,
                  min: 0,
                  stepSize: 5,
                },
              },
            ],
            xAxes: [{ ticks: { fontColor: "#bbb" }, barThickness: 20 }],
          },
          legend: { labels: { fontColor: "#fff" }, display: !1 },
        },
        chartExample2: r,
        chartExample3: {
          data: function (e) {
            var a = e.getContext("2d").createLinearGradient(0, 230, 0, 50);
            return (
              a.addColorStop(1, "rgba(72,72,176,0.1)"),
              a.addColorStop(0.4, "rgba(72,72,176,0.0)"),
              a.addColorStop(0, "rgba(119,52,169,0)"),
              {
                labels: ["USA", "GER", "AUS", "UK", "RO", "BR"],
                datasets: [
                  {
                    label: "Countries",
                    fill: !0,
                    backgroundColor: a,
                    hoverBackgroundColor: a,
                    borderColor: "#d048b6",
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0,
                    data: [53, 20, 10, 80, 100, 45],
                  },
                ],
              }
            );
          },
          options: {
            maintainAspectRatio: !1,
            legend: { display: !1 },
            tooltips: {
              backgroundColor: "#f5f5f5",
              titleFontColor: "#333",
              bodyFontColor: "#666",
              bodySpacing: 4,
              xPadding: 12,
              mode: "nearest",
              intersect: 0,
              position: "nearest",
            },
            responsive: !0,
            scales: {
              yAxes: [
                {
                  gridLines: {
                    drawBorder: !1,
                    color: "rgba(225,78,202,0.1)",
                    zeroLineColor: "transparent",
                  },
                  ticks: {
                    suggestedMin: 60,
                    suggestedMax: 120,
                    padding: 20,
                    fontColor: "#9e9e9e",
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    drawBorder: !1,
                    color: "rgba(225,78,202,0.1)",
                    zeroLineColor: "transparent",
                  },
                  ticks: { padding: 20, fontColor: "#9e9e9e" },
                },
              ],
            },
          },
        },
        chartExample4: {
          data: function (e) {
            var a = e.getContext("2d").createLinearGradient(0, 230, 0, 50);
            return (
              a.addColorStop(1, "rgba(66,134,121,0.15)"),
              a.addColorStop(0.4, "rgba(66,134,121,0.0)"),
              a.addColorStop(0, "rgba(66,134,121,0)"),
              {
                labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
                datasets: [
                  {
                    label: "My First dataset",
                    fill: !0,
                    backgroundColor: a,
                    borderColor: "#00d6b4",
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0,
                    pointBackgroundColor: "#00d6b4",
                    pointBorderColor: "rgba(255,255,255,0)",
                    pointHoverBackgroundColor: "#00d6b4",
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: [90, 27, 60, 12, 80],
                  },
                ],
              }
            );
          },
          options: {
            maintainAspectRatio: !1,
            legend: { display: !1 },
            tooltips: {
              backgroundColor: "#f5f5f5",
              titleFontColor: "#333",
              bodyFontColor: "#666",
              bodySpacing: 4,
              xPadding: 12,
              mode: "nearest",
              intersect: 0,
              position: "nearest",
            },
            responsive: !0,
            scales: {
              yAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: !1,
                    color: "rgba(29,140,248,0.0)",
                    zeroLineColor: "transparent",
                  },
                  ticks: {
                    suggestedMin: 50,
                    suggestedMax: 125,
                    padding: 20,
                    fontColor: "#9e9e9e",
                  },
                },
              ],
              xAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: !1,
                    color: "rgba(0,242,195,0.1)",
                    zeroLineColor: "transparent",
                  },
                  ticks: { padding: 20, fontColor: "#9e9e9e" },
                },
              ],
            },
          },
        },
      };
    },
    232: function (e, a, t) {
      e.exports = t.p + "static/media/farmer.2b0af8e3.jpeg";
    },
    233: function (e, a, t) {
      e.exports = t.p + "static/media/edit.f6ecbfdd.svg";
    },
    234: function (e, a, t) {
      e.exports = t.p + "static/media/pulse-loader.387f0057.svg";
    },
    235: function (e, a, t) {
      e.exports = t.p + "static/media/Dashboard.9f4a9bc2.svg";
    },
    236: function (e, a, t) {
      e.exports = t.p + "static/media/Users icon.ee03d0ea.svg";
    },
    237: function (e, a, t) {
      e.exports = t.p + "static/media/Alerts icon.50c35db6.svg";
    },
    238: function (e, a, t) {
      e.exports = t.p + "static/media/Device Management.3c72d947.svg";
    },
    239: function (e, a, t) {
      e.exports = t.p + "static/media/Support.7eb07b6a.svg";
    },
    240: function (e, a, t) {
      e.exports = t.p + "static/media/Access Icon.1be125c1.svg";
    },
    241: function (e, a, t) {},
    242: function (e, a, t) {},
    243: function (e, a, t) {},
    244: function (e, a, t) {
      "use strict";
      t.r(a);
      var r,
        n = t(0),
        l = t.n(n),
        o = t(43),
        s = t.n(o),
        i = t(14),
        c = t(8),
        d = t(9),
        m = t(10),
        u = t(12),
        p = t(11),
        h = t(25),
        g = t(5),
        b = t.n(g),
        E = t(245),
        v = t(246),
        f = t(247),
        y = t(248),
        N = t(257),
        C = t(256),
        S = (function (e) {
          Object(u.a)(r, e);
          var a = Object(p.a)(r);
          function r(e) {
            var t;
            return (
              Object(d.a)(this, r),
              ((t = a.call(this, e)).updateColor = function () {
                window.innerWidth < 993 && t.state.collapseOpen
                  ? t.setState({ color: "bg-white" })
                  : t.setState({ color: "navbar-transparent" });
              }),
              (t.toggleCollapse = function () {
                t.state.collapseOpen
                  ? t.setState({ color: "navbar-transparent" })
                  : t.setState({ color: "bg-white" }),
                  t.setState({ collapseOpen: !t.state.collapseOpen });
              }),
              (t.toggleModalSearch = function () {
                t.setState({ modalSearch: !t.state.modalSearch });
              }),
              (t.state = {
                collapseOpen: !1,
                modalSearch: !1,
                color: "navbar-transparent",
              }),
              t
            );
          }
          return (
            Object(m.a)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  window.addEventListener("resize", this.updateColor);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  window.removeEventListener("resize", this.updateColor);
                },
              },
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(
                      E.a,
                      {
                        className: b()("navbar-absolute", this.state.color),
                        expand: "lg",
                      },
                      l.a.createElement(
                        v.a,
                        { fluid: !0 },
                        l.a.createElement(
                          "div",
                          { className: "navbar-wrapper" },
                          l.a.createElement(
                            "div",
                            {
                              className: b()("navbar-toggle d-inline", {
                                toggled: this.props.sidebarOpened,
                              }),
                            },
                            l.a.createElement(
                              "button",
                              {
                                className: "navbar-toggler",
                                type: "button",
                                onClick: this.props.toggleSidebar,
                              },
                              l.a.createElement("span", {
                                className: "navbar-toggler-bar bar1",
                              }),
                              l.a.createElement("span", {
                                className: "navbar-toggler-bar bar2",
                              }),
                              l.a.createElement("span", {
                                className: "navbar-toggler-bar bar3",
                              })
                            )
                          )
                        ),
                        l.a.createElement(
                          "button",
                          {
                            "aria-expanded": !1,
                            "aria-label": "Toggle navigation",
                            className: "navbar-toggler",
                            "data-target": "#navigation",
                            "data-toggle": "collapse",
                            id: "navigation",
                            type: "button",
                            onClick: this.toggleCollapse,
                          },
                          l.a.createElement("span", {
                            className: "navbar-toggler-bar navbar-kebab",
                          }),
                          l.a.createElement("span", {
                            className: "navbar-toggler-bar navbar-kebab",
                          }),
                          l.a.createElement("span", {
                            className: "navbar-toggler-bar navbar-kebab",
                          })
                        ),
                        l.a.createElement(
                          f.a,
                          { navbar: !0, isOpen: this.state.collapseOpen },
                          l.a.createElement(
                            y.a,
                            { navbar: !0 },
                            l.a.createElement(
                              "form",
                              null,
                              l.a.createElement(
                                "div",
                                { className: "input-group no-border" },
                                l.a.createElement("input", {
                                  type: "text",
                                  className: "search-bar",
                                  placeholder: "Search Farmer/SICCA device",
                                }),
                                l.a.createElement(
                                  "div",
                                  { className: "input-group-append" },
                                  l.a.createElement(
                                    "div",
                                    { className: "input-group-text" },
                                    l.a.createElement("i", {
                                      className: "tim-icons icon-zoom-split",
                                    })
                                  )
                                )
                              )
                            ),
                            l.a.createElement(
                              N.a,
                              { nav: !0 },
                              l.a.createElement(
                                C.a,
                                {
                                  color: "default",
                                  "data-toggle": "dropdown",
                                  nav: !0,
                                },
                                l.a.createElement("i", {
                                  className: "tim-icons icon-bell-55",
                                }),
                                l.a.createElement(
                                  "p",
                                  { className: "d-lg-none" },
                                  "Notifications"
                                )
                              )
                            ),
                            l.a.createElement(
                              "li",
                              null,
                              l.a.createElement(
                                "a",
                                { className: "nav-link", href: "#" },
                                l.a.createElement("i", {
                                  className: "tim-icons icon-settings-gear-63",
                                })
                              )
                            ),
                            l.a.createElement("li", {
                              className: "separator d-lg-none",
                            })
                          ),
                          l.a.createElement(
                            "p",
                            { className: "adminName" },
                            "Hi, Admin"
                          ),
                          l.a.createElement(
                            "div",
                            { className: "photo" },
                            l.a.createElement("img", {
                              alt: "...",
                              src: t(123),
                            })
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            r
          );
        })(l.a.Component),
        x = (function (e) {
          Object(u.a)(t, e);
          var a = Object(p.a)(t);
          function t() {
            return Object(d.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(m.a)(t, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "footer",
                    { className: "footer" },
                    l.a.createElement(
                      v.a,
                      { fluid: !0 },
                      l.a.createElement(y.a, null)
                    )
                  );
                },
              },
            ]),
            t
          );
        })(l.a.Component),
        k = t(20),
        O = t(32),
        G = (function (e) {
          Object(u.a)(t, e);
          var a = Object(p.a)(t);
          function t(e) {
            var r;
            return (
              Object(d.a)(this, t),
              ((r = a.call(this, e)).linkOnClick = function () {
                document.documentElement.classList.remove("nav-open");
              }),
              r.activeRoute.bind(Object(k.a)(r)),
              r
            );
          }
          return (
            Object(m.a)(t, [
              {
                key: "activeRoute",
                value: function (e) {
                  return this.props.location.pathname.indexOf(e) > -1
                    ? "active"
                    : "";
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  navigator.platform.indexOf("Win") > -1 &&
                    (r = new h.a(this.refs.sidebar, {
                      suppressScrollX: !0,
                      suppressScrollY: !1,
                    }));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  navigator.platform.indexOf("Win") > -1 && r.destroy();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    a = this.props,
                    t = a.bgColor,
                    r = a.routes,
                    n = a.rtlActive;
                  a.logo;
                  return l.a.createElement(
                    "div",
                    { className: "sidebar", data: t },
                    l.a.createElement(
                      "div",
                      { className: "sidebar-wrapper", ref: "sidebar" },
                      l.a.createElement(
                        y.a,
                        null,
                        r.map(function (a, t) {
                          return a.redirect
                            ? null
                            : l.a.createElement(
                                "li",
                                {
                                  className:
                                    e.activeRoute(a.path) +
                                    (a.pro ? " active-pro" : ""),
                                  key: t,
                                },
                                l.a.createElement(
                                  O.a,
                                  {
                                    to: a.layout + a.path,
                                    className: "nav-link",
                                    activeClassName: "active",
                                    onClick: e.props.toggleSidebar,
                                  },
                                  l.a.createElement(
                                    "p",
                                    null,
                                    n ? a.rtlName : a.name
                                  ),
                                  l.a.createElement("img", {
                                    src: a.icon,
                                    className: a.iconClass,
                                  })
                                )
                              );
                        })
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(l.a.Component);
      G.defaultProps = { rtlActive: !1, bgColor: "primary", routes: [{}] };
      var A = G,
        _ = t(23),
        D = t(17),
        w = t(6),
        I = t.n(w),
        B = function () {
          return sessionStorage.getItem("token") || null;
        },
        T = localStorage.getItem("token");
      null == T && (T = B());
      var H = I.a.create({
          baseURL: "http://34.93.137.80/api/sicca-admin",
          headers: { Authorization: T },
        }),
        j = t(19),
        W = t.n(j),
        L = t(249),
        M = t(250),
        R = t(251),
        P = t(252),
        U = t(253),
        F = t(254),
        z = t(255),
        V = t(95),
        Y = t(18),
        q = function (e) {
          var a = e.data;
          return l.a.createElement(
            L.a,
            null,
            l.a.createElement(
              M.a,
              null,
              l.a.createElement(R.a, { tag: "h4" }, "Notifications")
            ),
            l.a.createElement(
              P.a,
              null,
              l.a.createElement(
                U.a,
                { className: "tablesorter", id: "failednotification" },
                l.a.createElement(
                  "thead",
                  { className: "text-primary" },
                  l.a.createElement(
                    "tr",
                    null,
                    l.a.createElement("th", null, "Reason"),
                    l.a.createElement("th", null, "Date"),
                    l.a.createElement("th", null, "Time")
                  )
                ),
                l.a.createElement(
                  "tbody",
                  null,
                  a.map(function (e, a) {
                    var t = new Date(e.created_at)
                        .toISOString()
                        .replace(/T/, " ")
                        .replace(/\..+/, ""),
                      r = W()(t).format("L"),
                      n = W()(t).format("HH:mm:ss");
                    return l.a.createElement(
                      "tr",
                      { key: a },
                      l.a.createElement("td", null, e.text),
                      l.a.createElement("td", null, r),
                      l.a.createElement("td", null, n)
                    );
                  })
                )
              )
            )
          );
        },
        K = (function (e) {
          Object(u.a)(r, e);
          var a = Object(p.a)(r);
          function r(e) {
            var t;
            return (
              Object(d.a)(this, r),
              ((t = a.call(this, e)).setBgChartData = function (e) {
                t.setState({ bigChartData: e });
              }),
              (t.state = {
                statusUser: [],
                statusSicca: [],
                statusNode: [],
                wp: 720,
                fc: 440,
                waterGraphlabel: [],
                waterGraphConsumed: [],
                waterGraphSaved: [],
                energyGraphlabel: [],
                energyGraphConsumed: [],
                energyGraphSaved: [],
                pumpGraphlabel: [],
                pumpActivity: [],
                totalAcres: "--",
                bigChartData: "data1",
                bigChartData1: "data2",
                energyGraph: 1,
                pumpGraph: 1,
                allNotifications: [],
                notificationsCount: 1,
                pageIndex: 0,
                totalPages: 1,
                visible: 10,
                nodeId: 0,
                showAlertHistoryFlag: !1,
              }),
              (t.loadMore = t.loadMore.bind(Object(k.a)(t))),
              t
            );
          }
          return (
            Object(m.a)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  this.props.match.params &&
                    (this.setState({ nodeId: this.props.match.params.nodeId }),
                    I.a
                      .all([
                        H.get("node/details/" + this.props.match.params.nodeId),
                        H.get(
                          "node/water/graph/" + this.props.match.params.nodeId
                        ),
                        H.get(
                          "node/energy/graph/" +
                            this.props.match.params.nodeId +
                            "/1"
                        ),
                        H.get(
                          "node/pump/activity/graph/" +
                            this.props.match.params.nodeId +
                            "/1"
                        ),
                      ])
                      .then(
                        I.a.spread(function () {
                          for (
                            var a = arguments.length, t = new Array(a), r = 0;
                            r < a;
                            r++
                          )
                            t[r] = arguments[r];
                          var n,
                            l = t[0].data.user[0];
                          n =
                            0 !== t[0].data.sicca.length
                              ? t[0].data.sicca[0]
                              : null;
                          var o = t[0].data.node,
                            s = [],
                            i = [],
                            c = [];
                          if (0 !== t[1].data.activity.length)
                            for (var d = 0; d < t[1].data.activity.length; d++)
                              s.push(t[1].data.activity[d].created_at),
                                i.push(t[1].data.activity[d].avg_consumed),
                                c.push(t[1].data.activity[d].avg_saved);
                          var m = [],
                            u = [],
                            p = [];
                          if (0 !== t[2].data.activity.length)
                            for (d = 0; d < t[2].data.activity.length; d++)
                              m.push(t[2].data.activity[d].created_at),
                                u.push(t[2].data.activity[d].totalConsumed),
                                p.push(t[2].data.activity[d].totalSaved);
                          var h = [],
                            g = [];
                          if (0 !== t[3].data.activity.length)
                            for (d = 0; d < t[3].data.activity.length; d++)
                              h.push(t[3].data.activity[d].created_at),
                                g.push(t[3].data.activity[d].totalHours);
                          e.setState({
                            statusUser: l,
                            statusSicca: n,
                            statusNode: o,
                            waterGraphlabel: s,
                            waterGraphConsumed: i,
                            waterGraphSaved: c,
                            energyGraphlabel: m,
                            energyGraphConsumed: u,
                            energyGraphSaved: p,
                            pumpGraphlabel: h,
                            pumpActivity: g,
                          });
                        })
                      )
                      .catch(function (e) {
                        return console.log(e);
                      }));
                },
              },
              {
                key: "updateGraph",
                value: function (e) {
                  var a = this;
                  I.a
                    .all([
                      H.get(
                        "node/energy/graph/" +
                          this.props.match.params.nodeId +
                          "/" +
                          e
                      ),
                    ])
                    .then(
                      I.a.spread(function (e) {
                        for (
                          var t = [], r = [], n = [], l = 0;
                          l < e.data.activity.length;
                          l++
                        )
                          t.push(e.data.activity[l].created_at),
                            r.push(e.data.activity[l].totalConsumed),
                            n.push(e.data.activity[l].totalSaved);
                        a.setState({
                          energyGraphlabel: t,
                          energyGraphConsumed: r,
                          energyGraphSaved: n,
                        });
                        a.state.energyGraphlabel,
                          a.state.energyGraphSaved,
                          a.state.energyGraphConsumed,
                          Y.bar2_2_options;
                      })
                    )
                    .catch(function (e) {
                      return console.log(e);
                    });
                },
              },
              {
                key: "updatePumpGraph",
                value: function (e) {
                  var a = this;
                  I.a
                    .all([
                      H.get(
                        "/node/pump/activity/graph/" +
                          this.props.match.nodeId +
                          "/" +
                          e
                      ),
                    ])
                    .then(
                      I.a.spread(function (e) {
                        for (
                          var t = [], r = [], n = 0;
                          n < e.data.activity.length;
                          n++
                        )
                          t.push(e.data.activity[n].created_at),
                            r.push(e.data.activity[n].totalHours);
                        a.setState({ pumpGraphlabel: t, pumpActivity: r });
                        Y.pump_options;
                      })
                    )
                    .catch(function (e) {
                      return console.log(e);
                    });
                },
              },
              {
                key: "loadNotifications",
                value: function () {
                  var e = this,
                    a = this.state.pageIndex + 1;
                  I.a
                    .all([
                      H.get(
                        "/user/notifications/each/" +
                          this.props.match.params.nodeId +
                          "/" +
                          a
                      ),
                    ])
                    .then(
                      I.a.spread(function (a) {
                        e.setState({ showAlertHistoryFlag: !0 }),
                          e.state.totalPages > e.state.pageIndex
                            ? e.setState({ pageIndex: e.state.pageIndex + 1 })
                            : e.setState({ lastIndexReached: !0 }),
                          !1 === e.state.lastIndexReached &&
                            e.setState({
                              totalPages: Math.ceil(a.data.count / 10),
                            }),
                          e.setState({
                            allNotifications: [].concat(
                              Object(_.a)(e.state.allNotifications),
                              Object(_.a)(a.data.resp)
                            ),
                            notificationsCount: a.data.count,
                          });
                      })
                    )
                    .catch(function (e) {
                      return console.log(e);
                    });
                },
              },
              {
                key: "loadMore",
                value: function () {
                  this.setState(function (e) {
                    return {
                      pageIndex: e.pageIndex + 1,
                      visible: e.visible + 10,
                    };
                  }),
                    this.loadNotifications();
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    a,
                    r = this,
                    n = this.state.waterGraphlabel,
                    o = this.state.waterGraphSaved,
                    s = this.state.waterGraphConsumed,
                    i = {
                      data1: function (e) {
                        var a = e.getContext("2d"),
                          t = a.createLinearGradient(1e3, 0, 500, 0, 100, 0);
                        t.addColorStop(0, "#035272"),
                          t.addColorStop(1, "#035272");
                        var r = a.createLinearGradient(
                          0,
                          1900,
                          400,
                          1300,
                          800,
                          1600,
                          50
                        );
                        return (
                          r.addColorStop(0, "rgba(128, 182, 244, 0)"),
                          r.addColorStop(1, "rgba(255, 255, 255, 0.24)"),
                          {
                            labels: n,
                            datasets: [
                              {
                                label: "Data",
                                borderColor: "#035272",
                                pointBorderColor: "#035272",
                                pointBackgroundColor: "#1e3d60",
                                pointHoverBackgroundColor: "#1e3d60",
                                pointHoverBorderColor: "#035272",
                                pointBorderWidth: 1,
                                pointHoverRadius: 7,
                                pointHoverBorderWidth: 2,
                                pointRadius: 2,
                                fill: !1,
                                backgroundColor: r,
                                borderWidth: 6,
                                data: o,
                              },
                            ],
                          }
                        );
                      },
                      data2: function (e) {
                        var a = e.getContext("2d"),
                          t = a.createLinearGradient(1e3, 0, 500, 0, 100, 0);
                        t.addColorStop(0, "#035272"),
                          t.addColorStop(1, "#035272");
                        var r = a.createLinearGradient(
                          0,
                          1900,
                          400,
                          1300,
                          800,
                          1600,
                          50
                        );
                        return (
                          r.addColorStop(0, "rgba(128, 182, 244, 0)"),
                          r.addColorStop(1, "rgba(255, 255, 255, 0.24)"),
                          {
                            labels: n,
                            datasets: [
                              {
                                label: "Data",
                                borderColor: "#035272",
                                pointBorderColor: "#035272",
                                pointBackgroundColor: "#1e3d60",
                                pointHoverBackgroundColor: "#1e3d60",
                                pointHoverBorderColor: "#035272",
                                pointBorderWidth: 1,
                                pointHoverRadius: 7,
                                pointHoverBorderWidth: 2,
                                pointRadius: 2,
                                fill: !1,
                                backgroundColor: r,
                                borderWidth: 6,
                                data: s,
                              },
                            ],
                          }
                        );
                      },
                      options: Y.chart1_2_options,
                    },
                    c = this.state.energyGraphlabel,
                    d = this.state.energyGraphSaved,
                    m = this.state.energyGraphConsumed,
                    u = {
                      data1: function (e) {
                        var a = e
                          .getContext("2d")
                          .createLinearGradient(0, 0, 0, 300);
                        return (
                          a.addColorStop(0, "#00727b"),
                          a.addColorStop(1, "#000a55"),
                          {
                            type: "bar",
                            dataPointWidth: 20,
                            labels: c,
                            datasets: [
                              {
                                label: "",
                                fill: !0,
                                borderWidth: 0.5,
                                backgroundColor: a,
                                hoverBackgroundColor: a,
                                hoverBorderWidth: 1,
                                hoverBorderColor: "#000a55",
                                data: d,
                              },
                            ],
                          }
                        );
                      },
                      data2: function (e) {
                        var a = e
                          .getContext("2d")
                          .createLinearGradient(0, 0, 0, 300);
                        return (
                          a.addColorStop(0, "#00727b"),
                          a.addColorStop(1, "#000a55"),
                          {
                            labels: c,
                            datasets: [
                              {
                                label: "",
                                fill: !0,
                                borderWidth: 0.5,
                                data: m,
                                backgroundColor: a,
                                hoverBackgroundColor: a,
                                hoverBorderWidth: 1,
                                hoverBorderColor: "#000a55",
                              },
                            ],
                          }
                        );
                      },
                      options: Y.bar1_2_options,
                    },
                    p = this.state.pumpGraphlabel,
                    h = this.state.pumpActivity,
                    g = {
                      data1: function (e) {
                        var a = e
                          .getContext("2d")
                          .createLinearGradient(0, 0, 0, 300);
                        return (
                          a.addColorStop(0, "#00727b"),
                          a.addColorStop(1, "#000a55"),
                          {
                            type: "bar",
                            dataPointWidth: 20,
                            labels: p,
                            datasets: [
                              {
                                label: "",
                                fill: !0,
                                borderWidth: 0.5,
                                data: h,
                                backgroundColor: a,
                                hoverBackgroundColor: a,
                                hoverBorderWidth: 1,
                                hoverBorderColor: "#000a55",
                              },
                            ],
                          }
                        );
                      },
                      options: Y.pump_options,
                    },
                    b = this.state.fc,
                    E = this.state.wp;
                  this.state.statusNode.irigationOption &&
                    (1 === this.state.statusNode.irigationOption.charAt(0)
                      ? (e = this.state.statusSicca.sm1)
                      : 4 === this.state.statusNode.irigationOption.charAt(0)
                      ? (e = this.state.statusSicca.sm2)
                      : 8 === this.state.statusNode.irigationOption.charAt(0) &&
                        (e = this.state.statusSicca.sm3)),
                    1 === this.state.statusNode.pumpStatus
                      ? !function (e) {
                          return b;
                        }
                        ? e < b && (a = "WET")
                        : (a = "DRY")
                      : b > e
                      ? (a = "WET")
                      : !function (e) {
                          return b && e < E;
                        }
                      ? e > E && (a = "DRY")
                      : (a = "WET");
                  var v,
                    f = "bg-blue",
                    y = "bg-blue",
                    N = "bg-blue",
                    C = "bg-blue",
                    S = "bg-blue",
                    x = "--",
                    k = "--",
                    O = "--",
                    G = "--";
                  if (
                    (null != this.state.statusSicca &&
                      ((f =
                        this.state.statusSicca.temp >= 100 ||
                        this.state.statusSicca.temp <= 1e3
                          ? "bg-blue"
                          : "bg-red"),
                      this.state.statusSicca.temp &&
                        ((k = this.state.statusSicca.temp + "\xb0C"),
                        (y =
                          this.state.statusSicca.temp >= 0 ||
                          this.state.statusSicca.temp <= 100
                            ? "bg-blue"
                            : "bg-red")),
                      this.state.statusSicca.soil_temp &&
                        ((x = this.state.statusSicca.soil_temp + "\xb0C"),
                        (N =
                          this.state.statusSicca.soil_temp >= 0 ||
                          this.state.statusSicca.soil_temp <= 100
                            ? "bg-blue"
                            : "bg-red")),
                      this.state.statusSicca.hum &&
                        ((O = this.state.statusSicca.hum + "%"),
                        (C =
                          this.state.statusSicca.hum >= 0 ||
                          this.state.statusSicca.hum <= 100
                            ? "bg-blue"
                            : "bg-red")),
                      this.state.statusSicca.light &&
                        ((G = this.state.statusSicca.light),
                        (S =
                          this.state.statusSicca.light >= 0 &&
                          this.state.statusSicca.light <= 65e3
                            ? "bg-blue"
                            : "bg-red"))),
                    this.state.statusNode.updatedAt)
                  ) {
                    var A = new Date(this.state.statusNode.updatedAt)
                      .toISOString()
                      .replace(/T/, " ")
                      .replace(/\..+/, "");
                    v = W()(A).format("YYYY-MM-DD HH:mm:ss");
                  }
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(
                      "div",
                      { className: "content" },
                      l.a.createElement("hr", null),
                      l.a.createElement(
                        "div",
                        { className: "ind-card" },
                        l.a.createElement(
                          F.a,
                          { className: "top-cards-inline" },
                          l.a.createElement(
                            z.a,
                            {
                              lg: "2",
                              md: "4",
                              sm: "4",
                              className: "card-blk",
                            },
                            l.a.createElement("img", {
                              alt: "...",
                              src: t(232),
                              className: "ind-profile",
                            })
                          ),
                          l.a.createElement(
                            z.a,
                            {
                              lg: "2",
                              ms: "8",
                              sm: "4",
                              className: "card-blk-2",
                            },
                            l.a.createElement(
                              "div",
                              { className: "ind-name qwesd" },
                              l.a.createElement(
                                "p",
                                { className: "ind_name" },
                                this.state.statusUser.name
                              )
                            ),
                            l.a.createElement(
                              "div",
                              { className: "ind-desc" },
                              "Node ID - ",
                              l.a.createElement(
                                "span",
                                { id: "ind_node" },
                                this.state.statusNode.nodeId,
                                " : ",
                                this.state.statusNode.cropName
                              )
                            ),
                            "1" === this.state.statusNode.pumpStatus
                              ? l.a.createElement(
                                  "div",
                                  {
                                    className: "ind-desc border-blue",
                                    id: "pump_status",
                                  },
                                  "PUMP STATUS: ",
                                  l.a.createElement(
                                    "span",
                                    { className: "color-blue" },
                                    "ON"
                                  )
                                )
                              : l.a.createElement(
                                  "div",
                                  {
                                    className: "ind-desc border-red",
                                    id: "pump_status",
                                  },
                                  "PUMP STATUS: ",
                                  l.a.createElement(
                                    "span",
                                    { className: "color-red" },
                                    "OFF"
                                  )
                                )
                          ),
                          l.a.createElement(
                            z.a,
                            {
                              lg: "2",
                              md: "4",
                              sm: "4",
                              className: "card-blk",
                            },
                            l.a.createElement(
                              "div",
                              { className: "fgrtws" },
                              l.a.createElement(
                                "div",
                                { className: "ind-desc qwesd" },
                                "Device ID: ",
                                l.a.createElement(
                                  "span",
                                  { id: "ind_id" },
                                  this.state.statusUser.id
                                )
                              ),
                              l.a.createElement(
                                "div",
                                {
                                  className: "ind-desc",
                                  style: { opacity: "0" },
                                },
                                "Node ID - ",
                                this.state.statusNode.nodeId,
                                ":",
                                this.state.statusNode.nodeName
                              ),
                              "1" === this.state.statusNode.valveStatus
                                ? l.a.createElement(
                                    "div",
                                    {
                                      className: "ind-desc border-blue",
                                      id: "valve_status",
                                    },
                                    "VALVE STATUS: ",
                                    l.a.createElement(
                                      "span",
                                      { className: "color-blue" },
                                      "ON"
                                    )
                                  )
                                : l.a.createElement(
                                    "div",
                                    {
                                      className: "ind-desc border-red",
                                      id: "valve_status",
                                    },
                                    "VALVE STATUS: ",
                                    l.a.createElement(
                                      "span",
                                      { className: "color-red" },
                                      "OFF"
                                    )
                                  )
                            )
                          ),
                          l.a.createElement(
                            z.a,
                            {
                              lg: "2",
                              md: "4",
                              sm: "4",
                              className: "card-blk-4",
                            },
                            l.a.createElement(
                              "div",
                              { className: "fgrtws" },
                              l.a.createElement(
                                "div",
                                { className: "ind-desc qwesd" },
                                "Farm Size- ",
                                l.a.createElement(
                                  "span",
                                  { id: "farm_size" },
                                  this.state.statusNode.areaSize
                                    ? this.state.statusNode.areaSize
                                    : "--"
                                ),
                                " Acres"
                              ),
                              l.a.createElement(
                                "div",
                                {
                                  className: "ind-desc",
                                  style: { opacity: "0" },
                                },
                                "Node ID - -:-"
                              ),
                              l.a.createElement(
                                "div",
                                {
                                  className: "ind-desc border-gray",
                                  id: "dry_run",
                                },
                                "Dry Run"
                              )
                            )
                          ),
                          l.a.createElement(
                            z.a,
                            {
                              lg: "2",
                              md: "4",
                              sm: "4",
                              className: "card-blk",
                            },
                            l.a.createElement(
                              "div",
                              { className: "fgrtws" },
                              l.a.createElement("img", {
                                alt: "...",
                                src: t(233),
                                className: "btn-edit",
                              })
                            ),
                            l.a.createElement(
                              "div",
                              { className: "ind-desc ereuj" },
                              l.a.createElement(
                                "span",
                                { id: "ind_updated" },
                                v
                              )
                            ),
                            l.a.createElement(
                              "div",
                              { className: "ind-desc ereuj" },
                              l.a.createElement(
                                "span",
                                { id: "ind_updated" },
                                v || "--"
                              )
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        F.a,
                        { className: "top-cards-inline" },
                        l.a.createElement(
                          z.a,
                          { lg: "2", md: "4", sm: "6", xs: "6" },
                          l.a.createElement(
                            L.a,
                            { className: f },
                            l.a.createElement(
                              P.a,
                              null,
                              l.a.createElement(
                                "h4",
                                { className: "card-title", id: "soil_moist" },
                                e || "--"
                              ),
                              l.a.createElement(
                                "p",
                                { className: "card-text" },
                                "Soil Moisture"
                              )
                            ),
                            l.a.createElement(
                              "div",
                              { className: "card-footer" },
                              l.a.createElement(
                                "p",
                                {
                                  className: "card-text-bottom",
                                  id: "soil_moist_type",
                                },
                                a || "--"
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          z.a,
                          { lg: "2", md: "4", sm: "6", xs: "6" },
                          l.a.createElement(
                            L.a,
                            { className: N },
                            l.a.createElement(
                              P.a,
                              null,
                              l.a.createElement(
                                "h4",
                                { className: "card-title", id: "soil_temp" },
                                x
                              ),
                              l.a.createElement(
                                "p",
                                { className: "card-text" },
                                "Soil Temprature"
                              )
                            ),
                            l.a.createElement(
                              "div",
                              { className: "card-footer" },
                              l.a.createElement(
                                "p",
                                {
                                  className: "card-text-bottom",
                                  id: "soil_temp_status",
                                  style: { opacity: "0" },
                                },
                                "--"
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          z.a,
                          { lg: "2", md: "4", sm: "6", xs: "6" },
                          l.a.createElement(
                            L.a,
                            { className: y },
                            l.a.createElement(
                              P.a,
                              null,
                              l.a.createElement(
                                "h4",
                                { className: "card-title", id: "atm_temp" },
                                k
                              ),
                              l.a.createElement(
                                "p",
                                { className: "card-text" },
                                "Atm. Temprature"
                              )
                            ),
                            l.a.createElement(
                              "div",
                              { className: "card-footer" },
                              l.a.createElement(
                                "p",
                                {
                                  className: "card-text-bottom",
                                  id: "soil_atm_temp_status",
                                  style: { opacity: "0" },
                                },
                                "--"
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          z.a,
                          { lg: "2", md: "4", sm: "6", xs: "6" },
                          l.a.createElement(
                            L.a,
                            { className: C },
                            l.a.createElement(
                              P.a,
                              null,
                              l.a.createElement(
                                "h4",
                                { className: "card-title", id: "humidity" },
                                O
                              ),
                              l.a.createElement(
                                "p",
                                { className: "card-text" },
                                "Humidity"
                              )
                            ),
                            l.a.createElement(
                              "div",
                              { className: "card-footer" },
                              l.a.createElement(
                                "p",
                                {
                                  className: "card-text-bottom",
                                  id: "soil_hum_status",
                                  style: { opacity: "0" },
                                },
                                "--"
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          z.a,
                          { lg: "2", md: "4", sm: "6", xs: "6" },
                          l.a.createElement(
                            L.a,
                            { className: S },
                            l.a.createElement(
                              P.a,
                              null,
                              l.a.createElement(
                                "h4",
                                { className: "card-title", id: "sunlight" },
                                G
                              ),
                              l.a.createElement(
                                "p",
                                { className: "card-text" },
                                "Sunlight(lux)"
                              )
                            ),
                            l.a.createElement(
                              "div",
                              { className: "card-footer" },
                              l.a.createElement(
                                "p",
                                {
                                  className: "card-text-bottom",
                                  id: "soil_sunlight_status",
                                  style: { opacity: "0" },
                                },
                                "--"
                              )
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        "div",
                        {
                          className: "alets-block color-red",
                          style: { display: "none" },
                        },
                        "Critical Alert: Valve status is OFF | High Soil Temperature | High Atm. Temperature"
                      ),
                      l.a.createElement(
                        F.a,
                        null,
                        l.a.createElement(
                          z.a,
                          { xs: "12" },
                          l.a.createElement(
                            L.a,
                            { className: "card-chart" },
                            l.a.createElement(
                              F.a,
                              null,
                              l.a.createElement(
                                "div",
                                { className: "tab-frame" },
                                l.a.createElement("input", {
                                  type: "radio",
                                  defaultChecked: !0,
                                  name: "tab",
                                  id: "tab1",
                                }),
                                l.a.createElement(
                                  "label",
                                  { htmlFor: "tab1", id: "gdsrdd" },
                                  "WATER SAVED"
                                ),
                                l.a.createElement("label", null, "|"),
                                l.a.createElement("input", {
                                  type: "radio",
                                  name: "tab",
                                  id: "tab2",
                                }),
                                l.a.createElement(
                                  "label",
                                  { htmlFor: "tab2" },
                                  "WATER CONSUMED"
                                ),
                                l.a.createElement(
                                  "div",
                                  { className: "tab" },
                                  l.a.createElement(
                                    "div",
                                    { className: "card-body" },
                                    l.a.createElement(
                                      "div",
                                      {
                                        className: "chart-area",
                                        style: { height: "500px" },
                                      },
                                      l.a.createElement(D.b, {
                                        data: i[this.state.bigChartData],
                                        options: i.options,
                                      })
                                    )
                                  )
                                ),
                                l.a.createElement(
                                  "div",
                                  { className: "tab" },
                                  l.a.createElement(
                                    "div",
                                    { className: "card-body" },
                                    l.a.createElement(
                                      "div",
                                      {
                                        className: "chart-area",
                                        style: { height: "500px" },
                                      },
                                      l.a.createElement(D.b, {
                                        data: i[this.state.bigChartData1],
                                        options: i.options,
                                      })
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        F.a,
                        null,
                        l.a.createElement(
                          z.a,
                          { lg: "6" },
                          l.a.createElement(
                            "div",
                            { style: { display: "flex", marginBottom: "5px" } },
                            l.a.createElement(
                              "h5",
                              { className: "card-category chart-header" },
                              "AVG. PUMP ACTIVITY"
                            ),
                            l.a.createElement(
                              "span",
                              null,
                              l.a.createElement("img", {
                                alt: "...",
                                src: t(42),
                              })
                            ),
                            l.a.createElement(
                              "select",
                              {
                                id: "energyselect",
                                className: "select_box",
                                onChange: function (e) {
                                  r.setState({ pumpGraph: e.target.value }),
                                    r.updatePumpGraph(e.target.value);
                                },
                                value: this.state.pumpGraph,
                              },
                              l.a.createElement(
                                "option",
                                { value: "1" },
                                "ONE WEEK"
                              ),
                              l.a.createElement(
                                "option",
                                { value: "2" },
                                "ONE MONTH"
                              ),
                              l.a.createElement(
                                "option",
                                { value: "3" },
                                "THREE MONTH"
                              ),
                              l.a.createElement(
                                "option",
                                { value: "4" },
                                "SIX MONTH"
                              )
                            )
                          ),
                          l.a.createElement(
                            L.a,
                            { className: "card-chart" },
                            l.a.createElement(
                              P.a,
                              null,
                              l.a.createElement(
                                "div",
                                {
                                  className: "chart-area",
                                  style: { marginTop: "60px" },
                                },
                                l.a.createElement(D.a, {
                                  data: g[this.state.bigChartData],
                                  options: g.options,
                                })
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          z.a,
                          { lg: "6" },
                          l.a.createElement(
                            "div",
                            { style: { display: "flex", marginBottom: "5px" } },
                            l.a.createElement(
                              "h5",
                              { className: "card-category chart-header" },
                              "AVG. ENERGY"
                            ),
                            l.a.createElement(
                              "span",
                              null,
                              l.a.createElement("img", {
                                alt: "...",
                                src: t(42),
                              })
                            ),
                            l.a.createElement(
                              "select",
                              {
                                id: "energyselect",
                                className: "select_box",
                                onChange: function (e) {
                                  r.setState({ energyGraph: e.target.value }),
                                    r.updateGraph(e.target.value);
                                },
                                value: this.state.energyGraph,
                              },
                              l.a.createElement(
                                "option",
                                { value: "1" },
                                "ONE WEEK"
                              ),
                              l.a.createElement(
                                "option",
                                { value: "2" },
                                "ONE MONTH"
                              ),
                              l.a.createElement(
                                "option",
                                { value: "3" },
                                "THREE MONTH"
                              ),
                              l.a.createElement(
                                "option",
                                { value: "4" },
                                "SIX MONTH"
                              )
                            )
                          ),
                          l.a.createElement(
                            L.a,
                            { className: "card-chart" },
                            l.a.createElement(
                              P.a,
                              null,
                              l.a.createElement(
                                "div",
                                { className: "tab-frame1" },
                                l.a.createElement("input", {
                                  type: "radio",
                                  defaultChecked: !0,
                                  name: "tab1",
                                  id: "tab11",
                                }),
                                l.a.createElement(
                                  "label",
                                  { htmlFor: "tab11", id: "gdsrdd" },
                                  "SAVED"
                                ),
                                l.a.createElement("label", null, "|"),
                                l.a.createElement("input", {
                                  type: "radio",
                                  name: "tab1",
                                  id: "tab22",
                                }),
                                l.a.createElement(
                                  "label",
                                  { htmlFor: "tab22" },
                                  "CONSUMED"
                                ),
                                l.a.createElement(
                                  "div",
                                  { className: "tab1" },
                                  l.a.createElement(
                                    "div",
                                    { className: "card-body" },
                                    l.a.createElement(
                                      "div",
                                      { className: "chart-area" },
                                      l.a.createElement(D.a, {
                                        data: u[this.state.bigChartData],
                                        options: u.options,
                                      })
                                    )
                                  )
                                ),
                                l.a.createElement(
                                  "div",
                                  { className: "tab1" },
                                  l.a.createElement(
                                    "div",
                                    { className: "card-body" },
                                    l.a.createElement(
                                      "div",
                                      { className: "chart-area" },
                                      l.a.createElement(D.a, {
                                        data: u[this.state.bigChartData1],
                                        options: u.options,
                                      })
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        F.a,
                        null,
                        l.a.createElement(
                          z.a,
                          { lg: "12", md: "12" },
                          this.state.showAlertHistoryFlag
                            ? l.a.createElement(q, {
                                data: this.state.allNotifications,
                              })
                            : l.a.createElement(
                                V.a,
                                {
                                  onClick: function () {
                                    r.loadNotifications();
                                  },
                                  className: "show-all-btn",
                                },
                                "Show Alert History"
                              ),
                          this.state.visible < this.state.notificationsCount &&
                            l.a.createElement(
                              "button",
                              {
                                onClick: this.loadMore,
                                type: "button",
                                className: "load-more",
                              },
                              "Load more"
                            )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            r
          );
        })(l.a.Component),
        X = (function (e) {
          Object(u.a)(r, e);
          var a = Object(p.a)(r);
          function r(e) {
            var t;
            return (
              Object(d.a)(this, r),
              ((t = a.call(this, e)).setBgChartData = function (e) {
                t.setState({ bigChartData: e });
              }),
              (t.state = {
                dashboardStatus: [],
                waterGraphlabel: [],
                waterGraphConsumed: [],
                waterGraphSaved: [],
                energyGraphlabel: [],
                energyGraphConsumed: [],
                energyGraphSaved: [],
                pumpGraphlabel: [],
                pumpActivity: [],
                totalAcres: "--",
                bigChartData: "data1",
                bigChartData1: "data2",
                energyGraph: 1,
                pumpGraph: 1,
                failedNotifications: [],
                failedNotificationsCount: 1,
                pageIndex: 0,
                totalPages: 1,
                visible: 10,
                refsh: !1,
              }),
              (t.loadMore = t.loadMore.bind(Object(k.a)(t))),
              t
            );
          }
          return (
            Object(m.a)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  H.interceptors.request.use(function (e) {
                    return (
                      (e.headers.Authorization = localStorage.getItem("token")),
                      e
                    );
                  }),
                    I.a
                      .all([
                        H.get("/dashboard/status"),
                        H.get("/water/graph/all"),
                        H.get("/energy/graph/all/1"),
                        H.get("/pump/activity/all/1"),
                      ])
                      .then(
                        I.a.spread(function () {
                          for (
                            var a = arguments.length, t = new Array(a), r = 0;
                            r < a;
                            r++
                          )
                            t[r] = arguments[r];
                          console.log(t);
                          for (
                            var n = t[0].data, l = [], o = [], s = [], i = 0;
                            i < t[1].data.activity.length;
                            i++
                          )
                            l.push(t[1].data.activity[i].created_at),
                              o.push(t[1].data.activity[i].avg_consumed),
                              s.push(t[1].data.activity[i].avg_saved);
                          var c = [],
                            d = [],
                            m = [];
                          for (i = 0; i < t[2].data.activity.length; i++)
                            c.push(t[2].data.activity[i].created_at),
                              d.push(t[2].data.activity[i].avg_consumed),
                              m.push(t[2].data.activity[i].avg_saved);
                          var u = [],
                            p = [];
                          for (i = 0; i < t[3].data.activity.length; i++)
                            u.push(t[3].data.activity[i].created_at),
                              p.push(t[3].data.activity[i].totalHours);
                          e.setState({
                            dashboardStatus: n,
                            totalAcres: n.totalAcres.totalAcres,
                            waterGraphlabel: l,
                            waterGraphConsumed: o,
                            waterGraphSaved: s,
                            energyGraphlabel: c,
                            energyGraphConsumed: d,
                            energyGraphSaved: m,
                            pumpGraphlabel: u,
                            pumpActivity: p,
                          });
                        })
                      )
                      .catch(function (e) {
                        return console.log(e);
                      }),
                    this.loadFailedNotifications(this.state.pageIndex);
                },
              },
              {
                key: "updateGraph",
                value: function (e) {
                  var a = this;
                  I.a
                    .all([H.get("/energy/graph/all/" + e)])
                    .then(
                      I.a.spread(function (e) {
                        for (
                          var t = [], r = [], n = [], l = 0;
                          l < e.data.activity.length;
                          l++
                        )
                          t.push(e.data.activity[l].created_at),
                            r.push(e.data.activity[l].avg_consumed),
                            n.push(e.data.activity[l].avg_saved);
                        a.setState({
                          energyGraphlabel: t,
                          energyGraphConsumed: r,
                          energyGraphSaved: n,
                        });
                        var o = a.state.energyGraphlabel;
                        a.state.energyGraphSaved, a.state.energyGraphConsumed;
                        console.log(o);
                        Y.bar2_2_options;
                      })
                    )
                    .catch(function (e) {
                      return console.log(e);
                    });
                },
              },
              {
                key: "updatePumpGraph",
                value: function (e) {
                  var a = this;
                  I.a
                    .all([H.get("/pump/activity/all/" + e)])
                    .then(
                      I.a.spread(function (e) {
                        for (
                          var t = [], r = [], n = 0;
                          n < e.data.activity.length;
                          n++
                        )
                          t.push(e.data.activity[n].created_at),
                            r.push(e.data.activity[n].totalHours);
                        a.setState({ pumpGraphlabel: t, pumpActivity: r });
                        Y.pump_options;
                      })
                    )
                    .catch(function (e) {
                      return console.log(e);
                    });
                },
              },
              {
                key: "loadFailedNotifications",
                value: function () {
                  var e = this;
                  console.log("called");
                  var a = this.state.pageIndex + 1;
                  I.a
                    .all([H.get("/failed/notifications/" + a)])
                    .then(
                      I.a.spread(function (a) {
                        e.state.totalPages > e.state.pageIndex
                          ? e.setState({ pageIndex: e.state.pageIndex + 1 })
                          : e.setState({ lastIndexReached: !0 }),
                          !1 === e.state.lastIndexReached &&
                            e.setState({
                              totalPages: Math.ceil(a.data.count / 10),
                            }),
                          e.setState({
                            failedNotifications: [].concat(
                              Object(_.a)(e.state.failedNotifications),
                              Object(_.a)(a.data.resp)
                            ),
                            failedNotificationsCount: a.data.count,
                          }),
                          console.log(e.state.failedNotifications);
                      })
                    )
                    .catch(function (e) {
                      return console.log(e);
                    });
                },
              },
              {
                key: "loadMore",
                value: function () {
                  this.setState(function (e) {
                    return {
                      pageIndex: e.pageIndex + 1,
                      visible: e.visible + 10,
                    };
                  }),
                    this.loadFailedNotifications();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    a = this.state.waterGraphlabel,
                    r = this.state.waterGraphSaved,
                    n = this.state.waterGraphConsumed,
                    o = {
                      data1: function (e) {
                        var t = e.getContext("2d"),
                          n = t.createLinearGradient(1e3, 0, 500, 0, 100, 0);
                        n.addColorStop(0, "#035272"),
                          n.addColorStop(1, "#035272");
                        var l = t.createLinearGradient(
                          0,
                          1900,
                          400,
                          1300,
                          800,
                          1600,
                          50
                        );
                        return (
                          l.addColorStop(0, "rgba(128, 182, 244, 0)"),
                          l.addColorStop(1, "rgba(255, 255, 255, 0.24)"),
                          {
                            labels: a,
                            datasets: [
                              {
                                label: "Data",
                                borderColor: "#035272",
                                pointBorderColor: "#035272",
                                pointBackgroundColor: "#1e3d60",
                                pointHoverBackgroundColor: "#1e3d60",
                                pointHoverBorderColor: "#035272",
                                pointBorderWidth: 1,
                                pointHoverRadius: 7,
                                pointHoverBorderWidth: 2,
                                pointRadius: 2,
                                fill: !1,
                                backgroundColor: l,
                                borderWidth: 6,
                                data: r,
                              },
                            ],
                          }
                        );
                      },
                      data2: function (e) {
                        var t = e.getContext("2d"),
                          r = t.createLinearGradient(1e3, 0, 500, 0, 100, 0);
                        r.addColorStop(0, "#035272"),
                          r.addColorStop(1, "#035272");
                        var l = t.createLinearGradient(
                          0,
                          1900,
                          400,
                          1300,
                          800,
                          1600,
                          50
                        );
                        return (
                          l.addColorStop(0, "rgba(128, 182, 244, 0)"),
                          l.addColorStop(1, "rgba(255, 255, 255, 0.24)"),
                          {
                            labels: a,
                            datasets: [
                              {
                                label: "Data",
                                borderColor: "#035272",
                                pointBorderColor: "#035272",
                                pointBackgroundColor: "#1e3d60",
                                pointHoverBackgroundColor: "#1e3d60",
                                pointHoverBorderColor: "#035272",
                                pointBorderWidth: 1,
                                pointHoverRadius: 7,
                                pointHoverBorderWidth: 2,
                                pointRadius: 2,
                                fill: !1,
                                backgroundColor: l,
                                borderWidth: 6,
                                data: n,
                              },
                            ],
                          }
                        );
                      },
                      options: Y.chart1_2_options,
                    },
                    s = this.state.energyGraphlabel,
                    i = this.state.energyGraphSaved,
                    c = this.state.energyGraphConsumed,
                    d = {
                      data1: function (e) {
                        var a = e
                          .getContext("2d")
                          .createLinearGradient(0, 0, 0, 300);
                        return (
                          a.addColorStop(0, "#00727b"),
                          a.addColorStop(1, "#000a55"),
                          {
                            type: "bar",
                            dataPointWidth: 20,
                            labels: s,
                            datasets: [
                              {
                                label: "",
                                fill: !0,
                                borderWidth: 0.5,
                                backgroundColor: a,
                                hoverBackgroundColor: a,
                                hoverBorderWidth: 1,
                                hoverBorderColor: "#000a55",
                                data: i,
                              },
                            ],
                          }
                        );
                      },
                      data2: function (e) {
                        var a = e
                          .getContext("2d")
                          .createLinearGradient(0, 0, 0, 300);
                        return (
                          a.addColorStop(0, "#00727b"),
                          a.addColorStop(1, "#000a55"),
                          {
                            labels: s,
                            datasets: [
                              {
                                label: "",
                                fill: !0,
                                borderWidth: 0.5,
                                data: c,
                                backgroundColor: a,
                                hoverBackgroundColor: a,
                                hoverBorderWidth: 1,
                                hoverBorderColor: "#000a55",
                              },
                            ],
                          }
                        );
                      },
                      options: Y.bar1_2_options,
                    },
                    m = this.state.pumpGraphlabel,
                    u = this.state.pumpActivity,
                    p = {
                      data1: function (e) {
                        var a = e
                          .getContext("2d")
                          .createLinearGradient(0, 0, 0, 300);
                        return (
                          a.addColorStop(0, "#00727b"),
                          a.addColorStop(1, "#000a55"),
                          {
                            type: "bar",
                            dataPointWidth: 20,
                            labels: m,
                            datasets: [
                              {
                                label: "",
                                fill: !0,
                                borderWidth: 0.5,
                                data: u,
                                backgroundColor: a,
                                hoverBackgroundColor: a,
                                hoverBorderWidth: 1,
                                hoverBorderColor: "#000a55",
                              },
                            ],
                          }
                        );
                      },
                      options: Y.pump_options,
                    };
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(
                      "div",
                      { className: "content" },
                      l.a.createElement("hr", null),
                      l.a.createElement(
                        F.a,
                        { className: "top-cards-inline" },
                        l.a.createElement(
                          z.a,
                          { lg: "2", md: "4", sm: "6", xs: "6" },
                          l.a.createElement(
                            L.a,
                            { className: "card-chart" },
                            l.a.createElement(M.a, null),
                            l.a.createElement(
                              P.a,
                              null,
                              l.a.createElement(
                                "h4",
                                { className: "card-title", id: "totalUsers" },
                                this.state.dashboardStatus.totalUsers
                              ),
                              l.a.createElement(
                                "p",
                                { className: "card-text" },
                                "Devices Deployed"
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          z.a,
                          { lg: "2", md: "4", sm: "6", xs: "6" },
                          l.a.createElement(
                            L.a,
                            { className: "card-chart" },
                            l.a.createElement(M.a, null),
                            l.a.createElement(
                              P.a,
                              null,
                              l.a.createElement(
                                "h4",
                                { className: "card-title", id: "totalDevices" },
                                this.state.dashboardStatus.totalConnected
                              ),
                              l.a.createElement(
                                "p",
                                { className: "card-text" },
                                "Online/Connected Devices"
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          z.a,
                          { lg: "2", md: "4", sm: "6", xs: "6" },
                          l.a.createElement(
                            L.a,
                            { className: "card-chart" },
                            l.a.createElement(M.a, null),
                            l.a.createElement(
                              P.a,
                              null,
                              l.a.createElement(
                                "h4",
                                { className: "card-title", id: "totalSensors" },
                                "--"
                              ),
                              l.a.createElement(
                                "p",
                                { className: "card-text" },
                                "Online/Connceted Sensors"
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          z.a,
                          { lg: "2", md: "4", sm: "6", xs: "6" },
                          l.a.createElement(
                            L.a,
                            { className: "card-chart" },
                            l.a.createElement(M.a, null),
                            l.a.createElement(
                              P.a,
                              null,
                              l.a.createElement(
                                "h4",
                                { className: "card-title", id: "impYield" },
                                "--"
                              ),
                              l.a.createElement(
                                "p",
                                { className: "card-text" },
                                "Improvement in Yield"
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          z.a,
                          { lg: "2", md: "4", sm: "6", xs: "6" },
                          l.a.createElement(
                            L.a,
                            { className: "card-chart" },
                            l.a.createElement(M.a, null),
                            l.a.createElement(
                              P.a,
                              null,
                              l.a.createElement(
                                "h4",
                                { className: "card-title", id: "totalAcres" },
                                this.state.totalAcres
                              ),
                              l.a.createElement(
                                "p",
                                { className: "card-text" },
                                "Area covered in acres"
                              )
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        F.a,
                        null,
                        l.a.createElement(
                          z.a,
                          { xs: "12" },
                          l.a.createElement(
                            L.a,
                            { className: "card-chart" },
                            l.a.createElement(
                              F.a,
                              null,
                              l.a.createElement(
                                "div",
                                { className: "tab-frame" },
                                l.a.createElement("input", {
                                  type: "radio",
                                  defaultChecked: !0,
                                  name: "tab",
                                  id: "tab1",
                                }),
                                l.a.createElement(
                                  "label",
                                  { htmlFor: "tab1", id: "gdsrdd" },
                                  "WATER SAVED"
                                ),
                                l.a.createElement("label", null, "|"),
                                l.a.createElement("input", {
                                  type: "radio",
                                  name: "tab",
                                  id: "tab2",
                                }),
                                l.a.createElement(
                                  "label",
                                  { htmlFor: "tab2" },
                                  "WATER CONSUMED"
                                ),
                                l.a.createElement(
                                  "div",
                                  { className: "tab" },
                                  l.a.createElement(
                                    "div",
                                    { className: "card-body" },
                                    l.a.createElement(
                                      "div",
                                      {
                                        className: "chart-area",
                                        style: { height: "500px" },
                                      },
                                      l.a.createElement(D.b, {
                                        data: o[this.state.bigChartData],
                                        options: o.options,
                                      })
                                    )
                                  )
                                ),
                                l.a.createElement(
                                  "div",
                                  { className: "tab" },
                                  l.a.createElement(
                                    "div",
                                    { className: "card-body" },
                                    l.a.createElement(
                                      "div",
                                      {
                                        className: "chart-area",
                                        style: { height: "500px" },
                                      },
                                      l.a.createElement(D.b, {
                                        data: o[this.state.bigChartData1],
                                        options: o.options,
                                      })
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        F.a,
                        null,
                        l.a.createElement(
                          z.a,
                          { lg: "6" },
                          l.a.createElement(
                            "div",
                            { style: { display: "flex", marginBottom: "5px" } },
                            l.a.createElement(
                              "h5",
                              { className: "card-category chart-header" },
                              "AVG. PUMP ACTIVITY"
                            ),
                            l.a.createElement(
                              "span",
                              null,
                              l.a.createElement("img", {
                                alt: "...",
                                src: t(42),
                              })
                            ),
                            l.a.createElement(
                              "select",
                              {
                                id: "energyselect",
                                className: "select_box",
                                onChange: function (a) {
                                  e.setState({ pumpGraph: a.target.value }),
                                    e.updatePumpGraph(a.target.value);
                                },
                                value: this.state.pumpGraph,
                              },
                              l.a.createElement(
                                "option",
                                { value: "1" },
                                "ONE WEEK"
                              ),
                              l.a.createElement(
                                "option",
                                { value: "2" },
                                "ONE MONTH"
                              ),
                              l.a.createElement(
                                "option",
                                { value: "3" },
                                "THREE MONTH"
                              ),
                              l.a.createElement(
                                "option",
                                { value: "4" },
                                "SIX MONTH"
                              )
                            )
                          ),
                          l.a.createElement(
                            L.a,
                            { className: "card-chart" },
                            l.a.createElement(
                              P.a,
                              null,
                              l.a.createElement(
                                "div",
                                {
                                  className: "chart-area",
                                  style: { marginTop: "60px" },
                                },
                                l.a.createElement(D.a, {
                                  data: p[this.state.bigChartData],
                                  options: p.options,
                                })
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          z.a,
                          { lg: "6" },
                          l.a.createElement(
                            "div",
                            { style: { display: "flex", marginBottom: "5px" } },
                            l.a.createElement(
                              "h5",
                              { className: "card-category chart-header" },
                              "AVG. ENERGY"
                            ),
                            l.a.createElement(
                              "span",
                              null,
                              l.a.createElement("img", {
                                alt: "...",
                                src: t(42),
                              })
                            ),
                            l.a.createElement(
                              "select",
                              {
                                id: "energyselect",
                                className: "select_box",
                                onChange: function (a) {
                                  e.setState({ energyGraph: a.target.value }),
                                    e.updateGraph(a.target.value);
                                },
                                value: this.state.energyGraph,
                              },
                              l.a.createElement(
                                "option",
                                { value: "1" },
                                "ONE WEEK"
                              ),
                              l.a.createElement(
                                "option",
                                { value: "2" },
                                "ONE MONTH"
                              ),
                              l.a.createElement(
                                "option",
                                { value: "3" },
                                "THREE MONTH"
                              ),
                              l.a.createElement(
                                "option",
                                { value: "4" },
                                "SIX MONTH"
                              )
                            )
                          ),
                          l.a.createElement(
                            L.a,
                            { className: "card-chart" },
                            l.a.createElement(
                              P.a,
                              null,
                              l.a.createElement(
                                "div",
                                { className: "tab-frame1" },
                                l.a.createElement("input", {
                                  type: "radio",
                                  defaultChecked: !0,
                                  name: "tab1",
                                  id: "tab11",
                                }),
                                l.a.createElement(
                                  "label",
                                  { htmlFor: "tab11", id: "gdsrdd" },
                                  "SAVED"
                                ),
                                l.a.createElement("label", null, "|"),
                                l.a.createElement("input", {
                                  type: "radio",
                                  name: "tab1",
                                  id: "tab22",
                                }),
                                l.a.createElement(
                                  "label",
                                  { htmlFor: "tab22" },
                                  "CONSUMED"
                                ),
                                l.a.createElement(
                                  "div",
                                  { className: "tab1" },
                                  l.a.createElement(
                                    "div",
                                    { className: "card-body" },
                                    l.a.createElement(
                                      "div",
                                      { className: "chart-area" },
                                      l.a.createElement(D.a, {
                                        data: d[this.state.bigChartData],
                                        options: d.options,
                                      })
                                    )
                                  )
                                ),
                                l.a.createElement(
                                  "div",
                                  { className: "tab1" },
                                  l.a.createElement(
                                    "div",
                                    { className: "card-body" },
                                    l.a.createElement(
                                      "div",
                                      { className: "chart-area" },
                                      l.a.createElement(D.a, {
                                        data: d[this.state.bigChartData1],
                                        options: d.options,
                                      })
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        F.a,
                        null,
                        l.a.createElement(
                          z.a,
                          { lg: "12", md: "12" },
                          l.a.createElement(
                            L.a,
                            null,
                            l.a.createElement(
                              M.a,
                              null,
                              l.a.createElement(
                                R.a,
                                { tag: "h4" },
                                "Failed Notifications"
                              )
                            ),
                            l.a.createElement(
                              P.a,
                              null,
                              l.a.createElement(
                                U.a,
                                {
                                  className: "tablesorter",
                                  id: "failednotification",
                                  responsive: !0,
                                },
                                l.a.createElement(
                                  "thead",
                                  { className: "text-primary" },
                                  l.a.createElement(
                                    "tr",
                                    null,
                                    l.a.createElement("th", null),
                                    l.a.createElement("th", null, "Name"),
                                    l.a.createElement("th", null, "Reason"),
                                    l.a.createElement("th", null, "Device ID"),
                                    l.a.createElement("th", null, "Date"),
                                    l.a.createElement("th", null, "Time")
                                  )
                                ),
                                l.a.createElement(
                                  "tbody",
                                  null,
                                  this.state.failedNotifications.map(function (
                                    e,
                                    a
                                  ) {
                                    var r = new Date(e.created_at)
                                        .toISOString()
                                        .replace(/T/, " ")
                                        .replace(/\..+/, ""),
                                      n = W()(r).format("YYYY/MM/DD"),
                                      o = W()(r).format("HH:mm:ss");
                                    return l.a.createElement(
                                      "tr",
                                      { key: a },
                                      l.a.createElement(
                                        "td",
                                        null,
                                        l.a.createElement("img", {
                                          alt: "...",
                                          src: e.profile_pic
                                            ? e.profile_pic
                                            : t(93),
                                          className: "mini-profile",
                                        })
                                      ),
                                      l.a.createElement("td", null, e.name),
                                      l.a.createElement("td", null, e.text),
                                      l.a.createElement("td", null, e.id),
                                      l.a.createElement("td", null, n),
                                      l.a.createElement("td", null, o)
                                    );
                                  })
                                )
                              )
                            ),
                            this.state.visible <
                              this.state.failedNotificationsCount &&
                              l.a.createElement(
                                "button",
                                {
                                  onClick: this.loadMore,
                                  type: "button",
                                  className: "load-more",
                                },
                                "Load more"
                              )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            r
          );
        })(l.a.Component),
        J = function () {
          return l.a.createElement("img", {
            src: t(234),
            className: "load-more-icon",
          });
        },
        Z = (function (e) {
          Object(u.a)(r, e);
          var a = Object(p.a)(r);
          function r(e) {
            var t;
            return (
              Object(d.a)(this, r),
              ((t = a.call(this, e)).state = {
                usersArr: [],
                usersArrCount: 0,
                pageIndex: 0,
                totalPages: 1,
                visible: 10,
                isloading: !1,
              }),
              (t.loadMore = t.loadMore.bind(Object(k.a)(t))),
              t
            );
          }
          return (
            Object(m.a)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  this.loadUsers(this.state.pageIndex);
                },
              },
              {
                key: "loadUsers",
                value: function () {
                  var e = this;
                  console.log("called"), this.setState({ isloading: !0 });
                  var a = this.state.pageIndex + 1;
                  I.a
                    .all([H.get("/users/" + a)])
                    .then(
                      I.a.spread(function (a) {
                        e.setState({ isloading: !1 }),
                          e.state.totalPages > e.state.pageIndex
                            ? e.setState({ pageIndex: e.state.pageIndex + 1 })
                            : e.setState({ lastIndexReached: !0 }),
                          0 == e.state.lastIndexReached &&
                            e.setState({
                              totalPages: Math.ceil(a.data.count / 10),
                            }),
                          e.setState({
                            usersArr: [].concat(
                              Object(_.a)(e.state.usersArr),
                              Object(_.a)(a.data.output)
                            ),
                            usersArrCount: a.data.count,
                          }),
                          console.log(e.state.usersArr);
                      })
                    )
                    .catch(function (e) {
                      return console.log(e);
                    });
                },
              },
              {
                key: "loadMore",
                value: function () {
                  this.setState(function (e) {
                    return {
                      pageIndex: e.pageIndex + 1,
                      visible: e.visible + 10,
                    };
                  }),
                    this.loadUsers();
                },
              },
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(
                      "div",
                      { className: "content" },
                      l.a.createElement("hr", null),
                      l.a.createElement(
                        F.a,
                        null,
                        l.a.createElement(
                          z.a,
                          { lg: "12", md: "12" },
                          l.a.createElement(
                            L.a,
                            null,
                            l.a.createElement(
                              M.a,
                              null,
                              l.a.createElement(
                                R.a,
                                { tag: "h4" },
                                "SICCA Device Users"
                              )
                            ),
                            l.a.createElement(
                              P.a,
                              null,
                              l.a.createElement(
                                U.a,
                                {
                                  className: "device_user",
                                  id: "users",
                                  responsive: !0,
                                },
                                l.a.createElement(
                                  "thead",
                                  { className: "text-primary" },
                                  l.a.createElement(
                                    "tr",
                                    null,
                                    l.a.createElement("th", null),
                                    l.a.createElement("th", null, "Name"),
                                    l.a.createElement("th", null, "Device Id"),
                                    l.a.createElement("th", null, "Nodes"),
                                    l.a.createElement(
                                      "th",
                                      null,
                                      "Node Created At"
                                    ),
                                    l.a.createElement("th", null, "Land Size"),
                                    l.a.createElement(
                                      "th",
                                      null,
                                      "User Created At"
                                    )
                                  )
                                ),
                                l.a.createElement(
                                  "tbody",
                                  null,
                                  this.state.usersArr.map(function (e, a) {
                                    var r = new Date(e.user.updated_at)
                                        .toISOString()
                                        .replace(/T/, " ")
                                        .replace(/\..+/, ""),
                                      n = W()(r).format("L HH:mm:ss"),
                                      o =
                                        null == e.user.total_land_size
                                          ? "-"
                                          : e.user.total_land_size + " Acres",
                                      s = e.nodes.map(function (e, a) {
                                        var t = e.node_id + " : " + e.crop_name;
                                        return l.a.createElement(
                                          "a",
                                          {
                                            key: a,
                                            href:
                                              "/sicca-admin/individual/" +
                                              e.node_id,
                                          },
                                          t
                                        );
                                      }),
                                      i = e.nodes.map(function (e, a) {
                                        var t = new Date(e.created_at)
                                            .toISOString()
                                            .replace(/T/, " ")
                                            .replace(/\..+/, ""),
                                          r = W()(t).format("L HH:mm:ss");
                                        return l.a.createElement(
                                          "p",
                                          { className: "nodeCreatedDate" },
                                          r
                                        );
                                      });
                                    return l.a.createElement(
                                      "tr",
                                      { key: a },
                                      l.a.createElement(
                                        "td",
                                        null,
                                        l.a.createElement("img", {
                                          src: e.profile_pic
                                            ? e.profile_pic
                                            : t(93),
                                          className: "mini-profile",
                                        })
                                      ),
                                      l.a.createElement(
                                        "td",
                                        null,
                                        l.a.createElement(
                                          "p",
                                          null,
                                          e.user.name
                                        )
                                      ),
                                      l.a.createElement(
                                        "td",
                                        null,
                                        l.a.createElement("p", null, e.user.id)
                                      ),
                                      l.a.createElement("td", null, s),
                                      l.a.createElement("td", null, i),
                                      l.a.createElement(
                                        "td",
                                        null,
                                        l.a.createElement("p", null, o)
                                      ),
                                      l.a.createElement(
                                        "td",
                                        null,
                                        l.a.createElement("p", null, n)
                                      )
                                    );
                                  })
                                )
                              )
                            ),
                            l.a.createElement(
                              "div",
                              { style: { position: "relative" } },
                              this.state.visible < this.state.usersArrCount &&
                                l.a.createElement(
                                  V.a,
                                  {
                                    onClick: this.loadMore,
                                    type: "button",
                                    className: "load-more",
                                  },
                                  "Load more"
                                ),
                              this.state.isloading &&
                                this.state.visible < this.state.usersArrCount
                                ? l.a.createElement(J, null)
                                : ""
                            ),
                            l.a.createElement("h5", null, this.state.isloading)
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            r
          );
        })(l.a.Component),
        Q = (function (e) {
          Object(u.a)(t, e);
          var a = Object(p.a)(t);
          function t(e) {
            var r;
            return (
              Object(d.a)(this, t),
              ((r = a.call(this, e)).state = { isloading: !1 }),
              r
            );
          }
          return (
            Object(m.a)(t, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(
                      "div",
                      { className: "content" },
                      l.a.createElement("hr", null)
                    )
                  );
                },
              },
            ]),
            t
          );
        })(l.a.Component),
        $ = t(100),
        ee = t.n($),
        ae = t(101),
        te = t.n(ae),
        re = t(102),
        ne = t.n(re),
        le = [
          {
            path: "/dashboard",
            name: "Dashboard",
            iconClass: "left-menu-icon",
            icon: t(235),
            component: X,
            layout: "/sicca-admin",
          },
          {
            path: "/users",
            name: "Users",
            iconClass: "left-menu-icon",
            icon: t(236),
            component: Z,
            layout: "/sicca-admin",
          },
          {
            path: "/alerts",
            name: "Alerts",
            iconClass: "left-menu-icon",
            icon: t(237),
            component: Q,
            layout: "/sicca-admin",
          },
          {
            path: "/devicemanagement",
            name: "Device Management",
            iconClass: "left-menu-icon",
            icon: t(238),
            component: ee.a,
            layout: "/sicca-admin",
          },
          {
            path: "/support",
            name: "Support",
            iconClass: "left-menu-icon",
            icon: t(239),
            component: te.a,
            layout: "/sicca-admin",
          },
          {
            path: "/accesscontrol",
            name: "Access Control",
            iconClass: "left-menu-icon",
            icon: t(240),
            component: ne.a,
            layout: "/sicca-admin",
          },
        ],
        oe = t(103),
        se = t.n(oe),
        ie = t(104);
      var ce,
        de = function (e) {
          var a = e.component,
            t = Object(ie.a)(e, ["component"]);
          return (
            console.log(B()),
            l.a.createElement(
              c.b,
              Object.assign({}, t, {
                render: function (e) {
                  return B()
                    ? l.a.createElement(a, e)
                    : l.a.createElement(c.a, {
                        to: { pathname: "/login", state: { from: e.location } },
                      });
                },
              })
            )
          );
        },
        me = (function (e) {
          Object(u.a)(t, e);
          var a = Object(p.a)(t);
          function t(e) {
            var r;
            return (
              Object(d.a)(this, t),
              ((r = a.call(this, e)).toggleSidebar = function () {
                document.documentElement.classList.toggle("nav-open"),
                  r.setState({ sidebarOpened: !r.state.sidebarOpened });
              }),
              (r.getRoutes = function (e) {
                return e.map(function (e, a) {
                  return "/sicca-admin" === e.layout
                    ? l.a.createElement(de, {
                        path: e.layout + e.path,
                        component: e.component,
                        key: a,
                      })
                    : null;
                });
              }),
              (r.handleBgClick = function (e) {
                r.setState({ backgroundColor: e });
              }),
              (r.getBrandText = function (e) {
                for (var a = 0; a < le.length; a++)
                  if (
                    -1 !==
                    r.props.location.pathname.indexOf(le[a].layout + le[a].path)
                  )
                    return le[a].name;
                return "Brand";
              }),
              (r.state = {
                backgroundColor: "blue",
                sidebarOpened:
                  -1 !== document.documentElement.className.indexOf("nav-open"),
              }),
              r
            );
          }
          return (
            Object(m.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  if (navigator.platform.indexOf("Win") > -1) {
                    (document.documentElement.className +=
                      " perfect-scrollbar-on"),
                      document.documentElement.classList.remove(
                        "perfect-scrollbar-off"
                      ),
                      (ce = new h.a(this.refs.mainPanel, {
                        suppressScrollX: !0,
                      }));
                    for (
                      var e = document.querySelectorAll(".table-responsive"),
                        a = 0;
                      a < e.length;
                      a++
                    )
                      ce = new h.a(e[a]);
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  navigator.platform.indexOf("Win") > -1 &&
                    (ce.destroy(),
                    (document.documentElement.className +=
                      " perfect-scrollbar-off"),
                    document.documentElement.classList.remove(
                      "perfect-scrollbar-on"
                    ));
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  if ("PUSH" === e.history.action) {
                    if (navigator.platform.indexOf("Win") > -1)
                      for (
                        var a = document.querySelectorAll(".table-responsive"),
                          t = 0;
                        t < a.length;
                        t++
                      )
                        ce = new h.a(a[t]);
                    (document.documentElement.scrollTop = 0),
                      (document.scrollingElement.scrollTop = 0),
                      (this.refs.mainPanel.scrollTop = 0);
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(
                      "div",
                      { className: "wrapper" },
                      l.a.createElement(
                        A,
                        Object.assign({}, this.props, {
                          routes: le,
                          bgColor: this.state.backgroundColor,
                          logo: {
                            outterLink: "#",
                            text: "Gramin Admin",
                            imgSrc: se.a,
                          },
                          toggleSidebar: this.toggleSidebar,
                        })
                      ),
                      l.a.createElement(
                        "div",
                        {
                          className: "main-panel",
                          ref: "mainPanel",
                          data: this.state.backgroundColor,
                        },
                        l.a.createElement(
                          S,
                          Object.assign({}, this.props, {
                            brandText: this.getBrandText(
                              this.props.location.pathname
                            ),
                            toggleSidebar: this.toggleSidebar,
                            sidebarOpened: this.state.sidebarOpened,
                          })
                        ),
                        l.a.createElement(
                          c.d,
                          null,
                          this.getRoutes(le),
                          l.a.createElement(c.b, {
                            exact: !0,
                            component: K,
                            path: "/sicca-admin/individual/:nodeId",
                          })
                        ),
                        -1 !== this.props.location.pathname.indexOf("maps")
                          ? null
                          : l.a.createElement(x, { fluid: !0 })
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(l.a.Component),
        ue = t(48);
      var pe = function (e) {
          var a = Object(n.useState)(e),
            t = Object(ue.a)(a, 2),
            r = t[0],
            l = t[1];
          return {
            value: r,
            onChange: function (e) {
              l(e.target.value);
            },
          };
        },
        he = function (e) {
          var a = pe(""),
            t = pe(""),
            r = Object(n.useState)(null),
            o = Object(ue.a)(r, 2),
            s = o[0],
            i = o[1],
            c = Object(n.useState)(!1),
            d = Object(ue.a)(c, 2),
            m = d[0],
            u = d[1];
          return l.a.createElement(
            "div",
            { className: "box" },
            l.a.createElement(
              "div",
              { className: "login-form" },
              l.a.createElement("h1", null, "Login"),
              l.a.createElement("br", null),
              l.a.createElement(
                "div",
                null,
                "Email",
                l.a.createElement("br", null),
                l.a.createElement("input", Object.assign({ type: "text" }, a))
              ),
              l.a.createElement(
                "div",
                { style: { marginTop: 10 } },
                "Password",
                l.a.createElement("br", null),
                l.a.createElement(
                  "input",
                  Object.assign({ type: "password" }, t, {
                    autoComplete: "new-password",
                  })
                )
              ),
              s &&
                l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement("small", { style: { color: "red" } }, s),
                  l.a.createElement("br", null)
                ),
              l.a.createElement("br", null),
              l.a.createElement("input", {
                type: "button",
                value: m ? "Loading..." : "Login",
                onClick: function () {
                  i(null),
                    u(!0),
                    I.a
                      .post("http://34.93.137.80/api/sicca-admin/login", {
                        email: a.value,
                        password: t.value,
                      })
                      .then(function (a) {
                        u(!1),
                          console.log(a),
                          a.data.error
                            ? i(a.data.error)
                            : (localStorage.setItem("token", a.data.token),
                              (function (e) {
                                sessionStorage.setItem("token", e);
                              })(a.data.token),
                              setTimeout(function () {
                                e.history.push("/sicca-admin/dashboard");
                              }, 5e3));
                      })
                      .catch(function (e) {
                        u(!1),
                          401 === e.response.status
                            ? i(e.response.data.message)
                            : i(
                                "Something went wrong. Please try again later."
                              );
                      });
                },
                disabled: m,
              }),
              l.a.createElement("br", null)
            )
          );
        },
        ge = (t(241), t(242), t(243), Object(i.a)());
      s.a.render(
        l.a.createElement(
          c.c,
          { history: ge },
          l.a.createElement(
            c.d,
            null,
            l.a.createElement(c.b, {
              path: "/sicca-admin",
              render: function (e) {
                return l.a.createElement(me, e);
              },
            }),
            l.a.createElement(c.b, {
              exact: !0,
              path: "/login",
              component: he,
              render: function (e) {
                return null;
              },
            })
          )
        ),
        document.getElementById("root")
      );
    },
    42: function (e, a, t) {
      e.exports = t.p + "static/media/calendar.9f1f118b.svg";
    },
    93: function (e, a, t) {
      e.exports = t.p + "static/media/farmer.d8a57b3b.png";
    },
  },
  [[106, 1, 2]],
]);
//# sourceMappingURL=main.8f07c95d.chunk.js.map
