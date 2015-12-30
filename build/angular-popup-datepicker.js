/*!
 * pickadate.js v3.4.0, 2014/02/15
 * By Amsul, http://amsul.ca
 * Hosted on http://amsul.github.io/pickadate.js
 * Licensed under MIT
 */
!function(a){
// Register as an anonymous module.
"function"==typeof define&&define.amd?define("picker",["angular"],a):this.Picker=a(angular)}(function(a){/**
 * The picker constructor that creates a blank picker.
 */
function b(a,d,e,g){//PickerInstance.prototype
/**
     * Wrap the picker holder components together.
     */
function h(){
// Create a picker wrapper holder
// Create a picker wrapper node
// Create a picker frame
// Create a picker box node
// Create the components nodes.
// The picker box class
// Picker wrap class
// Picker frame class
// Picker holder class
return b._.node("div",b._.node("div",b._.node("div",b._.node("div",r.component.nodes(o.open),n.box),n.wrap),n.frame),n.holder)}//createWrappedComponent
/**
     * Prepare the input element with all bindings.
     */
function i(){
// Store the picker data by component name.
p.data(d,r),
// Add the “input” class name.
p.addClass(n.input),
// If there’s a `data-value`, update the value of the element.
p[0].value=p.attr("data-value")?r.get("select",m.format):a.value,
// On focus/click, open the picker and adjust the root “focused” state.
angular.element(document.querySelectorAll("#"+o.id)).on("focus",l),angular.element(document.querySelectorAll("#"+o.id)).on("click",l),
// Only bind keydown events if the element isn’t editable.
m.editable||
// Handle keyboard event based on the picker being opened or not.
angular.element(document.querySelectorAll("#"+o.id)).on("keydown",function(a){var b=a.keyCode,
// Check if one of the delete keys was pressed.
c=/^(8|46)$/.test(b);
// For some reason IE clears the input value on “escape”.
// For some reason IE clears the input value on “escape”.
// Check if `space` or `delete` was pressed or the picker is closed with a key movement.
// Prevent it from moving the page and bubbling to doc.
// If `delete` was pressed, clear the values and close the picker.
// Otherwise open the picker.
return 27==b?(r.close(),!1):void((32==b||c||!o.open&&r.component.key[b])&&(a.preventDefault(),a.stopPropagation(),c?r.clear().close():r.open()))}),
// Update the aria attributes.
c(a,{haspopup:!0,expanded:!1,readonly:!1,owns:a.id+"_root"+(r._hidden?" "+r._hidden.id:"")})}/**
     * Prepare the root picker element with all bindings.
     */
function j(){
// When something within the root is focused, stop from bubbling
// to the doc and remove the “focused” state from the root.	
r.$root.on("focusin",function(a){r.$root.removeClass(n.focused),c(r.$root[0],"selected",!1),a.stopPropagation()}),
// When something within the root holder is clicked, stop it
// from bubbling to the doc.
r.$root.on("mousedown click",function(b){var c=b.target;
// Make sure the target isn’t the root holder so it can bubble up.
c!=r.$root.children()[0]?(b.stopPropagation(),
// * For mousedown events, cancel the default action in order to
//   prevent cases where focus is shifted onto external elements
//   when using things like jQuery mobile or MagnificPopup (ref: #249 & #120).
//   Also, for Firefox, don’t prevent action on the `option` element.
"mousedown"==b.type&&"input"!==angular.element(c)[0].tagName&&"SELECT"!=c.nodeName&&"OPTION"!=c.nodeName&&(b.preventDefault(),
// Re-focus onto the element so that users can click away
// from elements focused within the picker.
a.focus())):"click"==b.type&&r.get("open")&&r.close()}),r.attachLiveEvents=function(){
// If there’s a click on an actionable element, carry out the actions.
angular.element(r.$root[0].querySelectorAll("[data-pick], [data-nav], [data-clear], [data-close]")).off("click").on("click",function(){var c=angular.element(this),d=c.hasClass(n.navDisabled)||c.hasClass(n.disabled),
// * For IE, non-focusable elements can be active elements as well
//   (http://stackoverflow.com/a/2684561).
e=document.activeElement;e=e&&(e.type||e.href)&&e,(d||e&&!r.$root[0].contains(e))&&a.focus(),c.attr("data-nav")&&!d?(r.set("highlight",r.component.item.highlight,{nav:parseInt(c.attr("data-nav"))}),r.attachLiveEvents()):b._.isInteger(parseInt(c.attr("data-pick")))&&!d?(r.set("select",parseInt(c.attr("data-pick"))).close(!0),r.attachLiveEvents()):c.attr("data-clear")?(r.clear().close(!0),r.attachLiveEvents()):c.attr("data-close")&&(r.close(!0),r.attachLiveEvents())})},c(r.$root[0],"hidden",!0)}/**
      * Prepare the hidden input element along with all bindings.
      */
function k(){var b=["string"==typeof m.hiddenPrefix?m.hiddenPrefix:"","string"==typeof m.hiddenSuffix?m.hiddenSuffix:"_submit"];r._hidden=angular.element('<input type=hidden name="'+b[0]+a.name+b[1]+'"id="'+b[0]+a.id+b[1]+'"'+(
// If the element has a value, set the hidden value as well.
p.attr("data-value")||a.value?' value="'+r.get("select",m.formatSubmit)+'"':"")+">")[0],p.on("change."+o.id,function(){r._hidden.value=a.value?r.get("select",m.formatSubmit):""}).after(r._hidden)}
// Separated for IE
function l(a){
// Stop the event from propagating to the doc.
a.stopPropagation(),
// If it’s a focus event, add the “focused” class to the root.
"focus"==a.type&&(r.$root.addClass(n.focused),c(r.$root[0],"selected",!0)),
// And then finally open the picker.
r.open()}
// If there’s no element, return the picker constructor.
if(!a)return b;var m;
// Merge the defaults and options passed.
e?(m=e.defaults,angular.extend(m,g)):m=g||{};
// Merge the default classes with the settings classes.
var n=b.klasses();angular.extend(n,m.klass);var
// The state of the picker.
o={id:a.id||"P"+Math.abs(~~(Math.random()*new Date))},
// The element node wrapper into a jQuery object.
p=angular.element(a),
// Pseudo picker constructor.
q=function(){return this.start()},
// The picker prototype.
r=q.prototype={constructor:q,$node:p,/**
             * Initialize everything
             */
start:function(){
// If it’s already started, do nothing.
// If it’s already started, do nothing.
// Update the picker states.
// Confirm focus state, convert into text input to remove UA stylings,
// and set as readonly to prevent keyboard popup.
// Create a new picker component with the settings.
// Create the picker root with a holder and then prepare it.
// If there’s a format for the hidden input element, create the element.
// Prepare the input element.
// Insert the root as specified in the settings.
// Bind the default component and settings events.
// If the element has autofocus, open the picker.
return o&&o.start?r:(o.methods={},o.start=!0,o.open=!1,o.type=a.type,a.autofocus=a==document.activeElement,a.type="text",a.readOnly=!m.editable,a.id=a.id||o.id,r.component=new e(r,m),r.$root=angular.element(b._.node("div",h(),n.picker,'id="'+a.id+'_root"')),j(),m.formatSubmit&&k(),i(),m.container?angular.element(m.container).append(r.$root):p.after(r.$root),r.on({start:r.component.onStart,render:r.component.onRender,stop:r.component.onStop,open:r.component.onOpen,close:r.component.onClose,set:r.component.onSet}).on({start:m.onStart,render:m.onRender,stop:m.onStop,open:m.onOpen,close:m.onClose,set:m.onSet}),a.autofocus&&r.open(),r.trigger("start").trigger("render"))},//start
/**
             * Render a new picker
             */
render:function(a){
// Trigger the queued “render” events.
// Insert a new component holder in the root or box.
return a?r.$root.html(h()):angular.element(r.$root[0].querySelectorAll("."+n.box)).html(r.component.nodes(o.open)),r.attachLiveEvents(),r.trigger("render")},//render
/**
             * Destroy everything
             */
stop:function(){
// If it’s already stopped, do nothing.
// If it’s already stopped, do nothing.
// Then close the picker.
// Remove the hidden field.
// Remove the root.
// Remove the input class, remove the stored data, and unbind
// the events (after a tick for IE - see `P.close`).
// Restore the element state
// Trigger the queued “stop” events.
// Reset the picker states.
return o.start?(r.close(),r._hidden&&r._hidden.parentNode.removeChild(r._hidden),r.$root.remove(),p.removeClass(n.input).removeData(d),setTimeout(function(){p.off("."+o.id)},0),a.type=o.type,a.readOnly=!1,r.trigger("stop"),o.methods={},o.start=!1,r):r},//stop
/*
             * Open up the picker
             */
open:function(d){
// If it’s already open, do nothing.
// If it’s already open, do nothing.
// Add the “active” class.
// Add the “opened” class to the picker root.
// If we have to give focus, bind the element and doc events.
// Set it as open.
// Pass focus to the element’s jQuery object.
// Bind the document events.
return o.open?r:(p.addClass(n.active),c(a,"expanded",!0),r.$root.addClass(n.opened),c(r.$root[0],"hidden",!1),d!==!1&&(o.open=!0,p.triggerHandler("focus"),angular.element(document.querySelectorAll("#"+o.id)).off("click focusin").on("click focusin",function(b){var c=b.target;
// If the target of the event is not the element, close the picker picker.
// * Don’t worry about clicks or focusins on the root because those don’t bubble up.
//   Also, for Firefox, a click on an `option` element bubbles up directly
//   to the doc. So make sure the target wasn't the doc.
// * In Firefox stopPropagation() doesn’t prevent right-click events from bubbling,
//   which causes the picker to unexpectedly close when right-clicking it. So make
//   sure the event wasn’t a right-click.
c!=a&&c!=document&&3!=b.which&&
// If the target was the holder that covers the screen,
// keep the element focused to maintain tabindex.
r.close(c===r.$root.children()[0])}),angular.element(document.querySelectorAll("#"+o.id)).off("keydown").on("keydown",function(c){var
// Get the keycode.
d=c.keyCode,
// Translate that to a selection change.
e=r.component.key[d],
// Grab the target.
f=c.target;
// On escape, close the picker and give focus.
27==d?r.close(!0):f!=a||!e&&13!=d?r.$root[0].contains(f)&&13==d&&(c.preventDefault(),f.click()):(
// Prevent the default action to stop page movement.
c.preventDefault(),
// Trigger the key movement action.
e?b._.trigger(r.component.key.go,r,[b._.trigger(e)]):angular.element(r.$root[0].querySelectorAll("."+n.highlighted)).hasClass(n.disabled)||r.set("select",r.component.item.highlight).close())})),r.trigger("open"))},//open
/**
             * Close the picker
             */
close:function(b){
// If it’s already closed, do nothing more.
// If we need to give focus, do it before changing states.
// ....ah yes! It would’ve been incomplete without a crazy workaround for IE :|
// The focus is triggered *after* the close has completed - causing it
// to open again. So unbind and rebind the event at the next tick.
// Remove the “active” class.
// Remove the “opened” and “focused” class from the picker root.
// If it’s already closed, do nothing more.
// Set it as closed.
// Unbind the document events.
return b&&(p.off("focus."+o.id),p.triggerHandler("focus"),setTimeout(function(){angular.element(document.querySelectorAll("#"+o.id)).on("focus",l)},0)),p.removeClass(n.active),c(a,"expanded",!1),r.$root.removeClass(n.opened+" "+n.focused),c(r.$root[0],"hidden",!0),c(r.$root[0],"selected",!1),o.open?(setTimeout(function(){o.open=!1},1e3),f.off("."+o.id),r.trigger("close")):r},//close
/**
             * Clear the values
             */
clear:function(){return r.set("clear")},//clear
/**
             * Set something
             */
set:function(a,b,c){var d,e,f=angular.isObject(a),g=f?a:{};if(c=f&&angular.isObject(b)?b:c||{},a){
// If the thing isn’t an object, make it one.
f||(g[a]=b);
// Go through the things of items to set.
for(d in g)e=g[d],d in r.component.item&&r.component.set(d,e,c),("select"==d||"clear"==d)&&(p[0].value="clear"==d?"":r.get(d,m.format),p.triggerHandler("change"));
// Render a new picker.
r.render()}
// When the method isn’t muted, trigger queued “set” events and pass the `thingObject`.
return c.muted?r:r.trigger("set",g)},//set
/**
             * Get something
             */
get:function(c,d){return c=c||"value",null!=o[c]?o[c]:"value"==c?a.value:c in r.component.item?"string"==typeof d?b._.trigger(r.component.formats.toString,r.component,[d,r.component.get(c)]):r.component.get(c):void 0},//get
/**
             * Bind events on the things.
             */
on:function(a,b){var c,d,e=angular.isObject(a),f=e?a:{};if(a){
// If the thing isn’t an object, make it one.
e||(f[a]=b);
// Go through the things to bind to.
for(c in f)d=f[c],o.methods[c]=o.methods[c]||[],o.methods[c].push(d)}return r},//on
/**
             * Unbind events on the things.
             */
off:function(){var a,b,c=arguments;for(a=0,namesCount=c.length;a<namesCount;a+=1)b=c[a],b in o.methods&&delete o.methods[b];return r},/**
             * Fire off method events.
             */
trigger:function(a,c){var d=o.methods[a];return d&&d.map(function(a){b._.trigger(a,r,[c])}),r}};
// Return a new picker instance.
return new q}//PickerConstructor.extend
function c(a,b,c){if(angular.isObject(b))for(var e in b)d(a,e,b[e]);else d(a,b,c)}function d(a,b,c){angular.element(a).attr(("role"==b?"":"aria-")+b,c)}function e(a,b){angular.isObject(a)||(a={attribute:b}),b="";for(var c in a){var d=("role"==c?"":"aria-")+c,e=a[c];b+=null==e?"":d+'="'+a[c]+'"'}return b}var f=angular.element(document);
// Expose the picker constructor.
//PickerConstructor
/**
 * The default classes and prefix to use for the HTML classes.
 */
//PickerConstructor.klasses
/**
 * PickerConstructor helper methods.
 */
//PickerConstructor._
/**
 * Extend the picker with a component and defaults.
 */
return b.klasses=function(a){return a=a||"picker",{picker:a,opened:a+"--opened",focused:a+"--focused",input:a+"__input",active:a+"__input--active",holder:a+"__holder",frame:a+"__frame",wrap:a+"__wrap",box:a+"__box"}},b._={/**
     * Create a group of nodes. Expects:
     * `
        {
            min:    {Integer},
            max:    {Integer},
            i:      {Integer},
            node:   {String},
            item:   {Function}
        }
     * `
     */
group:function(a){
// Loop from the `min` to `max`, incrementing by `i`
for(var
// Scope for the looped object
c,
// Create the nodes list
d="",
// The counter starts from the `min`
e=b._.trigger(a.min,a);e<=b._.trigger(a.max,a,[e]);e+=a.i)c=b._.trigger(a.item,a,[e]),d+=b._.node(a.node,c[0],c[1],c[2]);
// Return the list of nodes
return d},//group
/**
     * Create a dom node string
     */
node:function(b,c,d,e){
// If the item is false-y, just return an empty string
// If the item is false-y, just return an empty string
// If the item is an array, do a join
// Check for the class
// Check for any attributes
return c?(c=a.isArray(c)?c.join(""):c,d=d?' class="'+d+'"':"",e=e?" "+e:"","<"+b+d+e+">"+c+"</"+b+">"):""},//node
/**
     * Lead numbers below 10 with a zero.
     */
lead:function(a){return(10>a?"0":"")+a},/**
     * Trigger a function otherwise return the value.
     */
trigger:function(a,b,c){return"function"==typeof a?a.apply(b,c||[]):a},/**
     * If the second character is a digit, length is 2 otherwise 1.
     */
digits:function(a){return/\d/.test(a[1])?2:1},/**
     * Tell if something is a date object.
     */
isDate:function(a){return{}.toString.call(a).indexOf("Date")>-1&&this.isInteger(a.getDate())},/**
     * Tell if something is an integer.
     */
isInteger:function(a){return{}.toString.call(a).indexOf("Number")>-1&&a%1===0},/**
     * Create ARIA attribute strings.
     */
ariaAttr:e},b.extend=function(a,c){
// Extend jQuery.
angular.element.prototype[a]=function(d,e){
// Grab the component data.
var f=this.data(a);
// If the picker is requested, return the data object.
if("picker"==d)return f;
// If the component data exists and `options` is a string, carry out the action.
if(f&&"string"==typeof d)return b._.trigger(f[d],f,[e]),this;
// Otherwise go through each matched element and if the component
// doesn’t exist, create a new picker using `this` element
// and merging the defaults and options with a deep copy.
for(var g=0;g<this.length;g++){var h=angular.element(this[g]);h.data(a)||new b(h[0],a,c,d)}},
// Set the defaults.
angular.element.prototype[a].defaults=c.defaults},b});
/*!
 * Date picker for pickadate.js v3.4.0
 * http://amsul.github.io/pickadate.js/date.htm
 */
!function(a){
// Register as an anonymous module.
"function"==typeof define&&define.amd?define(["picker","angular"],a):a(Picker,angular)}(function(a,b){/**
 * The date picker constructor
 */
function c(a,c){var d=this,e=a.$node[0].value,f=a.$node.attr("data-value"),g=f||e,h=f?c.formatSubmit:c.format,i=function(){return"rtl"===getComputedStyle(a.$root[0]).direction};d.settings=c,d.$node=a.$node,
// The queue of methods that will be used to build item objects.
d.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},
// The component's item object.
d.item={},d.item.disable=(c.disable||[]).slice(0),d.item.enable=-function(a){return a[0]===!0?a.shift():-1}(d.item.disable),d.set("min",c.min).set("max",c.max).set("now"),
// When there’s a value, set the `select`, which in turn
// also sets the `highlight` and `view`.
g?d.set("select",g,{format:h,fromValue:!!e}):d.set("select",null).set("highlight",d.item.now),
// The keycode to movement mapping.
d.key={40:7,// Down
38:-7,// Up
39:function(){return i()?-1:1},// Right
37:function(){return i()?1:-1},// Left
go:function(a){var b=d.item.highlight,c=new Date(b.year,b.month,b.date+a),e=d.create([c.getFullYear(),c.getMonth(),c.getDate()]);d.set("select",e).set("highlight",e,{interval:a}),this.render()}},
// Bind some picker events.
a.on("render",function(){b.element(a.$root[0].querySelectorAll("."+c.klass.selectMonth)).on("change",function(){var d=this.value;d&&(a.set("highlight",[a.get("view").year,d,a.get("highlight").date]),b.element(a.$root[0].querySelectorAll("."+c.klass.selectMonth)).triggerHandler("focus"))}),b.element(a.$root[0].querySelectorAll("."+c.klass.selectYear)).on("change",function(){var d=this.value;d&&(a.set("highlight",[d,a.get("view").month,a.get("highlight").date]),b.element(a.$root[0].querySelectorAll("."+c.klass.selectYear)).triggerHandler("focus"))})}).on("open",function(){b.element(a.$root[0].querySelectorAll("button, select")).attr("disabled",!1)}).on("close",function(){b.element(a.$root[0].querySelectorAll("button, select")).attr("disabled",!0)})}/**
 * Globals and constants
 */
var d=7,e=6,f=a._;//DatePicker
/**
 * Set a datepicker item object.
 */
c.prototype.set=function(a,b,c){var d=this,e=d.item;
// If the value is `null` just set it immediately.
// If the value is `null` just set it immediately.
// Otherwise go through the queue of methods, and invoke the functions.
// Update this as the time unit, and set the final value as this item.
// * In the case of `enable`, keep the queue but set `disable` instead.
//   And in the case of `flip`, keep the queue but set `enable` instead.
// Check if we need to cascade through more updates.
return null===b?(e[a]=b,d):(e["enable"==a?"disable":"flip"==a?"enable":a]=d.queue[a].split(" ").map(function(e){return b=d[e](a,b,c)}).pop(),"select"==a?d.set("highlight",e.select,c):"highlight"==a?d.set("view",e.highlight,c):a.match(/^(flip|min|max|disable|enable)$/)&&(e.select&&d.disabled(e.select)&&d.set("select",e.select,c),e.highlight&&d.disabled(e.highlight)&&d.set("highlight",e.highlight,c)),d)},//DatePicker.prototype.set
/**
 * Get a datepicker item object.
 */
c.prototype.get=function(a){return this.item[a]},//DatePicker.prototype.get
/**
 * Create a picker date object.
 */
c.prototype.create=function(a,c,d){var e,g=this;
// Return the compiled object.
// If there’s no value, use the type as the value.
// If it’s infinity, update the value.
return c=void 0===c?a:c,c==-(1/0)||c==1/0?e=c:b.isObject(c)&&f.isInteger(c.pick)?c=c.obj:b.isArray(c)?(c=new Date(c[0],c[1],c[2]),c=f.isDate(c)?c:g.create().obj):c=f.isInteger(c)||f.isDate(c)?g.normalize(new Date(c),d):g.now(a,c,d),{year:e||c.getFullYear(),month:e||c.getMonth(),date:e||c.getDate(),day:e||c.getDay(),obj:e||c,pick:e||c.getTime()}},//DatePicker.prototype.create
/**
 * Create a range limit object using an array, date object,
 * literal “true”, or integer relative to another time.
 */
c.prototype.createRange=function(a,c){var d=this,e=function(a){return a===!0||b.isArray(a)||f.isDate(a)?d.create(a):a};
// Create objects if possible.
// Create relative dates.
return f.isInteger(a)||(a=e(a)),f.isInteger(c)||(c=e(c)),f.isInteger(a)&&b.isObject(c)?a=[c.year,c.month,c.date+a]:f.isInteger(c)&&b.isObject(a)&&(c=[a.year,a.month,a.date+c]),{from:e(a),to:e(c)}},//DatePicker.prototype.createRange
/**
 * Check if a date unit falls within a date range object.
 */
c.prototype.withinRange=function(a,b){return a=this.createRange(a.from,a.to),b.pick>=a.from.pick&&b.pick<=a.to.pick},/**
 * Check if two date range objects overlap.
 */
c.prototype.overlapRanges=function(a,b){var c=this;
// Convert the ranges into comparable dates.
return a=c.createRange(a.from,a.to),b=c.createRange(b.from,b.to),c.withinRange(a,b.from)||c.withinRange(a,b.to)||c.withinRange(b,a.from)||c.withinRange(b,a.to)},/**
 * Get the date today.
 */
c.prototype.now=function(a,b,c){return b=new Date,c&&c.rel&&b.setDate(b.getDate()+c.rel),this.normalize(b,c)},/**
 * Navigate to next/prev month.
 */
c.prototype.navigate=function(a,c,d){var e,f,g,h,i=b.isArray(c),j=b.isObject(c),k=this.item.view;/*,
        safety = 100*/
if(i||j){
// If the month we’re going to doesn’t have enough days,
// keep decreasing the date until we reach the month’s last date.
for(j?(f=c.year,g=c.month,h=c.date):(f=+c[0],g=+c[1],h=+c[2]),
// If we’re navigating months but the view is in a different
// month, navigate to the view’s year and month.
d&&d.nav&&k&&k.month!==g&&(f=k.year,g=k.month),
// Figure out the expected target year and month.
e=new Date(f,g+(d&&d.nav?d.nav:0),1),f=e.getFullYear(),g=e.getMonth();new Date(f,g,h).getMonth()!==g;)h-=1;c=[f,g,h]}return c},//DatePicker.prototype.navigate
/**
 * Normalize a date by setting the hours to midnight.
 */
c.prototype.normalize=function(a){return a.setHours(0,0,0,0),a},/**
 * Measure the range of dates.
 */
c.prototype.measure=function(a,b){var c=this;
// If it's anything false-y, remove the limits.
return b?f.isInteger(b)&&(b=c.now(a,b,{rel:b})):b="min"==a?-(1/0):1/0,b},///DatePicker.prototype.measure
/**
 * Create a viewset object based on navigation.
 */
c.prototype.viewset=function(a,b){return this.create([b.year,b.month,1])},/**
 * Validate a date as enabled and shift if needed.
 */
c.prototype.validate=function(a,c,d){var
// Check if we have any enabled dates after/before now.
e,g,
// Check if we’ve reached the limit during shifting.
h,i,j=this,
// Keep a reference to the original date.
k=c,
// Make sure we have an interval.
l=d&&d.interval?d.interval:1,
// Check if the calendar enabled dates are inverted.
m=-1===j.item.enable,
// The min & max limits.
n=j.item.min,o=j.item.max,
// Check if the calendar is inverted and at least one weekday is enabled.
p=m&&j.item.disable.filter(function(a){
// If there’s a date, check where it is relative to the target.
if(b.isArray(a)){var d=j.create(a).pick;d<c.pick?e=!0:d>c.pick&&(g=!0)}
// Return only integers for enabled weekdays.
return f.isInteger(a)}).length;/*,

        safety = 100*/
// Cases to validate for:
// [1] Not inverted and date disabled.
// [2] Inverted and some dates enabled.
// [3] Not inverted and out of range.
//
// Cases to **not** validate for:
// • Navigating months.
// • Not inverted and date enabled.
// • Inverted and all dates disabled.
// • ..and anything else.
if((!d||!d.nav)&&(!m&&j.disabled(c)||m&&j.disabled(c)&&(p||e||g)||!m&&(c.pick<=n.pick||c.pick>=o.pick)))
// Keep looping until we reach an enabled date.
for(
// When inverted, flip the direction if there aren’t any enabled weekdays
// and there are no enabled dates in the direction of the interval.
m&&!p&&(!g&&l>0||!e&&0>l)&&(l*=-1);/*safety &&*/j.disabled(c)&&(/*safety -= 1
            if ( !safety ) {
                throw 'Fell into an infinite loop while validating ' + dateObject.obj + '.'
            }*/
// If we’ve looped into the next/prev month with a large interval, return to the original date and flatten the interval.
Math.abs(l)>1&&(c.month<k.month||c.month>k.month)&&(c=k,l=l>0?1:-1),
// If we’ve reached the min/max limit, reverse the direction, flatten the interval and set it to the limit.
c.pick<=n.pick?(h=!0,l=1,c=j.create([n.year,n.month,n.date-1])):c.pick>=o.pick&&(i=!0,l=-1,c=j.create([o.year,o.month,o.date+1])),!h||!i);)
// Finally, create the shifted date using the interval and keep looping.
c=j.create([c.year,c.month,c.date+l]);//endif
// Return the date object settled on.
return c},//DatePicker.prototype.validate
/**
 * Check if a date is disabled.
 */
c.prototype.disabled=function(a){var c=this,
// Filter through the disabled dates to check if this is one.
d=c.item.disable.filter(function(d){
// If the date is a number, match the weekday with 0index and `firstDay` check.
// If the date is a number, match the weekday with 0index and `firstDay` check.
// If it’s an array or a native JS date, create and match the exact date.
// If it’s an object, match a date within the “from” and “to” range.
return f.isInteger(d)?a.day===(c.settings.firstDay?d:d-1)%7:b.isArray(d)||f.isDate(d)?a.pick===c.create(d).pick:b.isObject(d)?c.withinRange(d,a):void 0});
// Check the calendar “enabled” flag and respectively flip the
// disabled state. Then also check if it’s beyond the min/max limits.
// If this date matches a disabled date, confirm it’s not inverted.
return d=d.length&&!d.filter(function(a){return b.isArray(a)&&"inverted"==a[3]||b.isObject(a)&&a.inverted}).length,-1===c.item.enable?!d:d||a.pick<c.item.min.pick||a.pick>c.item.max.pick},//DatePicker.prototype.disabled
/**
 * Parse a string into a usable type.
 */
c.prototype.parse=function(a,c,d){var e,g=this,h={};
// We need a `.format` to parse the value with.
// Calculate the month index to adjust with.
// Convert the format into an array and then map through it.
return!c||f.isInteger(c)||b.isArray(c)||f.isDate(c)||b.isObject(c)&&f.isInteger(c.pick)?c:(d&&d.format||(d=d||{},d.format=g.settings.format),e="string"!=typeof c||d.fromValue?0:1,g.formats.toArray(d.format).map(function(a){var b=g.formats[a],d=b?f.trigger(b,g,[c,h]):a.replace(/^!/,"").length;b&&(h[a]=c.substr(0,d)),c=c.substr(d)}),[h.yyyy||h.yy,+(h.mm||h.m)-e,h.dd||h.d])},//DatePicker.prototype.parse
/**
 * Various formats to display the object in.
 */
c.prototype.formats=function(){
// Return the length of the first word in a collection.
function a(a,b,c){
// Grab the first word from the string.
var d=a.match(/\w+/)[0];
// Return the length of the word.
// If there's no month index, add it to the date object
return c.mm||c.m||(c.m=b.indexOf(d)),d.length}
// Get the length of the first word in a string.
function b(a){return a.match(/\w+/)[0].length}return{d:function(a,b){
// If there's string, then get the digits length.
// Otherwise return the selected date.
return a?f.digits(a):b.date},dd:function(a,b){
// If there's a string, then the length is always 2.
// Otherwise return the selected date with a leading zero.
return a?2:f.lead(b.date)},ddd:function(a,c){
// If there's a string, then get the length of the first word.
// Otherwise return the short selected weekday.
return a?b(a):this.settings.weekdaysShort[c.day]},dddd:function(a,c){
// If there's a string, then get the length of the first word.
// Otherwise return the full selected weekday.
return a?b(a):this.settings.weekdaysFull[c.day]},m:function(a,b){
// If there's a string, then get the length of the digits
// Otherwise return the selected month with 0index compensation.
return a?f.digits(a):b.month+1},mm:function(a,b){
// If there's a string, then the length is always 2.
// Otherwise return the selected month with 0index and leading zero.
return a?2:f.lead(b.month+1)},mmm:function(b,c){var d=this.settings.monthsShort;
// If there's a string, get length of the relevant month from the short
// months collection. Otherwise return the selected month from that collection.
return b?a(b,d,c):d[c.month]},mmmm:function(b,c){var d=this.settings.monthsFull;
// If there's a string, get length of the relevant month from the full
// months collection. Otherwise return the selected month from that collection.
return b?a(b,d,c):d[c.month]},yy:function(a,b){
// If there's a string, then the length is always 2.
// Otherwise return the selected year by slicing out the first 2 digits.
return a?2:(""+b.year).slice(2)},yyyy:function(a,b){
// If there's a string, then the length is always 4.
// Otherwise return the selected year.
return a?4:b.year},
// Create an array by splitting the formatting string passed.
toArray:function(a){return a.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},
// Format an object into a string using the formatting options.
toString:function(a,b){var c=this;return c.formats.toArray(a).map(function(a){return f.trigger(c.formats[a],c,[0,b])||a.replace(/^!/,"")}).join("")}}}(),//DatePicker.prototype.formats
/**
 * Check if two date units are the exact.
 */
c.prototype.isDateExact=function(a,c){var d=this;
// When we’re working with weekdays, do a direct comparison.
// When we’re working with weekdays, do a direct comparison.
// When we’re working with date representations, compare the “pick” value.
// When we’re working with range objects, compare the “from” and “to”.
return f.isInteger(a)&&f.isInteger(c)||"boolean"==typeof a&&"boolean"==typeof c?a===c:(f.isDate(a)||b.isArray(a))&&(f.isDate(c)||b.isArray(c))?d.create(a).pick===d.create(c).pick:b.isObject(a)&&b.isObject(c)?d.isDateExact(a.from,c.from)&&d.isDateExact(a.to,c.to):!1},/**
 * Check if two date units overlap.
 */
c.prototype.isDateOverlap=function(a,c){var d=this;
// When we’re working with a weekday index, compare the days.
// When we’re working with a weekday index, compare the days.
// When we’re working with range objects, check if the ranges overlap.
return f.isInteger(a)&&(f.isDate(c)||b.isArray(c))?a===d.create(c).day+1:f.isInteger(c)&&(f.isDate(a)||b.isArray(a))?c===d.create(a).day+1:b.isObject(a)&&b.isObject(c)?d.overlapRanges(a,c):!1},/**
 * Flip the “enabled” state.
 */
c.prototype.flipEnable=function(a){var b=this.item;b.enable=a||(-1==b.enable?1:-1)},/**
 * Mark a collection of dates as “disabled”.
 */
c.prototype.deactivate=function(a,c){var d=this,e=d.item.disable.slice(0);
// Return the updated collection.
// If we’re flipping, that’s all we need to do.
return"flip"==c?d.flipEnable():c===!1?(d.flipEnable(1),e=[]):c===!0?(d.flipEnable(-1),e=[]):c.map(function(a){
// When we have disabled items, check for matches.
// If something is matched, immediately break out.
for(var c,g=0;g<e.length;g+=1)if(d.isDateExact(a,e[g])){c=!0;break}
// If nothing was found, add the validated unit to the collection.
c||(f.isInteger(a)||f.isDate(a)||b.isArray(a)||b.isObject(a)&&a.from&&a.to)&&e.push(a)}),e},//DatePicker.prototype.deactivate
/**
 * Mark a collection of dates as “enabled”.
 */
c.prototype.activate=function(a,c){var d=this,e=d.item.disable,g=e.length;
// Return the updated collection.
// If we’re flipping, that’s all we need to do.
return"flip"==c?d.flipEnable():c===!0?(d.flipEnable(1),e=[]):c===!1?(d.flipEnable(-1),e=[]):c.map(function(a){var c,h,i,j;
// Go through the disabled items and try to find a match.
for(i=0;g>i;i+=1){
// When an exact match is found, remove it from the collection.
if(h=e[i],d.isDateExact(h,a)){c=e[i]=null,j=!0;break}if(d.isDateOverlap(h,a)){b.isObject(a)?(a.inverted=!0,c=a):b.isArray(a)?(c=a,c[3]||c.push("inverted")):f.isDate(a)&&(c=[a.getFullYear(),a.getMonth(),a.getDate(),"inverted"]);break}}
// If a match was found, remove a previous duplicate entry.
if(c)for(i=0;g>i;i+=1)if(d.isDateExact(e[i],a)){e[i]=null;break}
// In the event that we’re dealing with an exact range of dates,
// make sure there are no “inverted” dates because of it.
if(j)for(i=0;g>i;i+=1)if(d.isDateOverlap(e[i],a)){e[i]=null;break}
// If something is still matched, add it into the collection.
c&&e.push(c)}),e.filter(function(a){return null!=a})},//DatePicker.prototype.activate
/**
 * Create a string for the nodes in the picker.
 */
c.prototype.nodes=function(a){var b=this,c=b.settings,g=b.item,h=g.now,i=g.select,j=g.highlight,k=g.view,l=g.disable,m=g.min,n=g.max,
// Create the calendar table head using a copy of weekday labels collection.
// * We do a copy so we don't mutate the original array.
o=function(a){
// Create and return the table head group.
// If the first day should be Monday, move Sunday to the end.
return c.firstDay&&a.push(a.shift()),f.node("thead",f.node("tr",f.group({min:0,max:d-1,i:1,node:"th",item:function(b){return[a[b],c.klass.weekdays]}})))}((c.showWeekdaysFull?c.weekdaysFull:c.weekdaysShort).slice(0)),//tableHead
// Create the nav for next/prev month.
p=function(a){
// Otherwise, return the created month tag.
// If the focused month is outside the range, disabled the button.
return f.node("div"," ",c.klass["nav"+(a?"Next":"Prev")]+(a&&k.year>=n.year&&k.month>=n.month||!a&&k.year<=m.year&&k.month<=m.month?" "+c.klass.navDisabled:""),"data-nav="+(a||-1))},//createMonthNav
// Create the month label.
q=function(b){
// If there are months to select, add a dropdown menu.
// If there are months to select, add a dropdown menu.
return c.selectMonths?f.node("select",f.group({min:0,max:11,i:1,node:"option",item:function(a){return[
// The looped month and no classes.
b[a],0,
// Set the value and selected index.
"value="+a+(k.month==a?" selected":"")+(k.year==m.year&&a<m.month||k.year==n.year&&a>n.month?" disabled":"")]}}),c.klass.selectMonth,a?"":"disabled"):f.node("div",b[k.month],c.klass.month)},//createMonthLabel
// Create the year label.
r=function(){var b=k.year,
// If years selector is set to a literal "true", set it to 5. Otherwise
// divide in half to get half before and half after focused year.
d=c.selectYears===!0?5:~~(c.selectYears/2);
// If there are years to select, add a dropdown menu.
if(d){var e=m.year,g=n.year,h=b-d,i=b+d;
// If the max year is less than the highest year, decrease the lowest year
// by the lower of the two: available and needed years. Then set the
// highest year to the max year.
if(
// If the min year is greater than the lowest year, increase the highest year
// by the difference and set the lowest year to the min year.
e>h&&(i+=e-h,h=e),i>g){var j=h-e,l=i-g;h-=j>l?l:j,i=g}return f.node("select",f.group({min:h,max:i,i:1,node:"option",item:function(a){return[
// The looped year and no classes.
a,0,
// Set the value and selected index.
"value="+a+(b==a?" selected":"")]}}),c.klass.selectYear,a?"":"disabled")}
// Otherwise just return the year focused
return f.node("div",b,c.klass.year)};//createYearLabel
// Create and return the entire calendar.
// * For Firefox forms to submit, make sure to set the buttons’ `type` attributes as “button”.
return f.node("div",p()+p(1)+q(c.showMonthsShort?c.monthsShort:c.monthsFull)+r(),c.klass.header)+f.node("table",o+f.node("tbody",f.group({min:0,max:e-1,i:1,node:"tr",item:function(a){
// If Monday is the first day and the month starts on Sunday, shift the date back a week.
var e=c.firstDay&&0===b.create([k.year,k.month,1]).day?-7:0;return[f.group({min:d*a-k.day+e+1,// Add 1 for weekday 0index
max:function(){return this.min+d-1},i:1,node:"td",item:function(a){
// Convert the time date from a relative date to a target date.
a=b.create([k.year,k.month,a+(c.firstDay?1:0)]);var d=i&&i.pick==a.pick,e=j&&j.pick==a.pick,g=l&&b.disabled(a)||a.pick<m.pick||a.pick>n.pick;return[f.node("div",a.date,function(b){
// Add the `infocus` or `outfocus` classes based on month in view.
// Add the `today` class if needed.
// Add the `selected` class if something's selected and the time matches.
// Add the `highlighted` class if something's highlighted and the time matches.
// Add the `disabled` class if something's disabled and the object matches.
return b.push(k.month==a.month?c.klass.infocus:c.klass.outfocus),h.pick==a.pick&&b.push(c.klass.now),d&&b.push(c.klass.selected),e&&b.push(c.klass.highlighted),g&&b.push(c.klass.disabled),b.join(" ")}([c.klass.day]),"data-pick="+a.pick+" "+f.ariaAttr({role:"button",controls:b.$node[0].id,checked:d&&b.$node[0].value===f.trigger(b.formats.toString,b,[c.format,a])?!0:null,activedescendant:e?!0:null,disabled:g?!0:null}))]}})]}})),c.klass.table)+f.node("div",f.node("button",c.today,c.klass.buttonToday,"type=button data-pick="+h.pick+(a?"":" disabled"))+f.node("button",c.clear,c.klass.buttonClear,"type=button data-clear=1"+(a?"":" disabled"))+f.node("button",c.close,c.klass.buttonClose,"type=button data-close=true "+(a?"":" disabled")),c.klass.footer)},//DatePicker.prototype.nodes
/**
 * The date picker defaults.
 */
c.defaults=function(a){return{
// Months and weekdays
monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],weekdaysShort:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
// Today and clear
today:"Today",clear:"Clear",close:"Close",
// The format to show on the `input` element
format:"yyyy-mm-dd",
// Classes
klass:{table:a+"table",header:a+"header",navPrev:a+"nav--prev",navNext:a+"nav--next",navDisabled:a+"nav--disabled",month:a+"month",year:a+"year",selectMonth:a+"select--month",selectYear:a+"select--year",weekdays:a+"weekday",day:a+"day",disabled:a+"day--disabled",selected:a+"day--selected",highlighted:a+"day--highlighted",now:a+"day--today",infocus:a+"day--infocus",outfocus:a+"day--outfocus",footer:a+"footer",buttonClear:a+"button--clear",buttonClose:a+"button--close",buttonToday:a+"button--today"}}}(a.klasses().picker+"__"),/**
 * Extend the picker to add the date picker.
 */
a.extend("pickadate",c)});
/*!
 * Time picker for pickadate.js v3.4.0
 * http://amsul.github.io/pickadate.js/time.htm
 */
!function(a){
// Register as an anonymous module.
"function"==typeof define&&define.amd?define(["picker","angular"],a):a(Picker,angular)}(function(a,b){/**
 * The time picker constructor
 */
function c(a,b){var c=this,d=a.$node[0].value,e=a.$node.data("value"),f=e||d,g=e?b.formatSubmit:b.format;c.settings=b,c.$node=a.$node,
// The queue of methods that will be used to build item objects.
c.queue={interval:"i",min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse create validate",view:"parse create validate",disable:"deactivate",enable:"activate"},
// The component's item object.
c.item={},c.item.interval=b.interval||30,c.item.disable=(b.disable||[]).slice(0),c.item.enable=-function(a){return a[0]===!0?a.shift():-1}(c.item.disable),c.set("min",b.min).set("max",b.max).set("now"),
// When there’s a value, set the `select`, which in turn
// also sets the `highlight` and `view`.
f?c.set("select",f,{format:g,fromValue:!!d}):c.set("select",null).set("highlight",c.item.now),
// The keycode to movement mapping.
c.key={40:1,// Down
38:-1,// Up
39:1,// Right
37:-1,// Left
go:function(a){c.set("highlight",c.item.highlight.pick+a*c.item.interval,{interval:a*c.item.interval}),this.render()}},
// Bind some picker events.
a.on("render",function(){var c=a.$root.children(),d=c.find("."+b.klass.viewset);d.length&&(c[0].scrollTop=~~d.position().top-2*d[0].clientHeight)}).on("open",function(){a.$root.find("button").attr("disable",!1)}).on("close",function(){a.$root.find("button").attr("disable",!0)})}/**
 * Globals and constants
 */
var d=24,e=60,f=12,g=d*e,h=a._;//TimePicker
/**
 * Set a timepicker item object.
 */
c.prototype.set=function(a,b,c){var d=this,e=d.item;
// If the value is `null` just set it immediately.
// If the value is `null` just set it immediately.
// Otherwise go through the queue of methods, and invoke the functions.
// Update this as the time unit, and set the final value as this item.
// * In the case of `enable`, keep the queue but set `disable` instead.
//   And in the case of `flip`, keep the queue but set `enable` instead.
// Check if we need to cascade through more updates.
return null===b?(e[a]=b,d):(e["enable"==a?"disable":"flip"==a?"enable":a]=d.queue[a].split(" ").map(function(e){return b=d[e](a,b,c)}).pop(),"select"==a?d.set("highlight",e.select,c):"highlight"==a?d.set("view",e.highlight,c):"interval"==a?d.set("min",e.min,c).set("max",e.max,c):a.match(/^(flip|min|max|disable|enable)$/)&&("min"==a&&d.set("max",e.max,c),e.select&&d.disabled(e.select)&&d.set("select",e.select,c),e.highlight&&d.disabled(e.highlight)&&d.set("highlight",e.highlight,c)),d)},//TimePicker.prototype.set
/**
 * Get a timepicker item object.
 */
c.prototype.get=function(a){return this.item[a]},//TimePicker.prototype.get
/**
 * Create a picker time object.
 */
c.prototype.create=function(a,c,f){var i=this;
// Return the compiled object.
// If there’s no value, use the type as the value.
// If it’s a date object, convert it into an array.
// If it’s an object, use the “pick” value.
// If we’re setting the max, make sure it’s greater than the min.
// If the value doesn’t fall directly on the interval,
// add one interval to indicate it as “passed”.
// Normalize it into a “reachable” interval.
return c=void 0===c?a:c,h.isDate(c)&&(c=[c.getHours(),c.getMinutes()]),b.isObject(c)&&h.isInteger(c.pick)?c=c.pick:b.isArray(c)?c=+c[0]*e+ +c[1]:h.isInteger(c)||(c=i.now(a,c,f)),"max"==a&&c<i.item.min.pick&&(c+=g),"min"!=a&&"max"!=a&&(c-i.item.min.pick)%i.item.interval!==0&&(c+=i.item.interval),c=i.normalize(a,c,f),{hour:~~(d+c/e)%d,mins:(e+c%e)%e,time:(g+c)%g,pick:c}},//TimePicker.prototype.create
/**
 * Create a range limit object using an array, date object,
 * literal “true”, or integer relative to another time.
 */
c.prototype.createRange=function(a,c){var d=this,e=function(a){return a===!0||b.isArray(a)||h.isDate(a)?d.create(a):a};
// Create objects if possible.
// Create relative times.
return h.isInteger(a)||(a=e(a)),h.isInteger(c)||(c=e(c)),h.isInteger(a)&&b.isObject(c)?a=[c.hour,c.mins+a*d.settings.interval]:h.isInteger(c)&&b.isObject(a)&&(c=[a.hour,a.mins+c*d.settings.interval]),{from:e(a),to:e(c)}},//TimePicker.prototype.createRange
/**
 * Check if a time unit falls within a time range object.
 */
c.prototype.withinRange=function(a,b){return a=this.createRange(a.from,a.to),b.pick>=a.from.pick&&b.pick<=a.to.pick},/**
 * Check if two time range objects overlap.
 */
c.prototype.overlapRanges=function(a,b){var c=this;
// Convert the ranges into comparable times.
return a=c.createRange(a.from,a.to),b=c.createRange(b.from,b.to),c.withinRange(a,b.from)||c.withinRange(a,b.to)||c.withinRange(b,a.from)||c.withinRange(b,a.to)},/**
 * Get the time relative to now.
 */
c.prototype.now=function(a,b){var c,d=this.item.interval,f=new Date,g=f.getHours()*e+f.getMinutes(),i=h.isInteger(b);
// Return the final calculation.
// Make sure “now” falls within the interval range.
// Check if the difference is less than the interval itself.
// Add an interval because the time has “passed”.
// If the value is a number, adjust by that many intervals.
return g-=g%d,c=0>b&&-d>=d*b+g,g+="min"==a&&c?0:d,i&&(g+=d*(c&&"max"!=a?b+1:b)),g},//TimePicker.prototype.now
/**
 * Normalize minutes to be “reachable” based on the min and interval.
 */
c.prototype.normalize=function(a,b){var c=this.item.interval,d=this.item.min&&this.item.min.pick||0;
// Return the adjusted value.
// If setting min time, don’t shift anything.
// Otherwise get the value and min difference and then
// normalize the difference with the interval.
return b-="min"==a?0:(b-d)%c},//TimePicker.prototype.normalize
/**
 * Measure the range of minutes.
 */
c.prototype.measure=function(a,c,f){var g=this;
// If it’s anything false-y, set it to the default.
return c?c===!0||h.isInteger(c)?c=g.now(a,c,f):b.isObject(c)&&h.isInteger(c.pick)&&(c=g.normalize(a,c.pick,f)):c="min"==a?[0,0]:[d-1,e-1],c},///TimePicker.prototype.measure
/**
 * Validate an object as enabled.
 */
c.prototype.validate=function(a,b,c){var d=this,e=c&&c.interval?c.interval:d.item.interval;
// Return the final object.
// Check if the object is disabled.
// Shift with the interval until we reach an enabled time.
// Scope the object into range.
// Do a second check to see if we landed on a disabled min/max.
// In that case, shift using the opposite interval as before.
return d.disabled(b)&&(b=d.shift(b,e)),b=d.scope(b),d.disabled(b)&&(b=d.shift(b,-1*e)),b},//TimePicker.prototype.validate
/**
 * Check if an object is disabled.
 */
c.prototype.disabled=function(a){var c=this,
// Filter through the disabled times to check if this is one.
d=c.item.disable.filter(function(d){
// If the time is a number, match the hours.
// If the time is a number, match the hours.
// If it’s an array, create the object and match the times.
// If it’s an object, match a time within the “from” and “to” range.
return h.isInteger(d)?a.hour==d:b.isArray(d)||h.isDate(d)?a.pick==c.create(d).pick:b.isObject(d)?c.withinRange(d,a):void 0});
// If the clock is "enabled" flag is flipped, flip the condition.
// If this time matches a disabled time, confirm it’s not inverted.
return d=d.length&&!d.filter(function(a){return b.isArray(a)&&"inverted"==a[2]||b.isObject(a)&&a.inverted}).length,-1===c.item.enable?!d:d||a.pick<c.item.min.pick||a.pick>c.item.max.pick},//TimePicker.prototype.disabled
/**
 * Shift an object by an interval until we reach an enabled object.
 */
c.prototype.shift=function(a,b){var c=this,d=c.item.min.pick,e=c.item.max.pick;
// Keep looping as long as the time is disabled.
for(/*,
        safety = 1000*/
b=b||c.item.interval;/*safety &&*/c.disabled(a)&&(a=c.create(a.pick+=b),!(a.pick<=d||a.pick>=e)););
// Return the final object.
return a},//TimePicker.prototype.shift
/**
 * Scope an object to be within range of min and max.
 */
c.prototype.scope=function(a){var b=this.item.min.pick,c=this.item.max.pick;return this.create(a.pick>c?c:a.pick<b?b:a)},//TimePicker.prototype.scope
/**
 * Parse a string into a usable type.
 */
c.prototype.parse=function(a,c,d){var f,g,i,j,k,l=this,m={};if(!c||h.isInteger(c)||b.isArray(c)||h.isDate(c)||b.isObject(c)&&h.isInteger(c.pick))return c;
// We need a `.format` to parse the value with.
d&&d.format||(d=d||{},d.format=l.settings.format),
// Convert the format into an array and then map through it.
l.formats.toArray(d.format).map(function(a){var b,
// Grab the formatting label.
d=l.formats[a],
// The format length is from the formatting label function or the
// label length without the escaping exclamation (!) mark.
e=d?h.trigger(d,l,[c,m]):a.replace(/^!/,"").length;
// If there's a format label, split the value up to the format length.
// Then add it to the parsing object with appropriate label.
d&&(b=c.substr(0,e),m[a]=b.match(/^\d+$/)?+b:b),
// Update the time value as the substring from format length to end.
c=c.substr(e)});
// Grab the hour and minutes from the parsing object.
for(j in m)k=m[j],h.isInteger(k)?j.match(/^(h|hh)$/i)?(f=k,("h"==j||"hh"==j)&&(f%=12)):"i"==j&&(g=k):j.match(/^a$/i)&&k.match(/^p/i)&&("h"in m||"hh"in m)&&(i=!0);
// Calculate it in minutes and return.
return(i?f+12:f)*e+g},//TimePicker.prototype.parse
/**
 * Various formats to display the object in.
 */
c.prototype.formats={h:function(a,b){
// If there's string, then get the digits length.
// Otherwise return the selected hour in "standard" format.
return a?h.digits(a):b.hour%f||f},hh:function(a,b){
// If there's a string, then the length is always 2.
// Otherwise return the selected hour in "standard" format with a leading zero.
return a?2:h.lead(b.hour%f||f)},H:function(a,b){
// If there's string, then get the digits length.
// Otherwise return the selected hour in "military" format as a string.
return a?h.digits(a):""+b.hour%24},HH:function(a,b){
// If there's string, then get the digits length.
// Otherwise return the selected hour in "military" format with a leading zero.
return a?h.digits(a):h.lead(b.hour%24)},i:function(a,b){
// If there's a string, then the length is always 2.
// Otherwise return the selected minutes.
return a?2:h.lead(b.mins)},a:function(a,b){
// If there's a string, then the length is always 4.
// Otherwise check if it's more than "noon" and return either am/pm.
return a?4:g/2>b.time%g?"a.m.":"p.m."},A:function(a,b){
// If there's a string, then the length is always 2.
// Otherwise check if it's more than "noon" and return either am/pm.
return a?2:g/2>b.time%g?"AM":"PM"},
// Create an array by splitting the formatting string passed.
toArray:function(a){return a.split(/(h{1,2}|H{1,2}|i|a|A|!.)/g)},
// Format an object into a string using the formatting options.
toString:function(a,b){var c=this;return c.formats.toArray(a).map(function(a){return h.trigger(c.formats[a],c,[0,b])||a.replace(/^!/,"")}).join("")}},//TimePicker.prototype.formats
/**
 * Check if two time units are the exact.
 */
c.prototype.isTimeExact=function(a,c){var d=this;
// When we’re working with minutes, do a direct comparison.
// When we’re working with minutes, do a direct comparison.
// When we’re working with time representations, compare the “pick” value.
// When we’re working with range objects, compare the “from” and “to”.
return h.isInteger(a)&&h.isInteger(c)||"boolean"==typeof a&&"boolean"==typeof c?a===c:(h.isDate(a)||b.isArray(a))&&(h.isDate(c)||b.isArray(c))?d.create(a).pick===d.create(c).pick:b.isObject(a)&&b.isObject(c)?d.isTimeExact(a.from,c.from)&&d.isTimeExact(a.to,c.to):!1},/**
 * Check if two time units overlap.
 */
c.prototype.isTimeOverlap=function(a,c){var d=this;
// When we’re working with an integer, compare the hours.
// When we’re working with an integer, compare the hours.
// When we’re working with range objects, check if the ranges overlap.
return h.isInteger(a)&&(h.isDate(c)||b.isArray(c))?a===d.create(c).hour:h.isInteger(c)&&(h.isDate(a)||b.isArray(a))?c===d.create(a).hour:b.isObject(a)&&b.isObject(c)?d.overlapRanges(a,c):!1},/**
 * Flip the “enabled” state.
 */
c.prototype.flipEnable=function(a){var b=this.item;b.enable=a||(-1==b.enable?1:-1)},/**
 * Mark a collection of times as “disabled”.
 */
c.prototype.deactivate=function(a,c){var d=this,e=d.item.disable.slice(0);
// Return the updated collection.
// If we’re flipping, that’s all we need to do.
return"flip"==c?d.flipEnable():c===!1?(d.flipEnable(1),e=[]):c===!0?(d.flipEnable(-1),e=[]):c.map(function(a){
// When we have disabled items, check for matches.
// If something is matched, immediately break out.
for(var c,f=0;f<e.length;f+=1)if(d.isTimeExact(a,e[f])){c=!0;break}
// If nothing was found, add the validated unit to the collection.
c||(h.isInteger(a)||h.isDate(a)||b.isArray(a)||b.isObject(a)&&a.from&&a.to)&&e.push(a)}),e},//TimePicker.prototype.deactivate
/**
 * Mark a collection of times as “enabled”.
 */
c.prototype.activate=function(a,c){var d=this,e=d.item.disable,f=e.length;
// Return the updated collection.
// If we’re flipping, that’s all we need to do.
return"flip"==c?d.flipEnable():c===!0?(d.flipEnable(1),e=[]):c===!1?(d.flipEnable(-1),e=[]):c.map(function(a){var c,g,i,j;
// Go through the disabled items and try to find a match.
for(i=0;f>i;i+=1){
// When an exact match is found, remove it from the collection.
if(g=e[i],d.isTimeExact(g,a)){c=e[i]=null,j=!0;break}if(d.isTimeOverlap(g,a)){b.isObject(a)?(a.inverted=!0,c=a):b.isArray(a)?(c=a,c[2]||c.push("inverted")):h.isDate(a)&&(c=[a.getFullYear(),a.getMonth(),a.getDate(),"inverted"]);break}}
// If a match was found, remove a previous duplicate entry.
if(c)for(i=0;f>i;i+=1)if(d.isTimeExact(e[i],a)){e[i]=null;break}
// In the event that we’re dealing with an overlap of range times,
// make sure there are no “inverted” times because of it.
if(j)for(i=0;f>i;i+=1)if(d.isTimeOverlap(e[i],a)){e[i]=null;break}
// If something is still matched, add it into the collection.
c&&e.push(c)}),e.filter(function(a){return null!=a})},//TimePicker.prototype.activate
/**
 * The division to use for the range intervals.
 */
c.prototype.i=function(a,b){return h.isInteger(b)&&b>0?b:this.item.interval},/**
 * Create a string for the nodes in the picker.
 */
c.prototype.nodes=function(a){var b=this,c=b.settings,d=b.item.select,e=b.item.highlight,f=b.item.view,g=b.item.disable;
// * For Firefox forms to submit, make sure to set the button’s `type` attribute as “button”.
return h.node("ul",h.group({min:b.item.min.pick,max:b.item.max.pick,i:b.item.interval,node:"li",item:function(a){a=b.create(a);var i=a.pick,j=d&&d.pick==i,k=e&&e.pick==i,l=g&&b.disabled(a);return[h.trigger(b.formats.toString,b,[h.trigger(c.formatLabel,b,[a])||c.format,a]),function(a){return j&&a.push(c.klass.selected),k&&a.push(c.klass.highlighted),f&&f.pick==i&&a.push(c.klass.viewset),l&&a.push(c.klass.disabled),a.join(" ")}([c.klass.listItem]),"data-pick="+a.pick+" "+h.ariaAttr({role:"button",controls:b.$node[0].id,checked:j&&b.$node.val()===h.trigger(b.formats.toString,b,[c.format,a])?!0:null,activedescendant:k?!0:null,disabled:l?!0:null})]}})+h.node("li",h.node("button",c.clear,c.klass.buttonClear,"type=button data-clear=1"+(a?"":" disable"))),c.klass.list)},//TimePicker.prototype.nodes
/* ==========================================================================
   Extend the picker to add the component with the defaults.
   ========================================================================== */
c.defaults=function(a){return{
// Clear
clear:"Clear",
// The format to show on the `input` element
format:"h:i A",
// The interval between each time
interval:30,
// Classes
klass:{picker:a+" "+a+"--time",holder:a+"__holder",list:a+"__list",listItem:a+"__list-item",disabled:a+"__list-item--disabled",selected:a+"__list-item--selected",highlighted:a+"__list-item--highlighted",viewset:a+"__list-item--viewset",now:a+"__list-item--now",buttonClear:a+"__button--clear"}}}(a.klasses().picker),/**
 * Extend the picker to add the time picker.
 */
a.extend("pickatime",c)});
/*jshint
   asi: true,
   unused: true,
   boss: true,
   loopfunc: true,
   eqnull: true
 */
/*!
 * Legacy browser support
 */
// Map array support
[].map||(Array.prototype.map=function(a,b){for(var c=this,d=c.length,e=new Array(d),f=0;d>f;f++)f in c&&(e[f]=a.call(b,c[f],f,c));return e}),
// Filter array support
[].filter||(Array.prototype.filter=function(a){if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if("function"!=typeof a)throw new TypeError;for(var d=[],e=arguments[1],f=0;c>f;f++)if(f in b){var g=b[f];a.call(e,g,f,b)&&d.push(g)}return d}),
// Index of array support
[].indexOf||(Array.prototype.indexOf=function(a){if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=0;if(arguments.length>1&&(d=Number(arguments[1]),d!=d?d=0:0!==d&&d!=1/0&&d!=-(1/0)&&(d=(d>0||-1)*Math.floor(Math.abs(d)))),d>=c)return-1;for(var e=d>=0?d:Math.max(c-Math.abs(d),0);c>e;e++)if(e in b&&b[e]===a)return e;return-1});/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * http://blog.stevenlevithan.com/archives/cross-browser-split
 */
var nativeSplit=String.prototype.split,compliantExecNpcg=void 0===/()??/.exec("")[1];String.prototype.split=function(a,b){var c=this;if("[object RegExp]"!==Object.prototype.toString.call(a))return nativeSplit.call(c,a,b);var d,e,f,g,h=[],i=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.extended?"x":"")+(a.sticky?"y":""),j=0;for(a=new RegExp(a.source,i+"g"),c+="",compliantExecNpcg||(d=new RegExp("^"+a.source+"$(?!\\s)",i)),b=void 0===b?-1>>>0:b>>>0;(e=a.exec(c))&&(f=e.index+e[0].length,!(f>j&&(h.push(c.slice(j,e.index)),!compliantExecNpcg&&e.length>1&&e[0].replace(d,function(){for(var a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(e[a]=void 0)}),e.length>1&&e.index<c.length&&Array.prototype.push.apply(h,e.slice(1)),g=e[0].length,j=f,h.length>=b)));)a.lastIndex===e.index&&a.lastIndex++;return j===c.length?(g||!a.test(""))&&h.push(""):h.push(c.slice(j)),h.length>b?h.slice(0,b):h};
"use strict";function pickADateProvider(){var a;this.setOptions=function(b){if(a)throw new Error("Already configured.");if(!(b instanceof Object))throw new TypeError("Invalid argument: `config` must be an `Object`.");return a=angular.extend({},b)},this.$get=function(){var b=function(){function b(){}return Object.defineProperties(b.prototype,{getOptions:{value:function(){return angular.copy(a)},writable:!0,enumerable:!0,configurable:!0}}),b}();return new b},this.$get.$inject=[]}function pickATimeProvider(){var a;this.setOptions=function(b){if(a)throw new Error("Already configured.");if(!(b instanceof Object))throw new TypeError("Invalid argument: `config` must be an `Object`.");return a=angular.extend({},b)},this.$get=function(){var b=function(){function b(){}return Object.defineProperties(b.prototype,{getOptions:{value:function(){return angular.copy(a)},writable:!0,enumerable:!0,configurable:!0}}),b}();return new b},this.$get.$inject=[]}angular.module("angular-popup-datepicker",[]),angular.module("angular-popup-datepicker").provider("pickADate",pickADateProvider),angular.module("angular-popup-datepicker").provider("pickATime",pickATimeProvider),angular.module("angular-popup-datepicker",[]).directive("pickADate",["$parse",function(){return{restrict:"A",require:"?ngModel",scope:{pickADate:"=",pickADateOptions:"=",minDate:$parse(attrs.minDate),maxDate:$parse(attrs.maxDate)},link:function(a,b,c,d){function e(c){if(c){var d=c instanceof Date?c:new Date(c);b.pickadate("picker").set("select",d.getTime()),g.pickADate.assign(a,d)}else b.pickadate("picker").clear(),g.pickADate.assign(a,null)}var f=!1,g={pickADate:$parse(c.pickADate),minDate:$parse(c.minDate),maxDate:$parse(c.maxDate),pickADateOptions:$parse(c.pickADateOptions)},h=pickADate.getOptions()||{},i=g.pickADateOptions(a)||{},j=angular.extend({},h,i);j.onSet=function(c){var d=this,e=arguments,f=b.pickadate("picker").get("select");// selected date
a.$evalAsync(function(){if(c.hasOwnProperty("clear"))return void g.pickADate.assign(a,null);if(f){var b=g.pickADate(a);b||(b=new Date(0),g.pickADate.assign(a,b)),b.setFullYear(f.obj.getFullYear(),f.obj.getMonth(),f.obj.getDate())}else g.pickADate.assign(a,f);i&&i.onSet&&i.onSet.apply(d,e),h&&h.onSet&&h.onSet.apply(d,e)})},j.onOpen=function(b){d&&(f||(f=!0,a.$apply(function(){d.$setUntouched()}))),i&&i.onOpen&&i.onOpen.apply(this,arguments),h&&h.onOpen&&h.onOpen.apply(this,arguments)},j.onClose=function(){d&&a.$applyAsync(function(){d.$setTouched()}),i&&i.onClose&&i.onClose.apply(this,arguments),h&&h.onClose&&h.onClose.apply(this,arguments),b.blur()},b.pickadate(j),e(g.pickADate(a));var k=g.minDate(a),l=g.maxDate(a);b.pickadate("picker").set("min",k?k:!1),b.pickadate("picker").set("max",l?l:!1),a.$watchGroup([c.pickADate,c.minDate,c.maxDate],function(a,c){var d=a[0],f=a[1],g=a[2],h=c[0],i=c[1],j=c[2];f!==i&&b.pickadate("picker").set("min",a[1]?a[1]:!1),g!==j&&b.pickadate("picker").set("max",a[2]?a[2]:!1),d!==h&&e(a[0])},!0),d&&d.$setPristine()}}}]),angular.module("angular-popup-datepicker").directive("pickATime",["$parse","pickATime",function(a,b){return{restrict:"A",require:"?ngModel",link:function(c,d,e,f){function g(a){if(a){var b=a instanceof Date?a:new Date(a),e=60*b.getHours()+b.getMinutes();d.pickatime("picker").set("select",e),i.pickATime.assign(c,b)}else d.pickatime("picker").clear(),i.pickATime.assign(c,null)}var h=!1,i={pickATime:a(e.pickATime),pickATimeOptions:a(e.pickATimeOptions)},j=b.getOptions()||{},k=i.pickATimeOptions(c)||{},l=angular.extend({},j,k);l.onSet=function(a){var b=this,e=arguments,f=d.pickatime("picker").get("select");// selected date
c.$evalAsync(function(){if(a.hasOwnProperty("clear"))return void i.pickATime.assign(c,null);if(f){var d=i.pickATime(c);d||(d=new Date(0),i.pickATime.assign(c,d)),d.setHours(f.hour),d.setMinutes(f.mins),d.setSeconds(0),d.setMilliseconds(0)}else i.pickATime.assign(c,f);k&&k.onSet&&k.onSet.apply(b,e),j&&j.onSet&&j.onSet.apply(b,e)})},l.onOpen=function(){f&&(h||(h=!0,c.$apply(function(){f.$setUntouched()}))),k&&k.onOpen&&k.onOpen.apply(this,arguments),j&&j.onOpen&&j.onOpen.apply(this,arguments)},l.onClose=function(){f&&c.$applyAsync(function(){f.$setTouched()}),k&&k.onClose&&k.onClose.apply(this,arguments),j&&j.onClose&&j.onClose.apply(this,arguments),d.blur()},d.pickatime(l),g(i.pickATime(c)),c.$watch(e.pickATime,function(a,b){a!==b&&g(a)},!0),f&&f.$setPristine()}}}]);