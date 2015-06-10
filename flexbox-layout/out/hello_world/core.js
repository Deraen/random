// Compiled by ClojureScript 0.0-3308 {}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
hello_world.core.css_transition_group = reagent.core.adapt_react_class.call(null,React.addons.CSSTransitionGroup);
if(typeof hello_world.core.state !== 'undefined'){
} else {
hello_world.core.state = reagent.ratom.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
hello_world.core.main = (function hello_world$core$main(){
var map__9051 = cljs.core.deref.call(null,hello_world.core.state);
var map__9051__$1 = ((cljs.core.seq_QMARK_.call(null,map__9051))?cljs.core.apply.call(null,cljs.core.hash_map,map__9051):map__9051);
var panel2 = cljs.core.get.call(null,map__9051__$1,new cljs.core.Keyword(null,"panel2","panel2",1757778408));
var panel3 = cljs.core.get.call(null,map__9051__$1,new cljs.core.Keyword(null,"panel3","panel3",59439649));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.sidebar","div.panel.sidebar",-1853455639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Sidebar"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.css_transition_group,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),"div",new cljs.core.Keyword(null,"transitionName","transitionName",-654288740),"foo"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel","div.panel",-1677992199),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"1",new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str((cljs.core.truth_((function (){var or__4309__auto__ = panel2;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return panel3;
}
})())?"out":null))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Panel 1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__9051,map__9051__$1,panel2,panel3){
return (function (){
return cljs.core.swap_BANG_.call(null,hello_world.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"panel2","panel2",1757778408),true);
});})(map__9051,map__9051__$1,panel2,panel3))
], null),"Open panel 2"], null)], null)], null),(cljs.core.truth_(panel2)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel","div.panel",-1677992199),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"2",new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str((cljs.core.truth_(panel3)?"out ":null))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Panel 2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__9051,map__9051__$1,panel2,panel3){
return (function (){
return cljs.core.swap_BANG_.call(null,hello_world.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"panel2","panel2",1757778408),false,new cljs.core.Keyword(null,"panel3","panel3",59439649),false);
});})(map__9051,map__9051__$1,panel2,panel3))
], null),"Close this panel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__9051,map__9051__$1,panel2,panel3){
return (function (){
return cljs.core.swap_BANG_.call(null,hello_world.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"panel3","panel3",59439649),true);
});})(map__9051,map__9051__$1,panel2,panel3))
], null),"Open panel 3"], null)], null)], null):null),(cljs.core.truth_(panel3)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel","div.panel",-1677992199),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Panel 3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__9051,map__9051__$1,panel2,panel3){
return (function (){
return cljs.core.swap_BANG_.call(null,hello_world.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"panel3","panel3",59439649),false);
});})(map__9051,map__9051__$1,panel2,panel3))
], null),"Close this panel"], null)], null)], null):null)], null)], null);
});
hello_world.core.start = (function hello_world$core$start(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.main], null),document.getElementById("app"));
});
goog.exportSymbol('hello_world.core.start', hello_world.core.start);
hello_world.core.start.call(null);

//# sourceMappingURL=core.js.map