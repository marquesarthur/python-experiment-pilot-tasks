(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.treadmill = function() {
	this.initialize(img.treadmill);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1855,1559);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.sku = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6
	this.instance = new lib.treadmill();
	this.instance.setTransform(0,0,17.3124,17.3122);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sku, new cjs.Rectangle(0,0,4496,3778.6), null);


(lib.on_dots_motivation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4E7ECF").s().p("AVcFFIgNgDQgHgCgFgGQgGgGgDgHIgCgKIAAgBIAAgBIAAgBIAAgBIACgKQADgIAGgGQAFgFAHgCIANgDIABAAQAOAAALAKQALALAAAPQAAAPgLAKIAAABQgLAKgOAAgASzE6QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAQiE6QgKgKAAgPQAAgPAKgLQALgKAPAAQAPAAAKAKQALALAAAPQAAAPgLAKQgKALgPAAQgPAAgLgLgAOkFEQgLgCgIgIQgLgKAAgPQAAgPALgLQAIgIALgBIAHgBIAAAAIAHABQALABAIAIQAKALAAAPQAAAPgKAKQgIAIgLACIgHABgAMBE6QgKgKAAgPQAAgPAKgLQALgKAPAAIARAEQAFACAEAEQAKALAAAPQAAAPgKAKQgEAEgFADIgRAEQgPAAgLgLgAJxE6QgLgKAAgPQAAgPALgLQAKgKAPAAIARAEQAFACAEAEQALALAAAPQAAAPgLAKQgEAEgFADIgRAEQgPAAgKgLgAHzFEQgLgCgIgIQgGgGgCgHIgCgKIAAgBIAAgBIAAgBIAAgBIACgKQACgIAGgGQAIgIALgBIAHgBIAAAAQAPAAALAKQAKALAAAPQAAAPgKAKIgBABQgLAKgOAAgAFQE6QgLgKAAgPQAAgPALgLQALgKAPAAQAPAAAKAKQALALAAAPQAAAPgLAKQgKALgPAAQgPAAgLgLgADQFEQgKgCgIgIQgLgKAAgPQAAgPALgLQAIgIAKgBIAHgBIABAAIAHABQAKABAIAIQALALAAAPQAAAPgLAKQgIAIgKACIgIABgAAuE6QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAhhE6QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAjyE6QgLgKAAgPQAAgPALgLQALgKAPAAQAPAAAKAKQALALAAAPQAAAPgLAKQgKALgPAAQgPAAgLgLgAmCE6QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAoBFEQgKgCgIgIQgLgKAAgPQAAgPALgLQAIgIAKgBIAHgBIABAAIAHABQAKABAIAIQALALAAAPQAAAPgLAKQgIAIgKACIgIABgAqKFFIgNgDQgHgCgFgGQgGgGgDgHIgCgKIAAgBIAAgBIAAgBIAAgBIACgKQADgIAGgGQAFgFAHgCIANgDIABAAQAOAAALAKQALALAAAPQAAAPgLAKQgLALgOAAgAszE6QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAvEE6QgKgKAAgPQAAgPAKgLQALgKAPAAQAPAAAKAKQALALAAAPQAAAPgLAKQgKALgPAAQgPAAgLgLgAxUE6QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAzMFFQgPAAgKgLQgLgKAAgPQAAgPALgLQAKgKAPAAIABAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAIgBAAgA11E6QgLgKAAgPQAAgPALgLQALgKAPAAQAPAAAKAKQALALAAAPQAAAPgLAKQgKALgPAAQgPAAgLgLgAVcC0IgNgCQgHgDgFgFQgGgGgDgIIgCgKIAAgBIAAgBIAAgBIAAgBIACgJQADgIAGgGQAFgFAHgDIANgDIABAAQAOAAALALQALAKAAAPQAAAPgLALIAAABQgLAJgOAAgASzCqQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgAQiCqQgKgLAAgPQAAgPAKgKQALgLAPAAQAPAAAKALQALAKAAAPQAAAPgLALQgKAKgPAAQgPAAgLgKgAOSCqQgLgLAAgPQAAgPALgKQAIgIAKgCIAHgBIABAAIAHABQAKACAJAIQAKAKAAAPQAAAPgKALQgJAIgKACIgLAAQgNgBgJgJgAJxCqQgLgLAAgPQAAgPALgKQAKgLAPAAIARAEQAFADAEAEQALAKAAAPQAAAPgLALQgEAEgFACIgRAEQgPAAgKgKgAHzC0QgLgCgIgIQgGgGgCgIIgCgKIAAgBIAAgBIAAgBIAAgBIACgJQACgIAGgGQAIgIALgCIAHgBIAAAAQAPAAALALQAKAKAAAPQAAAPgKALIgBABQgLAJgOAAgAFQCqQgLgLAAgPQAAgPALgKQALgLAPAAQAPAAAKALQALAKAAAPQAAAPgLALQgKAKgPAAQgPAAgLgKgAC+CqQgKgLAAgPQAAgPAKgKQAIgIALgCIAHgBIAAAAIAHABQALACAIAIQALAKAAAPQAAAPgLALQgIAIgLACIgLAAQgMgBgKgJgAhhCqQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgAjyCqQgLgLAAgPQAAgPALgKQALgLAPAAQAPAAAKALQALAKAAAPQAAAPgLALQgKAKgPAAQgPAAgLgKgAmCCqQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgAn5C0QgPAAgLgKQgKgLAAgPQAAgPAKgKQALgLAPAAIABAAQAOAAALALQALAKAAAPQAAAPgLALQgLAKgOAAIgBAAgAszCqQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgAvECqQgKgLAAgPQAAgPAKgKQALgLAPAAQAPAAAKALQALAKAAAPQAAAPgLALQgKAKgPAAQgPAAgLgKgAxUCqQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgAzLC0IgHAAQgKgCgIgIQgLgLAAgPQAAgPALgKQAIgIAKgCIAHgBIABAAIAHABQAKACAIAIQALAKAAAPQAAAPgLALQgIAIgKACIgHAAgAVcAkIgNgCQgHgDgFgFQgGgHgDgHIgCgKIAAgBIAAgBIAAAAIAAgBIACgJQADgIAGgGQAFgGAHgCIANgDIABAAQAOAAALALQALAKAAAOQAAAPgLALIAAABQgLAJgOAAgASzAaQgLgLAAgPQAAgOALgKQAKgLAPAAQAPAAALALQAKAKAAAOQAAAPgKALQgLAKgPAAQgPAAgKgKgAQiAaQgKgLAAgPQAAgOAKgKQALgLAPAAQAPAAAKALQALAKAAAOQAAAPgLALQgKAKgPAAQgPAAgLgKgAJxAaQgLgLAAgPQAAgOALgKQAKgLAPAAIAOADQAHACAFAGQALAKAAAOQAAAPgLALQgEAEgFACIgRAEQgPAAgKgKgAHzAkQgLgCgIgIQgGgHgCgHIgCgKIAAgBIAAgBIAAAAIAAgBIACgJQACgIAGgGQAIgJALgBIAHgBIAAAAQAPAAALALQAKAKAAAOQAAAPgKALIgBABQgLAJgOAAgAFQAaQgLgLAAgPQAAgOALgKQALgLAPAAQAPAAAKALQALAKAAAOQAAAPgLALQgKAKgPAAQgPAAgLgKgAhhAaQgLgLAAgPQAAgOALgKQAKgLAPAAQAPAAALALQAKAKAAAOQAAAPgKALQgLAKgPAAQgPAAgKgKgAjyAaQgLgLAAgPQAAgOALgKQALgLAPAAQAPAAAKALQALAKAAAOQAAAPgLALQgKAKgPAAQgPAAgLgKgAmCAaQgLgLAAgPQAAgOALgKQAKgLAPAAQAPAAALALQAKAKAAAOQAAAPgKALQgLAKgPAAQgPAAgKgKgAszAaQgLgLAAgPQAAgOALgKQAKgLAPAAQAPAAALALQAKAKAAAOQAAAPgKALQgLAKgPAAQgPAAgKgKgAvEAaQgKgLAAgPQAAgOAKgKQALgLAPAAQAPAAAKALQALAKAAAOQAAAPgLALQgKAKgPAAQgPAAgLgKgAxUAaQgLgLAAgPQAAgOALgKQAKgLAPAAQAPAAALALQAKAKAAAOQAAAPgKALQgLAKgPAAQgPAAgKgKgAVDh2QgLgKAAgPQAAgPALgLQALgKAOAAIARAEQAFACAEAEQALALAAAPQAAAPgLAKQgEAEgFADIgRAEQgOAAgLgLgASzh2QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAJxh2QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAHzhsQgLgCgIgIQgGgGgCgHIgCgKIAAgBIAAgBIAAgBIAAgBIACgKQACgIAGgGQAIgIALgBIAHgBIAAAAQAPAAALAKQAKALAAAPQAAAPgKAKIgBABQgLAKgOAAgAhPhsQgLgCgIgIQgGgGgCgHIgCgKIAAgBIAAgBIAAgBIAAgBIACgKQACgIAGgGQAIgIALgBIAHgBIAAAAIAOADQAGACAGAFQAKALAAAPQAAAPgKAKQgGAGgGACIgOADgAjyh2QgLgKAAgPQAAgPALgLQALgKAPAAQAPAAAKAKQALALAAAPQAAAPgLAKQgKALgPAAQgPAAgLgLgAshhsQgLgCgIgIQgKgKAAgPQAAgPAKgLQAIgIALgBIAHgBIAAAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAgAvEh2QgKgKAAgPQAAgPAKgLQALgKAPAAQAPAAAKAKQALALAAAPQAAAPgLAKQgKALgPAAQgPAAgLgLgAVDkGQgLgLAAgPQAAgPALgKQALgLAOAAIARAEQAFADAEAEQALAKAAAPQAAAPgLALQgEAEgFACIgRAEQgOAAgLgKgAJxkGQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgAhIj8IgOgCQgGgDgGgFQgGgGgCgIIgCgKIAAgBIAAgBIAAgBIAAgBIACgJQACgIAGgGQAGgFAGgDIAOgDIAAAAQAPAAALALQAKAKAAAPQAAAPgKALIgBABQgLAJgOAAgAszkGQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKg");
	this.shape.setTransform(140.875,32.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.on_dots_motivation, new cjs.Rectangle(0,0,281.8,65), null);


(lib.off_dots_all = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1756C3").s().p("AVcFFIgNgDQgHgCgFgGQgGgGgDgHIgCgKIAAgBIAAgBIAAgBIAAgBIACgKQADgIAGgGQAFgFAHgCIANgDIABAAQAOAAALAKQALALAAAPQAAAPgLAKIAAABQgLAKgOAAgASzE6QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAQiE6QgKgKAAgPQAAgPAKgLQALgKAPAAQAPAAAKAKQALALAAAPQAAAPgLAKQgKALgPAAQgPAAgLgLgAOkFEQgLgCgIgIQgLgKAAgPQAAgPALgLQAIgIALgBIAHgBIAAAAIAHABQALABAIAIQAKALAAAPQAAAPgKAKQgIAIgLACIgHABgAMBE6QgKgKAAgPQAAgPAKgLQALgKAPAAIARAEQAFACAEAEQAKALAAAPQAAAPgKAKQgEAEgFADIgRAEQgPAAgLgLgAJxE6QgLgKAAgPQAAgPALgLQAKgKAPAAIARAEQAFACAEAEQALALAAAPQAAAPgLAKQgEAEgFADIgRAEQgPAAgKgLgAHzFEQgLgCgIgIQgGgGgCgHIgCgKIAAgBIAAgBIAAgBIAAgBIACgKQACgIAGgGQAIgIALgBIAHgBIAAAAQAPAAALAKQAKALAAAPQAAAPgKAKIgBABQgLAKgOAAgAFQE6QgLgKAAgPQAAgPALgLQALgKAPAAQAPAAAKAKQALALAAAPQAAAPgLAKQgKALgPAAQgPAAgLgLgADQFEQgKgCgIgIQgLgKAAgPQAAgPALgLQAIgIAKgBIAHgBIABAAIAHABQAKABAIAIQALALAAAPQAAAPgLAKQgIAIgKACIgIABgAAuE6QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAhhE6QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAjyE6QgLgKAAgPQAAgPALgLQALgKAPAAQAPAAAKAKQALALAAAPQAAAPgLAKQgKALgPAAQgPAAgLgLgAmCE6QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAoBFEQgKgCgIgIQgLgKAAgPQAAgPALgLQAIgIAKgBIAHgBIABAAIAHABQAKABAIAIQALALAAAPQAAAPgLAKQgIAIgKACIgIABgAqKFFIgNgDQgHgCgFgGQgGgGgDgHIgCgKIAAgBIAAgBIAAgBIAAgBIACgKQADgIAGgGQAFgFAHgCIANgDIABAAQAOAAALAKQALALAAAPQAAAPgLAKQgLALgOAAgAszE6QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAvEE6QgKgKAAgPQAAgPAKgLQALgKAPAAQAPAAAKAKQALALAAAPQAAAPgLAKQgKALgPAAQgPAAgLgLgAxUE6QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAzMFFQgPAAgKgLQgLgKAAgPQAAgPALgLQAKgKAPAAIABAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAIgBAAgA11E6QgLgKAAgPQAAgPALgLQALgKAPAAQAPAAAKAKQALALAAAPQAAAPgLAKQgKALgPAAQgPAAgLgLgAVcC0IgNgCQgHgDgFgFQgGgGgDgIIgCgKIAAgBIAAgBIAAgBIAAgBIACgJQADgIAGgGQAFgFAHgDIANgDIABAAQAOAAALALQALAKAAAPQAAAPgLALIAAABQgLAJgOAAgASzCqQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgAQiCqQgKgLAAgPQAAgPAKgKQALgLAPAAQAPAAAKALQALAKAAAPQAAAPgLALQgKAKgPAAQgPAAgLgKgAOSCqQgLgLAAgPQAAgPALgKQAIgIAKgCIAHgBIABAAIAHABQAKACAJAIQAKAKAAAPQAAAPgKALQgJAIgKACIgLAAQgNgBgJgJgAMBCqQgKgLAAgPQAAgPAKgKQALgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgLgKgAJxCqQgLgLAAgPQAAgPALgKQAKgLAPAAIARAEQAFADAEAEQALAKAAAPQAAAPgLALQgEAEgFACIgRAEQgPAAgKgKgAHzC0QgLgCgIgIQgGgGgCgIIgCgKIAAgBIAAgBIAAgBIAAgBIACgJQACgIAGgGQAIgIALgCIAHgBIAAAAQAPAAALALQAKAKAAAPQAAAPgKALIgBABQgLAJgOAAgAFQCqQgLgLAAgPQAAgPALgKQALgLAPAAQAPAAAKALQALAKAAAPQAAAPgLALQgKAKgPAAQgPAAgLgKgAC+CqQgKgLAAgPQAAgPAKgKQAIgIALgCIAHgBIAAAAIAHABQALACAIAIQALAKAAAPQAAAPgLALQgIAIgLACIgLAAQgMgBgKgJgAAuCqQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgAhhCqQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgAjyCqQgLgLAAgPQAAgPALgKQALgLAPAAQAPAAAKALQALAKAAAPQAAAPgLALQgKAKgPAAQgPAAgLgKgAmCCqQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgAn5C0QgPAAgLgKQgKgLAAgPQAAgPAKgKQALgLAPAAIABAAQAOAAALALQALAKAAAPQAAAPgLALQgLAKgOAAIgBAAgAqjCqQgLgLAAgPQAAgPALgKQALgLAPAAQAOAAALALQALAKAAAPQAAAPgLALQgLAKgOAAQgPAAgLgKgAszCqQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgAvECqQgKgLAAgPQAAgPAKgKQALgLAPAAQAPAAAKALQALAKAAAPQAAAPgLALQgKAKgPAAQgPAAgLgKgAxUCqQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgAzLC0IgHAAQgKgCgIgIQgLgLAAgPQAAgPALgKQAIgIAKgCIAHgBIABAAIAHABQAKACAIAIQALAKAAAPQAAAPgLALQgIAIgKACIgHAAgA11CqQgKgLAAgPQAAgPAKgKQALgLAPAAQAPAAAKALQALAKAAAPQAAAPgLALQgKAKgPAAQgPAAgLgKgAVcAkIgNgCQgHgDgFgFQgGgHgDgHIgCgKIAAgBIAAgBIAAAAIAAgBIACgJQADgIAGgGQAFgGAHgCIANgDIABAAQAOAAALALQALAKAAAOQAAAPgLALIAAABQgLAJgOAAgASzAaQgLgLAAgPQAAgOALgKQAKgLAPAAQAPAAALALQAKAKAAAOQAAAPgKALQgLAKgPAAQgPAAgKgKgAQiAaQgKgLAAgPQAAgOAKgKQALgLAPAAQAPAAAKALQALAKAAAOQAAAPgLALQgKAKgPAAQgPAAgLgKgAOSAaQgLgLAAgPQAAgOALgKQAKgLAPAAQAPAAALALQAKAKAAAOQAAAPgKALQgLAKgPAAQgPAAgKgKgAMBAaQgKgLAAgPQAAgOAKgKQALgLAPAAQAPAAALALQAKAKAAAOQAAAPgKALQgLAKgPAAQgPAAgLgKgAJxAaQgLgLAAgPQAAgOALgKQAKgLAPAAIAOADQAHACAFAGQALAKAAAOQAAAPgLALQgEAEgFACIgRAEQgPAAgKgKgAHzAkQgLgCgIgIQgGgHgCgHIgCgKIAAgBIAAgBIAAAAIAAgBIACgJQACgIAGgGQAIgJALgBIAHgBIAAAAQAPAAALALQAKAKAAAOQAAAPgKALIgBABQgLAJgOAAgAFQAaQgLgLAAgPQAAgOALgKQALgLAPAAQAPAAAKALQALAKAAAOQAAAPgLALQgKAKgPAAQgPAAgLgKgAC+AaQgKgLAAgPQAAgOAKgKQALgLAPAAQAPAAAKALQALAKAAAOQAAAPgLALQgKAKgPAAQgPAAgLgKgAAuAaQgLgLAAgPQAAgOALgKQAKgLAPAAQAPAAALALQAKAKAAAOQAAAPgKALQgLAKgPAAQgPAAgKgKgAhhAaQgLgLAAgPQAAgOALgKQAKgLAPAAQAPAAALALQAKAKAAAOQAAAPgKALQgLAKgPAAQgPAAgKgKgAjyAaQgLgLAAgPQAAgOALgKQALgLAPAAQAPAAAKALQALAKAAAOQAAAPgLALQgKAKgPAAQgPAAgLgKgAmCAaQgLgLAAgPQAAgOALgKQAKgLAPAAQAPAAALALQAKAKAAAOQAAAPgKALQgLAKgPAAQgPAAgKgKgAoTAaQgKgLAAgPQAAgOAKgKQALgLAPAAQAPAAAKALQALAKAAAOQAAAPgLALQgKAKgPAAQgPAAgLgKgAqjAaQgLgLAAgPQAAgOALgKQALgLAPAAQAOAAALALQALAKAAAOQAAAPgLALQgLAKgOAAQgPAAgLgKgAszAaQgLgLAAgPQAAgOALgKQAKgLAPAAQAPAAALALQAKAKAAAOQAAAPgKALQgLAKgPAAQgPAAgKgKgAvEAaQgKgLAAgPQAAgOAKgKQALgLAPAAQAPAAAKALQALAKAAAOQAAAPgLALQgKAKgPAAQgPAAgLgKgAxUAaQgLgLAAgPQAAgOALgKQAKgLAPAAQAPAAALALQAKAKAAAOQAAAPgKALQgLAKgPAAQgPAAgKgKgAzkAaQgLgLAAgPQAAgOALgKQAKgLAPAAQAPAAALALQAKAKAAAOQAAAPgKALQgLAKgPAAQgPAAgKgKgA11AaQgKgLAAgPQAAgOAKgKQALgLAPAAQAPAAAKALQALAKAAAOQAAAPgLALQgKAKgPAAQgPAAgLgKgAVDh2QgLgKAAgPQAAgPALgLQALgKAOAAIARAEQAFACAEAEQALALAAAPQAAAPgLAKQgEAEgFADIgRAEQgOAAgLgLgASzh2QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAQih2QgKgKAAgPQAAgPAKgLQALgKAPAAQAPAAAKAKQALALAAAPQAAAPgLAKQgKALgPAAQgPAAgLgLgAOSh2QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAMBh2QgKgKAAgPQAAgPAKgLQALgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgLgLgAJxh2QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAHzhsQgLgCgIgIQgGgGgCgHIgCgKIAAgBIAAgBIAAgBIAAgBIACgKQACgIAGgGQAIgIALgBIAHgBIAAAAQAPAAALAKQAKALAAAPQAAAPgKAKIgBABQgLAKgOAAgAFQh2QgKgKAAgPQAAgPAKgLQALgKAPAAQAPAAAKAKQALALAAAPQAAAPgLAKQgKALgPAAQgPAAgLgLgAC+h2QgKgKAAgPQAAgPAKgLQALgKAPAAQAPAAAKAKQALALAAAPQAAAPgLAKQgKALgPAAQgPAAgLgLgAAuh2QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAhPhsQgLgCgIgIQgGgGgCgHIgCgKIAAgBIAAgBIAAgBIAAgBIACgKQACgIAGgGQAIgIALgBIAHgBIAAAAIAOADQAGACAGAFQAKALAAAPQAAAPgKAKQgGAGgGACIgOADgAjyh2QgLgKAAgPQAAgPALgLQALgKAPAAQAPAAAKAKQALALAAAPQAAAPgLAKQgKALgPAAQgPAAgLgLgAmCh2QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAoTh2QgKgKAAgPQAAgPAKgLQALgKAPAAQAPAAAKAKQALALAAAPQAAAPgLAKQgKALgPAAQgPAAgLgLgAqjh2QgLgKAAgPQAAgPALgLQALgKAPAAQAOAAALAKQALALAAAPQAAAPgLAKQgLALgOAAQgPAAgLgLgAshhsQgLgCgIgIQgKgKAAgPQAAgPAKgLQAIgIALgBIAHgBIAAAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAgAvEh2QgKgKAAgPQAAgPAKgLQALgKAPAAQAPAAAKAKQALALAAAPQAAAPgLAKQgKALgPAAQgPAAgLgLgAxUh2QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAzkh2QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgA11h2QgKgKAAgPQAAgPAKgLQALgKAPAAQAPAAAKAKQALALAAAPQAAAPgLAKQgKALgPAAQgPAAgLgLgAVDkGQgLgLAAgPQAAgPALgKQALgLAOAAIARAEQAFADAEAEQALAKAAAPQAAAPgLALQgEAEgFACIgRAEQgOAAgLgKgASzkGQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgAQikGQgKgLAAgPQAAgPAKgKQALgLAPAAQAPAAAKALQALAKAAAPQAAAPgLALQgKAKgPAAQgPAAgLgKgAOSkGQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgAMBkGQgKgLAAgPQAAgPAKgKQALgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgLgKgAJxkGQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgAHhkGQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgAFQkGQgKgLAAgPQAAgPAKgKQALgLAPAAQAPAAAKALQALAKAAAPQAAAPgLALQgKAKgPAAQgPAAgLgKgAC+kGQgKgLAAgPQAAgPAKgKQALgLAPAAQAPAAAKALQALAKAAAPQAAAPgLALQgKAKgPAAQgPAAgLgKgAAukGQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgAhIj8IgOgCQgGgDgGgFQgGgGgCgIIgCgKIAAgBIAAgBIAAgBIAAgBIACgJQACgIAGgGQAGgFAGgDIAOgDIAAAAQAPAAALALQAKAKAAAPQAAAPgKALIgBABQgLAJgOAAgAjykGQgKgLAAgPQAAgPAKgKQALgLAPAAQAPAAAKALQALAKAAAPQAAAPgLALQgKAKgPAAQgPAAgLgKgAmCkGQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgAoTkGQgKgLAAgPQAAgPAKgKQALgLAPAAQAPAAAKALQALAKAAAPQAAAPgLALQgKAKgPAAQgPAAgLgKgAqjkGQgLgLAAgPQAAgPALgKQALgLAPAAQAOAAALALQALAKAAAPQAAAPgLALQgLAKgOAAQgPAAgLgKgAszkGQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgAvEkGQgKgLAAgPQAAgPAKgKQALgLAPAAQAPAAAKALQALAKAAAPQAAAPgLALQgKAKgPAAQgPAAgLgKgAxUkGQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgAzkkGQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgA11kGQgKgLAAgPQAAgPAKgKQALgLAPAAQAPAAAKALQALAKAAAPQAAAPgLALQgKAKgPAAQgPAAgLgKg");
	this.shape.setTransform(140.875,32.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.off_dots_all, new cjs.Rectangle(0,0,281.8,65), null);


(lib.CTA_small = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Shop_Now
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D252C").s().p("AAOAnIgOgyIgOAyIgUAAIgYhNIAVAAIAPA1IAQg1IAPAAIAPA1IAPg1IAUAAIgZBNg");
	this.shape.setTransform(81.725,18.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D252C").s().p("AgcAfQgMgMAAgSIAAgBQAAgRAMgMQALgLARAAQASAAALALQAMALAAASIAAAAQAAATgMALQgLALgSAAQgRAAgLgKgAgOgSQgFAHAAALIAAAAQAAANAFAGQAFAGAJAAQAKAAAFgGQAFgGAAgMIAAgBQAAgLgFgHQgFgGgKAAQgIAAgGAGg");
	this.shape_1.setTransform(71.425,18.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D252C").s().p("AAWA2IguhPIAABPIgUAAIAAhqIAbAAIAqBIIAAhIIAUAAIAABqg");
	this.shape_2.setTransform(61.6,17.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D252C").s().p("AgnA1IAAhnIAUAAIAAAMQAEgGAGgEQAHgFAIAAQAPAAAJALQAKALAAATIAAABQAAASgKALQgJALgQgBQgQAAgIgNIAAAmgAgOgeQgFAGAAAMIAAABQAAALAFAHQAFAGAJAAQATAAAAgYIAAgBQAAgMgFgGQgFgHgJAAQgJAAgFAHg");
	this.shape_3.setTransform(48.925,20.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D252C").s().p("AgcAfQgMgMAAgSIAAgBQAAgRAMgMQALgLARAAQASAAALALQAMALAAASIAAAAQAAATgMALQgLALgSAAQgRAAgLgKgAgOgSQgFAHAAALIAAAAQAAANAFAGQAFAGAJAAQAKAAAFgGQAFgGAAgMIAAgBQAAgLgFgHQgFgGgKAAQgIAAgGAGg");
	this.shape_4.setTransform(39.775,18.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D252C").s().p("AAQA3IAAgvQAAgQgOAAQgIABgEAEQgFAEAAAIIAAAuIgUAAIAAhtIAUAAIAAAsQAHgPASAAQALAAAIAIQAHAIAAAPIAAAxg");
	this.shape_5.setTransform(31.05,17.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D252C").s().p("AgpAUIAWAAQABAJADAEQAGAGAKAAQAJAAAFgEQAGgFgBgGQABgHgFgDQgEgEgMgCQgUgCgJgGQgJgIAAgPQAAgNALgJQAKgJARAAQAkAAADAgIgUAAQgDgPgQAAQgIAAgFADQgEAEAAAGQAAAGAEADQAEADAMACQAUADAJAGQAKAHAAAQQAAAOgLAKQgLAJgTAAQgoAAgCgjg");
	this.shape_6.setTransform(22,17.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// yellow_box
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("An4C0QgUAAAAgUIAAk/QAAgUAUAAIPxAAQAUAAAAAUIAAE/QAAAUgUAAg");
	this.shape_7.setTransform(52.5,18);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA_small, new cjs.Rectangle(0,0,105,36), null);


(lib.copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF200").s().p("Ag+A9QgZgZAAgkQAAgjAZgZQAZgaAlABQAlgBAaAaQAZAZAAAjQAAAkgZAZQgaAaglAAQglAAgZgag");
	this.shape.setTransform(714.325,247.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0E6EF").s().p("AiPE6IBQjOIi8mlICiAAIBmEGIBgkGICPAAIj8Jzg");
	this.shape_1.setTransform(677.55,239.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0E6EF").s().p("AiqC3QhIhBAAhwIAAgGQAAhuBIhFQBGhDBrAAQBmAAA/A5QBHBBAAB3IAAAoIlNAAQAHBrBhAAQBMAAALg7ICOAAQgMBOg8ArQg8ArhnAAQhuAAhEhAgABhgzQgEhfhWAAQhSAAgOBfIC6AAIAAAAg");
	this.shape_2.setTransform(626.875,232.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0E6EF").s().p("ABQDxIAAkTQAAhVhJAAQgmAAgXAYQgZAYAAAvIAAEJIiVAAIAAnVICVAAIAABLQAshXBtAAQBIAAAoArQArAvAABZIAAEug");
	this.shape_3.setTransform(574.525,231.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E0E6EF").s().p("AiWDvIAAnWICVAAIAABdQArhkBtABIAACLQiYgCAABvIAADkg");
	this.shape_4.setTransform(531.525,231.7495);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0E6EF").s().p("Ai3DGQgtguAAhXIAAkxICVAAIAAEaQAABUBJAAQBWAAAAheIAAkQICVAAIAAHWIiVAAIAAhJQgsBUhpAAQhIAAgqgrg");
	this.shape_5.setTransform(485.975,232.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0E6EF").s().p("Ai0C3QhJhCAAhvIAAgGQAAhvBJhEQBIhDBtAAQBuAABGBBQBJBDAABtIAAAHQAABwhJBDQhHBChuAAQhtAAhHhAgAhlgFIAAAHQAACEBmAAQAwAAAbgiQAagjAAg9IAAgHQAAiChlAAQhmAAAACAg");
	this.shape_6.setTransform(432.675,232.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E0E6EF").s().p("AhrEyQA6gEAAg1IAAnVICUAAIAAHXQAABQgsAoQgxAshxABgAgikYQgXgXAAghQAAgiAXgXQAYgWAjAAQAiAAAZAWQAZAXgBAiQABAhgZAXQgYAWgjAAQgjAAgYgWg");
	this.shape_7.setTransform(391.45,230.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0E6EF").s().p("AiWDNQg4gpgDhNICLAAQAIA6BAAAQA/AAAAgrQAAgUgUgKQgVgLgxgHQhggNgnggQgqghAAhHQAAhIA7gpQA1gmBUAAQC7AAAOCWIiHAAQgJgyg3AAQg7AAABApQgBASAUAKQARAJAvAGQBjANArAeQAvAiAABHQAABPg4AqQg2AohhAAQhiAAg3gqg");
	this.shape_8.setTransform(344.35,232.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E0E6EF").s().p("AiXDNQg3gpgDhNICKAAQAJA6A/AAQBAAAAAgrQAAgUgVgKQgUgLgxgHQhfgNgoggQgqghAAhHQAAhIA7gpQA2gmBTAAQC7AAAPCWIiIAAQgJgyg3AAQg6AAAAApQAAASASAKQASAJAuAGQBkANAqAeQAwAiAABHQAABPg4AqQg1AohjAAQhiAAg3gqg");
	this.shape_9.setTransform(300.2,232.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E0E6EF").s().p("AiqC3QhIhBAAhwIAAgGQAAhuBIhFQBGhDBrAAQBmAAA/A5QBHBBAAB3IAAAoIlNAAQAHBrBhAAQBMAAALg7ICOAAQgMBOg8ArQg8ArhnAAQhuAAhEhAgABhgzQgEhfhWAAQhSAAgOBfIC6AAIAAAAg");
	this.shape_10.setTransform(252.275,232.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E0E6EF").s().p("ABQDxIAAkTQAAhVhJAAQgmAAgXAYQgZAYAAAvIAAEJIiVAAIAAnVICVAAIAABLQAshXBtAAQBIAAAoArQArAvAABZIAAEug");
	this.shape_11.setTransform(199.925,231.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E0E6EF").s().p("AhJFLIAAqVICTAAIAAKVg");
	this.shape_12.setTransform(161.525,222.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E0E6EF").s().p("AhJFLIAAqVICTAAIAAKVg");
	this.shape_13.setTransform(138.225,222.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E0E6EF").s().p("AiqC3QhIhBAAhwIAAgGQAAhuBIhFQBGhDBrAAQBmAAA/A5QBHBBAAB3IAAAoIlNAAQAHBrBhAAQBMAAALg7ICOAAQgMBOg8ArQg8ArhnAAQhuAAhEhAgABhgzQgEhfhWAAQhSAAgOBfIC6AAIAAAAg");
	this.shape_14.setTransform(100.675,232.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E0E6EF").s().p("ABKDrIhKkSIhNESIiSAAIiPnVICcAAIBLEmIBUkmIB3AAIBMEmIBRkmICOAAIiUHVg");
	this.shape_15.setTransform(38.375,232.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E0E6EF").s().p("Ai9EUQg7hBAAhzIAAgIQAAhyA7hDQA3g/BZAAQBjAAAuBPIAAkCICVAAIAAKUIiVAAIAAhNQgUAmglAYQgqAagxAAQhXAAg2g8gAhhBWIAAAHQAAA+AcAiQAaAgArAAQAxAAAbggQAcgiAAg/IAAgHQAAiAhlAAQhkAAAACBg");
	this.shape_16.setTransform(635.475,133.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E0E6EF").s().p("ABQDxIAAkTQAAhVhJAAQgmAAgXAYQgZAYAAAvIAAEJIiVAAIAAnVICVAAIAABLQAshXBtAAQBIAAAoArQArAvAABZIAAEug");
	this.shape_17.setTransform(582.425,141.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E0E6EF").s().p("AitDWQgwgkAAhEQAAhLA/gkQAtgZBwgTQBKgMAAgnQAAguhAAAQhBAAgGA6IiNAAQAGhQA9gqQA5goBfAAQDOAAAACqIAAE4IiQAAIAAg5QgvBEhdAAQhFAAgqghgAAHAlQhQASAAAsQAAAvA7AAQAmAAAZgVQAZgVAAgiIAAg7QgRAQgyAKg");
	this.shape_18.setTransform(530.075,142.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E0E6EF").s().p("AiXDNQg3gpgDhNICKAAQAJA6A/AAQBAAAAAgrQAAgUgVgKQgTgLgygHQhfgNgoggQgqghAAhHQAAhIA7gpQA2gmBTAAQC7AAAPCWIiIAAQgJgyg3AAQg6AAgBApQABASASAKQASAJAvAGQBjANAqAeQAwAiAABHQAABPg4AqQg1AohiAAQhiAAg4gqg");
	this.shape_19.setTransform(468.7,142.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E0E6EF").s().p("AiWDNQg4gpgDhNICLAAQAIA6BAAAQA/AAAAgrQAAgUgUgKQgVgLgxgHQhggNgnggQgqghAAhHQAAhIA7gpQA1gmBUAAQC7AAAOCWIiHAAQgKgyg2AAQg7AAABApQgBASAUAKQARAJAvAGQBjANArAeQAvAiAABHQAABPg4AqQg2AohiAAQhhAAg3gqg");
	this.shape_20.setTransform(424.55,142.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E0E6EF").s().p("AiqC3QhIhBAAhwIAAgGQAAhuBIhFQBGhDBrAAQBmAAA/A5QBHBBAAB3IAAAoIlNAAQAHBrBhAAQBMAAALg7ICOAAQgMBOg8ArQg8ArhnAAQhuAAhEhAgABhgzQgEhfhWAAQhSAAgOBfIC6AAIAAAAg");
	this.shape_21.setTransform(376.625,142.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E0E6EF").s().p("ABQDxIAAkTQAAhVhJAAQgmAAgXAYQgZAYAAAvIAAEJIiVAAIAAnVICVAAIAABLQAshXBtAAQBIAAAoArQArAvAABZIAAEug");
	this.shape_22.setTransform(324.275,141.475);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E0E6EF").s().p("AheCFIAAjcIg5AAIAAhnIA5AAIAAhjICVAAIAABjIBfAAIAABnIhfAAIAADNQAAA1AyAAQAYAAAXgIIAAByQgwANgmAAQigAAAAidg");
	this.shape_23.setTransform(280.975,137.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E0E6EF").s().p("AhKFNIAAnWICVAAIAAHWgAg7jFQgXgWAAgiQAAghAXgYQAYgWAjAAQAiAAAZAWQAYAYAAAhQAAAigYAWQgYAXgjgBQgjABgYgXg");
	this.shape_24.setTransform(253.525,132.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E0E6EF").s().p("AheFNIAAluIg8AAIAAhnIA8AAIAAgaQAAhUAxgsQAtgrBUABQAggBAnALIAABuQgXgHgXAAQg4AAAAA4IAAAbIBjAAIAABnIhjAAIAAFug");
	this.shape_25.setTransform(225.525,132.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E0E6EF").s().p("AiWDvIAAnWICVAAIAABdQArhkBtABIAACLQiYgCAABvIAADkg");
	this.shape_26.setTransform(177.475,141.7495);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E0E6EF").s().p("Ai3DGQgtguAAhXIAAkxICVAAIAAEaQAABUBJAAQBWAAAAheIAAkQICVAAIAAHWIiVAAIAAhJQgsBUhpAAQhIAAgqgrg");
	this.shape_27.setTransform(131.925,142.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E0E6EF").s().p("Ai0C3QhJhCAAhvIAAgGQAAhvBJhEQBIhDBtAAQBuAABGBBQBJBDAABtIAAAHQAABwhJBDQhHBChuAAQhtAAhHhAgAhlgFIAAAHQAACEBmAAQAwAAAbgiQAagjAAg9IAAgHQAAiChlAAQhmAAAACAg");
	this.shape_28.setTransform(78.625,142.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E0E6EF").s().p("AiPE6IBQjOIi8mlICiAAIBmEGIBgkGICPAAIj8Jzg");
	this.shape_29.setTransform(26.75,149.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E0E6EF").s().p("ABQFLIAAkVQAAhThJAAQgmAAgXAXQgZAYAAAuIAAELIiVAAIAAqVICVAAIAAELQAshYBtAAQBIAAAoAsQArAuAABZIAAEvg");
	this.shape_30.setTransform(714.925,42.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E0E6EF").s().p("AheCFIAAjcIg5AAIAAhnIA5AAIAAhjICVAAIAABjIBfAAIAABnIhfAAIAADNQAAA1AyAAQAYAAAXgIIAAByQgwANgmAAQigAAAAidg");
	this.shape_31.setTransform(671.625,47.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E0E6EF").s().p("AhKFNIAAnWICVAAIAAHWgAg7jFQgXgXAAghQAAghAXgYQAYgWAjAAQAiAAAZAWQAYAYAAAhQAAAhgYAXQgYAXgjAAQgjAAgYgXg");
	this.shape_32.setTransform(644.175,42.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E0E6EF").s().p("ABKDrIhKkSIhNESIiSAAIiPnVICcAAIBLEmIBUkmIB3AAIBMEmIBRkmICOAAIiUHVg");
	this.shape_33.setTransform(596.175,52.075);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E0E6EF").s().p("AA8FLIiKjUIAADUIiUAAIAAqVICUAAIAAF9ICIi+ICcAAIihDTICuEDg");
	this.shape_34.setTransform(522.15,42.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E0E6EF").s().p("AioC5QhFhBAAhyIAAgGQAAhxBIhEQBFhBBpAAQBeAAA6AqQBEAxAHBiIiMAAQgMhJhHAAQguAAgaAhQgaAhAAA+IAAAHQAACDBkAAQBPAAALhUICGAAQgFBag6AzQg+A2hrAAQhsAAhDg+g");
	this.shape_35.setTransform(470.4,52.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E0E6EF").s().p("AitDWQgwgkAAhEQAAhLA/gkQAtgZBwgTQBKgMAAgnQAAguhAAAQhBAAgGA6IiNAAQAGhQA9gqQA5goBfAAQDOAAAACqIAAE4IiQAAIAAg5QgvBEhdAAQhFAAgqghgAAHAlQhQASAAAsQAAAvA7AAQAmAAAZgVQAZgVAAgiIAAg7QgRAQgyAKg");
	this.shape_36.setTransform(419.225,52.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E0E6EF").s().p("AiWDvIAAnWICVAAIAABdQArhkBtABIAACLQiYgCAABvIAADkg");
	this.shape_37.setTransform(379.525,51.7495);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E0E6EF").s().p("AheCFIAAjcIg5AAIAAhnIA5AAIAAhjICVAAIAABjIBfAAIAABnIhfAAIAADNQAAA1AyAAQAYAAAXgIIAAByQgwANgmAAQigAAAAidg");
	this.shape_38.setTransform(344.075,47.625);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E0E6EF").s().p("ABQDxIAAkTQAAhVhJAAQgmAAgXAYQgZAYAAAvIAAEJIiVAAIAAnVICVAAIAABLQAshXBtAAQBIAAAoArQArAvAABZIAAEug");
	this.shape_39.setTransform(286.075,51.475);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E0E6EF").s().p("Ai0C3QhJhCAAhvIAAgGQAAhvBJhEQBIhDBtAAQBuAABGBBQBJBDAABtIAAAHQAABwhJBDQhHBChuAAQhtAAhHhAgAhlgFIAAAHQAACEBmAAQAwAAAbgiQAagjAAg9IAAgHQAAiChlAAQhmAAAACAg");
	this.shape_40.setTransform(232.375,52.025);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E0E6EF").s().p("AiPE6IBQjOIi8mlICiAAIBnEGIBfkGICPAAIj8Jzg");
	this.shape_41.setTransform(164.7,59.975);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E0E6EF").s().p("AitDWQgwgkAAhEQAAhLA/gkQAtgZBwgTQBKgMAAgnQAAguhAAAQhBAAgGA6IiNAAQAGhQA9gqQA5goBfAAQDOAAAACqIAAE4IiQAAIAAg5QgvBEhdAAQhFAAgqghgAAHAlQhQASAAAsQAAAvA7AAQAmAAAZgVQAZgVAAgiIAAg7QgRAQgyAKg");
	this.shape_42.setTransform(114.325,52.025);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E0E6EF").s().p("AheCFIAAjcIg5AAIAAhnIA5AAIAAhjICVAAIAABjIBfAAIAABnIhfAAIAADNQAAA1AyAAQAYAAAXgIIAAByQgwANgmAAQigAAAAidg");
	this.shape_43.setTransform(74.325,47.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E0E6EF").s().p("AkGB1ICiAAQAIBcBlAAQArAAAYgUQAZgTAAghQAAgggXgPQgWgOg/gJQiEgRg1gsQg2gsAAhgQAAhWBCg3QBDg4BuAAQDnAAARDGIicAAQgMhLhQAAQhTAAAAA9QAAAfAWAPQAXAPA+AJQCAAPA1AoQA9AsAABiQAABbhDA7QhGA+h1AAQkFAAgKjXg");
	this.shape_44.setTransform(30.125,43.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy, new cjs.Rectangle(0,0,1204,274), null);


(lib.bby_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEBFQgcgcgBgoQABgoAcgdQAcgcAoAAQApAAAdAcQAcAcAAAoQAAApgdAcQgcAcgpAAQgoAAgcgcgAg8g8QgYAZAAAkQAAAkAZAZQAYAXAjAAQAlAAAYgYQAYgYAAglQAAgkgYgYQgYgYglAAQgjAAgZAYgAAbAxIgcgrIgPAAIAAArIgQAAIAAhkIAhAAQAkAAAAAdIAAABQAAAVgYAEIAeAtgAgQgEIARAAQAUAAAAgRIAAAAQAAgRgUAAIgRAAg");
	this.shape.setTransform(44.12,19.9982,0.0623,0.0623);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6BNIAAiZIApAAQAjAAAUAVQAUAUAAAjIAAABQAAAjgUAUQgVAVgiAAgAgqA/IAZAAQAcAAAQgQQAQgRAAgeIAAAAQAAgegQgQQgRgRgcAAIgYAAg");
	this.shape_1.setTransform(46.6972,19.9206,0.0622,0.0621);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA4BNIAAh/IgyB/IgNAAIgxh/IAAB/IgOAAIAAiZIATAAIAzCGIAziGIAUAAIAACZg");
	this.shape_2.setTransform(45.6917,19.9206,0.0622,0.0621);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfBOIABgCIAwiZIAOAAIgBACIgwCZg");
	this.shape_3.setTransform(45.0285,19.9982,0.0623,0.0623);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AlkRRIAAsVIs72MILLAAIHULwIHUrwILMAAIs7WMIAAMVg");
	this.shape_4.setTransform(35.8592,22.2897,0.062,0.062);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVRdQjDAAiyhLQiqhIiFiFQiEiEhIirQhMixAAjDIAAz+ILMAAIAAUgQgBBtBPBPQBPBOBtgBQBugBBMhNQBOhOAAhtIAA0gILFAAIAAT+QAADDhMCxQhICriECEQiECFirBIQiyBLjCAAg");
	this.shape_5.setTransform(22.2261,22.3656,0.062,0.062);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Av6RRMAAAgihIQzAAQF1AADYCtQDXCtABDuQAABbgiBSQggBSguAzQgtAvguAnQgvAngfAOIgiANIBPAXQBYAgBJAwQDoCbAAEVQAAF6lTCaQjaBklVAAgAkwJSIFOAAQBegBA9g6QA+g6AAhTQAAhTg+g4Qg9g6heAAIlOAAgAkwkHIEFAAQBPAAAyguQAygvAAhEQAAhFgyguQgygvhPAAIkFAAg");
	this.shape_6.setTransform(9.7338,22.285,0.062,0.062);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AlCRoQiegnhqg3Qhqg4hPg3QhPg2gogpIgbgbIGlmRIAmAjQAlAjBxA5QBxA5BnAAQBoAAA6gzQA7gzAAhIQAAgsg2ghQg0gghVgdQhXgehlggIgigLQhZgghTgsQhng2hUhFQhThJg1h3Qg2h4AAiXQAAkbDzjTQDyjSGMAAQCeAACQAhQCQAhBaAvQBaAtBEAuQBDAtAdAkIAIAJImnGRQgsgtg7gcQhPgmhhAAQhbAAgxAoQgwAoAAA+QAAAyBFAoQBIAnBqAaIATAEQBnAbBuAwQB+A2BrBDQBrBFBHCFQBICGAACxQAAEyj4DZQj4DamjAAQioAAidgog");
	this.shape_7.setTransform(29.7618,7.1207,0.062,0.062);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AliRRIAA6HIpIAAIAAoaIdVAAIAAIaIpIAAIAAaHg");
	this.shape_8.setTransform(41.0281,7.1207,0.062,0.062);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("At8RRMAAAgihIb5AAIAAIaIwuAAIAAEbINnAAIAAH5ItnAAIAAFaIQrAAIAAIZg");
	this.shape_9.setTransform(18.3575,7.1207,0.062,0.062);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Av7RRMAAAgihIQ1AAQF1AADYCsQDYCtAADvQAABbgiBSQgiBUgtAwQgrAwgvAnQgtAlghAQIgiANIBPAXQBZAgBIAwQDoCcAAEUQAAF5lTCcQjbBjlVAAgAkxJSIFPAAQBdAAA/g7QA+g6gBhSQABhTg+g6Qg+g5heAAIlPAAgAkxkGIEHAAQBPAAAygwQAxguAAhEQAAhFgxguQgygvhPAAIkHAAg");
	this.shape_10.setTransform(6.2062,7.1207,0.062,0.062);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#122028").s().p("Ag8A9QgagZAAgkQAAgjAagZQAZgaAjABQAkgBAZAaQAZAZAAAjQAAAkgZAZQgZAZgkAAQgjAAgZgZg");
	this.shape_11.setTransform(42.4807,27.4529,0.0623,0.0623);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF200").s().p("AqQK8ImzmZIAApBIG0mdIbTAAIAAV3g");
	this.shape_12.setTransform(47.8109,27.5479,0.0625,0.0625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bby_logo, new cjs.Rectangle(-0.1,-0.1,54.800000000000004,32), null);


(lib.CTA_small_MC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_14 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoMDhIAAnBIQZAAIAAHBg");
	mask.setTransform(52.5,13.575);

	// CTA_small
	this.instance = new lib.CTA_small();
	this.instance.setTransform(0,36.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0.1},14,cjs.Ease.backOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.5,105,39.6);


(lib.background_dots = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AnOIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_2 = new cjs.Graphics().p("AxMIcIAAw3IOfAAIAAQ3g");
	var mask_graphics_4 = new cjs.Graphics().p("AwHIcIAAw3IOfAAIAAQ3g");
	var mask_graphics_6 = new cjs.Graphics().p("Au/IcIAAw3IOeAAIAAQ3g");
	var mask_graphics_8 = new cjs.Graphics().p("At+IcIAAw3IOeAAIAAQ3g");
	var mask_graphics_10 = new cjs.Graphics().p("As4IcIAAw3IOdAAIAAQ3g");
	var mask_graphics_12 = new cjs.Graphics().p("Ar0IcIAAw3IOdAAIAAQ3g");
	var mask_graphics_14 = new cjs.Graphics().p("AqtIcIAAw3IOeAAIAAQ3g");
	var mask_graphics_16 = new cjs.Graphics().p("AppIcIAAw3IOeAAIAAQ3g");
	var mask_graphics_18 = new cjs.Graphics().p("AojIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_20 = new cjs.Graphics().p("AnfIcIAAw3IOeAAIAAQ3g");
	var mask_graphics_22 = new cjs.Graphics().p("AnOIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_24 = new cjs.Graphics().p("AnOIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_26 = new cjs.Graphics().p("AnOIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_28 = new cjs.Graphics().p("AnOIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_30 = new cjs.Graphics().p("AnOIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_32 = new cjs.Graphics().p("AnOIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_34 = new cjs.Graphics().p("AnHIcIAAw3IOeAAIAAQ3g");
	var mask_graphics_36 = new cjs.Graphics().p("AmCIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_38 = new cjs.Graphics().p("Ak+IcIAAw3IOdAAIAAQ3g");
	var mask_graphics_40 = new cjs.Graphics().p("Aj5IcIAAw3IOeAAIAAQ3g");
	var mask_graphics_42 = new cjs.Graphics().p("AitIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_44 = new cjs.Graphics().p("AhmIcIAAw3IOeAAIAAQ3g");
	var mask_graphics_46 = new cjs.Graphics().p("AgiIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_48 = new cjs.Graphics().p("AAeIcIAAw3IOfAAIAAQ3g");
	var mask_graphics_50 = new cjs.Graphics().p("ABoIcIAAw3IOfAAIAAQ3g");
	var mask_graphics_52 = new cjs.Graphics().p("ACtIcIAAw3IOeAAIAAQ3g");
	var mask_graphics_54 = new cjs.Graphics().p("ADZIcIAAw3IOeAAIAAQ3g");
	var mask_graphics_56 = new cjs.Graphics().p("AnOIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_69 = new cjs.Graphics().p("AnOIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_71 = new cjs.Graphics().p("AxMIcIAAw3IOfAAIAAQ3g");
	var mask_graphics_73 = new cjs.Graphics().p("AwHIcIAAw3IOfAAIAAQ3g");
	var mask_graphics_75 = new cjs.Graphics().p("Au/IcIAAw3IOeAAIAAQ3g");
	var mask_graphics_77 = new cjs.Graphics().p("At+IcIAAw3IOeAAIAAQ3g");
	var mask_graphics_79 = new cjs.Graphics().p("As4IcIAAw3IOdAAIAAQ3g");
	var mask_graphics_81 = new cjs.Graphics().p("Ar0IcIAAw3IOdAAIAAQ3g");
	var mask_graphics_83 = new cjs.Graphics().p("AqtIcIAAw3IOeAAIAAQ3g");
	var mask_graphics_85 = new cjs.Graphics().p("AppIcIAAw3IOeAAIAAQ3g");
	var mask_graphics_87 = new cjs.Graphics().p("AojIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_89 = new cjs.Graphics().p("AnfIcIAAw3IOeAAIAAQ3g");
	var mask_graphics_91 = new cjs.Graphics().p("AnOIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_93 = new cjs.Graphics().p("AnOIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_95 = new cjs.Graphics().p("AnOIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_97 = new cjs.Graphics().p("AnOIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_99 = new cjs.Graphics().p("AnOIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_101 = new cjs.Graphics().p("AnOIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_103 = new cjs.Graphics().p("AnHIcIAAw3IOeAAIAAQ3g");
	var mask_graphics_105 = new cjs.Graphics().p("AmCIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_107 = new cjs.Graphics().p("Ak+IcIAAw3IOdAAIAAQ3g");
	var mask_graphics_109 = new cjs.Graphics().p("Aj5IcIAAw3IOeAAIAAQ3g");
	var mask_graphics_111 = new cjs.Graphics().p("AitIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_113 = new cjs.Graphics().p("AhmIcIAAw3IOeAAIAAQ3g");
	var mask_graphics_115 = new cjs.Graphics().p("AgiIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_117 = new cjs.Graphics().p("AAeIcIAAw3IOfAAIAAQ3g");
	var mask_graphics_119 = new cjs.Graphics().p("ABoIcIAAw3IOfAAIAAQ3g");
	var mask_graphics_121 = new cjs.Graphics().p("ACtIcIAAw3IOeAAIAAQ3g");
	var mask_graphics_123 = new cjs.Graphics().p("ADZIcIAAw3IOeAAIAAQ3g");
	var mask_graphics_125 = new cjs.Graphics().p("AnOIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_138 = new cjs.Graphics().p("AnOIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_140 = new cjs.Graphics().p("AxMIcIAAw3IOfAAIAAQ3g");
	var mask_graphics_142 = new cjs.Graphics().p("AwHIcIAAw3IOfAAIAAQ3g");
	var mask_graphics_144 = new cjs.Graphics().p("Au/IcIAAw3IOeAAIAAQ3g");
	var mask_graphics_146 = new cjs.Graphics().p("At+IcIAAw3IOeAAIAAQ3g");
	var mask_graphics_148 = new cjs.Graphics().p("As4IcIAAw3IOdAAIAAQ3g");
	var mask_graphics_150 = new cjs.Graphics().p("Ar0IcIAAw3IOdAAIAAQ3g");
	var mask_graphics_152 = new cjs.Graphics().p("AqtIcIAAw3IOeAAIAAQ3g");
	var mask_graphics_154 = new cjs.Graphics().p("AppIcIAAw3IOeAAIAAQ3g");
	var mask_graphics_156 = new cjs.Graphics().p("AojIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_158 = new cjs.Graphics().p("AnfIcIAAw3IOeAAIAAQ3g");
	var mask_graphics_160 = new cjs.Graphics().p("AnOIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_162 = new cjs.Graphics().p("AnOIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_164 = new cjs.Graphics().p("AnOIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_166 = new cjs.Graphics().p("AnOIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_168 = new cjs.Graphics().p("AnOIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_170 = new cjs.Graphics().p("AnOIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_172 = new cjs.Graphics().p("AnHIcIAAw3IOeAAIAAQ3g");
	var mask_graphics_174 = new cjs.Graphics().p("AmCIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_176 = new cjs.Graphics().p("Ak+IcIAAw3IOdAAIAAQ3g");
	var mask_graphics_178 = new cjs.Graphics().p("Aj5IcIAAw3IOeAAIAAQ3g");
	var mask_graphics_180 = new cjs.Graphics().p("AitIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_182 = new cjs.Graphics().p("AhmIcIAAw3IOeAAIAAQ3g");
	var mask_graphics_184 = new cjs.Graphics().p("AgiIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_186 = new cjs.Graphics().p("AAeIcIAAw3IOfAAIAAQ3g");
	var mask_graphics_188 = new cjs.Graphics().p("ABoIcIAAw3IOfAAIAAQ3g");
	var mask_graphics_190 = new cjs.Graphics().p("ACtIcIAAw3IOeAAIAAQ3g");
	var mask_graphics_192 = new cjs.Graphics().p("ADZIcIAAw3IOeAAIAAQ3g");
	var mask_graphics_194 = new cjs.Graphics().p("AnOIcIAAw3IOdAAIAAQ3g");
	var mask_graphics_207 = new cjs.Graphics().p("A3AIcIAAw3MAuBAAAIAAQ3g");
	var mask_graphics_209 = new cjs.Graphics().p("A3AIcIAAw3MAuBAAAIAAQ3g");
	var mask_graphics_211 = new cjs.Graphics().p("A3AIcIAAw3MAuBAAAIAAQ3g");
	var mask_graphics_213 = new cjs.Graphics().p("A3AIcIAAw3MAuBAAAIAAQ3g");
	var mask_graphics_215 = new cjs.Graphics().p("A3AIcIAAw3MAuBAAAIAAQ3g");
	var mask_graphics_217 = new cjs.Graphics().p("A3AIcIAAw3MAuBAAAIAAQ3g");
	var mask_graphics_219 = new cjs.Graphics().p("A3AIcIAAw3MAuBAAAIAAQ3g");
	var mask_graphics_221 = new cjs.Graphics().p("A3AIcIAAw3MAuBAAAIAAQ3g");
	var mask_graphics_223 = new cjs.Graphics().p("A3AIcIAAw3MAuBAAAIAAQ3g");
	var mask_graphics_225 = new cjs.Graphics().p("A3AIcIAAw3MAuBAAAIAAQ3g");
	var mask_graphics_227 = new cjs.Graphics().p("A3AIcIAAw3MAuBAAAIAAQ3g");
	var mask_graphics_229 = new cjs.Graphics().p("A3AIcIAAw3MAuBAAAIAAQ3g");
	var mask_graphics_231 = new cjs.Graphics().p("A3AIcIAAw3MAuBAAAIAAQ3g");
	var mask_graphics_233 = new cjs.Graphics().p("A3AIcIAAw3MAuBAAAIAAQ3g");
	var mask_graphics_235 = new cjs.Graphics().p("A3AIcIAAw3MAuBAAAIAAQ3g");
	var mask_graphics_237 = new cjs.Graphics().p("A3AIcIAAw3MAuBAAAIAAQ3g");
	var mask_graphics_239 = new cjs.Graphics().p("A3AIcIAAw3MAuBAAAIAAQ3g");
	var mask_graphics_241 = new cjs.Graphics().p("A3AIcIAAw3MAuBAAAIAAQ3g");
	var mask_graphics_243 = new cjs.Graphics().p("A3AIcIAAw3MAuBAAAIAAQ3g");
	var mask_graphics_245 = new cjs.Graphics().p("A3AIcIAAw3MAuBAAAIAAQ3g");
	var mask_graphics_247 = new cjs.Graphics().p("A3AIcIAAw3MAuBAAAIAAQ3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-182.325,y:0}).wait(2).to({graphics:mask_graphics_2,x:-110.0954,y:0.0086}).wait(2).to({graphics:mask_graphics_4,x:-103.1725,y:0.0086}).wait(2).to({graphics:mask_graphics_6,x:-96.034,y:0.0086}).wait(2).to({graphics:mask_graphics_8,x:-89.4943,y:0.0086}).wait(2).to({graphics:mask_graphics_10,x:-82.5474,y:0.0086}).wait(2).to({graphics:mask_graphics_12,x:-75.7203,y:0.0086}).wait(2).to({graphics:mask_graphics_14,x:-68.5818,y:0.0086}).wait(2).to({graphics:mask_graphics_16,x:-61.7547,y:0.0086}).wait(2).to({graphics:mask_graphics_18,x:-54.8078,y:0.0086}).wait(2).to({graphics:mask_graphics_20,x:-47.9807,y:0.0086}).wait(2).to({graphics:mask_graphics_22,x:-35.787,y:0.0086}).wait(2).to({graphics:mask_graphics_24,x:-21.8932,y:0.0086}).wait(2).to({graphics:mask_graphics_26,x:-7.8078,y:0.0086}).wait(2).to({graphics:mask_graphics_28,x:5.6548,y:0.0086}).wait(2).to({graphics:mask_graphics_30,x:19.6923,y:0.0086}).wait(2).to({graphics:mask_graphics_32,x:33.5861,y:0.0086}).wait(2).to({graphics:mask_graphics_34,x:47.0958,y:0.0086}).wait(2).to({graphics:mask_graphics_36,x:53.9229,y:0.0086}).wait(2).to({graphics:mask_graphics_38,x:60.75,y:0.0086}).wait(2).to({graphics:mask_graphics_40,x:67.6969,y:0.0086}).wait(2).to({graphics:mask_graphics_42,x:75.2427,y:0.0086}).wait(2).to({graphics:mask_graphics_44,x:82.3812,y:0.0086}).wait(2).to({graphics:mask_graphics_46,x:89.1125,y:0.0086}).wait(2).to({graphics:mask_graphics_48,x:95.6521,y:0.0086}).wait(2).to({graphics:mask_graphics_50,x:103.1021,y:0.0086}).wait(2).to({graphics:mask_graphics_52,x:109.9292,y:0.0086}).wait(2).to({graphics:mask_graphics_54,x:114.3369,y:0.0086}).wait(2).to({graphics:mask_graphics_56,x:182.325,y:0}).wait(13).to({graphics:mask_graphics_69,x:-182.325,y:0}).wait(2).to({graphics:mask_graphics_71,x:-110.0954,y:0.0086}).wait(2).to({graphics:mask_graphics_73,x:-103.1725,y:0.0086}).wait(2).to({graphics:mask_graphics_75,x:-96.034,y:0.0086}).wait(2).to({graphics:mask_graphics_77,x:-89.4943,y:0.0086}).wait(2).to({graphics:mask_graphics_79,x:-82.5474,y:0.0086}).wait(2).to({graphics:mask_graphics_81,x:-75.7203,y:0.0086}).wait(2).to({graphics:mask_graphics_83,x:-68.5818,y:0.0086}).wait(2).to({graphics:mask_graphics_85,x:-61.7547,y:0.0086}).wait(2).to({graphics:mask_graphics_87,x:-54.8078,y:0.0086}).wait(2).to({graphics:mask_graphics_89,x:-47.9807,y:0.0086}).wait(2).to({graphics:mask_graphics_91,x:-35.787,y:0.0086}).wait(2).to({graphics:mask_graphics_93,x:-21.8932,y:0.0086}).wait(2).to({graphics:mask_graphics_95,x:-7.8078,y:0.0086}).wait(2).to({graphics:mask_graphics_97,x:5.6548,y:0.0086}).wait(2).to({graphics:mask_graphics_99,x:19.6923,y:0.0086}).wait(2).to({graphics:mask_graphics_101,x:33.5861,y:0.0086}).wait(2).to({graphics:mask_graphics_103,x:47.0958,y:0.0086}).wait(2).to({graphics:mask_graphics_105,x:53.9229,y:0.0086}).wait(2).to({graphics:mask_graphics_107,x:60.75,y:0.0086}).wait(2).to({graphics:mask_graphics_109,x:67.6969,y:0.0086}).wait(2).to({graphics:mask_graphics_111,x:75.2427,y:0.0086}).wait(2).to({graphics:mask_graphics_113,x:82.3812,y:0.0086}).wait(2).to({graphics:mask_graphics_115,x:89.1125,y:0.0086}).wait(2).to({graphics:mask_graphics_117,x:95.6521,y:0.0086}).wait(2).to({graphics:mask_graphics_119,x:103.1021,y:0.0086}).wait(2).to({graphics:mask_graphics_121,x:109.9292,y:0.0086}).wait(2).to({graphics:mask_graphics_123,x:114.3369,y:0.0086}).wait(2).to({graphics:mask_graphics_125,x:182.325,y:0}).wait(13).to({graphics:mask_graphics_138,x:-182.325,y:0}).wait(2).to({graphics:mask_graphics_140,x:-110.0954,y:0.0086}).wait(2).to({graphics:mask_graphics_142,x:-103.1725,y:0.0086}).wait(2).to({graphics:mask_graphics_144,x:-96.034,y:0.0086}).wait(2).to({graphics:mask_graphics_146,x:-89.4943,y:0.0086}).wait(2).to({graphics:mask_graphics_148,x:-82.5474,y:0.0086}).wait(2).to({graphics:mask_graphics_150,x:-75.7203,y:0.0086}).wait(2).to({graphics:mask_graphics_152,x:-68.5818,y:0.0086}).wait(2).to({graphics:mask_graphics_154,x:-61.7547,y:0.0086}).wait(2).to({graphics:mask_graphics_156,x:-54.8078,y:0.0086}).wait(2).to({graphics:mask_graphics_158,x:-47.9807,y:0.0086}).wait(2).to({graphics:mask_graphics_160,x:-35.787,y:0.0086}).wait(2).to({graphics:mask_graphics_162,x:-21.8932,y:0.0086}).wait(2).to({graphics:mask_graphics_164,x:-7.8078,y:0.0086}).wait(2).to({graphics:mask_graphics_166,x:5.6548,y:0.0086}).wait(2).to({graphics:mask_graphics_168,x:19.6923,y:0.0086}).wait(2).to({graphics:mask_graphics_170,x:33.5861,y:0.0086}).wait(2).to({graphics:mask_graphics_172,x:47.0958,y:0.0086}).wait(2).to({graphics:mask_graphics_174,x:53.9229,y:0.0086}).wait(2).to({graphics:mask_graphics_176,x:60.75,y:0.0086}).wait(2).to({graphics:mask_graphics_178,x:67.6969,y:0.0086}).wait(2).to({graphics:mask_graphics_180,x:75.2427,y:0.0086}).wait(2).to({graphics:mask_graphics_182,x:82.3812,y:0.0086}).wait(2).to({graphics:mask_graphics_184,x:89.1125,y:0.0086}).wait(2).to({graphics:mask_graphics_186,x:95.6521,y:0.0086}).wait(2).to({graphics:mask_graphics_188,x:103.1021,y:0.0086}).wait(2).to({graphics:mask_graphics_190,x:109.9292,y:0.0086}).wait(2).to({graphics:mask_graphics_192,x:114.3369,y:0.0086}).wait(2).to({graphics:mask_graphics_194,x:182.325,y:0}).wait(13).to({graphics:mask_graphics_207,x:-285.325,y:0}).wait(2).to({graphics:mask_graphics_209,x:-273.325,y:0}).wait(2).to({graphics:mask_graphics_211,x:-258.325,y:0}).wait(2).to({graphics:mask_graphics_213,x:-245.325,y:0}).wait(2).to({graphics:mask_graphics_215,x:-230.325,y:0}).wait(2).to({graphics:mask_graphics_217,x:-217.325,y:0}).wait(2).to({graphics:mask_graphics_219,x:-203.325,y:0}).wait(2).to({graphics:mask_graphics_221,x:-188.325,y:0}).wait(2).to({graphics:mask_graphics_223,x:-175.325,y:0}).wait(2).to({graphics:mask_graphics_225,x:-162.325,y:0}).wait(2).to({graphics:mask_graphics_227,x:-147.325,y:0}).wait(2).to({graphics:mask_graphics_229,x:-134.325,y:0}).wait(2).to({graphics:mask_graphics_231,x:-119.325,y:0}).wait(2).to({graphics:mask_graphics_233,x:-105.325,y:0}).wait(2).to({graphics:mask_graphics_235,x:-92.325,y:0}).wait(2).to({graphics:mask_graphics_237,x:-78.325,y:0}).wait(2).to({graphics:mask_graphics_239,x:-64.325,y:0}).wait(2).to({graphics:mask_graphics_241,x:-50.325,y:0}).wait(2).to({graphics:mask_graphics_243,x:-36.325,y:0}).wait(2).to({graphics:mask_graphics_245,x:-22.325,y:0}).wait(2).to({graphics:mask_graphics_247,x:-8.325,y:0}).wait(2));

	// on_idn
	this.instance = new lib.on_dots_motivation();
	this.instance.setTransform(-0.65,-0.1,0.9582,0.9582,0,0,0,140.9,32.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(249));

	// off
	this.instance_1 = new lib.off_dots_all();
	this.instance_1.setTransform(-0.65,-0.1,0.9582,0.9582,0,0,0,140.9,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(249));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.6,-31.2,269.9,62.2);


// stage content:
(lib._211231healthfitnessfy22_awareness_wtpa_300x250_en = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [299];
	// timeline functions:
	this.frame_299 = function() {
		var _this = this;
		/*
		Stop the complete animation.
		*/
		createjs.Ticker.removeEventListener('tick', stage);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(299).call(this.frame_299).wait(1));

	// bby_logo
	this.instance = new lib.bby_logo();
	this.instance.setTransform(43.75,220.85,1.0036,1.0031,0,0,0,27.6,16.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(51).to({_off:false},0).to({alpha:1},10).wait(239));

	// CTA_small_MC
	this.instance_1 = new lib.CTA_small_MC("synched",0,false);
	this.instance_1.setTransform(68.5,123,1,1,0,0,0,52.5,22.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(51).to({_off:false},0).wait(249));

	// sku
	this.instance_2 = new lib.sku();
	this.instance_2.setTransform(20.35,16.05,0.0577,0.0577);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).wait(1).to({regX:2248,regY:1889.3,x:150.55,y:125,alpha:0.06},0).wait(1).to({x:151.2,alpha:0.1204},0).wait(1).to({x:151.8,alpha:0.1811},0).wait(1).to({x:152.4,alpha:0.2421},0).wait(1).to({x:153,alpha:0.3032},0).wait(1).to({x:153.6,alpha:0.3643},0).wait(1).to({x:154.25,alpha:0.4252},0).wait(1).to({x:154.85,alpha:0.4858},0).wait(1).to({x:155.45,alpha:0.546},0).wait(1).to({x:156.05,alpha:0.6057},0).wait(1).to({x:156.6,alpha:0.6648},0).wait(1).to({x:157.2,alpha:0.7231},0).wait(1).to({x:157.8,alpha:0.7805},0).wait(1).to({x:158.35,alpha:0.837},0).wait(1).to({x:158.9,alpha:0.8925},0).wait(1).to({x:159.45,alpha:0.9468},0).wait(1).to({regX:0,regY:0,x:30.35,y:16.05,alpha:1},0).wait(5).to({regX:3.6,scaleX:0.0411,scaleY:0.0411,x:102.25,y:83.05},20,cjs.Ease.cubicInOut).wait(251));

	// copy
	this.instance_3 = new lib.copy();
	this.instance_3.setTransform(133.5,28.2,0.24,0.24,0,0,0,512.3,52.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(41).to({_off:false},0).to({regX:512.1,x:138.1,alpha:1},9,cjs.Ease.quadOut).wait(250));

	// mask_dots (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_51 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_52 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_53 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_54 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_55 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_56 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_57 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_58 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_59 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_60 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_61 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_62 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_63 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_64 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_65 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_66 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_67 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_68 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_69 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_70 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_71 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_72 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_73 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_74 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_75 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_76 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_77 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_78 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_79 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_80 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_81 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_82 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_83 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_84 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_85 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");
	var mask_graphics_86 = new cjs.Graphics().p("A21HvIAAvdMAtrAAAIAAPdg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(51).to({graphics:mask_graphics_51,x:-136.725,y:146.55}).wait(1).to({graphics:mask_graphics_52,x:-120.325,y:146.55}).wait(1).to({graphics:mask_graphics_53,x:-104.375,y:146.55}).wait(1).to({graphics:mask_graphics_54,x:-88.875,y:146.55}).wait(1).to({graphics:mask_graphics_55,x:-73.875,y:146.55}).wait(1).to({graphics:mask_graphics_56,x:-59.375,y:146.55}).wait(1).to({graphics:mask_graphics_57,x:-45.325,y:146.55}).wait(1).to({graphics:mask_graphics_58,x:-31.775,y:146.55}).wait(1).to({graphics:mask_graphics_59,x:-18.675,y:146.55}).wait(1).to({graphics:mask_graphics_60,x:-6.075,y:146.55}).wait(1).to({graphics:mask_graphics_61,x:6.075,y:146.55}).wait(1).to({graphics:mask_graphics_62,x:17.725,y:146.55}).wait(1).to({graphics:mask_graphics_63,x:28.925,y:146.55}).wait(1).to({graphics:mask_graphics_64,x:39.625,y:146.55}).wait(1).to({graphics:mask_graphics_65,x:49.875,y:146.55}).wait(1).to({graphics:mask_graphics_66,x:59.625,y:146.55}).wait(1).to({graphics:mask_graphics_67,x:68.925,y:146.55}).wait(1).to({graphics:mask_graphics_68,x:77.725,y:146.55}).wait(1).to({graphics:mask_graphics_69,x:86.025,y:146.55}).wait(1).to({graphics:mask_graphics_70,x:93.875,y:146.55}).wait(1).to({graphics:mask_graphics_71,x:101.275,y:146.55}).wait(1).to({graphics:mask_graphics_72,x:108.175,y:146.55}).wait(1).to({graphics:mask_graphics_73,x:114.575,y:146.55}).wait(1).to({graphics:mask_graphics_74,x:120.575,y:146.55}).wait(1).to({graphics:mask_graphics_75,x:126.025,y:146.55}).wait(1).to({graphics:mask_graphics_76,x:131.025,y:146.55}).wait(1).to({graphics:mask_graphics_77,x:135.525,y:146.55}).wait(1).to({graphics:mask_graphics_78,x:139.575,y:146.55}).wait(1).to({graphics:mask_graphics_79,x:143.175,y:146.55}).wait(1).to({graphics:mask_graphics_80,x:146.275,y:146.55}).wait(1).to({graphics:mask_graphics_81,x:148.875,y:146.55}).wait(1).to({graphics:mask_graphics_82,x:151.025,y:146.55}).wait(1).to({graphics:mask_graphics_83,x:152.675,y:146.55}).wait(1).to({graphics:mask_graphics_84,x:153.875,y:146.55}).wait(1).to({graphics:mask_graphics_85,x:154.575,y:146.55}).wait(1).to({graphics:mask_graphics_86,x:154.825,y:146.55}).wait(1).to({graphics:null,x:0,y:0}).wait(213));

	// background_dots
	this.instance_4 = new lib.background_dots("synched",0,false);
	this.instance_4.setTransform(105.5,172.15,0.6428,0.6428,0,0,0,4.2,1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(51).to({_off:false},0).wait(249));

	// mask_dots_intro (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_41 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_1_graphics_42 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_1_graphics_43 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_1_graphics_44 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_1_graphics_45 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_1_graphics_46 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_1_graphics_47 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_1_graphics_48 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_1_graphics_49 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_1_graphics_50 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_1_graphics_51 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(41).to({graphics:mask_1_graphics_41,x:173.525,y:121.55}).wait(1).to({graphics:mask_1_graphics_42,x:176.425,y:121.55}).wait(1).to({graphics:mask_1_graphics_43,x:185.025,y:121.55}).wait(1).to({graphics:mask_1_graphics_44,x:199.425,y:121.55}).wait(1).to({graphics:mask_1_graphics_45,x:219.575,y:121.55}).wait(1).to({graphics:mask_1_graphics_46,x:245.525,y:121.55}).wait(1).to({graphics:mask_1_graphics_47,x:277.175,y:121.55}).wait(1).to({graphics:mask_1_graphics_48,x:314.625,y:121.55}).wait(1).to({graphics:mask_1_graphics_49,x:357.825,y:121.55}).wait(1).to({graphics:mask_1_graphics_50,x:406.775,y:121.55}).wait(1).to({graphics:mask_1_graphics_51,x:461.475,y:121.55}).wait(1).to({graphics:null,x:0,y:0}).wait(248));

	// background_dots_intro
	this.instance_5 = new lib.background_dots("synched",0);
	this.instance_5.setTransform(150.7,125.15);
	this.instance_5.alpha = 0;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1,startPosition:9},9).wait(32).to({startPosition:63},0).to({x:160.7,startPosition:4},10,cjs.Ease.quadIn).to({_off:true},1).wait(248));

	// gradient
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#4976E4","#001E73"],[0,1],0,0,0,0,0,158.3).s().p("AxVRWQnMnLAAqLQAAqKHMnLQHLnMKKAAQKLAAHLHMQHMHLAAKKQAAKLnMHLQnLHMqLAAQqKAAnLnMg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(300));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(143,93,164,189);
// library properties:
lib.properties = {
	id: '13FBD7200604434D961FE82350812970',
	width: 300,
	height: 250,
	fps: 30,
	color: "#001E73",
	opacity: 1.00,
	manifest: [
		{src:"treadmill.png", id:"treadmill"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['13FBD7200604434D961FE82350812970'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;