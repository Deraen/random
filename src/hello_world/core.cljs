(ns hello-world.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as reagent]
            [reagent.ratom :refer [atom] :refer-macros [reaction]]
            [cljs.core.async :refer [timeout chan <! put!]]))

(enable-console-print!)

(def css-transition-group
  (reagent/adapt-react-class js/React.addons.CSSTransitionGroup))

(defonce state (atom {}))

(defn main []
  (let [{:keys [panel2 panel3]} @state]
    [:div.container
     [:div.panel.sidebar
      [:h1 "Sidebar"]]
     [css-transition-group
      {:component "div"
       :transitionName "foo"}
      [:div.panel
       {:key "1" :class (str (if (or panel2 panel3) "out"))}
       [:h1 "Panel 1"]
       [:div.content
        [:button {:type "button" :on-click #(swap! state assoc :panel2 true)} "Open panel 2"]]]
      (if panel2
        [:div.panel
         {:key "2" :class (str (if panel3 "out "))}
         [:h1 "Panel 2"]
         [:div.content
          [:button {:type "button" :on-click #(swap! state assoc :panel2 false :panel3 false)} "Close this panel"]
          [:button {:type "button" :on-click #(swap! state assoc :panel3 true)} "Open panel 3"]]])
      (if panel3
        [:div.panel
         {:key "3"}
         [:h1 "Panel 3"]
         [:div.content
          [:button {:type "button" :on-click #(swap! state assoc :panel3 false)} "Close this panel"]]])]]))

(defn ^:export start []
  (reagent/render-component [main] (js/document.getElementById "app")))

(start)
