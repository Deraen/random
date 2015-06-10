// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t9361 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9361 = (function (fn_handler,f,meta9362){
this.fn_handler = fn_handler;
this.f = f;
this.meta9362 = meta9362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t9361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9363,meta9362__$1){
var self__ = this;
var _9363__$1 = this;
return (new cljs.core.async.t9361(self__.fn_handler,self__.f,meta9362__$1));
});

cljs.core.async.t9361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9363){
var self__ = this;
var _9363__$1 = this;
return self__.meta9362;
});

cljs.core.async.t9361.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t9361.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t9361.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t9361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta9362","meta9362",316583130,null)], null);
});

cljs.core.async.t9361.cljs$lang$type = true;

cljs.core.async.t9361.cljs$lang$ctorStr = "cljs.core.async/t9361";

cljs.core.async.t9361.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t9361");
});

cljs.core.async.__GT_t9361 = (function cljs$core$async$fn_handler_$___GT_t9361(fn_handler__$1,f__$1,meta9362){
return (new cljs.core.async.t9361(fn_handler__$1,f__$1,meta9362));
});

}

return (new cljs.core.async.t9361(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__9365 = buff;
if(G__9365){
var bit__4983__auto__ = null;
if(cljs.core.truth_((function (){var or__4309__auto__ = bit__4983__auto__;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return G__9365.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__9365.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9365);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9365);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__9367 = arguments.length;
switch (G__9367) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__9370 = arguments.length;
switch (G__9370) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9372 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9372);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9372,ret){
return (function (){
return fn1.call(null,val_9372);
});})(val_9372,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__9374 = arguments.length;
switch (G__9374) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4421__auto__)){
var ret = temp__4421__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4421__auto__)){
var retb = temp__4421__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4421__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4421__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5194__auto___9376 = n;
var x_9377 = (0);
while(true){
if((x_9377 < n__5194__auto___9376)){
(a[x_9377] = (0));

var G__9378 = (x_9377 + (1));
x_9377 = G__9378;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__9379 = (i + (1));
i = G__9379;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t9383 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9383 = (function (alt_flag,flag,meta9384){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta9384 = meta9384;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t9383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9385,meta9384__$1){
var self__ = this;
var _9385__$1 = this;
return (new cljs.core.async.t9383(self__.alt_flag,self__.flag,meta9384__$1));
});})(flag))
;

cljs.core.async.t9383.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9385){
var self__ = this;
var _9385__$1 = this;
return self__.meta9384;
});})(flag))
;

cljs.core.async.t9383.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t9383.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t9383.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t9383.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9384","meta9384",-1315039290,null)], null);
});})(flag))
;

cljs.core.async.t9383.cljs$lang$type = true;

cljs.core.async.t9383.cljs$lang$ctorStr = "cljs.core.async/t9383";

cljs.core.async.t9383.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t9383");
});})(flag))
;

cljs.core.async.__GT_t9383 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t9383(alt_flag__$1,flag__$1,meta9384){
return (new cljs.core.async.t9383(alt_flag__$1,flag__$1,meta9384));
});})(flag))
;

}

return (new cljs.core.async.t9383(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t9389 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9389 = (function (alt_handler,flag,cb,meta9390){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta9390 = meta9390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t9389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9391,meta9390__$1){
var self__ = this;
var _9391__$1 = this;
return (new cljs.core.async.t9389(self__.alt_handler,self__.flag,self__.cb,meta9390__$1));
});

cljs.core.async.t9389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9391){
var self__ = this;
var _9391__$1 = this;
return self__.meta9390;
});

cljs.core.async.t9389.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t9389.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t9389.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t9389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9390","meta9390",2023993764,null)], null);
});

cljs.core.async.t9389.cljs$lang$type = true;

cljs.core.async.t9389.cljs$lang$ctorStr = "cljs.core.async/t9389";

cljs.core.async.t9389.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t9389");
});

cljs.core.async.__GT_t9389 = (function cljs$core$async$alt_handler_$___GT_t9389(alt_handler__$1,flag__$1,cb__$1,meta9390){
return (new cljs.core.async.t9389(alt_handler__$1,flag__$1,cb__$1,meta9390));
});

}

return (new cljs.core.async.t9389(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9392_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9392_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9393_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9393_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4309__auto__ = wport;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9394 = (i + (1));
i = G__9394;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4309__auto__ = ret;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4423__auto__ = (function (){var and__4297__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4297__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4297__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var got = temp__4423__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9397){
var map__9398 = p__9397;
var map__9398__$1 = ((cljs.core.seq_QMARK_.call(null,map__9398))?cljs.core.apply.call(null,cljs.core.hash_map,map__9398):map__9398);
var opts = map__9398__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9395){
var G__9396 = cljs.core.first.call(null,seq9395);
var seq9395__$1 = cljs.core.next.call(null,seq9395);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9396,seq9395__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__9400 = arguments.length;
switch (G__9400) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__6888__auto___9449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___9449){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___9449){
return (function (state_9424){
var state_val_9425 = (state_9424[(1)]);
if((state_val_9425 === (7))){
var inst_9420 = (state_9424[(2)]);
var state_9424__$1 = state_9424;
var statearr_9426_9450 = state_9424__$1;
(statearr_9426_9450[(2)] = inst_9420);

(statearr_9426_9450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9425 === (1))){
var state_9424__$1 = state_9424;
var statearr_9427_9451 = state_9424__$1;
(statearr_9427_9451[(2)] = null);

(statearr_9427_9451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9425 === (4))){
var inst_9403 = (state_9424[(7)]);
var inst_9403__$1 = (state_9424[(2)]);
var inst_9404 = (inst_9403__$1 == null);
var state_9424__$1 = (function (){var statearr_9428 = state_9424;
(statearr_9428[(7)] = inst_9403__$1);

return statearr_9428;
})();
if(cljs.core.truth_(inst_9404)){
var statearr_9429_9452 = state_9424__$1;
(statearr_9429_9452[(1)] = (5));

} else {
var statearr_9430_9453 = state_9424__$1;
(statearr_9430_9453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9425 === (13))){
var state_9424__$1 = state_9424;
var statearr_9431_9454 = state_9424__$1;
(statearr_9431_9454[(2)] = null);

(statearr_9431_9454[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9425 === (6))){
var inst_9403 = (state_9424[(7)]);
var state_9424__$1 = state_9424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9424__$1,(11),to,inst_9403);
} else {
if((state_val_9425 === (3))){
var inst_9422 = (state_9424[(2)]);
var state_9424__$1 = state_9424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9424__$1,inst_9422);
} else {
if((state_val_9425 === (12))){
var state_9424__$1 = state_9424;
var statearr_9432_9455 = state_9424__$1;
(statearr_9432_9455[(2)] = null);

(statearr_9432_9455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9425 === (2))){
var state_9424__$1 = state_9424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9424__$1,(4),from);
} else {
if((state_val_9425 === (11))){
var inst_9413 = (state_9424[(2)]);
var state_9424__$1 = state_9424;
if(cljs.core.truth_(inst_9413)){
var statearr_9433_9456 = state_9424__$1;
(statearr_9433_9456[(1)] = (12));

} else {
var statearr_9434_9457 = state_9424__$1;
(statearr_9434_9457[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9425 === (9))){
var state_9424__$1 = state_9424;
var statearr_9435_9458 = state_9424__$1;
(statearr_9435_9458[(2)] = null);

(statearr_9435_9458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9425 === (5))){
var state_9424__$1 = state_9424;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9436_9459 = state_9424__$1;
(statearr_9436_9459[(1)] = (8));

} else {
var statearr_9437_9460 = state_9424__$1;
(statearr_9437_9460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9425 === (14))){
var inst_9418 = (state_9424[(2)]);
var state_9424__$1 = state_9424;
var statearr_9438_9461 = state_9424__$1;
(statearr_9438_9461[(2)] = inst_9418);

(statearr_9438_9461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9425 === (10))){
var inst_9410 = (state_9424[(2)]);
var state_9424__$1 = state_9424;
var statearr_9439_9462 = state_9424__$1;
(statearr_9439_9462[(2)] = inst_9410);

(statearr_9439_9462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9425 === (8))){
var inst_9407 = cljs.core.async.close_BANG_.call(null,to);
var state_9424__$1 = state_9424;
var statearr_9440_9463 = state_9424__$1;
(statearr_9440_9463[(2)] = inst_9407);

(statearr_9440_9463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6888__auto___9449))
;
return ((function (switch__6826__auto__,c__6888__auto___9449){
return (function() {
var cljs$core$async$state_machine__6827__auto__ = null;
var cljs$core$async$state_machine__6827__auto____0 = (function (){
var statearr_9444 = [null,null,null,null,null,null,null,null];
(statearr_9444[(0)] = cljs$core$async$state_machine__6827__auto__);

(statearr_9444[(1)] = (1));

return statearr_9444;
});
var cljs$core$async$state_machine__6827__auto____1 = (function (state_9424){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_9424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e9445){if((e9445 instanceof Object)){
var ex__6830__auto__ = e9445;
var statearr_9446_9464 = state_9424;
(statearr_9446_9464[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9465 = state_9424;
state_9424 = G__9465;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$state_machine__6827__auto__ = function(state_9424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6827__auto____1.call(this,state_9424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6827__auto____0;
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6827__auto____1;
return cljs$core$async$state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___9449))
})();
var state__6890__auto__ = (function (){var statearr_9447 = f__6889__auto__.call(null);
(statearr_9447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___9449);

return statearr_9447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___9449))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__9649){
var vec__9650 = p__9649;
var v = cljs.core.nth.call(null,vec__9650,(0),null);
var p = cljs.core.nth.call(null,vec__9650,(1),null);
var job = vec__9650;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6888__auto___9832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___9832,res,vec__9650,v,p,job,jobs,results){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___9832,res,vec__9650,v,p,job,jobs,results){
return (function (state_9655){
var state_val_9656 = (state_9655[(1)]);
if((state_val_9656 === (1))){
var state_9655__$1 = state_9655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9655__$1,(2),res,v);
} else {
if((state_val_9656 === (2))){
var inst_9652 = (state_9655[(2)]);
var inst_9653 = cljs.core.async.close_BANG_.call(null,res);
var state_9655__$1 = (function (){var statearr_9657 = state_9655;
(statearr_9657[(7)] = inst_9652);

return statearr_9657;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9655__$1,inst_9653);
} else {
return null;
}
}
});})(c__6888__auto___9832,res,vec__9650,v,p,job,jobs,results))
;
return ((function (switch__6826__auto__,c__6888__auto___9832,res,vec__9650,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0 = (function (){
var statearr_9661 = [null,null,null,null,null,null,null,null];
(statearr_9661[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__);

(statearr_9661[(1)] = (1));

return statearr_9661;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1 = (function (state_9655){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_9655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e9662){if((e9662 instanceof Object)){
var ex__6830__auto__ = e9662;
var statearr_9663_9833 = state_9655;
(statearr_9663_9833[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9834 = state_9655;
state_9655 = G__9834;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__ = function(state_9655){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1.call(this,state_9655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___9832,res,vec__9650,v,p,job,jobs,results))
})();
var state__6890__auto__ = (function (){var statearr_9664 = f__6889__auto__.call(null);
(statearr_9664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___9832);

return statearr_9664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___9832,res,vec__9650,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9665){
var vec__9666 = p__9665;
var v = cljs.core.nth.call(null,vec__9666,(0),null);
var p = cljs.core.nth.call(null,vec__9666,(1),null);
var job = vec__9666;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5194__auto___9835 = n;
var __9836 = (0);
while(true){
if((__9836 < n__5194__auto___9835)){
var G__9667_9837 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9667_9837) {
case "compute":
var c__6888__auto___9839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9836,c__6888__auto___9839,G__9667_9837,n__5194__auto___9835,jobs,results,process,async){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (__9836,c__6888__auto___9839,G__9667_9837,n__5194__auto___9835,jobs,results,process,async){
return (function (state_9680){
var state_val_9681 = (state_9680[(1)]);
if((state_val_9681 === (1))){
var state_9680__$1 = state_9680;
var statearr_9682_9840 = state_9680__$1;
(statearr_9682_9840[(2)] = null);

(statearr_9682_9840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9681 === (2))){
var state_9680__$1 = state_9680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9680__$1,(4),jobs);
} else {
if((state_val_9681 === (3))){
var inst_9678 = (state_9680[(2)]);
var state_9680__$1 = state_9680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9680__$1,inst_9678);
} else {
if((state_val_9681 === (4))){
var inst_9670 = (state_9680[(2)]);
var inst_9671 = process.call(null,inst_9670);
var state_9680__$1 = state_9680;
if(cljs.core.truth_(inst_9671)){
var statearr_9683_9841 = state_9680__$1;
(statearr_9683_9841[(1)] = (5));

} else {
var statearr_9684_9842 = state_9680__$1;
(statearr_9684_9842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9681 === (5))){
var state_9680__$1 = state_9680;
var statearr_9685_9843 = state_9680__$1;
(statearr_9685_9843[(2)] = null);

(statearr_9685_9843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9681 === (6))){
var state_9680__$1 = state_9680;
var statearr_9686_9844 = state_9680__$1;
(statearr_9686_9844[(2)] = null);

(statearr_9686_9844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9681 === (7))){
var inst_9676 = (state_9680[(2)]);
var state_9680__$1 = state_9680;
var statearr_9687_9845 = state_9680__$1;
(statearr_9687_9845[(2)] = inst_9676);

(statearr_9687_9845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__9836,c__6888__auto___9839,G__9667_9837,n__5194__auto___9835,jobs,results,process,async))
;
return ((function (__9836,switch__6826__auto__,c__6888__auto___9839,G__9667_9837,n__5194__auto___9835,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0 = (function (){
var statearr_9691 = [null,null,null,null,null,null,null];
(statearr_9691[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__);

(statearr_9691[(1)] = (1));

return statearr_9691;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1 = (function (state_9680){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_9680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e9692){if((e9692 instanceof Object)){
var ex__6830__auto__ = e9692;
var statearr_9693_9846 = state_9680;
(statearr_9693_9846[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9847 = state_9680;
state_9680 = G__9847;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__ = function(state_9680){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1.call(this,state_9680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__;
})()
;})(__9836,switch__6826__auto__,c__6888__auto___9839,G__9667_9837,n__5194__auto___9835,jobs,results,process,async))
})();
var state__6890__auto__ = (function (){var statearr_9694 = f__6889__auto__.call(null);
(statearr_9694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___9839);

return statearr_9694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(__9836,c__6888__auto___9839,G__9667_9837,n__5194__auto___9835,jobs,results,process,async))
);


break;
case "async":
var c__6888__auto___9848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9836,c__6888__auto___9848,G__9667_9837,n__5194__auto___9835,jobs,results,process,async){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (__9836,c__6888__auto___9848,G__9667_9837,n__5194__auto___9835,jobs,results,process,async){
return (function (state_9707){
var state_val_9708 = (state_9707[(1)]);
if((state_val_9708 === (1))){
var state_9707__$1 = state_9707;
var statearr_9709_9849 = state_9707__$1;
(statearr_9709_9849[(2)] = null);

(statearr_9709_9849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9708 === (2))){
var state_9707__$1 = state_9707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9707__$1,(4),jobs);
} else {
if((state_val_9708 === (3))){
var inst_9705 = (state_9707[(2)]);
var state_9707__$1 = state_9707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9707__$1,inst_9705);
} else {
if((state_val_9708 === (4))){
var inst_9697 = (state_9707[(2)]);
var inst_9698 = async.call(null,inst_9697);
var state_9707__$1 = state_9707;
if(cljs.core.truth_(inst_9698)){
var statearr_9710_9850 = state_9707__$1;
(statearr_9710_9850[(1)] = (5));

} else {
var statearr_9711_9851 = state_9707__$1;
(statearr_9711_9851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9708 === (5))){
var state_9707__$1 = state_9707;
var statearr_9712_9852 = state_9707__$1;
(statearr_9712_9852[(2)] = null);

(statearr_9712_9852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9708 === (6))){
var state_9707__$1 = state_9707;
var statearr_9713_9853 = state_9707__$1;
(statearr_9713_9853[(2)] = null);

(statearr_9713_9853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9708 === (7))){
var inst_9703 = (state_9707[(2)]);
var state_9707__$1 = state_9707;
var statearr_9714_9854 = state_9707__$1;
(statearr_9714_9854[(2)] = inst_9703);

(statearr_9714_9854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__9836,c__6888__auto___9848,G__9667_9837,n__5194__auto___9835,jobs,results,process,async))
;
return ((function (__9836,switch__6826__auto__,c__6888__auto___9848,G__9667_9837,n__5194__auto___9835,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0 = (function (){
var statearr_9718 = [null,null,null,null,null,null,null];
(statearr_9718[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__);

(statearr_9718[(1)] = (1));

return statearr_9718;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1 = (function (state_9707){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_9707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e9719){if((e9719 instanceof Object)){
var ex__6830__auto__ = e9719;
var statearr_9720_9855 = state_9707;
(statearr_9720_9855[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9856 = state_9707;
state_9707 = G__9856;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__ = function(state_9707){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1.call(this,state_9707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__;
})()
;})(__9836,switch__6826__auto__,c__6888__auto___9848,G__9667_9837,n__5194__auto___9835,jobs,results,process,async))
})();
var state__6890__auto__ = (function (){var statearr_9721 = f__6889__auto__.call(null);
(statearr_9721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___9848);

return statearr_9721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(__9836,c__6888__auto___9848,G__9667_9837,n__5194__auto___9835,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__9857 = (__9836 + (1));
__9836 = G__9857;
continue;
} else {
}
break;
}

var c__6888__auto___9858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___9858,jobs,results,process,async){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___9858,jobs,results,process,async){
return (function (state_9743){
var state_val_9744 = (state_9743[(1)]);
if((state_val_9744 === (1))){
var state_9743__$1 = state_9743;
var statearr_9745_9859 = state_9743__$1;
(statearr_9745_9859[(2)] = null);

(statearr_9745_9859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9744 === (2))){
var state_9743__$1 = state_9743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9743__$1,(4),from);
} else {
if((state_val_9744 === (3))){
var inst_9741 = (state_9743[(2)]);
var state_9743__$1 = state_9743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9743__$1,inst_9741);
} else {
if((state_val_9744 === (4))){
var inst_9724 = (state_9743[(7)]);
var inst_9724__$1 = (state_9743[(2)]);
var inst_9725 = (inst_9724__$1 == null);
var state_9743__$1 = (function (){var statearr_9746 = state_9743;
(statearr_9746[(7)] = inst_9724__$1);

return statearr_9746;
})();
if(cljs.core.truth_(inst_9725)){
var statearr_9747_9860 = state_9743__$1;
(statearr_9747_9860[(1)] = (5));

} else {
var statearr_9748_9861 = state_9743__$1;
(statearr_9748_9861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9744 === (5))){
var inst_9727 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9743__$1 = state_9743;
var statearr_9749_9862 = state_9743__$1;
(statearr_9749_9862[(2)] = inst_9727);

(statearr_9749_9862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9744 === (6))){
var inst_9729 = (state_9743[(8)]);
var inst_9724 = (state_9743[(7)]);
var inst_9729__$1 = cljs.core.async.chan.call(null,(1));
var inst_9730 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9731 = [inst_9724,inst_9729__$1];
var inst_9732 = (new cljs.core.PersistentVector(null,2,(5),inst_9730,inst_9731,null));
var state_9743__$1 = (function (){var statearr_9750 = state_9743;
(statearr_9750[(8)] = inst_9729__$1);

return statearr_9750;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9743__$1,(8),jobs,inst_9732);
} else {
if((state_val_9744 === (7))){
var inst_9739 = (state_9743[(2)]);
var state_9743__$1 = state_9743;
var statearr_9751_9863 = state_9743__$1;
(statearr_9751_9863[(2)] = inst_9739);

(statearr_9751_9863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9744 === (8))){
var inst_9729 = (state_9743[(8)]);
var inst_9734 = (state_9743[(2)]);
var state_9743__$1 = (function (){var statearr_9752 = state_9743;
(statearr_9752[(9)] = inst_9734);

return statearr_9752;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9743__$1,(9),results,inst_9729);
} else {
if((state_val_9744 === (9))){
var inst_9736 = (state_9743[(2)]);
var state_9743__$1 = (function (){var statearr_9753 = state_9743;
(statearr_9753[(10)] = inst_9736);

return statearr_9753;
})();
var statearr_9754_9864 = state_9743__$1;
(statearr_9754_9864[(2)] = null);

(statearr_9754_9864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__6888__auto___9858,jobs,results,process,async))
;
return ((function (switch__6826__auto__,c__6888__auto___9858,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0 = (function (){
var statearr_9758 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9758[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__);

(statearr_9758[(1)] = (1));

return statearr_9758;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1 = (function (state_9743){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_9743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e9759){if((e9759 instanceof Object)){
var ex__6830__auto__ = e9759;
var statearr_9760_9865 = state_9743;
(statearr_9760_9865[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9866 = state_9743;
state_9743 = G__9866;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__ = function(state_9743){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1.call(this,state_9743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___9858,jobs,results,process,async))
})();
var state__6890__auto__ = (function (){var statearr_9761 = f__6889__auto__.call(null);
(statearr_9761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___9858);

return statearr_9761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___9858,jobs,results,process,async))
);


var c__6888__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto__,jobs,results,process,async){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto__,jobs,results,process,async){
return (function (state_9799){
var state_val_9800 = (state_9799[(1)]);
if((state_val_9800 === (7))){
var inst_9795 = (state_9799[(2)]);
var state_9799__$1 = state_9799;
var statearr_9801_9867 = state_9799__$1;
(statearr_9801_9867[(2)] = inst_9795);

(statearr_9801_9867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9800 === (20))){
var state_9799__$1 = state_9799;
var statearr_9802_9868 = state_9799__$1;
(statearr_9802_9868[(2)] = null);

(statearr_9802_9868[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9800 === (1))){
var state_9799__$1 = state_9799;
var statearr_9803_9869 = state_9799__$1;
(statearr_9803_9869[(2)] = null);

(statearr_9803_9869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9800 === (4))){
var inst_9764 = (state_9799[(7)]);
var inst_9764__$1 = (state_9799[(2)]);
var inst_9765 = (inst_9764__$1 == null);
var state_9799__$1 = (function (){var statearr_9804 = state_9799;
(statearr_9804[(7)] = inst_9764__$1);

return statearr_9804;
})();
if(cljs.core.truth_(inst_9765)){
var statearr_9805_9870 = state_9799__$1;
(statearr_9805_9870[(1)] = (5));

} else {
var statearr_9806_9871 = state_9799__$1;
(statearr_9806_9871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9800 === (15))){
var inst_9777 = (state_9799[(8)]);
var state_9799__$1 = state_9799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9799__$1,(18),to,inst_9777);
} else {
if((state_val_9800 === (21))){
var inst_9790 = (state_9799[(2)]);
var state_9799__$1 = state_9799;
var statearr_9807_9872 = state_9799__$1;
(statearr_9807_9872[(2)] = inst_9790);

(statearr_9807_9872[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9800 === (13))){
var inst_9792 = (state_9799[(2)]);
var state_9799__$1 = (function (){var statearr_9808 = state_9799;
(statearr_9808[(9)] = inst_9792);

return statearr_9808;
})();
var statearr_9809_9873 = state_9799__$1;
(statearr_9809_9873[(2)] = null);

(statearr_9809_9873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9800 === (6))){
var inst_9764 = (state_9799[(7)]);
var state_9799__$1 = state_9799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9799__$1,(11),inst_9764);
} else {
if((state_val_9800 === (17))){
var inst_9785 = (state_9799[(2)]);
var state_9799__$1 = state_9799;
if(cljs.core.truth_(inst_9785)){
var statearr_9810_9874 = state_9799__$1;
(statearr_9810_9874[(1)] = (19));

} else {
var statearr_9811_9875 = state_9799__$1;
(statearr_9811_9875[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9800 === (3))){
var inst_9797 = (state_9799[(2)]);
var state_9799__$1 = state_9799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9799__$1,inst_9797);
} else {
if((state_val_9800 === (12))){
var inst_9774 = (state_9799[(10)]);
var state_9799__$1 = state_9799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9799__$1,(14),inst_9774);
} else {
if((state_val_9800 === (2))){
var state_9799__$1 = state_9799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9799__$1,(4),results);
} else {
if((state_val_9800 === (19))){
var state_9799__$1 = state_9799;
var statearr_9812_9876 = state_9799__$1;
(statearr_9812_9876[(2)] = null);

(statearr_9812_9876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9800 === (11))){
var inst_9774 = (state_9799[(2)]);
var state_9799__$1 = (function (){var statearr_9813 = state_9799;
(statearr_9813[(10)] = inst_9774);

return statearr_9813;
})();
var statearr_9814_9877 = state_9799__$1;
(statearr_9814_9877[(2)] = null);

(statearr_9814_9877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9800 === (9))){
var state_9799__$1 = state_9799;
var statearr_9815_9878 = state_9799__$1;
(statearr_9815_9878[(2)] = null);

(statearr_9815_9878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9800 === (5))){
var state_9799__$1 = state_9799;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9816_9879 = state_9799__$1;
(statearr_9816_9879[(1)] = (8));

} else {
var statearr_9817_9880 = state_9799__$1;
(statearr_9817_9880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9800 === (14))){
var inst_9777 = (state_9799[(8)]);
var inst_9779 = (state_9799[(11)]);
var inst_9777__$1 = (state_9799[(2)]);
var inst_9778 = (inst_9777__$1 == null);
var inst_9779__$1 = cljs.core.not.call(null,inst_9778);
var state_9799__$1 = (function (){var statearr_9818 = state_9799;
(statearr_9818[(8)] = inst_9777__$1);

(statearr_9818[(11)] = inst_9779__$1);

return statearr_9818;
})();
if(inst_9779__$1){
var statearr_9819_9881 = state_9799__$1;
(statearr_9819_9881[(1)] = (15));

} else {
var statearr_9820_9882 = state_9799__$1;
(statearr_9820_9882[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9800 === (16))){
var inst_9779 = (state_9799[(11)]);
var state_9799__$1 = state_9799;
var statearr_9821_9883 = state_9799__$1;
(statearr_9821_9883[(2)] = inst_9779);

(statearr_9821_9883[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9800 === (10))){
var inst_9771 = (state_9799[(2)]);
var state_9799__$1 = state_9799;
var statearr_9822_9884 = state_9799__$1;
(statearr_9822_9884[(2)] = inst_9771);

(statearr_9822_9884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9800 === (18))){
var inst_9782 = (state_9799[(2)]);
var state_9799__$1 = state_9799;
var statearr_9823_9885 = state_9799__$1;
(statearr_9823_9885[(2)] = inst_9782);

(statearr_9823_9885[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9800 === (8))){
var inst_9768 = cljs.core.async.close_BANG_.call(null,to);
var state_9799__$1 = state_9799;
var statearr_9824_9886 = state_9799__$1;
(statearr_9824_9886[(2)] = inst_9768);

(statearr_9824_9886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6888__auto__,jobs,results,process,async))
;
return ((function (switch__6826__auto__,c__6888__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0 = (function (){
var statearr_9828 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9828[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__);

(statearr_9828[(1)] = (1));

return statearr_9828;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1 = (function (state_9799){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_9799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e9829){if((e9829 instanceof Object)){
var ex__6830__auto__ = e9829;
var statearr_9830_9887 = state_9799;
(statearr_9830_9887[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9888 = state_9799;
state_9799 = G__9888;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__ = function(state_9799){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1.call(this,state_9799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto__,jobs,results,process,async))
})();
var state__6890__auto__ = (function (){var statearr_9831 = f__6889__auto__.call(null);
(statearr_9831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto__);

return statearr_9831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto__,jobs,results,process,async))
);

return c__6888__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__9890 = arguments.length;
switch (G__9890) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__9893 = arguments.length;
switch (G__9893) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__9896 = arguments.length;
switch (G__9896) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6888__auto___9948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___9948,tc,fc){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___9948,tc,fc){
return (function (state_9922){
var state_val_9923 = (state_9922[(1)]);
if((state_val_9923 === (7))){
var inst_9918 = (state_9922[(2)]);
var state_9922__$1 = state_9922;
var statearr_9924_9949 = state_9922__$1;
(statearr_9924_9949[(2)] = inst_9918);

(statearr_9924_9949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9923 === (1))){
var state_9922__$1 = state_9922;
var statearr_9925_9950 = state_9922__$1;
(statearr_9925_9950[(2)] = null);

(statearr_9925_9950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9923 === (4))){
var inst_9899 = (state_9922[(7)]);
var inst_9899__$1 = (state_9922[(2)]);
var inst_9900 = (inst_9899__$1 == null);
var state_9922__$1 = (function (){var statearr_9926 = state_9922;
(statearr_9926[(7)] = inst_9899__$1);

return statearr_9926;
})();
if(cljs.core.truth_(inst_9900)){
var statearr_9927_9951 = state_9922__$1;
(statearr_9927_9951[(1)] = (5));

} else {
var statearr_9928_9952 = state_9922__$1;
(statearr_9928_9952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9923 === (13))){
var state_9922__$1 = state_9922;
var statearr_9929_9953 = state_9922__$1;
(statearr_9929_9953[(2)] = null);

(statearr_9929_9953[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9923 === (6))){
var inst_9899 = (state_9922[(7)]);
var inst_9905 = p.call(null,inst_9899);
var state_9922__$1 = state_9922;
if(cljs.core.truth_(inst_9905)){
var statearr_9930_9954 = state_9922__$1;
(statearr_9930_9954[(1)] = (9));

} else {
var statearr_9931_9955 = state_9922__$1;
(statearr_9931_9955[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9923 === (3))){
var inst_9920 = (state_9922[(2)]);
var state_9922__$1 = state_9922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9922__$1,inst_9920);
} else {
if((state_val_9923 === (12))){
var state_9922__$1 = state_9922;
var statearr_9932_9956 = state_9922__$1;
(statearr_9932_9956[(2)] = null);

(statearr_9932_9956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9923 === (2))){
var state_9922__$1 = state_9922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9922__$1,(4),ch);
} else {
if((state_val_9923 === (11))){
var inst_9899 = (state_9922[(7)]);
var inst_9909 = (state_9922[(2)]);
var state_9922__$1 = state_9922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9922__$1,(8),inst_9909,inst_9899);
} else {
if((state_val_9923 === (9))){
var state_9922__$1 = state_9922;
var statearr_9933_9957 = state_9922__$1;
(statearr_9933_9957[(2)] = tc);

(statearr_9933_9957[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9923 === (5))){
var inst_9902 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9903 = cljs.core.async.close_BANG_.call(null,fc);
var state_9922__$1 = (function (){var statearr_9934 = state_9922;
(statearr_9934[(8)] = inst_9902);

return statearr_9934;
})();
var statearr_9935_9958 = state_9922__$1;
(statearr_9935_9958[(2)] = inst_9903);

(statearr_9935_9958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9923 === (14))){
var inst_9916 = (state_9922[(2)]);
var state_9922__$1 = state_9922;
var statearr_9936_9959 = state_9922__$1;
(statearr_9936_9959[(2)] = inst_9916);

(statearr_9936_9959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9923 === (10))){
var state_9922__$1 = state_9922;
var statearr_9937_9960 = state_9922__$1;
(statearr_9937_9960[(2)] = fc);

(statearr_9937_9960[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9923 === (8))){
var inst_9911 = (state_9922[(2)]);
var state_9922__$1 = state_9922;
if(cljs.core.truth_(inst_9911)){
var statearr_9938_9961 = state_9922__$1;
(statearr_9938_9961[(1)] = (12));

} else {
var statearr_9939_9962 = state_9922__$1;
(statearr_9939_9962[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6888__auto___9948,tc,fc))
;
return ((function (switch__6826__auto__,c__6888__auto___9948,tc,fc){
return (function() {
var cljs$core$async$state_machine__6827__auto__ = null;
var cljs$core$async$state_machine__6827__auto____0 = (function (){
var statearr_9943 = [null,null,null,null,null,null,null,null,null];
(statearr_9943[(0)] = cljs$core$async$state_machine__6827__auto__);

(statearr_9943[(1)] = (1));

return statearr_9943;
});
var cljs$core$async$state_machine__6827__auto____1 = (function (state_9922){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_9922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e9944){if((e9944 instanceof Object)){
var ex__6830__auto__ = e9944;
var statearr_9945_9963 = state_9922;
(statearr_9945_9963[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9964 = state_9922;
state_9922 = G__9964;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$state_machine__6827__auto__ = function(state_9922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6827__auto____1.call(this,state_9922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6827__auto____0;
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6827__auto____1;
return cljs$core$async$state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___9948,tc,fc))
})();
var state__6890__auto__ = (function (){var statearr_9946 = f__6889__auto__.call(null);
(statearr_9946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___9948);

return statearr_9946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___9948,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__6888__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto__){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto__){
return (function (state_10011){
var state_val_10012 = (state_10011[(1)]);
if((state_val_10012 === (1))){
var inst_9997 = init;
var state_10011__$1 = (function (){var statearr_10013 = state_10011;
(statearr_10013[(7)] = inst_9997);

return statearr_10013;
})();
var statearr_10014_10029 = state_10011__$1;
(statearr_10014_10029[(2)] = null);

(statearr_10014_10029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (2))){
var state_10011__$1 = state_10011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10011__$1,(4),ch);
} else {
if((state_val_10012 === (3))){
var inst_10009 = (state_10011[(2)]);
var state_10011__$1 = state_10011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10011__$1,inst_10009);
} else {
if((state_val_10012 === (4))){
var inst_10000 = (state_10011[(8)]);
var inst_10000__$1 = (state_10011[(2)]);
var inst_10001 = (inst_10000__$1 == null);
var state_10011__$1 = (function (){var statearr_10015 = state_10011;
(statearr_10015[(8)] = inst_10000__$1);

return statearr_10015;
})();
if(cljs.core.truth_(inst_10001)){
var statearr_10016_10030 = state_10011__$1;
(statearr_10016_10030[(1)] = (5));

} else {
var statearr_10017_10031 = state_10011__$1;
(statearr_10017_10031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (5))){
var inst_9997 = (state_10011[(7)]);
var state_10011__$1 = state_10011;
var statearr_10018_10032 = state_10011__$1;
(statearr_10018_10032[(2)] = inst_9997);

(statearr_10018_10032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (6))){
var inst_10000 = (state_10011[(8)]);
var inst_9997 = (state_10011[(7)]);
var inst_10004 = f.call(null,inst_9997,inst_10000);
var inst_9997__$1 = inst_10004;
var state_10011__$1 = (function (){var statearr_10019 = state_10011;
(statearr_10019[(7)] = inst_9997__$1);

return statearr_10019;
})();
var statearr_10020_10033 = state_10011__$1;
(statearr_10020_10033[(2)] = null);

(statearr_10020_10033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (7))){
var inst_10007 = (state_10011[(2)]);
var state_10011__$1 = state_10011;
var statearr_10021_10034 = state_10011__$1;
(statearr_10021_10034[(2)] = inst_10007);

(statearr_10021_10034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__6888__auto__))
;
return ((function (switch__6826__auto__,c__6888__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6827__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6827__auto____0 = (function (){
var statearr_10025 = [null,null,null,null,null,null,null,null,null];
(statearr_10025[(0)] = cljs$core$async$reduce_$_state_machine__6827__auto__);

(statearr_10025[(1)] = (1));

return statearr_10025;
});
var cljs$core$async$reduce_$_state_machine__6827__auto____1 = (function (state_10011){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_10011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e10026){if((e10026 instanceof Object)){
var ex__6830__auto__ = e10026;
var statearr_10027_10035 = state_10011;
(statearr_10027_10035[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10036 = state_10011;
state_10011 = G__10036;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6827__auto__ = function(state_10011){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6827__auto____1.call(this,state_10011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6827__auto____0;
cljs$core$async$reduce_$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6827__auto____1;
return cljs$core$async$reduce_$_state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto__))
})();
var state__6890__auto__ = (function (){var statearr_10028 = f__6889__auto__.call(null);
(statearr_10028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto__);

return statearr_10028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto__))
);

return c__6888__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__10038 = arguments.length;
switch (G__10038) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__6888__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto__){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto__){
return (function (state_10063){
var state_val_10064 = (state_10063[(1)]);
if((state_val_10064 === (7))){
var inst_10045 = (state_10063[(2)]);
var state_10063__$1 = state_10063;
var statearr_10065_10089 = state_10063__$1;
(statearr_10065_10089[(2)] = inst_10045);

(statearr_10065_10089[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10064 === (1))){
var inst_10039 = cljs.core.seq.call(null,coll);
var inst_10040 = inst_10039;
var state_10063__$1 = (function (){var statearr_10066 = state_10063;
(statearr_10066[(7)] = inst_10040);

return statearr_10066;
})();
var statearr_10067_10090 = state_10063__$1;
(statearr_10067_10090[(2)] = null);

(statearr_10067_10090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10064 === (4))){
var inst_10040 = (state_10063[(7)]);
var inst_10043 = cljs.core.first.call(null,inst_10040);
var state_10063__$1 = state_10063;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10063__$1,(7),ch,inst_10043);
} else {
if((state_val_10064 === (13))){
var inst_10057 = (state_10063[(2)]);
var state_10063__$1 = state_10063;
var statearr_10068_10091 = state_10063__$1;
(statearr_10068_10091[(2)] = inst_10057);

(statearr_10068_10091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10064 === (6))){
var inst_10048 = (state_10063[(2)]);
var state_10063__$1 = state_10063;
if(cljs.core.truth_(inst_10048)){
var statearr_10069_10092 = state_10063__$1;
(statearr_10069_10092[(1)] = (8));

} else {
var statearr_10070_10093 = state_10063__$1;
(statearr_10070_10093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10064 === (3))){
var inst_10061 = (state_10063[(2)]);
var state_10063__$1 = state_10063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10063__$1,inst_10061);
} else {
if((state_val_10064 === (12))){
var state_10063__$1 = state_10063;
var statearr_10071_10094 = state_10063__$1;
(statearr_10071_10094[(2)] = null);

(statearr_10071_10094[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10064 === (2))){
var inst_10040 = (state_10063[(7)]);
var state_10063__$1 = state_10063;
if(cljs.core.truth_(inst_10040)){
var statearr_10072_10095 = state_10063__$1;
(statearr_10072_10095[(1)] = (4));

} else {
var statearr_10073_10096 = state_10063__$1;
(statearr_10073_10096[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10064 === (11))){
var inst_10054 = cljs.core.async.close_BANG_.call(null,ch);
var state_10063__$1 = state_10063;
var statearr_10074_10097 = state_10063__$1;
(statearr_10074_10097[(2)] = inst_10054);

(statearr_10074_10097[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10064 === (9))){
var state_10063__$1 = state_10063;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10075_10098 = state_10063__$1;
(statearr_10075_10098[(1)] = (11));

} else {
var statearr_10076_10099 = state_10063__$1;
(statearr_10076_10099[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10064 === (5))){
var inst_10040 = (state_10063[(7)]);
var state_10063__$1 = state_10063;
var statearr_10077_10100 = state_10063__$1;
(statearr_10077_10100[(2)] = inst_10040);

(statearr_10077_10100[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10064 === (10))){
var inst_10059 = (state_10063[(2)]);
var state_10063__$1 = state_10063;
var statearr_10078_10101 = state_10063__$1;
(statearr_10078_10101[(2)] = inst_10059);

(statearr_10078_10101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10064 === (8))){
var inst_10040 = (state_10063[(7)]);
var inst_10050 = cljs.core.next.call(null,inst_10040);
var inst_10040__$1 = inst_10050;
var state_10063__$1 = (function (){var statearr_10079 = state_10063;
(statearr_10079[(7)] = inst_10040__$1);

return statearr_10079;
})();
var statearr_10080_10102 = state_10063__$1;
(statearr_10080_10102[(2)] = null);

(statearr_10080_10102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6888__auto__))
;
return ((function (switch__6826__auto__,c__6888__auto__){
return (function() {
var cljs$core$async$state_machine__6827__auto__ = null;
var cljs$core$async$state_machine__6827__auto____0 = (function (){
var statearr_10084 = [null,null,null,null,null,null,null,null];
(statearr_10084[(0)] = cljs$core$async$state_machine__6827__auto__);

(statearr_10084[(1)] = (1));

return statearr_10084;
});
var cljs$core$async$state_machine__6827__auto____1 = (function (state_10063){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_10063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e10085){if((e10085 instanceof Object)){
var ex__6830__auto__ = e10085;
var statearr_10086_10103 = state_10063;
(statearr_10086_10103[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10104 = state_10063;
state_10063 = G__10104;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$state_machine__6827__auto__ = function(state_10063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6827__auto____1.call(this,state_10063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6827__auto____0;
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6827__auto____1;
return cljs$core$async$state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto__))
})();
var state__6890__auto__ = (function (){var statearr_10087 = f__6889__auto__.call(null);
(statearr_10087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto__);

return statearr_10087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto__))
);

return c__6888__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj10106 = {};
return obj10106;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4297__auto__ = _;
if(and__4297__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4945__auto__ = (((_ == null))?null:_);
return (function (){var or__4309__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj10108 = {};
return obj10108;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t10330 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10330 = (function (mult,ch,cs,meta10331){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta10331 = meta10331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10332,meta10331__$1){
var self__ = this;
var _10332__$1 = this;
return (new cljs.core.async.t10330(self__.mult,self__.ch,self__.cs,meta10331__$1));
});})(cs))
;

cljs.core.async.t10330.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10332){
var self__ = this;
var _10332__$1 = this;
return self__.meta10331;
});})(cs))
;

cljs.core.async.t10330.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t10330.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t10330.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t10330.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t10330.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t10330.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t10330.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10331","meta10331",-2010533339,null)], null);
});})(cs))
;

cljs.core.async.t10330.cljs$lang$type = true;

cljs.core.async.t10330.cljs$lang$ctorStr = "cljs.core.async/t10330";

cljs.core.async.t10330.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t10330");
});})(cs))
;

cljs.core.async.__GT_t10330 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t10330(mult__$1,ch__$1,cs__$1,meta10331){
return (new cljs.core.async.t10330(mult__$1,ch__$1,cs__$1,meta10331));
});})(cs))
;

}

return (new cljs.core.async.t10330(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6888__auto___10551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___10551,cs,m,dchan,dctr,done){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___10551,cs,m,dchan,dctr,done){
return (function (state_10463){
var state_val_10464 = (state_10463[(1)]);
if((state_val_10464 === (7))){
var inst_10459 = (state_10463[(2)]);
var state_10463__$1 = state_10463;
var statearr_10465_10552 = state_10463__$1;
(statearr_10465_10552[(2)] = inst_10459);

(statearr_10465_10552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (20))){
var inst_10364 = (state_10463[(7)]);
var inst_10374 = cljs.core.first.call(null,inst_10364);
var inst_10375 = cljs.core.nth.call(null,inst_10374,(0),null);
var inst_10376 = cljs.core.nth.call(null,inst_10374,(1),null);
var state_10463__$1 = (function (){var statearr_10466 = state_10463;
(statearr_10466[(8)] = inst_10375);

return statearr_10466;
})();
if(cljs.core.truth_(inst_10376)){
var statearr_10467_10553 = state_10463__$1;
(statearr_10467_10553[(1)] = (22));

} else {
var statearr_10468_10554 = state_10463__$1;
(statearr_10468_10554[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (27))){
var inst_10406 = (state_10463[(9)]);
var inst_10404 = (state_10463[(10)]);
var inst_10335 = (state_10463[(11)]);
var inst_10411 = (state_10463[(12)]);
var inst_10411__$1 = cljs.core._nth.call(null,inst_10404,inst_10406);
var inst_10412 = cljs.core.async.put_BANG_.call(null,inst_10411__$1,inst_10335,done);
var state_10463__$1 = (function (){var statearr_10469 = state_10463;
(statearr_10469[(12)] = inst_10411__$1);

return statearr_10469;
})();
if(cljs.core.truth_(inst_10412)){
var statearr_10470_10555 = state_10463__$1;
(statearr_10470_10555[(1)] = (30));

} else {
var statearr_10471_10556 = state_10463__$1;
(statearr_10471_10556[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (1))){
var state_10463__$1 = state_10463;
var statearr_10472_10557 = state_10463__$1;
(statearr_10472_10557[(2)] = null);

(statearr_10472_10557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (24))){
var inst_10364 = (state_10463[(7)]);
var inst_10381 = (state_10463[(2)]);
var inst_10382 = cljs.core.next.call(null,inst_10364);
var inst_10344 = inst_10382;
var inst_10345 = null;
var inst_10346 = (0);
var inst_10347 = (0);
var state_10463__$1 = (function (){var statearr_10473 = state_10463;
(statearr_10473[(13)] = inst_10345);

(statearr_10473[(14)] = inst_10347);

(statearr_10473[(15)] = inst_10381);

(statearr_10473[(16)] = inst_10344);

(statearr_10473[(17)] = inst_10346);

return statearr_10473;
})();
var statearr_10474_10558 = state_10463__$1;
(statearr_10474_10558[(2)] = null);

(statearr_10474_10558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (39))){
var state_10463__$1 = state_10463;
var statearr_10478_10559 = state_10463__$1;
(statearr_10478_10559[(2)] = null);

(statearr_10478_10559[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (4))){
var inst_10335 = (state_10463[(11)]);
var inst_10335__$1 = (state_10463[(2)]);
var inst_10336 = (inst_10335__$1 == null);
var state_10463__$1 = (function (){var statearr_10479 = state_10463;
(statearr_10479[(11)] = inst_10335__$1);

return statearr_10479;
})();
if(cljs.core.truth_(inst_10336)){
var statearr_10480_10560 = state_10463__$1;
(statearr_10480_10560[(1)] = (5));

} else {
var statearr_10481_10561 = state_10463__$1;
(statearr_10481_10561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (15))){
var inst_10345 = (state_10463[(13)]);
var inst_10347 = (state_10463[(14)]);
var inst_10344 = (state_10463[(16)]);
var inst_10346 = (state_10463[(17)]);
var inst_10360 = (state_10463[(2)]);
var inst_10361 = (inst_10347 + (1));
var tmp10475 = inst_10345;
var tmp10476 = inst_10344;
var tmp10477 = inst_10346;
var inst_10344__$1 = tmp10476;
var inst_10345__$1 = tmp10475;
var inst_10346__$1 = tmp10477;
var inst_10347__$1 = inst_10361;
var state_10463__$1 = (function (){var statearr_10482 = state_10463;
(statearr_10482[(13)] = inst_10345__$1);

(statearr_10482[(18)] = inst_10360);

(statearr_10482[(14)] = inst_10347__$1);

(statearr_10482[(16)] = inst_10344__$1);

(statearr_10482[(17)] = inst_10346__$1);

return statearr_10482;
})();
var statearr_10483_10562 = state_10463__$1;
(statearr_10483_10562[(2)] = null);

(statearr_10483_10562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (21))){
var inst_10385 = (state_10463[(2)]);
var state_10463__$1 = state_10463;
var statearr_10487_10563 = state_10463__$1;
(statearr_10487_10563[(2)] = inst_10385);

(statearr_10487_10563[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (31))){
var inst_10411 = (state_10463[(12)]);
var inst_10415 = done.call(null,null);
var inst_10416 = cljs.core.async.untap_STAR_.call(null,m,inst_10411);
var state_10463__$1 = (function (){var statearr_10488 = state_10463;
(statearr_10488[(19)] = inst_10415);

return statearr_10488;
})();
var statearr_10489_10564 = state_10463__$1;
(statearr_10489_10564[(2)] = inst_10416);

(statearr_10489_10564[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (32))){
var inst_10406 = (state_10463[(9)]);
var inst_10404 = (state_10463[(10)]);
var inst_10405 = (state_10463[(20)]);
var inst_10403 = (state_10463[(21)]);
var inst_10418 = (state_10463[(2)]);
var inst_10419 = (inst_10406 + (1));
var tmp10484 = inst_10404;
var tmp10485 = inst_10405;
var tmp10486 = inst_10403;
var inst_10403__$1 = tmp10486;
var inst_10404__$1 = tmp10484;
var inst_10405__$1 = tmp10485;
var inst_10406__$1 = inst_10419;
var state_10463__$1 = (function (){var statearr_10490 = state_10463;
(statearr_10490[(9)] = inst_10406__$1);

(statearr_10490[(10)] = inst_10404__$1);

(statearr_10490[(20)] = inst_10405__$1);

(statearr_10490[(22)] = inst_10418);

(statearr_10490[(21)] = inst_10403__$1);

return statearr_10490;
})();
var statearr_10491_10565 = state_10463__$1;
(statearr_10491_10565[(2)] = null);

(statearr_10491_10565[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (40))){
var inst_10431 = (state_10463[(23)]);
var inst_10435 = done.call(null,null);
var inst_10436 = cljs.core.async.untap_STAR_.call(null,m,inst_10431);
var state_10463__$1 = (function (){var statearr_10492 = state_10463;
(statearr_10492[(24)] = inst_10435);

return statearr_10492;
})();
var statearr_10493_10566 = state_10463__$1;
(statearr_10493_10566[(2)] = inst_10436);

(statearr_10493_10566[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (33))){
var inst_10422 = (state_10463[(25)]);
var inst_10424 = cljs.core.chunked_seq_QMARK_.call(null,inst_10422);
var state_10463__$1 = state_10463;
if(inst_10424){
var statearr_10494_10567 = state_10463__$1;
(statearr_10494_10567[(1)] = (36));

} else {
var statearr_10495_10568 = state_10463__$1;
(statearr_10495_10568[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (13))){
var inst_10354 = (state_10463[(26)]);
var inst_10357 = cljs.core.async.close_BANG_.call(null,inst_10354);
var state_10463__$1 = state_10463;
var statearr_10496_10569 = state_10463__$1;
(statearr_10496_10569[(2)] = inst_10357);

(statearr_10496_10569[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (22))){
var inst_10375 = (state_10463[(8)]);
var inst_10378 = cljs.core.async.close_BANG_.call(null,inst_10375);
var state_10463__$1 = state_10463;
var statearr_10497_10570 = state_10463__$1;
(statearr_10497_10570[(2)] = inst_10378);

(statearr_10497_10570[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (36))){
var inst_10422 = (state_10463[(25)]);
var inst_10426 = cljs.core.chunk_first.call(null,inst_10422);
var inst_10427 = cljs.core.chunk_rest.call(null,inst_10422);
var inst_10428 = cljs.core.count.call(null,inst_10426);
var inst_10403 = inst_10427;
var inst_10404 = inst_10426;
var inst_10405 = inst_10428;
var inst_10406 = (0);
var state_10463__$1 = (function (){var statearr_10498 = state_10463;
(statearr_10498[(9)] = inst_10406);

(statearr_10498[(10)] = inst_10404);

(statearr_10498[(20)] = inst_10405);

(statearr_10498[(21)] = inst_10403);

return statearr_10498;
})();
var statearr_10499_10571 = state_10463__$1;
(statearr_10499_10571[(2)] = null);

(statearr_10499_10571[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (41))){
var inst_10422 = (state_10463[(25)]);
var inst_10438 = (state_10463[(2)]);
var inst_10439 = cljs.core.next.call(null,inst_10422);
var inst_10403 = inst_10439;
var inst_10404 = null;
var inst_10405 = (0);
var inst_10406 = (0);
var state_10463__$1 = (function (){var statearr_10500 = state_10463;
(statearr_10500[(9)] = inst_10406);

(statearr_10500[(10)] = inst_10404);

(statearr_10500[(20)] = inst_10405);

(statearr_10500[(27)] = inst_10438);

(statearr_10500[(21)] = inst_10403);

return statearr_10500;
})();
var statearr_10501_10572 = state_10463__$1;
(statearr_10501_10572[(2)] = null);

(statearr_10501_10572[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (43))){
var state_10463__$1 = state_10463;
var statearr_10502_10573 = state_10463__$1;
(statearr_10502_10573[(2)] = null);

(statearr_10502_10573[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (29))){
var inst_10447 = (state_10463[(2)]);
var state_10463__$1 = state_10463;
var statearr_10503_10574 = state_10463__$1;
(statearr_10503_10574[(2)] = inst_10447);

(statearr_10503_10574[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (44))){
var inst_10456 = (state_10463[(2)]);
var state_10463__$1 = (function (){var statearr_10504 = state_10463;
(statearr_10504[(28)] = inst_10456);

return statearr_10504;
})();
var statearr_10505_10575 = state_10463__$1;
(statearr_10505_10575[(2)] = null);

(statearr_10505_10575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (6))){
var inst_10395 = (state_10463[(29)]);
var inst_10394 = cljs.core.deref.call(null,cs);
var inst_10395__$1 = cljs.core.keys.call(null,inst_10394);
var inst_10396 = cljs.core.count.call(null,inst_10395__$1);
var inst_10397 = cljs.core.reset_BANG_.call(null,dctr,inst_10396);
var inst_10402 = cljs.core.seq.call(null,inst_10395__$1);
var inst_10403 = inst_10402;
var inst_10404 = null;
var inst_10405 = (0);
var inst_10406 = (0);
var state_10463__$1 = (function (){var statearr_10506 = state_10463;
(statearr_10506[(29)] = inst_10395__$1);

(statearr_10506[(9)] = inst_10406);

(statearr_10506[(10)] = inst_10404);

(statearr_10506[(20)] = inst_10405);

(statearr_10506[(21)] = inst_10403);

(statearr_10506[(30)] = inst_10397);

return statearr_10506;
})();
var statearr_10507_10576 = state_10463__$1;
(statearr_10507_10576[(2)] = null);

(statearr_10507_10576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (28))){
var inst_10403 = (state_10463[(21)]);
var inst_10422 = (state_10463[(25)]);
var inst_10422__$1 = cljs.core.seq.call(null,inst_10403);
var state_10463__$1 = (function (){var statearr_10508 = state_10463;
(statearr_10508[(25)] = inst_10422__$1);

return statearr_10508;
})();
if(inst_10422__$1){
var statearr_10509_10577 = state_10463__$1;
(statearr_10509_10577[(1)] = (33));

} else {
var statearr_10510_10578 = state_10463__$1;
(statearr_10510_10578[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (25))){
var inst_10406 = (state_10463[(9)]);
var inst_10405 = (state_10463[(20)]);
var inst_10408 = (inst_10406 < inst_10405);
var inst_10409 = inst_10408;
var state_10463__$1 = state_10463;
if(cljs.core.truth_(inst_10409)){
var statearr_10511_10579 = state_10463__$1;
(statearr_10511_10579[(1)] = (27));

} else {
var statearr_10512_10580 = state_10463__$1;
(statearr_10512_10580[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (34))){
var state_10463__$1 = state_10463;
var statearr_10513_10581 = state_10463__$1;
(statearr_10513_10581[(2)] = null);

(statearr_10513_10581[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (17))){
var state_10463__$1 = state_10463;
var statearr_10514_10582 = state_10463__$1;
(statearr_10514_10582[(2)] = null);

(statearr_10514_10582[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (3))){
var inst_10461 = (state_10463[(2)]);
var state_10463__$1 = state_10463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10463__$1,inst_10461);
} else {
if((state_val_10464 === (12))){
var inst_10390 = (state_10463[(2)]);
var state_10463__$1 = state_10463;
var statearr_10515_10583 = state_10463__$1;
(statearr_10515_10583[(2)] = inst_10390);

(statearr_10515_10583[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (2))){
var state_10463__$1 = state_10463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10463__$1,(4),ch);
} else {
if((state_val_10464 === (23))){
var state_10463__$1 = state_10463;
var statearr_10516_10584 = state_10463__$1;
(statearr_10516_10584[(2)] = null);

(statearr_10516_10584[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (35))){
var inst_10445 = (state_10463[(2)]);
var state_10463__$1 = state_10463;
var statearr_10517_10585 = state_10463__$1;
(statearr_10517_10585[(2)] = inst_10445);

(statearr_10517_10585[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (19))){
var inst_10364 = (state_10463[(7)]);
var inst_10368 = cljs.core.chunk_first.call(null,inst_10364);
var inst_10369 = cljs.core.chunk_rest.call(null,inst_10364);
var inst_10370 = cljs.core.count.call(null,inst_10368);
var inst_10344 = inst_10369;
var inst_10345 = inst_10368;
var inst_10346 = inst_10370;
var inst_10347 = (0);
var state_10463__$1 = (function (){var statearr_10518 = state_10463;
(statearr_10518[(13)] = inst_10345);

(statearr_10518[(14)] = inst_10347);

(statearr_10518[(16)] = inst_10344);

(statearr_10518[(17)] = inst_10346);

return statearr_10518;
})();
var statearr_10519_10586 = state_10463__$1;
(statearr_10519_10586[(2)] = null);

(statearr_10519_10586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (11))){
var inst_10364 = (state_10463[(7)]);
var inst_10344 = (state_10463[(16)]);
var inst_10364__$1 = cljs.core.seq.call(null,inst_10344);
var state_10463__$1 = (function (){var statearr_10520 = state_10463;
(statearr_10520[(7)] = inst_10364__$1);

return statearr_10520;
})();
if(inst_10364__$1){
var statearr_10521_10587 = state_10463__$1;
(statearr_10521_10587[(1)] = (16));

} else {
var statearr_10522_10588 = state_10463__$1;
(statearr_10522_10588[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (9))){
var inst_10392 = (state_10463[(2)]);
var state_10463__$1 = state_10463;
var statearr_10523_10589 = state_10463__$1;
(statearr_10523_10589[(2)] = inst_10392);

(statearr_10523_10589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (5))){
var inst_10342 = cljs.core.deref.call(null,cs);
var inst_10343 = cljs.core.seq.call(null,inst_10342);
var inst_10344 = inst_10343;
var inst_10345 = null;
var inst_10346 = (0);
var inst_10347 = (0);
var state_10463__$1 = (function (){var statearr_10524 = state_10463;
(statearr_10524[(13)] = inst_10345);

(statearr_10524[(14)] = inst_10347);

(statearr_10524[(16)] = inst_10344);

(statearr_10524[(17)] = inst_10346);

return statearr_10524;
})();
var statearr_10525_10590 = state_10463__$1;
(statearr_10525_10590[(2)] = null);

(statearr_10525_10590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (14))){
var state_10463__$1 = state_10463;
var statearr_10526_10591 = state_10463__$1;
(statearr_10526_10591[(2)] = null);

(statearr_10526_10591[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (45))){
var inst_10453 = (state_10463[(2)]);
var state_10463__$1 = state_10463;
var statearr_10527_10592 = state_10463__$1;
(statearr_10527_10592[(2)] = inst_10453);

(statearr_10527_10592[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (26))){
var inst_10395 = (state_10463[(29)]);
var inst_10449 = (state_10463[(2)]);
var inst_10450 = cljs.core.seq.call(null,inst_10395);
var state_10463__$1 = (function (){var statearr_10528 = state_10463;
(statearr_10528[(31)] = inst_10449);

return statearr_10528;
})();
if(inst_10450){
var statearr_10529_10593 = state_10463__$1;
(statearr_10529_10593[(1)] = (42));

} else {
var statearr_10530_10594 = state_10463__$1;
(statearr_10530_10594[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (16))){
var inst_10364 = (state_10463[(7)]);
var inst_10366 = cljs.core.chunked_seq_QMARK_.call(null,inst_10364);
var state_10463__$1 = state_10463;
if(inst_10366){
var statearr_10531_10595 = state_10463__$1;
(statearr_10531_10595[(1)] = (19));

} else {
var statearr_10532_10596 = state_10463__$1;
(statearr_10532_10596[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (38))){
var inst_10442 = (state_10463[(2)]);
var state_10463__$1 = state_10463;
var statearr_10533_10597 = state_10463__$1;
(statearr_10533_10597[(2)] = inst_10442);

(statearr_10533_10597[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (30))){
var state_10463__$1 = state_10463;
var statearr_10534_10598 = state_10463__$1;
(statearr_10534_10598[(2)] = null);

(statearr_10534_10598[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (10))){
var inst_10345 = (state_10463[(13)]);
var inst_10347 = (state_10463[(14)]);
var inst_10353 = cljs.core._nth.call(null,inst_10345,inst_10347);
var inst_10354 = cljs.core.nth.call(null,inst_10353,(0),null);
var inst_10355 = cljs.core.nth.call(null,inst_10353,(1),null);
var state_10463__$1 = (function (){var statearr_10535 = state_10463;
(statearr_10535[(26)] = inst_10354);

return statearr_10535;
})();
if(cljs.core.truth_(inst_10355)){
var statearr_10536_10599 = state_10463__$1;
(statearr_10536_10599[(1)] = (13));

} else {
var statearr_10537_10600 = state_10463__$1;
(statearr_10537_10600[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (18))){
var inst_10388 = (state_10463[(2)]);
var state_10463__$1 = state_10463;
var statearr_10538_10601 = state_10463__$1;
(statearr_10538_10601[(2)] = inst_10388);

(statearr_10538_10601[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (42))){
var state_10463__$1 = state_10463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10463__$1,(45),dchan);
} else {
if((state_val_10464 === (37))){
var inst_10431 = (state_10463[(23)]);
var inst_10335 = (state_10463[(11)]);
var inst_10422 = (state_10463[(25)]);
var inst_10431__$1 = cljs.core.first.call(null,inst_10422);
var inst_10432 = cljs.core.async.put_BANG_.call(null,inst_10431__$1,inst_10335,done);
var state_10463__$1 = (function (){var statearr_10539 = state_10463;
(statearr_10539[(23)] = inst_10431__$1);

return statearr_10539;
})();
if(cljs.core.truth_(inst_10432)){
var statearr_10540_10602 = state_10463__$1;
(statearr_10540_10602[(1)] = (39));

} else {
var statearr_10541_10603 = state_10463__$1;
(statearr_10541_10603[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10464 === (8))){
var inst_10347 = (state_10463[(14)]);
var inst_10346 = (state_10463[(17)]);
var inst_10349 = (inst_10347 < inst_10346);
var inst_10350 = inst_10349;
var state_10463__$1 = state_10463;
if(cljs.core.truth_(inst_10350)){
var statearr_10542_10604 = state_10463__$1;
(statearr_10542_10604[(1)] = (10));

} else {
var statearr_10543_10605 = state_10463__$1;
(statearr_10543_10605[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6888__auto___10551,cs,m,dchan,dctr,done))
;
return ((function (switch__6826__auto__,c__6888__auto___10551,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6827__auto__ = null;
var cljs$core$async$mult_$_state_machine__6827__auto____0 = (function (){
var statearr_10547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10547[(0)] = cljs$core$async$mult_$_state_machine__6827__auto__);

(statearr_10547[(1)] = (1));

return statearr_10547;
});
var cljs$core$async$mult_$_state_machine__6827__auto____1 = (function (state_10463){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_10463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e10548){if((e10548 instanceof Object)){
var ex__6830__auto__ = e10548;
var statearr_10549_10606 = state_10463;
(statearr_10549_10606[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10607 = state_10463;
state_10463 = G__10607;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6827__auto__ = function(state_10463){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6827__auto____1.call(this,state_10463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6827__auto____0;
cljs$core$async$mult_$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6827__auto____1;
return cljs$core$async$mult_$_state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___10551,cs,m,dchan,dctr,done))
})();
var state__6890__auto__ = (function (){var statearr_10550 = f__6889__auto__.call(null);
(statearr_10550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___10551);

return statearr_10550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___10551,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__10609 = arguments.length;
switch (G__10609) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj10612 = {};
return obj10612;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5349__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5349__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10617){
var map__10618 = p__10617;
var map__10618__$1 = ((cljs.core.seq_QMARK_.call(null,map__10618))?cljs.core.apply.call(null,cljs.core.hash_map,map__10618):map__10618);
var opts = map__10618__$1;
var statearr_10619_10622 = state;
(statearr_10619_10622[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__10618,map__10618__$1,opts){
return (function (val){
var statearr_10620_10623 = state;
(statearr_10620_10623[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10618,map__10618__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_10621_10624 = state;
(statearr_10621_10624[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10613){
var G__10614 = cljs.core.first.call(null,seq10613);
var seq10613__$1 = cljs.core.next.call(null,seq10613);
var G__10615 = cljs.core.first.call(null,seq10613__$1);
var seq10613__$2 = cljs.core.next.call(null,seq10613__$1);
var G__10616 = cljs.core.first.call(null,seq10613__$2);
var seq10613__$3 = cljs.core.next.call(null,seq10613__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10614,G__10615,G__10616,seq10613__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t10744 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10744 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10745){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta10745 = meta10745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10746,meta10745__$1){
var self__ = this;
var _10746__$1 = this;
return (new cljs.core.async.t10744(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10745__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10744.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10746){
var self__ = this;
var _10746__$1 = this;
return self__.meta10745;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10744.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t10744.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10744.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t10744.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10744.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10744.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10744.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10744.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10744.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10745","meta10745",1348361103,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10744.cljs$lang$type = true;

cljs.core.async.t10744.cljs$lang$ctorStr = "cljs.core.async/t10744";

cljs.core.async.t10744.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t10744");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t10744 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t10744(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10745){
return (new cljs.core.async.t10744(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10745));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t10744(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6888__auto___10863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___10863,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___10863,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10816){
var state_val_10817 = (state_10816[(1)]);
if((state_val_10817 === (7))){
var inst_10760 = (state_10816[(7)]);
var inst_10765 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10760);
var state_10816__$1 = state_10816;
var statearr_10818_10864 = state_10816__$1;
(statearr_10818_10864[(2)] = inst_10765);

(statearr_10818_10864[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (20))){
var inst_10775 = (state_10816[(8)]);
var state_10816__$1 = state_10816;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10816__$1,(23),out,inst_10775);
} else {
if((state_val_10817 === (1))){
var inst_10750 = (state_10816[(9)]);
var inst_10750__$1 = calc_state.call(null);
var inst_10751 = cljs.core.seq_QMARK_.call(null,inst_10750__$1);
var state_10816__$1 = (function (){var statearr_10819 = state_10816;
(statearr_10819[(9)] = inst_10750__$1);

return statearr_10819;
})();
if(inst_10751){
var statearr_10820_10865 = state_10816__$1;
(statearr_10820_10865[(1)] = (2));

} else {
var statearr_10821_10866 = state_10816__$1;
(statearr_10821_10866[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (24))){
var inst_10768 = (state_10816[(10)]);
var inst_10760 = inst_10768;
var state_10816__$1 = (function (){var statearr_10822 = state_10816;
(statearr_10822[(7)] = inst_10760);

return statearr_10822;
})();
var statearr_10823_10867 = state_10816__$1;
(statearr_10823_10867[(2)] = null);

(statearr_10823_10867[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (4))){
var inst_10750 = (state_10816[(9)]);
var inst_10756 = (state_10816[(2)]);
var inst_10757 = cljs.core.get.call(null,inst_10756,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10758 = cljs.core.get.call(null,inst_10756,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10759 = cljs.core.get.call(null,inst_10756,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10760 = inst_10750;
var state_10816__$1 = (function (){var statearr_10824 = state_10816;
(statearr_10824[(11)] = inst_10758);

(statearr_10824[(7)] = inst_10760);

(statearr_10824[(12)] = inst_10757);

(statearr_10824[(13)] = inst_10759);

return statearr_10824;
})();
var statearr_10825_10868 = state_10816__$1;
(statearr_10825_10868[(2)] = null);

(statearr_10825_10868[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (15))){
var state_10816__$1 = state_10816;
var statearr_10826_10869 = state_10816__$1;
(statearr_10826_10869[(2)] = null);

(statearr_10826_10869[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (21))){
var inst_10768 = (state_10816[(10)]);
var inst_10760 = inst_10768;
var state_10816__$1 = (function (){var statearr_10827 = state_10816;
(statearr_10827[(7)] = inst_10760);

return statearr_10827;
})();
var statearr_10828_10870 = state_10816__$1;
(statearr_10828_10870[(2)] = null);

(statearr_10828_10870[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (13))){
var inst_10812 = (state_10816[(2)]);
var state_10816__$1 = state_10816;
var statearr_10829_10871 = state_10816__$1;
(statearr_10829_10871[(2)] = inst_10812);

(statearr_10829_10871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (22))){
var inst_10810 = (state_10816[(2)]);
var state_10816__$1 = state_10816;
var statearr_10830_10872 = state_10816__$1;
(statearr_10830_10872[(2)] = inst_10810);

(statearr_10830_10872[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (6))){
var inst_10814 = (state_10816[(2)]);
var state_10816__$1 = state_10816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10816__$1,inst_10814);
} else {
if((state_val_10817 === (25))){
var state_10816__$1 = state_10816;
var statearr_10831_10873 = state_10816__$1;
(statearr_10831_10873[(2)] = null);

(statearr_10831_10873[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (17))){
var inst_10790 = (state_10816[(14)]);
var state_10816__$1 = state_10816;
var statearr_10832_10874 = state_10816__$1;
(statearr_10832_10874[(2)] = inst_10790);

(statearr_10832_10874[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (3))){
var inst_10750 = (state_10816[(9)]);
var state_10816__$1 = state_10816;
var statearr_10833_10875 = state_10816__$1;
(statearr_10833_10875[(2)] = inst_10750);

(statearr_10833_10875[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (12))){
var inst_10776 = (state_10816[(15)]);
var inst_10790 = (state_10816[(14)]);
var inst_10769 = (state_10816[(16)]);
var inst_10790__$1 = inst_10769.call(null,inst_10776);
var state_10816__$1 = (function (){var statearr_10834 = state_10816;
(statearr_10834[(14)] = inst_10790__$1);

return statearr_10834;
})();
if(cljs.core.truth_(inst_10790__$1)){
var statearr_10835_10876 = state_10816__$1;
(statearr_10835_10876[(1)] = (17));

} else {
var statearr_10836_10877 = state_10816__$1;
(statearr_10836_10877[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (2))){
var inst_10750 = (state_10816[(9)]);
var inst_10753 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10750);
var state_10816__$1 = state_10816;
var statearr_10837_10878 = state_10816__$1;
(statearr_10837_10878[(2)] = inst_10753);

(statearr_10837_10878[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (23))){
var inst_10801 = (state_10816[(2)]);
var state_10816__$1 = state_10816;
if(cljs.core.truth_(inst_10801)){
var statearr_10838_10879 = state_10816__$1;
(statearr_10838_10879[(1)] = (24));

} else {
var statearr_10839_10880 = state_10816__$1;
(statearr_10839_10880[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (19))){
var inst_10798 = (state_10816[(2)]);
var state_10816__$1 = state_10816;
if(cljs.core.truth_(inst_10798)){
var statearr_10840_10881 = state_10816__$1;
(statearr_10840_10881[(1)] = (20));

} else {
var statearr_10841_10882 = state_10816__$1;
(statearr_10841_10882[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (11))){
var inst_10775 = (state_10816[(8)]);
var inst_10781 = (inst_10775 == null);
var state_10816__$1 = state_10816;
if(cljs.core.truth_(inst_10781)){
var statearr_10842_10883 = state_10816__$1;
(statearr_10842_10883[(1)] = (14));

} else {
var statearr_10843_10884 = state_10816__$1;
(statearr_10843_10884[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (9))){
var inst_10768 = (state_10816[(10)]);
var inst_10768__$1 = (state_10816[(2)]);
var inst_10769 = cljs.core.get.call(null,inst_10768__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10770 = cljs.core.get.call(null,inst_10768__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10771 = cljs.core.get.call(null,inst_10768__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10816__$1 = (function (){var statearr_10844 = state_10816;
(statearr_10844[(10)] = inst_10768__$1);

(statearr_10844[(17)] = inst_10770);

(statearr_10844[(16)] = inst_10769);

return statearr_10844;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10816__$1,(10),inst_10771);
} else {
if((state_val_10817 === (5))){
var inst_10760 = (state_10816[(7)]);
var inst_10763 = cljs.core.seq_QMARK_.call(null,inst_10760);
var state_10816__$1 = state_10816;
if(inst_10763){
var statearr_10845_10885 = state_10816__$1;
(statearr_10845_10885[(1)] = (7));

} else {
var statearr_10846_10886 = state_10816__$1;
(statearr_10846_10886[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (14))){
var inst_10776 = (state_10816[(15)]);
var inst_10783 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10776);
var state_10816__$1 = state_10816;
var statearr_10847_10887 = state_10816__$1;
(statearr_10847_10887[(2)] = inst_10783);

(statearr_10847_10887[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (26))){
var inst_10806 = (state_10816[(2)]);
var state_10816__$1 = state_10816;
var statearr_10848_10888 = state_10816__$1;
(statearr_10848_10888[(2)] = inst_10806);

(statearr_10848_10888[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (16))){
var inst_10786 = (state_10816[(2)]);
var inst_10787 = calc_state.call(null);
var inst_10760 = inst_10787;
var state_10816__$1 = (function (){var statearr_10849 = state_10816;
(statearr_10849[(18)] = inst_10786);

(statearr_10849[(7)] = inst_10760);

return statearr_10849;
})();
var statearr_10850_10889 = state_10816__$1;
(statearr_10850_10889[(2)] = null);

(statearr_10850_10889[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (10))){
var inst_10776 = (state_10816[(15)]);
var inst_10775 = (state_10816[(8)]);
var inst_10774 = (state_10816[(2)]);
var inst_10775__$1 = cljs.core.nth.call(null,inst_10774,(0),null);
var inst_10776__$1 = cljs.core.nth.call(null,inst_10774,(1),null);
var inst_10777 = (inst_10775__$1 == null);
var inst_10778 = cljs.core._EQ_.call(null,inst_10776__$1,change);
var inst_10779 = (inst_10777) || (inst_10778);
var state_10816__$1 = (function (){var statearr_10851 = state_10816;
(statearr_10851[(15)] = inst_10776__$1);

(statearr_10851[(8)] = inst_10775__$1);

return statearr_10851;
})();
if(cljs.core.truth_(inst_10779)){
var statearr_10852_10890 = state_10816__$1;
(statearr_10852_10890[(1)] = (11));

} else {
var statearr_10853_10891 = state_10816__$1;
(statearr_10853_10891[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (18))){
var inst_10776 = (state_10816[(15)]);
var inst_10770 = (state_10816[(17)]);
var inst_10769 = (state_10816[(16)]);
var inst_10793 = cljs.core.empty_QMARK_.call(null,inst_10769);
var inst_10794 = inst_10770.call(null,inst_10776);
var inst_10795 = cljs.core.not.call(null,inst_10794);
var inst_10796 = (inst_10793) && (inst_10795);
var state_10816__$1 = state_10816;
var statearr_10854_10892 = state_10816__$1;
(statearr_10854_10892[(2)] = inst_10796);

(statearr_10854_10892[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (8))){
var inst_10760 = (state_10816[(7)]);
var state_10816__$1 = state_10816;
var statearr_10855_10893 = state_10816__$1;
(statearr_10855_10893[(2)] = inst_10760);

(statearr_10855_10893[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6888__auto___10863,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6826__auto__,c__6888__auto___10863,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6827__auto__ = null;
var cljs$core$async$mix_$_state_machine__6827__auto____0 = (function (){
var statearr_10859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10859[(0)] = cljs$core$async$mix_$_state_machine__6827__auto__);

(statearr_10859[(1)] = (1));

return statearr_10859;
});
var cljs$core$async$mix_$_state_machine__6827__auto____1 = (function (state_10816){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_10816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e10860){if((e10860 instanceof Object)){
var ex__6830__auto__ = e10860;
var statearr_10861_10894 = state_10816;
(statearr_10861_10894[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10895 = state_10816;
state_10816 = G__10895;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6827__auto__ = function(state_10816){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6827__auto____1.call(this,state_10816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6827__auto____0;
cljs$core$async$mix_$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6827__auto____1;
return cljs$core$async$mix_$_state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___10863,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6890__auto__ = (function (){var statearr_10862 = f__6889__auto__.call(null);
(statearr_10862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___10863);

return statearr_10862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___10863,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj10897 = {};
return obj10897;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__10899 = arguments.length;
switch (G__10899) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__10903 = arguments.length;
switch (G__10903) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4309__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4309__auto__,mults){
return (function (p1__10901_SHARP_){
if(cljs.core.truth_(p1__10901_SHARP_.call(null,topic))){
return p1__10901_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__10901_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4309__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t10904 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10904 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta10905){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta10905 = meta10905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10906,meta10905__$1){
var self__ = this;
var _10906__$1 = this;
return (new cljs.core.async.t10904(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta10905__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t10904.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10906){
var self__ = this;
var _10906__$1 = this;
return self__.meta10905;
});})(mults,ensure_mult))
;

cljs.core.async.t10904.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t10904.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t10904.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t10904.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t10904.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t10904.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t10904.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t10904.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta10905","meta10905",1829469346,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t10904.cljs$lang$type = true;

cljs.core.async.t10904.cljs$lang$ctorStr = "cljs.core.async/t10904";

cljs.core.async.t10904.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t10904");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t10904 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t10904(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10905){
return (new cljs.core.async.t10904(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10905));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t10904(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6888__auto___11027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___11027,mults,ensure_mult,p){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___11027,mults,ensure_mult,p){
return (function (state_10978){
var state_val_10979 = (state_10978[(1)]);
if((state_val_10979 === (7))){
var inst_10974 = (state_10978[(2)]);
var state_10978__$1 = state_10978;
var statearr_10980_11028 = state_10978__$1;
(statearr_10980_11028[(2)] = inst_10974);

(statearr_10980_11028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10979 === (20))){
var state_10978__$1 = state_10978;
var statearr_10981_11029 = state_10978__$1;
(statearr_10981_11029[(2)] = null);

(statearr_10981_11029[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10979 === (1))){
var state_10978__$1 = state_10978;
var statearr_10982_11030 = state_10978__$1;
(statearr_10982_11030[(2)] = null);

(statearr_10982_11030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10979 === (24))){
var inst_10957 = (state_10978[(7)]);
var inst_10966 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10957);
var state_10978__$1 = state_10978;
var statearr_10983_11031 = state_10978__$1;
(statearr_10983_11031[(2)] = inst_10966);

(statearr_10983_11031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10979 === (4))){
var inst_10909 = (state_10978[(8)]);
var inst_10909__$1 = (state_10978[(2)]);
var inst_10910 = (inst_10909__$1 == null);
var state_10978__$1 = (function (){var statearr_10984 = state_10978;
(statearr_10984[(8)] = inst_10909__$1);

return statearr_10984;
})();
if(cljs.core.truth_(inst_10910)){
var statearr_10985_11032 = state_10978__$1;
(statearr_10985_11032[(1)] = (5));

} else {
var statearr_10986_11033 = state_10978__$1;
(statearr_10986_11033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10979 === (15))){
var inst_10951 = (state_10978[(2)]);
var state_10978__$1 = state_10978;
var statearr_10987_11034 = state_10978__$1;
(statearr_10987_11034[(2)] = inst_10951);

(statearr_10987_11034[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10979 === (21))){
var inst_10971 = (state_10978[(2)]);
var state_10978__$1 = (function (){var statearr_10988 = state_10978;
(statearr_10988[(9)] = inst_10971);

return statearr_10988;
})();
var statearr_10989_11035 = state_10978__$1;
(statearr_10989_11035[(2)] = null);

(statearr_10989_11035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10979 === (13))){
var inst_10933 = (state_10978[(10)]);
var inst_10935 = cljs.core.chunked_seq_QMARK_.call(null,inst_10933);
var state_10978__$1 = state_10978;
if(inst_10935){
var statearr_10990_11036 = state_10978__$1;
(statearr_10990_11036[(1)] = (16));

} else {
var statearr_10991_11037 = state_10978__$1;
(statearr_10991_11037[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10979 === (22))){
var inst_10963 = (state_10978[(2)]);
var state_10978__$1 = state_10978;
if(cljs.core.truth_(inst_10963)){
var statearr_10992_11038 = state_10978__$1;
(statearr_10992_11038[(1)] = (23));

} else {
var statearr_10993_11039 = state_10978__$1;
(statearr_10993_11039[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10979 === (6))){
var inst_10909 = (state_10978[(8)]);
var inst_10959 = (state_10978[(11)]);
var inst_10957 = (state_10978[(7)]);
var inst_10957__$1 = topic_fn.call(null,inst_10909);
var inst_10958 = cljs.core.deref.call(null,mults);
var inst_10959__$1 = cljs.core.get.call(null,inst_10958,inst_10957__$1);
var state_10978__$1 = (function (){var statearr_10994 = state_10978;
(statearr_10994[(11)] = inst_10959__$1);

(statearr_10994[(7)] = inst_10957__$1);

return statearr_10994;
})();
if(cljs.core.truth_(inst_10959__$1)){
var statearr_10995_11040 = state_10978__$1;
(statearr_10995_11040[(1)] = (19));

} else {
var statearr_10996_11041 = state_10978__$1;
(statearr_10996_11041[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10979 === (25))){
var inst_10968 = (state_10978[(2)]);
var state_10978__$1 = state_10978;
var statearr_10997_11042 = state_10978__$1;
(statearr_10997_11042[(2)] = inst_10968);

(statearr_10997_11042[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10979 === (17))){
var inst_10933 = (state_10978[(10)]);
var inst_10942 = cljs.core.first.call(null,inst_10933);
var inst_10943 = cljs.core.async.muxch_STAR_.call(null,inst_10942);
var inst_10944 = cljs.core.async.close_BANG_.call(null,inst_10943);
var inst_10945 = cljs.core.next.call(null,inst_10933);
var inst_10919 = inst_10945;
var inst_10920 = null;
var inst_10921 = (0);
var inst_10922 = (0);
var state_10978__$1 = (function (){var statearr_10998 = state_10978;
(statearr_10998[(12)] = inst_10921);

(statearr_10998[(13)] = inst_10920);

(statearr_10998[(14)] = inst_10944);

(statearr_10998[(15)] = inst_10919);

(statearr_10998[(16)] = inst_10922);

return statearr_10998;
})();
var statearr_10999_11043 = state_10978__$1;
(statearr_10999_11043[(2)] = null);

(statearr_10999_11043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10979 === (3))){
var inst_10976 = (state_10978[(2)]);
var state_10978__$1 = state_10978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10978__$1,inst_10976);
} else {
if((state_val_10979 === (12))){
var inst_10953 = (state_10978[(2)]);
var state_10978__$1 = state_10978;
var statearr_11000_11044 = state_10978__$1;
(statearr_11000_11044[(2)] = inst_10953);

(statearr_11000_11044[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10979 === (2))){
var state_10978__$1 = state_10978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10978__$1,(4),ch);
} else {
if((state_val_10979 === (23))){
var state_10978__$1 = state_10978;
var statearr_11001_11045 = state_10978__$1;
(statearr_11001_11045[(2)] = null);

(statearr_11001_11045[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10979 === (19))){
var inst_10909 = (state_10978[(8)]);
var inst_10959 = (state_10978[(11)]);
var inst_10961 = cljs.core.async.muxch_STAR_.call(null,inst_10959);
var state_10978__$1 = state_10978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10978__$1,(22),inst_10961,inst_10909);
} else {
if((state_val_10979 === (11))){
var inst_10933 = (state_10978[(10)]);
var inst_10919 = (state_10978[(15)]);
var inst_10933__$1 = cljs.core.seq.call(null,inst_10919);
var state_10978__$1 = (function (){var statearr_11002 = state_10978;
(statearr_11002[(10)] = inst_10933__$1);

return statearr_11002;
})();
if(inst_10933__$1){
var statearr_11003_11046 = state_10978__$1;
(statearr_11003_11046[(1)] = (13));

} else {
var statearr_11004_11047 = state_10978__$1;
(statearr_11004_11047[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10979 === (9))){
var inst_10955 = (state_10978[(2)]);
var state_10978__$1 = state_10978;
var statearr_11005_11048 = state_10978__$1;
(statearr_11005_11048[(2)] = inst_10955);

(statearr_11005_11048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10979 === (5))){
var inst_10916 = cljs.core.deref.call(null,mults);
var inst_10917 = cljs.core.vals.call(null,inst_10916);
var inst_10918 = cljs.core.seq.call(null,inst_10917);
var inst_10919 = inst_10918;
var inst_10920 = null;
var inst_10921 = (0);
var inst_10922 = (0);
var state_10978__$1 = (function (){var statearr_11006 = state_10978;
(statearr_11006[(12)] = inst_10921);

(statearr_11006[(13)] = inst_10920);

(statearr_11006[(15)] = inst_10919);

(statearr_11006[(16)] = inst_10922);

return statearr_11006;
})();
var statearr_11007_11049 = state_10978__$1;
(statearr_11007_11049[(2)] = null);

(statearr_11007_11049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10979 === (14))){
var state_10978__$1 = state_10978;
var statearr_11011_11050 = state_10978__$1;
(statearr_11011_11050[(2)] = null);

(statearr_11011_11050[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10979 === (16))){
var inst_10933 = (state_10978[(10)]);
var inst_10937 = cljs.core.chunk_first.call(null,inst_10933);
var inst_10938 = cljs.core.chunk_rest.call(null,inst_10933);
var inst_10939 = cljs.core.count.call(null,inst_10937);
var inst_10919 = inst_10938;
var inst_10920 = inst_10937;
var inst_10921 = inst_10939;
var inst_10922 = (0);
var state_10978__$1 = (function (){var statearr_11012 = state_10978;
(statearr_11012[(12)] = inst_10921);

(statearr_11012[(13)] = inst_10920);

(statearr_11012[(15)] = inst_10919);

(statearr_11012[(16)] = inst_10922);

return statearr_11012;
})();
var statearr_11013_11051 = state_10978__$1;
(statearr_11013_11051[(2)] = null);

(statearr_11013_11051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10979 === (10))){
var inst_10921 = (state_10978[(12)]);
var inst_10920 = (state_10978[(13)]);
var inst_10919 = (state_10978[(15)]);
var inst_10922 = (state_10978[(16)]);
var inst_10927 = cljs.core._nth.call(null,inst_10920,inst_10922);
var inst_10928 = cljs.core.async.muxch_STAR_.call(null,inst_10927);
var inst_10929 = cljs.core.async.close_BANG_.call(null,inst_10928);
var inst_10930 = (inst_10922 + (1));
var tmp11008 = inst_10921;
var tmp11009 = inst_10920;
var tmp11010 = inst_10919;
var inst_10919__$1 = tmp11010;
var inst_10920__$1 = tmp11009;
var inst_10921__$1 = tmp11008;
var inst_10922__$1 = inst_10930;
var state_10978__$1 = (function (){var statearr_11014 = state_10978;
(statearr_11014[(12)] = inst_10921__$1);

(statearr_11014[(17)] = inst_10929);

(statearr_11014[(13)] = inst_10920__$1);

(statearr_11014[(15)] = inst_10919__$1);

(statearr_11014[(16)] = inst_10922__$1);

return statearr_11014;
})();
var statearr_11015_11052 = state_10978__$1;
(statearr_11015_11052[(2)] = null);

(statearr_11015_11052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10979 === (18))){
var inst_10948 = (state_10978[(2)]);
var state_10978__$1 = state_10978;
var statearr_11016_11053 = state_10978__$1;
(statearr_11016_11053[(2)] = inst_10948);

(statearr_11016_11053[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10979 === (8))){
var inst_10921 = (state_10978[(12)]);
var inst_10922 = (state_10978[(16)]);
var inst_10924 = (inst_10922 < inst_10921);
var inst_10925 = inst_10924;
var state_10978__$1 = state_10978;
if(cljs.core.truth_(inst_10925)){
var statearr_11017_11054 = state_10978__$1;
(statearr_11017_11054[(1)] = (10));

} else {
var statearr_11018_11055 = state_10978__$1;
(statearr_11018_11055[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6888__auto___11027,mults,ensure_mult,p))
;
return ((function (switch__6826__auto__,c__6888__auto___11027,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6827__auto__ = null;
var cljs$core$async$state_machine__6827__auto____0 = (function (){
var statearr_11022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11022[(0)] = cljs$core$async$state_machine__6827__auto__);

(statearr_11022[(1)] = (1));

return statearr_11022;
});
var cljs$core$async$state_machine__6827__auto____1 = (function (state_10978){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_10978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e11023){if((e11023 instanceof Object)){
var ex__6830__auto__ = e11023;
var statearr_11024_11056 = state_10978;
(statearr_11024_11056[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11057 = state_10978;
state_10978 = G__11057;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$state_machine__6827__auto__ = function(state_10978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6827__auto____1.call(this,state_10978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6827__auto____0;
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6827__auto____1;
return cljs$core$async$state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___11027,mults,ensure_mult,p))
})();
var state__6890__auto__ = (function (){var statearr_11025 = f__6889__auto__.call(null);
(statearr_11025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___11027);

return statearr_11025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___11027,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__11059 = arguments.length;
switch (G__11059) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__11062 = arguments.length;
switch (G__11062) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__11065 = arguments.length;
switch (G__11065) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6888__auto___11135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___11135,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___11135,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11104){
var state_val_11105 = (state_11104[(1)]);
if((state_val_11105 === (7))){
var state_11104__$1 = state_11104;
var statearr_11106_11136 = state_11104__$1;
(statearr_11106_11136[(2)] = null);

(statearr_11106_11136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (1))){
var state_11104__$1 = state_11104;
var statearr_11107_11137 = state_11104__$1;
(statearr_11107_11137[(2)] = null);

(statearr_11107_11137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (4))){
var inst_11068 = (state_11104[(7)]);
var inst_11070 = (inst_11068 < cnt);
var state_11104__$1 = state_11104;
if(cljs.core.truth_(inst_11070)){
var statearr_11108_11138 = state_11104__$1;
(statearr_11108_11138[(1)] = (6));

} else {
var statearr_11109_11139 = state_11104__$1;
(statearr_11109_11139[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (15))){
var inst_11100 = (state_11104[(2)]);
var state_11104__$1 = state_11104;
var statearr_11110_11140 = state_11104__$1;
(statearr_11110_11140[(2)] = inst_11100);

(statearr_11110_11140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (13))){
var inst_11093 = cljs.core.async.close_BANG_.call(null,out);
var state_11104__$1 = state_11104;
var statearr_11111_11141 = state_11104__$1;
(statearr_11111_11141[(2)] = inst_11093);

(statearr_11111_11141[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (6))){
var state_11104__$1 = state_11104;
var statearr_11112_11142 = state_11104__$1;
(statearr_11112_11142[(2)] = null);

(statearr_11112_11142[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (3))){
var inst_11102 = (state_11104[(2)]);
var state_11104__$1 = state_11104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11104__$1,inst_11102);
} else {
if((state_val_11105 === (12))){
var inst_11090 = (state_11104[(8)]);
var inst_11090__$1 = (state_11104[(2)]);
var inst_11091 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11090__$1);
var state_11104__$1 = (function (){var statearr_11113 = state_11104;
(statearr_11113[(8)] = inst_11090__$1);

return statearr_11113;
})();
if(cljs.core.truth_(inst_11091)){
var statearr_11114_11143 = state_11104__$1;
(statearr_11114_11143[(1)] = (13));

} else {
var statearr_11115_11144 = state_11104__$1;
(statearr_11115_11144[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (2))){
var inst_11067 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11068 = (0);
var state_11104__$1 = (function (){var statearr_11116 = state_11104;
(statearr_11116[(9)] = inst_11067);

(statearr_11116[(7)] = inst_11068);

return statearr_11116;
})();
var statearr_11117_11145 = state_11104__$1;
(statearr_11117_11145[(2)] = null);

(statearr_11117_11145[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (11))){
var inst_11068 = (state_11104[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11104,(10),Object,null,(9));
var inst_11077 = chs__$1.call(null,inst_11068);
var inst_11078 = done.call(null,inst_11068);
var inst_11079 = cljs.core.async.take_BANG_.call(null,inst_11077,inst_11078);
var state_11104__$1 = state_11104;
var statearr_11118_11146 = state_11104__$1;
(statearr_11118_11146[(2)] = inst_11079);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11104__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (9))){
var inst_11068 = (state_11104[(7)]);
var inst_11081 = (state_11104[(2)]);
var inst_11082 = (inst_11068 + (1));
var inst_11068__$1 = inst_11082;
var state_11104__$1 = (function (){var statearr_11119 = state_11104;
(statearr_11119[(10)] = inst_11081);

(statearr_11119[(7)] = inst_11068__$1);

return statearr_11119;
})();
var statearr_11120_11147 = state_11104__$1;
(statearr_11120_11147[(2)] = null);

(statearr_11120_11147[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (5))){
var inst_11088 = (state_11104[(2)]);
var state_11104__$1 = (function (){var statearr_11121 = state_11104;
(statearr_11121[(11)] = inst_11088);

return statearr_11121;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11104__$1,(12),dchan);
} else {
if((state_val_11105 === (14))){
var inst_11090 = (state_11104[(8)]);
var inst_11095 = cljs.core.apply.call(null,f,inst_11090);
var state_11104__$1 = state_11104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11104__$1,(16),out,inst_11095);
} else {
if((state_val_11105 === (16))){
var inst_11097 = (state_11104[(2)]);
var state_11104__$1 = (function (){var statearr_11122 = state_11104;
(statearr_11122[(12)] = inst_11097);

return statearr_11122;
})();
var statearr_11123_11148 = state_11104__$1;
(statearr_11123_11148[(2)] = null);

(statearr_11123_11148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (10))){
var inst_11072 = (state_11104[(2)]);
var inst_11073 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11104__$1 = (function (){var statearr_11124 = state_11104;
(statearr_11124[(13)] = inst_11072);

return statearr_11124;
})();
var statearr_11125_11149 = state_11104__$1;
(statearr_11125_11149[(2)] = inst_11073);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11104__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (8))){
var inst_11086 = (state_11104[(2)]);
var state_11104__$1 = state_11104;
var statearr_11126_11150 = state_11104__$1;
(statearr_11126_11150[(2)] = inst_11086);

(statearr_11126_11150[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6888__auto___11135,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6826__auto__,c__6888__auto___11135,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6827__auto__ = null;
var cljs$core$async$state_machine__6827__auto____0 = (function (){
var statearr_11130 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11130[(0)] = cljs$core$async$state_machine__6827__auto__);

(statearr_11130[(1)] = (1));

return statearr_11130;
});
var cljs$core$async$state_machine__6827__auto____1 = (function (state_11104){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_11104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e11131){if((e11131 instanceof Object)){
var ex__6830__auto__ = e11131;
var statearr_11132_11151 = state_11104;
(statearr_11132_11151[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11152 = state_11104;
state_11104 = G__11152;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$state_machine__6827__auto__ = function(state_11104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6827__auto____1.call(this,state_11104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6827__auto____0;
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6827__auto____1;
return cljs$core$async$state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___11135,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6890__auto__ = (function (){var statearr_11133 = f__6889__auto__.call(null);
(statearr_11133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___11135);

return statearr_11133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___11135,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__11155 = arguments.length;
switch (G__11155) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6888__auto___11210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___11210,out){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___11210,out){
return (function (state_11185){
var state_val_11186 = (state_11185[(1)]);
if((state_val_11186 === (7))){
var inst_11164 = (state_11185[(7)]);
var inst_11165 = (state_11185[(8)]);
var inst_11164__$1 = (state_11185[(2)]);
var inst_11165__$1 = cljs.core.nth.call(null,inst_11164__$1,(0),null);
var inst_11166 = cljs.core.nth.call(null,inst_11164__$1,(1),null);
var inst_11167 = (inst_11165__$1 == null);
var state_11185__$1 = (function (){var statearr_11187 = state_11185;
(statearr_11187[(7)] = inst_11164__$1);

(statearr_11187[(8)] = inst_11165__$1);

(statearr_11187[(9)] = inst_11166);

return statearr_11187;
})();
if(cljs.core.truth_(inst_11167)){
var statearr_11188_11211 = state_11185__$1;
(statearr_11188_11211[(1)] = (8));

} else {
var statearr_11189_11212 = state_11185__$1;
(statearr_11189_11212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11186 === (1))){
var inst_11156 = cljs.core.vec.call(null,chs);
var inst_11157 = inst_11156;
var state_11185__$1 = (function (){var statearr_11190 = state_11185;
(statearr_11190[(10)] = inst_11157);

return statearr_11190;
})();
var statearr_11191_11213 = state_11185__$1;
(statearr_11191_11213[(2)] = null);

(statearr_11191_11213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11186 === (4))){
var inst_11157 = (state_11185[(10)]);
var state_11185__$1 = state_11185;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11185__$1,(7),inst_11157);
} else {
if((state_val_11186 === (6))){
var inst_11181 = (state_11185[(2)]);
var state_11185__$1 = state_11185;
var statearr_11192_11214 = state_11185__$1;
(statearr_11192_11214[(2)] = inst_11181);

(statearr_11192_11214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11186 === (3))){
var inst_11183 = (state_11185[(2)]);
var state_11185__$1 = state_11185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11185__$1,inst_11183);
} else {
if((state_val_11186 === (2))){
var inst_11157 = (state_11185[(10)]);
var inst_11159 = cljs.core.count.call(null,inst_11157);
var inst_11160 = (inst_11159 > (0));
var state_11185__$1 = state_11185;
if(cljs.core.truth_(inst_11160)){
var statearr_11194_11215 = state_11185__$1;
(statearr_11194_11215[(1)] = (4));

} else {
var statearr_11195_11216 = state_11185__$1;
(statearr_11195_11216[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11186 === (11))){
var inst_11157 = (state_11185[(10)]);
var inst_11174 = (state_11185[(2)]);
var tmp11193 = inst_11157;
var inst_11157__$1 = tmp11193;
var state_11185__$1 = (function (){var statearr_11196 = state_11185;
(statearr_11196[(10)] = inst_11157__$1);

(statearr_11196[(11)] = inst_11174);

return statearr_11196;
})();
var statearr_11197_11217 = state_11185__$1;
(statearr_11197_11217[(2)] = null);

(statearr_11197_11217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11186 === (9))){
var inst_11165 = (state_11185[(8)]);
var state_11185__$1 = state_11185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11185__$1,(11),out,inst_11165);
} else {
if((state_val_11186 === (5))){
var inst_11179 = cljs.core.async.close_BANG_.call(null,out);
var state_11185__$1 = state_11185;
var statearr_11198_11218 = state_11185__$1;
(statearr_11198_11218[(2)] = inst_11179);

(statearr_11198_11218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11186 === (10))){
var inst_11177 = (state_11185[(2)]);
var state_11185__$1 = state_11185;
var statearr_11199_11219 = state_11185__$1;
(statearr_11199_11219[(2)] = inst_11177);

(statearr_11199_11219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11186 === (8))){
var inst_11157 = (state_11185[(10)]);
var inst_11164 = (state_11185[(7)]);
var inst_11165 = (state_11185[(8)]);
var inst_11166 = (state_11185[(9)]);
var inst_11169 = (function (){var cs = inst_11157;
var vec__11162 = inst_11164;
var v = inst_11165;
var c = inst_11166;
return ((function (cs,vec__11162,v,c,inst_11157,inst_11164,inst_11165,inst_11166,state_val_11186,c__6888__auto___11210,out){
return (function (p1__11153_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11153_SHARP_);
});
;})(cs,vec__11162,v,c,inst_11157,inst_11164,inst_11165,inst_11166,state_val_11186,c__6888__auto___11210,out))
})();
var inst_11170 = cljs.core.filterv.call(null,inst_11169,inst_11157);
var inst_11157__$1 = inst_11170;
var state_11185__$1 = (function (){var statearr_11200 = state_11185;
(statearr_11200[(10)] = inst_11157__$1);

return statearr_11200;
})();
var statearr_11201_11220 = state_11185__$1;
(statearr_11201_11220[(2)] = null);

(statearr_11201_11220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6888__auto___11210,out))
;
return ((function (switch__6826__auto__,c__6888__auto___11210,out){
return (function() {
var cljs$core$async$state_machine__6827__auto__ = null;
var cljs$core$async$state_machine__6827__auto____0 = (function (){
var statearr_11205 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11205[(0)] = cljs$core$async$state_machine__6827__auto__);

(statearr_11205[(1)] = (1));

return statearr_11205;
});
var cljs$core$async$state_machine__6827__auto____1 = (function (state_11185){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_11185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e11206){if((e11206 instanceof Object)){
var ex__6830__auto__ = e11206;
var statearr_11207_11221 = state_11185;
(statearr_11207_11221[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11222 = state_11185;
state_11185 = G__11222;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$state_machine__6827__auto__ = function(state_11185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6827__auto____1.call(this,state_11185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6827__auto____0;
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6827__auto____1;
return cljs$core$async$state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___11210,out))
})();
var state__6890__auto__ = (function (){var statearr_11208 = f__6889__auto__.call(null);
(statearr_11208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___11210);

return statearr_11208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___11210,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__11224 = arguments.length;
switch (G__11224) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6888__auto___11272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___11272,out){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___11272,out){
return (function (state_11248){
var state_val_11249 = (state_11248[(1)]);
if((state_val_11249 === (7))){
var inst_11230 = (state_11248[(7)]);
var inst_11230__$1 = (state_11248[(2)]);
var inst_11231 = (inst_11230__$1 == null);
var inst_11232 = cljs.core.not.call(null,inst_11231);
var state_11248__$1 = (function (){var statearr_11250 = state_11248;
(statearr_11250[(7)] = inst_11230__$1);

return statearr_11250;
})();
if(inst_11232){
var statearr_11251_11273 = state_11248__$1;
(statearr_11251_11273[(1)] = (8));

} else {
var statearr_11252_11274 = state_11248__$1;
(statearr_11252_11274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11249 === (1))){
var inst_11225 = (0);
var state_11248__$1 = (function (){var statearr_11253 = state_11248;
(statearr_11253[(8)] = inst_11225);

return statearr_11253;
})();
var statearr_11254_11275 = state_11248__$1;
(statearr_11254_11275[(2)] = null);

(statearr_11254_11275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11249 === (4))){
var state_11248__$1 = state_11248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11248__$1,(7),ch);
} else {
if((state_val_11249 === (6))){
var inst_11243 = (state_11248[(2)]);
var state_11248__$1 = state_11248;
var statearr_11255_11276 = state_11248__$1;
(statearr_11255_11276[(2)] = inst_11243);

(statearr_11255_11276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11249 === (3))){
var inst_11245 = (state_11248[(2)]);
var inst_11246 = cljs.core.async.close_BANG_.call(null,out);
var state_11248__$1 = (function (){var statearr_11256 = state_11248;
(statearr_11256[(9)] = inst_11245);

return statearr_11256;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11248__$1,inst_11246);
} else {
if((state_val_11249 === (2))){
var inst_11225 = (state_11248[(8)]);
var inst_11227 = (inst_11225 < n);
var state_11248__$1 = state_11248;
if(cljs.core.truth_(inst_11227)){
var statearr_11257_11277 = state_11248__$1;
(statearr_11257_11277[(1)] = (4));

} else {
var statearr_11258_11278 = state_11248__$1;
(statearr_11258_11278[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11249 === (11))){
var inst_11225 = (state_11248[(8)]);
var inst_11235 = (state_11248[(2)]);
var inst_11236 = (inst_11225 + (1));
var inst_11225__$1 = inst_11236;
var state_11248__$1 = (function (){var statearr_11259 = state_11248;
(statearr_11259[(10)] = inst_11235);

(statearr_11259[(8)] = inst_11225__$1);

return statearr_11259;
})();
var statearr_11260_11279 = state_11248__$1;
(statearr_11260_11279[(2)] = null);

(statearr_11260_11279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11249 === (9))){
var state_11248__$1 = state_11248;
var statearr_11261_11280 = state_11248__$1;
(statearr_11261_11280[(2)] = null);

(statearr_11261_11280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11249 === (5))){
var state_11248__$1 = state_11248;
var statearr_11262_11281 = state_11248__$1;
(statearr_11262_11281[(2)] = null);

(statearr_11262_11281[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11249 === (10))){
var inst_11240 = (state_11248[(2)]);
var state_11248__$1 = state_11248;
var statearr_11263_11282 = state_11248__$1;
(statearr_11263_11282[(2)] = inst_11240);

(statearr_11263_11282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11249 === (8))){
var inst_11230 = (state_11248[(7)]);
var state_11248__$1 = state_11248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11248__$1,(11),out,inst_11230);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6888__auto___11272,out))
;
return ((function (switch__6826__auto__,c__6888__auto___11272,out){
return (function() {
var cljs$core$async$state_machine__6827__auto__ = null;
var cljs$core$async$state_machine__6827__auto____0 = (function (){
var statearr_11267 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11267[(0)] = cljs$core$async$state_machine__6827__auto__);

(statearr_11267[(1)] = (1));

return statearr_11267;
});
var cljs$core$async$state_machine__6827__auto____1 = (function (state_11248){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_11248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e11268){if((e11268 instanceof Object)){
var ex__6830__auto__ = e11268;
var statearr_11269_11283 = state_11248;
(statearr_11269_11283[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11284 = state_11248;
state_11248 = G__11284;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$state_machine__6827__auto__ = function(state_11248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6827__auto____1.call(this,state_11248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6827__auto____0;
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6827__auto____1;
return cljs$core$async$state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___11272,out))
})();
var state__6890__auto__ = (function (){var statearr_11270 = f__6889__auto__.call(null);
(statearr_11270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___11272);

return statearr_11270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___11272,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t11292 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11292 = (function (map_LT_,f,ch,meta11293){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11293 = meta11293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11294,meta11293__$1){
var self__ = this;
var _11294__$1 = this;
return (new cljs.core.async.t11292(self__.map_LT_,self__.f,self__.ch,meta11293__$1));
});

cljs.core.async.t11292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11294){
var self__ = this;
var _11294__$1 = this;
return self__.meta11293;
});

cljs.core.async.t11292.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t11292.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t11292.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t11292.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t11292.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t11295 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11295 = (function (map_LT_,f,ch,meta11293,_,fn1,meta11296){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11293 = meta11293;
this._ = _;
this.fn1 = fn1;
this.meta11296 = meta11296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11297,meta11296__$1){
var self__ = this;
var _11297__$1 = this;
return (new cljs.core.async.t11295(self__.map_LT_,self__.f,self__.ch,self__.meta11293,self__._,self__.fn1,meta11296__$1));
});})(___$1))
;

cljs.core.async.t11295.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11297){
var self__ = this;
var _11297__$1 = this;
return self__.meta11296;
});})(___$1))
;

cljs.core.async.t11295.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11295.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t11295.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11285_SHARP_){
return f1.call(null,(((p1__11285_SHARP_ == null))?null:self__.f.call(null,p1__11285_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t11295.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11293","meta11293",1760028218,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11296","meta11296",1791301671,null)], null);
});})(___$1))
;

cljs.core.async.t11295.cljs$lang$type = true;

cljs.core.async.t11295.cljs$lang$ctorStr = "cljs.core.async/t11295";

cljs.core.async.t11295.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t11295");
});})(___$1))
;

cljs.core.async.__GT_t11295 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t11295(map_LT___$1,f__$1,ch__$1,meta11293__$1,___$2,fn1__$1,meta11296){
return (new cljs.core.async.t11295(map_LT___$1,f__$1,ch__$1,meta11293__$1,___$2,fn1__$1,meta11296));
});})(___$1))
;

}

return (new cljs.core.async.t11295(self__.map_LT_,self__.f,self__.ch,self__.meta11293,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4297__auto__ = ret;
if(cljs.core.truth_(and__4297__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4297__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t11292.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t11292.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t11292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11293","meta11293",1760028218,null)], null);
});

cljs.core.async.t11292.cljs$lang$type = true;

cljs.core.async.t11292.cljs$lang$ctorStr = "cljs.core.async/t11292";

cljs.core.async.t11292.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t11292");
});

cljs.core.async.__GT_t11292 = (function cljs$core$async$map_LT__$___GT_t11292(map_LT___$1,f__$1,ch__$1,meta11293){
return (new cljs.core.async.t11292(map_LT___$1,f__$1,ch__$1,meta11293));
});

}

return (new cljs.core.async.t11292(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t11301 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11301 = (function (map_GT_,f,ch,meta11302){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta11302 = meta11302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11303,meta11302__$1){
var self__ = this;
var _11303__$1 = this;
return (new cljs.core.async.t11301(self__.map_GT_,self__.f,self__.ch,meta11302__$1));
});

cljs.core.async.t11301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11303){
var self__ = this;
var _11303__$1 = this;
return self__.meta11302;
});

cljs.core.async.t11301.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t11301.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t11301.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t11301.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t11301.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t11301.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t11301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11302","meta11302",-1243130966,null)], null);
});

cljs.core.async.t11301.cljs$lang$type = true;

cljs.core.async.t11301.cljs$lang$ctorStr = "cljs.core.async/t11301";

cljs.core.async.t11301.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t11301");
});

cljs.core.async.__GT_t11301 = (function cljs$core$async$map_GT__$___GT_t11301(map_GT___$1,f__$1,ch__$1,meta11302){
return (new cljs.core.async.t11301(map_GT___$1,f__$1,ch__$1,meta11302));
});

}

return (new cljs.core.async.t11301(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t11307 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11307 = (function (filter_GT_,p,ch,meta11308){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta11308 = meta11308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11309,meta11308__$1){
var self__ = this;
var _11309__$1 = this;
return (new cljs.core.async.t11307(self__.filter_GT_,self__.p,self__.ch,meta11308__$1));
});

cljs.core.async.t11307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11309){
var self__ = this;
var _11309__$1 = this;
return self__.meta11308;
});

cljs.core.async.t11307.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t11307.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t11307.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t11307.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t11307.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t11307.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t11307.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t11307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11308","meta11308",-809632412,null)], null);
});

cljs.core.async.t11307.cljs$lang$type = true;

cljs.core.async.t11307.cljs$lang$ctorStr = "cljs.core.async/t11307";

cljs.core.async.t11307.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t11307");
});

cljs.core.async.__GT_t11307 = (function cljs$core$async$filter_GT__$___GT_t11307(filter_GT___$1,p__$1,ch__$1,meta11308){
return (new cljs.core.async.t11307(filter_GT___$1,p__$1,ch__$1,meta11308));
});

}

return (new cljs.core.async.t11307(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__11311 = arguments.length;
switch (G__11311) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6888__auto___11354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___11354,out){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___11354,out){
return (function (state_11332){
var state_val_11333 = (state_11332[(1)]);
if((state_val_11333 === (7))){
var inst_11328 = (state_11332[(2)]);
var state_11332__$1 = state_11332;
var statearr_11334_11355 = state_11332__$1;
(statearr_11334_11355[(2)] = inst_11328);

(statearr_11334_11355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11333 === (1))){
var state_11332__$1 = state_11332;
var statearr_11335_11356 = state_11332__$1;
(statearr_11335_11356[(2)] = null);

(statearr_11335_11356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11333 === (4))){
var inst_11314 = (state_11332[(7)]);
var inst_11314__$1 = (state_11332[(2)]);
var inst_11315 = (inst_11314__$1 == null);
var state_11332__$1 = (function (){var statearr_11336 = state_11332;
(statearr_11336[(7)] = inst_11314__$1);

return statearr_11336;
})();
if(cljs.core.truth_(inst_11315)){
var statearr_11337_11357 = state_11332__$1;
(statearr_11337_11357[(1)] = (5));

} else {
var statearr_11338_11358 = state_11332__$1;
(statearr_11338_11358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11333 === (6))){
var inst_11314 = (state_11332[(7)]);
var inst_11319 = p.call(null,inst_11314);
var state_11332__$1 = state_11332;
if(cljs.core.truth_(inst_11319)){
var statearr_11339_11359 = state_11332__$1;
(statearr_11339_11359[(1)] = (8));

} else {
var statearr_11340_11360 = state_11332__$1;
(statearr_11340_11360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11333 === (3))){
var inst_11330 = (state_11332[(2)]);
var state_11332__$1 = state_11332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11332__$1,inst_11330);
} else {
if((state_val_11333 === (2))){
var state_11332__$1 = state_11332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11332__$1,(4),ch);
} else {
if((state_val_11333 === (11))){
var inst_11322 = (state_11332[(2)]);
var state_11332__$1 = state_11332;
var statearr_11341_11361 = state_11332__$1;
(statearr_11341_11361[(2)] = inst_11322);

(statearr_11341_11361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11333 === (9))){
var state_11332__$1 = state_11332;
var statearr_11342_11362 = state_11332__$1;
(statearr_11342_11362[(2)] = null);

(statearr_11342_11362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11333 === (5))){
var inst_11317 = cljs.core.async.close_BANG_.call(null,out);
var state_11332__$1 = state_11332;
var statearr_11343_11363 = state_11332__$1;
(statearr_11343_11363[(2)] = inst_11317);

(statearr_11343_11363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11333 === (10))){
var inst_11325 = (state_11332[(2)]);
var state_11332__$1 = (function (){var statearr_11344 = state_11332;
(statearr_11344[(8)] = inst_11325);

return statearr_11344;
})();
var statearr_11345_11364 = state_11332__$1;
(statearr_11345_11364[(2)] = null);

(statearr_11345_11364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11333 === (8))){
var inst_11314 = (state_11332[(7)]);
var state_11332__$1 = state_11332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11332__$1,(11),out,inst_11314);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6888__auto___11354,out))
;
return ((function (switch__6826__auto__,c__6888__auto___11354,out){
return (function() {
var cljs$core$async$state_machine__6827__auto__ = null;
var cljs$core$async$state_machine__6827__auto____0 = (function (){
var statearr_11349 = [null,null,null,null,null,null,null,null,null];
(statearr_11349[(0)] = cljs$core$async$state_machine__6827__auto__);

(statearr_11349[(1)] = (1));

return statearr_11349;
});
var cljs$core$async$state_machine__6827__auto____1 = (function (state_11332){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_11332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e11350){if((e11350 instanceof Object)){
var ex__6830__auto__ = e11350;
var statearr_11351_11365 = state_11332;
(statearr_11351_11365[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11366 = state_11332;
state_11332 = G__11366;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$state_machine__6827__auto__ = function(state_11332){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6827__auto____1.call(this,state_11332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6827__auto____0;
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6827__auto____1;
return cljs$core$async$state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___11354,out))
})();
var state__6890__auto__ = (function (){var statearr_11352 = f__6889__auto__.call(null);
(statearr_11352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___11354);

return statearr_11352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___11354,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__11368 = arguments.length;
switch (G__11368) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__6888__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto__){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto__){
return (function (state_11535){
var state_val_11536 = (state_11535[(1)]);
if((state_val_11536 === (7))){
var inst_11531 = (state_11535[(2)]);
var state_11535__$1 = state_11535;
var statearr_11537_11578 = state_11535__$1;
(statearr_11537_11578[(2)] = inst_11531);

(statearr_11537_11578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (20))){
var inst_11501 = (state_11535[(7)]);
var inst_11512 = (state_11535[(2)]);
var inst_11513 = cljs.core.next.call(null,inst_11501);
var inst_11487 = inst_11513;
var inst_11488 = null;
var inst_11489 = (0);
var inst_11490 = (0);
var state_11535__$1 = (function (){var statearr_11538 = state_11535;
(statearr_11538[(8)] = inst_11490);

(statearr_11538[(9)] = inst_11488);

(statearr_11538[(10)] = inst_11512);

(statearr_11538[(11)] = inst_11487);

(statearr_11538[(12)] = inst_11489);

return statearr_11538;
})();
var statearr_11539_11579 = state_11535__$1;
(statearr_11539_11579[(2)] = null);

(statearr_11539_11579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (1))){
var state_11535__$1 = state_11535;
var statearr_11540_11580 = state_11535__$1;
(statearr_11540_11580[(2)] = null);

(statearr_11540_11580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (4))){
var inst_11476 = (state_11535[(13)]);
var inst_11476__$1 = (state_11535[(2)]);
var inst_11477 = (inst_11476__$1 == null);
var state_11535__$1 = (function (){var statearr_11541 = state_11535;
(statearr_11541[(13)] = inst_11476__$1);

return statearr_11541;
})();
if(cljs.core.truth_(inst_11477)){
var statearr_11542_11581 = state_11535__$1;
(statearr_11542_11581[(1)] = (5));

} else {
var statearr_11543_11582 = state_11535__$1;
(statearr_11543_11582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (15))){
var state_11535__$1 = state_11535;
var statearr_11547_11583 = state_11535__$1;
(statearr_11547_11583[(2)] = null);

(statearr_11547_11583[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (21))){
var state_11535__$1 = state_11535;
var statearr_11548_11584 = state_11535__$1;
(statearr_11548_11584[(2)] = null);

(statearr_11548_11584[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (13))){
var inst_11490 = (state_11535[(8)]);
var inst_11488 = (state_11535[(9)]);
var inst_11487 = (state_11535[(11)]);
var inst_11489 = (state_11535[(12)]);
var inst_11497 = (state_11535[(2)]);
var inst_11498 = (inst_11490 + (1));
var tmp11544 = inst_11488;
var tmp11545 = inst_11487;
var tmp11546 = inst_11489;
var inst_11487__$1 = tmp11545;
var inst_11488__$1 = tmp11544;
var inst_11489__$1 = tmp11546;
var inst_11490__$1 = inst_11498;
var state_11535__$1 = (function (){var statearr_11549 = state_11535;
(statearr_11549[(8)] = inst_11490__$1);

(statearr_11549[(14)] = inst_11497);

(statearr_11549[(9)] = inst_11488__$1);

(statearr_11549[(11)] = inst_11487__$1);

(statearr_11549[(12)] = inst_11489__$1);

return statearr_11549;
})();
var statearr_11550_11585 = state_11535__$1;
(statearr_11550_11585[(2)] = null);

(statearr_11550_11585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (22))){
var state_11535__$1 = state_11535;
var statearr_11551_11586 = state_11535__$1;
(statearr_11551_11586[(2)] = null);

(statearr_11551_11586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (6))){
var inst_11476 = (state_11535[(13)]);
var inst_11485 = f.call(null,inst_11476);
var inst_11486 = cljs.core.seq.call(null,inst_11485);
var inst_11487 = inst_11486;
var inst_11488 = null;
var inst_11489 = (0);
var inst_11490 = (0);
var state_11535__$1 = (function (){var statearr_11552 = state_11535;
(statearr_11552[(8)] = inst_11490);

(statearr_11552[(9)] = inst_11488);

(statearr_11552[(11)] = inst_11487);

(statearr_11552[(12)] = inst_11489);

return statearr_11552;
})();
var statearr_11553_11587 = state_11535__$1;
(statearr_11553_11587[(2)] = null);

(statearr_11553_11587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (17))){
var inst_11501 = (state_11535[(7)]);
var inst_11505 = cljs.core.chunk_first.call(null,inst_11501);
var inst_11506 = cljs.core.chunk_rest.call(null,inst_11501);
var inst_11507 = cljs.core.count.call(null,inst_11505);
var inst_11487 = inst_11506;
var inst_11488 = inst_11505;
var inst_11489 = inst_11507;
var inst_11490 = (0);
var state_11535__$1 = (function (){var statearr_11554 = state_11535;
(statearr_11554[(8)] = inst_11490);

(statearr_11554[(9)] = inst_11488);

(statearr_11554[(11)] = inst_11487);

(statearr_11554[(12)] = inst_11489);

return statearr_11554;
})();
var statearr_11555_11588 = state_11535__$1;
(statearr_11555_11588[(2)] = null);

(statearr_11555_11588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (3))){
var inst_11533 = (state_11535[(2)]);
var state_11535__$1 = state_11535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11535__$1,inst_11533);
} else {
if((state_val_11536 === (12))){
var inst_11521 = (state_11535[(2)]);
var state_11535__$1 = state_11535;
var statearr_11556_11589 = state_11535__$1;
(statearr_11556_11589[(2)] = inst_11521);

(statearr_11556_11589[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (2))){
var state_11535__$1 = state_11535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11535__$1,(4),in$);
} else {
if((state_val_11536 === (23))){
var inst_11529 = (state_11535[(2)]);
var state_11535__$1 = state_11535;
var statearr_11557_11590 = state_11535__$1;
(statearr_11557_11590[(2)] = inst_11529);

(statearr_11557_11590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (19))){
var inst_11516 = (state_11535[(2)]);
var state_11535__$1 = state_11535;
var statearr_11558_11591 = state_11535__$1;
(statearr_11558_11591[(2)] = inst_11516);

(statearr_11558_11591[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (11))){
var inst_11501 = (state_11535[(7)]);
var inst_11487 = (state_11535[(11)]);
var inst_11501__$1 = cljs.core.seq.call(null,inst_11487);
var state_11535__$1 = (function (){var statearr_11559 = state_11535;
(statearr_11559[(7)] = inst_11501__$1);

return statearr_11559;
})();
if(inst_11501__$1){
var statearr_11560_11592 = state_11535__$1;
(statearr_11560_11592[(1)] = (14));

} else {
var statearr_11561_11593 = state_11535__$1;
(statearr_11561_11593[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (9))){
var inst_11523 = (state_11535[(2)]);
var inst_11524 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11535__$1 = (function (){var statearr_11562 = state_11535;
(statearr_11562[(15)] = inst_11523);

return statearr_11562;
})();
if(cljs.core.truth_(inst_11524)){
var statearr_11563_11594 = state_11535__$1;
(statearr_11563_11594[(1)] = (21));

} else {
var statearr_11564_11595 = state_11535__$1;
(statearr_11564_11595[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (5))){
var inst_11479 = cljs.core.async.close_BANG_.call(null,out);
var state_11535__$1 = state_11535;
var statearr_11565_11596 = state_11535__$1;
(statearr_11565_11596[(2)] = inst_11479);

(statearr_11565_11596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (14))){
var inst_11501 = (state_11535[(7)]);
var inst_11503 = cljs.core.chunked_seq_QMARK_.call(null,inst_11501);
var state_11535__$1 = state_11535;
if(inst_11503){
var statearr_11566_11597 = state_11535__$1;
(statearr_11566_11597[(1)] = (17));

} else {
var statearr_11567_11598 = state_11535__$1;
(statearr_11567_11598[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (16))){
var inst_11519 = (state_11535[(2)]);
var state_11535__$1 = state_11535;
var statearr_11568_11599 = state_11535__$1;
(statearr_11568_11599[(2)] = inst_11519);

(statearr_11568_11599[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (10))){
var inst_11490 = (state_11535[(8)]);
var inst_11488 = (state_11535[(9)]);
var inst_11495 = cljs.core._nth.call(null,inst_11488,inst_11490);
var state_11535__$1 = state_11535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11535__$1,(13),out,inst_11495);
} else {
if((state_val_11536 === (18))){
var inst_11501 = (state_11535[(7)]);
var inst_11510 = cljs.core.first.call(null,inst_11501);
var state_11535__$1 = state_11535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11535__$1,(20),out,inst_11510);
} else {
if((state_val_11536 === (8))){
var inst_11490 = (state_11535[(8)]);
var inst_11489 = (state_11535[(12)]);
var inst_11492 = (inst_11490 < inst_11489);
var inst_11493 = inst_11492;
var state_11535__$1 = state_11535;
if(cljs.core.truth_(inst_11493)){
var statearr_11569_11600 = state_11535__$1;
(statearr_11569_11600[(1)] = (10));

} else {
var statearr_11570_11601 = state_11535__$1;
(statearr_11570_11601[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6888__auto__))
;
return ((function (switch__6826__auto__,c__6888__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6827__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6827__auto____0 = (function (){
var statearr_11574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11574[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6827__auto__);

(statearr_11574[(1)] = (1));

return statearr_11574;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6827__auto____1 = (function (state_11535){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_11535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e11575){if((e11575 instanceof Object)){
var ex__6830__auto__ = e11575;
var statearr_11576_11602 = state_11535;
(statearr_11576_11602[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11603 = state_11535;
state_11535 = G__11603;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6827__auto__ = function(state_11535){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6827__auto____1.call(this,state_11535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6827__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6827__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto__))
})();
var state__6890__auto__ = (function (){var statearr_11577 = f__6889__auto__.call(null);
(statearr_11577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto__);

return statearr_11577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto__))
);

return c__6888__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__11605 = arguments.length;
switch (G__11605) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__11608 = arguments.length;
switch (G__11608) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__11611 = arguments.length;
switch (G__11611) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6888__auto___11661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___11661,out){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___11661,out){
return (function (state_11635){
var state_val_11636 = (state_11635[(1)]);
if((state_val_11636 === (7))){
var inst_11630 = (state_11635[(2)]);
var state_11635__$1 = state_11635;
var statearr_11637_11662 = state_11635__$1;
(statearr_11637_11662[(2)] = inst_11630);

(statearr_11637_11662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11636 === (1))){
var inst_11612 = null;
var state_11635__$1 = (function (){var statearr_11638 = state_11635;
(statearr_11638[(7)] = inst_11612);

return statearr_11638;
})();
var statearr_11639_11663 = state_11635__$1;
(statearr_11639_11663[(2)] = null);

(statearr_11639_11663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11636 === (4))){
var inst_11615 = (state_11635[(8)]);
var inst_11615__$1 = (state_11635[(2)]);
var inst_11616 = (inst_11615__$1 == null);
var inst_11617 = cljs.core.not.call(null,inst_11616);
var state_11635__$1 = (function (){var statearr_11640 = state_11635;
(statearr_11640[(8)] = inst_11615__$1);

return statearr_11640;
})();
if(inst_11617){
var statearr_11641_11664 = state_11635__$1;
(statearr_11641_11664[(1)] = (5));

} else {
var statearr_11642_11665 = state_11635__$1;
(statearr_11642_11665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11636 === (6))){
var state_11635__$1 = state_11635;
var statearr_11643_11666 = state_11635__$1;
(statearr_11643_11666[(2)] = null);

(statearr_11643_11666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11636 === (3))){
var inst_11632 = (state_11635[(2)]);
var inst_11633 = cljs.core.async.close_BANG_.call(null,out);
var state_11635__$1 = (function (){var statearr_11644 = state_11635;
(statearr_11644[(9)] = inst_11632);

return statearr_11644;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11635__$1,inst_11633);
} else {
if((state_val_11636 === (2))){
var state_11635__$1 = state_11635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11635__$1,(4),ch);
} else {
if((state_val_11636 === (11))){
var inst_11615 = (state_11635[(8)]);
var inst_11624 = (state_11635[(2)]);
var inst_11612 = inst_11615;
var state_11635__$1 = (function (){var statearr_11645 = state_11635;
(statearr_11645[(10)] = inst_11624);

(statearr_11645[(7)] = inst_11612);

return statearr_11645;
})();
var statearr_11646_11667 = state_11635__$1;
(statearr_11646_11667[(2)] = null);

(statearr_11646_11667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11636 === (9))){
var inst_11615 = (state_11635[(8)]);
var state_11635__$1 = state_11635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11635__$1,(11),out,inst_11615);
} else {
if((state_val_11636 === (5))){
var inst_11615 = (state_11635[(8)]);
var inst_11612 = (state_11635[(7)]);
var inst_11619 = cljs.core._EQ_.call(null,inst_11615,inst_11612);
var state_11635__$1 = state_11635;
if(inst_11619){
var statearr_11648_11668 = state_11635__$1;
(statearr_11648_11668[(1)] = (8));

} else {
var statearr_11649_11669 = state_11635__$1;
(statearr_11649_11669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11636 === (10))){
var inst_11627 = (state_11635[(2)]);
var state_11635__$1 = state_11635;
var statearr_11650_11670 = state_11635__$1;
(statearr_11650_11670[(2)] = inst_11627);

(statearr_11650_11670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11636 === (8))){
var inst_11612 = (state_11635[(7)]);
var tmp11647 = inst_11612;
var inst_11612__$1 = tmp11647;
var state_11635__$1 = (function (){var statearr_11651 = state_11635;
(statearr_11651[(7)] = inst_11612__$1);

return statearr_11651;
})();
var statearr_11652_11671 = state_11635__$1;
(statearr_11652_11671[(2)] = null);

(statearr_11652_11671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6888__auto___11661,out))
;
return ((function (switch__6826__auto__,c__6888__auto___11661,out){
return (function() {
var cljs$core$async$state_machine__6827__auto__ = null;
var cljs$core$async$state_machine__6827__auto____0 = (function (){
var statearr_11656 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11656[(0)] = cljs$core$async$state_machine__6827__auto__);

(statearr_11656[(1)] = (1));

return statearr_11656;
});
var cljs$core$async$state_machine__6827__auto____1 = (function (state_11635){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_11635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e11657){if((e11657 instanceof Object)){
var ex__6830__auto__ = e11657;
var statearr_11658_11672 = state_11635;
(statearr_11658_11672[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11673 = state_11635;
state_11635 = G__11673;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$state_machine__6827__auto__ = function(state_11635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6827__auto____1.call(this,state_11635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6827__auto____0;
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6827__auto____1;
return cljs$core$async$state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___11661,out))
})();
var state__6890__auto__ = (function (){var statearr_11659 = f__6889__auto__.call(null);
(statearr_11659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___11661);

return statearr_11659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___11661,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__11675 = arguments.length;
switch (G__11675) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6888__auto___11744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___11744,out){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___11744,out){
return (function (state_11713){
var state_val_11714 = (state_11713[(1)]);
if((state_val_11714 === (7))){
var inst_11709 = (state_11713[(2)]);
var state_11713__$1 = state_11713;
var statearr_11715_11745 = state_11713__$1;
(statearr_11715_11745[(2)] = inst_11709);

(statearr_11715_11745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11714 === (1))){
var inst_11676 = (new Array(n));
var inst_11677 = inst_11676;
var inst_11678 = (0);
var state_11713__$1 = (function (){var statearr_11716 = state_11713;
(statearr_11716[(7)] = inst_11677);

(statearr_11716[(8)] = inst_11678);

return statearr_11716;
})();
var statearr_11717_11746 = state_11713__$1;
(statearr_11717_11746[(2)] = null);

(statearr_11717_11746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11714 === (4))){
var inst_11681 = (state_11713[(9)]);
var inst_11681__$1 = (state_11713[(2)]);
var inst_11682 = (inst_11681__$1 == null);
var inst_11683 = cljs.core.not.call(null,inst_11682);
var state_11713__$1 = (function (){var statearr_11718 = state_11713;
(statearr_11718[(9)] = inst_11681__$1);

return statearr_11718;
})();
if(inst_11683){
var statearr_11719_11747 = state_11713__$1;
(statearr_11719_11747[(1)] = (5));

} else {
var statearr_11720_11748 = state_11713__$1;
(statearr_11720_11748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11714 === (15))){
var inst_11703 = (state_11713[(2)]);
var state_11713__$1 = state_11713;
var statearr_11721_11749 = state_11713__$1;
(statearr_11721_11749[(2)] = inst_11703);

(statearr_11721_11749[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11714 === (13))){
var state_11713__$1 = state_11713;
var statearr_11722_11750 = state_11713__$1;
(statearr_11722_11750[(2)] = null);

(statearr_11722_11750[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11714 === (6))){
var inst_11678 = (state_11713[(8)]);
var inst_11699 = (inst_11678 > (0));
var state_11713__$1 = state_11713;
if(cljs.core.truth_(inst_11699)){
var statearr_11723_11751 = state_11713__$1;
(statearr_11723_11751[(1)] = (12));

} else {
var statearr_11724_11752 = state_11713__$1;
(statearr_11724_11752[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11714 === (3))){
var inst_11711 = (state_11713[(2)]);
var state_11713__$1 = state_11713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11713__$1,inst_11711);
} else {
if((state_val_11714 === (12))){
var inst_11677 = (state_11713[(7)]);
var inst_11701 = cljs.core.vec.call(null,inst_11677);
var state_11713__$1 = state_11713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11713__$1,(15),out,inst_11701);
} else {
if((state_val_11714 === (2))){
var state_11713__$1 = state_11713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11713__$1,(4),ch);
} else {
if((state_val_11714 === (11))){
var inst_11693 = (state_11713[(2)]);
var inst_11694 = (new Array(n));
var inst_11677 = inst_11694;
var inst_11678 = (0);
var state_11713__$1 = (function (){var statearr_11725 = state_11713;
(statearr_11725[(10)] = inst_11693);

(statearr_11725[(7)] = inst_11677);

(statearr_11725[(8)] = inst_11678);

return statearr_11725;
})();
var statearr_11726_11753 = state_11713__$1;
(statearr_11726_11753[(2)] = null);

(statearr_11726_11753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11714 === (9))){
var inst_11677 = (state_11713[(7)]);
var inst_11691 = cljs.core.vec.call(null,inst_11677);
var state_11713__$1 = state_11713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11713__$1,(11),out,inst_11691);
} else {
if((state_val_11714 === (5))){
var inst_11681 = (state_11713[(9)]);
var inst_11677 = (state_11713[(7)]);
var inst_11678 = (state_11713[(8)]);
var inst_11686 = (state_11713[(11)]);
var inst_11685 = (inst_11677[inst_11678] = inst_11681);
var inst_11686__$1 = (inst_11678 + (1));
var inst_11687 = (inst_11686__$1 < n);
var state_11713__$1 = (function (){var statearr_11727 = state_11713;
(statearr_11727[(12)] = inst_11685);

(statearr_11727[(11)] = inst_11686__$1);

return statearr_11727;
})();
if(cljs.core.truth_(inst_11687)){
var statearr_11728_11754 = state_11713__$1;
(statearr_11728_11754[(1)] = (8));

} else {
var statearr_11729_11755 = state_11713__$1;
(statearr_11729_11755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11714 === (14))){
var inst_11706 = (state_11713[(2)]);
var inst_11707 = cljs.core.async.close_BANG_.call(null,out);
var state_11713__$1 = (function (){var statearr_11731 = state_11713;
(statearr_11731[(13)] = inst_11706);

return statearr_11731;
})();
var statearr_11732_11756 = state_11713__$1;
(statearr_11732_11756[(2)] = inst_11707);

(statearr_11732_11756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11714 === (10))){
var inst_11697 = (state_11713[(2)]);
var state_11713__$1 = state_11713;
var statearr_11733_11757 = state_11713__$1;
(statearr_11733_11757[(2)] = inst_11697);

(statearr_11733_11757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11714 === (8))){
var inst_11677 = (state_11713[(7)]);
var inst_11686 = (state_11713[(11)]);
var tmp11730 = inst_11677;
var inst_11677__$1 = tmp11730;
var inst_11678 = inst_11686;
var state_11713__$1 = (function (){var statearr_11734 = state_11713;
(statearr_11734[(7)] = inst_11677__$1);

(statearr_11734[(8)] = inst_11678);

return statearr_11734;
})();
var statearr_11735_11758 = state_11713__$1;
(statearr_11735_11758[(2)] = null);

(statearr_11735_11758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6888__auto___11744,out))
;
return ((function (switch__6826__auto__,c__6888__auto___11744,out){
return (function() {
var cljs$core$async$state_machine__6827__auto__ = null;
var cljs$core$async$state_machine__6827__auto____0 = (function (){
var statearr_11739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11739[(0)] = cljs$core$async$state_machine__6827__auto__);

(statearr_11739[(1)] = (1));

return statearr_11739;
});
var cljs$core$async$state_machine__6827__auto____1 = (function (state_11713){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_11713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e11740){if((e11740 instanceof Object)){
var ex__6830__auto__ = e11740;
var statearr_11741_11759 = state_11713;
(statearr_11741_11759[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11760 = state_11713;
state_11713 = G__11760;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$state_machine__6827__auto__ = function(state_11713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6827__auto____1.call(this,state_11713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6827__auto____0;
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6827__auto____1;
return cljs$core$async$state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___11744,out))
})();
var state__6890__auto__ = (function (){var statearr_11742 = f__6889__auto__.call(null);
(statearr_11742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___11744);

return statearr_11742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___11744,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__11762 = arguments.length;
switch (G__11762) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6888__auto___11835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___11835,out){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___11835,out){
return (function (state_11804){
var state_val_11805 = (state_11804[(1)]);
if((state_val_11805 === (7))){
var inst_11800 = (state_11804[(2)]);
var state_11804__$1 = state_11804;
var statearr_11806_11836 = state_11804__$1;
(statearr_11806_11836[(2)] = inst_11800);

(statearr_11806_11836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (1))){
var inst_11763 = [];
var inst_11764 = inst_11763;
var inst_11765 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_11804__$1 = (function (){var statearr_11807 = state_11804;
(statearr_11807[(7)] = inst_11765);

(statearr_11807[(8)] = inst_11764);

return statearr_11807;
})();
var statearr_11808_11837 = state_11804__$1;
(statearr_11808_11837[(2)] = null);

(statearr_11808_11837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (4))){
var inst_11768 = (state_11804[(9)]);
var inst_11768__$1 = (state_11804[(2)]);
var inst_11769 = (inst_11768__$1 == null);
var inst_11770 = cljs.core.not.call(null,inst_11769);
var state_11804__$1 = (function (){var statearr_11809 = state_11804;
(statearr_11809[(9)] = inst_11768__$1);

return statearr_11809;
})();
if(inst_11770){
var statearr_11810_11838 = state_11804__$1;
(statearr_11810_11838[(1)] = (5));

} else {
var statearr_11811_11839 = state_11804__$1;
(statearr_11811_11839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (15))){
var inst_11794 = (state_11804[(2)]);
var state_11804__$1 = state_11804;
var statearr_11812_11840 = state_11804__$1;
(statearr_11812_11840[(2)] = inst_11794);

(statearr_11812_11840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (13))){
var state_11804__$1 = state_11804;
var statearr_11813_11841 = state_11804__$1;
(statearr_11813_11841[(2)] = null);

(statearr_11813_11841[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (6))){
var inst_11764 = (state_11804[(8)]);
var inst_11789 = inst_11764.length;
var inst_11790 = (inst_11789 > (0));
var state_11804__$1 = state_11804;
if(cljs.core.truth_(inst_11790)){
var statearr_11814_11842 = state_11804__$1;
(statearr_11814_11842[(1)] = (12));

} else {
var statearr_11815_11843 = state_11804__$1;
(statearr_11815_11843[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (3))){
var inst_11802 = (state_11804[(2)]);
var state_11804__$1 = state_11804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11804__$1,inst_11802);
} else {
if((state_val_11805 === (12))){
var inst_11764 = (state_11804[(8)]);
var inst_11792 = cljs.core.vec.call(null,inst_11764);
var state_11804__$1 = state_11804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11804__$1,(15),out,inst_11792);
} else {
if((state_val_11805 === (2))){
var state_11804__$1 = state_11804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11804__$1,(4),ch);
} else {
if((state_val_11805 === (11))){
var inst_11768 = (state_11804[(9)]);
var inst_11772 = (state_11804[(10)]);
var inst_11782 = (state_11804[(2)]);
var inst_11783 = [];
var inst_11784 = inst_11783.push(inst_11768);
var inst_11764 = inst_11783;
var inst_11765 = inst_11772;
var state_11804__$1 = (function (){var statearr_11816 = state_11804;
(statearr_11816[(7)] = inst_11765);

(statearr_11816[(11)] = inst_11784);

(statearr_11816[(12)] = inst_11782);

(statearr_11816[(8)] = inst_11764);

return statearr_11816;
})();
var statearr_11817_11844 = state_11804__$1;
(statearr_11817_11844[(2)] = null);

(statearr_11817_11844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (9))){
var inst_11764 = (state_11804[(8)]);
var inst_11780 = cljs.core.vec.call(null,inst_11764);
var state_11804__$1 = state_11804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11804__$1,(11),out,inst_11780);
} else {
if((state_val_11805 === (5))){
var inst_11768 = (state_11804[(9)]);
var inst_11765 = (state_11804[(7)]);
var inst_11772 = (state_11804[(10)]);
var inst_11772__$1 = f.call(null,inst_11768);
var inst_11773 = cljs.core._EQ_.call(null,inst_11772__$1,inst_11765);
var inst_11774 = cljs.core.keyword_identical_QMARK_.call(null,inst_11765,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11775 = (inst_11773) || (inst_11774);
var state_11804__$1 = (function (){var statearr_11818 = state_11804;
(statearr_11818[(10)] = inst_11772__$1);

return statearr_11818;
})();
if(cljs.core.truth_(inst_11775)){
var statearr_11819_11845 = state_11804__$1;
(statearr_11819_11845[(1)] = (8));

} else {
var statearr_11820_11846 = state_11804__$1;
(statearr_11820_11846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (14))){
var inst_11797 = (state_11804[(2)]);
var inst_11798 = cljs.core.async.close_BANG_.call(null,out);
var state_11804__$1 = (function (){var statearr_11822 = state_11804;
(statearr_11822[(13)] = inst_11797);

return statearr_11822;
})();
var statearr_11823_11847 = state_11804__$1;
(statearr_11823_11847[(2)] = inst_11798);

(statearr_11823_11847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (10))){
var inst_11787 = (state_11804[(2)]);
var state_11804__$1 = state_11804;
var statearr_11824_11848 = state_11804__$1;
(statearr_11824_11848[(2)] = inst_11787);

(statearr_11824_11848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (8))){
var inst_11768 = (state_11804[(9)]);
var inst_11772 = (state_11804[(10)]);
var inst_11764 = (state_11804[(8)]);
var inst_11777 = inst_11764.push(inst_11768);
var tmp11821 = inst_11764;
var inst_11764__$1 = tmp11821;
var inst_11765 = inst_11772;
var state_11804__$1 = (function (){var statearr_11825 = state_11804;
(statearr_11825[(7)] = inst_11765);

(statearr_11825[(14)] = inst_11777);

(statearr_11825[(8)] = inst_11764__$1);

return statearr_11825;
})();
var statearr_11826_11849 = state_11804__$1;
(statearr_11826_11849[(2)] = null);

(statearr_11826_11849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6888__auto___11835,out))
;
return ((function (switch__6826__auto__,c__6888__auto___11835,out){
return (function() {
var cljs$core$async$state_machine__6827__auto__ = null;
var cljs$core$async$state_machine__6827__auto____0 = (function (){
var statearr_11830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11830[(0)] = cljs$core$async$state_machine__6827__auto__);

(statearr_11830[(1)] = (1));

return statearr_11830;
});
var cljs$core$async$state_machine__6827__auto____1 = (function (state_11804){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_11804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e11831){if((e11831 instanceof Object)){
var ex__6830__auto__ = e11831;
var statearr_11832_11850 = state_11804;
(statearr_11832_11850[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11851 = state_11804;
state_11804 = G__11851;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$state_machine__6827__auto__ = function(state_11804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6827__auto____1.call(this,state_11804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6827__auto____0;
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6827__auto____1;
return cljs$core$async$state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___11835,out))
})();
var state__6890__auto__ = (function (){var statearr_11833 = f__6889__auto__.call(null);
(statearr_11833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___11835);

return statearr_11833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___11835,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map