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
	this.instance.setTransform(0,0,11.0169,11.0169);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sku, new cjs.Rectangle(0,0,4496,3778.6), null);


(lib.on_dots_progress = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#4E7ECF").s().p("AVcFFIgNgDQgHgCgFgGQgGgGgDgHIgCgKIAAgBIAAgBIAAgBIAAgBIACgKQADgIAGgGQAFgFAHgCIANgDIABAAQAOAAALAKQALALAAAPQAAAPgLAKIAAABQgLAKgOAAgASzE6QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAQiE6QgKgKAAgPQAAgPAKgLQALgKAPAAQAPAAAKAKQALALAAAPQAAAPgLAKQgKALgPAAQgPAAgLgLgAOkFEQgLgCgIgIQgLgKAAgPQAAgPALgLQAIgIALgBIAHgBIAAAAIAHABQALABAIAIQAKALAAAPQAAAPgKAKQgIAIgLACIgHABgAMBE6QgKgKAAgPQAAgPAKgLQALgKAPAAIARAEQAFACAEAEQAKALAAAPQAAAPgKAKQgEAEgFADIgRAEQgPAAgLgLgAJxE6QgLgKAAgPQAAgPALgLQAKgKAPAAIARAEQAFACAEAEQALALAAAPQAAAPgLAKQgEAEgFADIgRAEQgPAAgKgLgAHzFEQgLgCgIgIQgGgGgCgHIgCgKIAAgBIAAgBIAAgBIAAgBIACgKQACgIAGgGQAIgIALgBIAHgBIAAAAQAPAAALAKQAKALAAAPQAAAPgKAKIgBABQgLAKgOAAgAFQE6QgLgKAAgPQAAgPALgLQALgKAPAAQAPAAAKAKQALALAAAPQAAAPgLAKQgKALgPAAQgPAAgLgLgADQFEQgKgCgIgIQgLgKAAgPQAAgPALgLQAIgIAKgBIAHgBIABAAIAHABQAKABAIAIQALALAAAPQAAAPgLAKQgIAIgKACIgIABgAAuE6QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAhhE6QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAjyE6QgLgKAAgPQAAgPALgLQALgKAPAAQAPAAAKAKQALALAAAPQAAAPgLAKQgKALgPAAQgPAAgLgLgAmCE6QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAoBFEQgKgCgIgIQgLgKAAgPQAAgPALgLQAIgIAKgBIAHgBIABAAIAHABQAKABAIAIQALALAAAPQAAAPgLAKQgIAIgKACIgIABgAqKFFIgNgDQgHgCgFgGQgGgGgDgHIgCgKIAAgBIAAgBIAAgBIAAgBIACgKQADgIAGgGQAFgFAHgCIANgDIABAAQAOAAALAKQALALAAAPQAAAPgLAKQgLALgOAAgAszE6QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAvEE6QgKgKAAgPQAAgPAKgLQALgKAPAAQAPAAAKAKQALALAAAPQAAAPgLAKQgKALgPAAQgPAAgLgLgAxUE6QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAzMFFQgPAAgKgLQgLgKAAgPQAAgPALgLQAKgKAPAAIABAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAIgBAAgA11E6QgLgKAAgPQAAgPALgLQALgKAPAAQAPAAAKAKQALALAAAPQAAAPgLAKQgKALgPAAQgPAAgLgLgASzCqQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgAQiCqQgKgLAAgPQAAgPAKgKQALgLAPAAQAPAAAKALQALAKAAAPQAAAPgLALQgKAKgPAAQgPAAgLgKgAMBCqQgKgLAAgPQAAgPAKgKQALgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgLgKgAJxCqQgLgLAAgPQAAgPALgKQAKgLAPAAIARAEQAFADAEAEQALAKAAAPQAAAPgLALQgEAEgFACIgRAEQgPAAgKgKgAHzC0QgLgCgIgIQgGgGgCgIIgCgKIAAgBIAAgBIAAgBIAAgBIACgJQACgIAGgGQAIgIALgCIAHgBIAAAAQAPAAALALQAKAKAAAPQAAAPgKALIgBABQgLAJgOAAgAFQCqQgLgLAAgPQAAgPALgKQALgLAPAAQAPAAAKALQALAKAAAPQAAAPgLALQgKAKgPAAQgPAAgLgKgAC+CqQgKgLAAgPQAAgPAKgKQAIgIALgCIAHgBIAAAAIAHABQALACAIAIQALAKAAAPQAAAPgLALQgIAIgLACIgLAAQgMgBgKgJgAAuCqQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgAhhCqQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgAjyCqQgLgLAAgPQAAgPALgKQALgLAPAAQAPAAAKALQALAKAAAPQAAAPgLALQgKAKgPAAQgPAAgLgKgAn5C0QgPAAgLgKQgKgLAAgPQAAgPAKgKQALgLAPAAIABAAQAOAAALALQALAKAAAPQAAAPgLALQgLAKgOAAIgBAAgAqjCqQgLgLAAgPQAAgPALgKQALgLAPAAQAOAAALALQALAKAAAPQAAAPgLALQgLAKgOAAQgPAAgLgKgAszCqQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgAvECqQgKgLAAgPQAAgPAKgKQALgLAPAAQAPAAAKALQALAKAAAPQAAAPgLALQgKAKgPAAQgPAAgLgKgAxUCqQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgAzLC0IgHAAQgKgCgIgIQgLgLAAgPQAAgPALgKQAIgIAKgCIAHgBIABAAIAHABQAKACAIAIQALAKAAAPQAAAPgLALQgIAIgKACIgHAAgAMBAaQgKgLAAgPQAAgOAKgKQALgLAPAAQAPAAALALQAKAKAAAOQAAAPgKALQgLAKgPAAQgPAAgLgKgAJxAaQgLgLAAgPQAAgOALgKQAKgLAPAAIAOADQAHACAFAGQALAKAAAOQAAAPgLALQgEAEgFACIgRAEQgPAAgKgKgAHzAkQgLgCgIgIQgGgHgCgHIgCgKIAAgBIAAgBIAAAAIAAgBIACgJQACgIAGgGQAIgJALgBIAHgBIAAAAQAPAAALALQAKAKAAAOQAAAPgKALIgBABQgLAJgOAAgAAuAaQgLgLAAgPQAAgOALgKQAKgLAPAAQAPAAALALQAKAKAAAOQAAAPgKALQgLAKgPAAQgPAAgKgKgAoTAaQgKgLAAgPQAAgOAKgKQALgLAPAAQAPAAAKALQALAKAAAOQAAAPgLALQgKAKgPAAQgPAAgLgKgAqjAaQgLgLAAgPQAAgOALgKQALgLAPAAQAOAAALALQALAKAAAOQAAAPgLALQgLAKgOAAQgPAAgLgKgAszAaQgLgLAAgPQAAgOALgKQAKgLAPAAQAPAAALALQAKAKAAAOQAAAPgKALQgLAKgPAAQgPAAgKgKgAvEAaQgKgLAAgPQAAgOAKgKQALgLAPAAQAPAAAKALQALAKAAAOQAAAPgLALQgKAKgPAAQgPAAgLgKgAMBh2QgKgKAAgPQAAgPAKgLQALgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgLgLgAJxh2QgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAoTh2QgKgKAAgPQAAgPAKgLQALgKAPAAQAPAAAKAKQALALAAAPQAAAPgLAKQgKALgPAAQgPAAgLgLgAqjh2QgLgKAAgPQAAgPALgLQALgKAPAAQAOAAALAKQALALAAAPQAAAPgLAKQgLALgOAAQgPAAgLgLgAshhsQgLgCgIgIQgKgKAAgPQAAgPAKgLQAIgIALgBIAHgBIAAAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAgAJxkGQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgPAAgKgKgAqjkGQgLgLAAgPQAAgPALgKQALgLAPAAQAOAAALALQALAKAAAPQAAAPgLALQgLAKgOAAQgPAAgLgKg");
	this.shape.setTransform(140.875,32.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.on_dots_progress, new cjs.Rectangle(0,0,281.8,65), null);


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


(lib.CTA_large = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(89.175,20.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D252C").s().p("AgcAfQgMgMAAgSIAAgBQAAgRAMgMQALgLARAAQASAAALALQAMALAAASIAAABQAAASgMALQgLALgSAAQgRAAgLgKgAgOgRQgFAGAAALIAAABQAAAMAFAGQAFAHAJgBQAKABAFgHQAFgGAAgMIAAgBQAAgLgFgGQgFgHgKAAQgIAAgGAHg");
	this.shape_1.setTransform(78.875,20.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D252C").s().p("AAWA2IguhPIAABPIgTAAIAAhrIAaAAIApBJIAAhJIAVAAIAABrg");
	this.shape_2.setTransform(69.05,19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D252C").s().p("AgnA1IAAhnIAUAAIAAAMQAEgGAGgEQAHgFAIABQAPgBAJALQAKALAAATIAAABQAAASgKALQgJALgQAAQgQAAgIgOIAAAmgAgOgfQgFAHAAAMIAAABQAAALAFAHQAFAGAJAAQATAAAAgYIAAgBQAAgMgFgHQgFgFgJgBQgJABgFAFg");
	this.shape_3.setTransform(56.375,22.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D252C").s().p("AgcAfQgMgMAAgSIAAgBQAAgRAMgMQALgLARAAQASAAALALQAMALAAASIAAABQAAASgMALQgLALgSAAQgRAAgLgKgAgOgRQgFAGAAALIAAABQAAAMAFAGQAFAHAJgBQAKABAFgHQAFgGAAgMIAAgBQAAgLgFgGQgFgHgKAAQgIAAgGAHg");
	this.shape_4.setTransform(47.225,20.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D252C").s().p("AAQA3IAAgvQAAgPgPgBQgGAAgFAFQgFAEAAAIIAAAuIgUAAIAAhtIAUAAIAAAsQAHgOARAAQANgBAGAIQAIAIAAAOIAAAyg");
	this.shape_5.setTransform(38.5,19.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D252C").s().p("AgpAUIAVAAQACAJADAEQAGAGALAAQAIAAAFgEQAFgFABgGQgBgHgEgDQgEgEgMgCQgUgCgJgGQgJgIAAgPQAAgNALgJQAKgJARAAQAkAAADAgIgUAAQgDgPgQAAQgIAAgFADQgEAEAAAGQAAAGAEADQAFADALACQAUADAJAGQAKAHAAAQQAAAOgLAKQgLAJgSAAQgoAAgDgjg");
	this.shape_6.setTransform(29.45,19.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// yellow_box
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("ApDDIQgUAAAAgUIAAlnQAAgUAUAAISHAAQAUAAAAAUIAAFnQAAAUgUAAg");
	this.shape_7.setTransform(60,20);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA_large, new cjs.Rectangle(0,0,120,40), null);


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
	this.shape.graphics.f("#FFF200").s().p("AhFBEQgcgcAAgoQAAgnAcgcQAcgcApAAQApAAAcAcQAdAcAAAnQAAAogdAcQgcAcgpAAQgpAAgcgcg");
	this.shape.setTransform(833.4,275.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0E6EF").s().p("Ai9DMQhQhJAAh8IAAgHQAAh6BQhNQBOhKB3AAQBwAABHA/QBPBIgBCFIAAAsIlxAAQAHB3BtAAQBUAAANhCICcAAQgNBXhCAwQhCAvhzAAQh6AAhMhGgABrg5QgEhphfAAQhbAAgQBpIDOAAIAAAAg");
	this.shape_1.setTransform(791.25,257.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0E6EF").s().p("AinEJIAAoKICnAAIAABnQAvhvB5ABIAACbQipgDABB8IAAD9g");
	this.shape_2.setTransform(744.25,257.2996);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0E6EF").s().p("Ai+DMQhOhJAAh8IAAgHQAAh6BQhNQBOhKB1AAQByAABGA/QBPBIAACFIAAAsIlzAAQAJB3BrAAQBWAAALhCICeAAQgNBXhCAwQhEAvhxAAQh7AAhNhGgABsg5QgFhphgAAQhaAAgPBpIDOAAIAAAAg");
	this.shape_3.setTransform(694.45,257.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E0E6EF").s().p("ABZFvIAAkzQAAhdhRABQgrAAgZAaQgcAaAAAzIAAEoIimAAIAArdICmAAIAAEoQAyhiB4ABQBQAAAtAvQAwA1AABiIAAFQg");
	this.shape_4.setTransform(636.3,247.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0E6EF").s().p("AioDkQg9gtgEhWICaAAQAKBABGAAQBHAAAAgwQAAgWgWgLQgXgMg2gIQhrgPgsgjQgvgkAAhPQABhQBBguQA7gqBdAAQDRAAAPCmIiXAAQgJg4g+AAQhAAAgBAuQAAAVAWAKQATAKA0AHQBvAOAuAiQA1AlABBQQgBBYg+AuQg8AshtAAQhsAAg+gug");
	this.shape_5.setTransform(564.35,257.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0E6EF").s().p("AhoCUIAAj0IhAAAIAAhzIBAAAIAAhuIClAAIAABuIBqAAIAABzIhqAAIAADkQAAA6A3AAQAbAAAagJIAAB/Qg2AOgqAAQixAAAAiug");
	this.shape_6.setTransform(521.5,252.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E0E6EF").s().p("AinEJIAAoKICnAAIAABnQAvhvB4ABIAACbQingDAAB8IAAD9g");
	this.shape_7.setTransform(485.75,257.2996);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0E6EF").s().p("AjBDtQg1goAAhLQAAhTBGgnQAygeB9gUQBTgOAAgrQgBgzhHAAQhIAAgIBBIicAAQAGhaBFguQA/gsBqAAQDlAAgBC9IAAFaIigAAIAAg/Qg0BLhoAAQhMAAgvglgAAIApQhZAUAAAxQAAA0BBAAQAqAAAcgXQAcgXABgmIAAhCQgUASg3ALg");
	this.shape_8.setTransform(436.35,257.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E0E6EF").s().p("AhoCUIAAj0IhAAAIAAhzIBAAAIAAhuIClAAIAABuIBqAAIAABzIhqAAIAADkQAAA6A3AAQAbAAAagJIAAB/Qg2AOgqAAQixAAAAiug");
	this.shape_9.setTransform(391.9,252.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E0E6EF").s().p("AinDkQg+gtgDhWICaAAQAJBABHAAQBHAAAAgwQAAgWgXgLQgXgMg3gIQhqgPgsgjQgugkgBhPQAAhQBCguQA8gqBdAAQDPAAARCmIiXAAQgLg4g8AAQhBAAAAAuQgBAVAVAKQAUAKAzAHQBvAOAwAiQA0AlAABQQABBYg/AuQg7AshtAAQhuAAg8gug");
	this.shape_10.setTransform(349.65,257.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E0E6EF").s().p("AifFeIBZjmIjRnVIC0AAIByElIBqklICfAAIkYK7g");
	this.shape_11.setTransform(947.65,166.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E0E6EF").s().p("Ai9DMQhPhJAAh8IAAgHQAAh6BQhNQBOhKB2AAQBwAABHA/QBOBIABCFIAAAsIlyAAQAHB3BtAAQBUAAAMhCICeAAQgNBXhDAwQhDAvhxAAQh7AAhMhGgABsg5QgFhphfAAQhbAAgPBpIDOAAIAAAAg");
	this.shape_12.setTransform(891.3,157.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E0E6EF").s().p("ABZEMIAAkyQAAhehRAAQgrAAgZAaQgcAcAAAzIAAEnIimAAIAAoKICmAAIAABUQAxhhB5AAQBQAAAtAwQAwA0AABjIAAFQg");
	this.shape_13.setTransform(833.15,157);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E0E6EF").s().p("AinEJIAAoKICnAAIAABnQAvhvB5ABIAACbQipgDABB8IAAD9g");
	this.shape_14.setTransform(785.3,157.2996);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E0E6EF").s().p("AjLDcQgyg0AAhfIAAlUIClAAIAAE5QAABeBRAAQBgABAAhpIAAkvIClAAIAAIKIilAAIAAhRQgyBeh0AAQhQgBgugvg");
	this.shape_15.setTransform(734.7,158.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E0E6EF").s().p("AjIDLQhRhKAAh6IAAgHQAAh7BRhMQBPhKB6AAQB6AABOBIQBRBKAAB6IAAAHQAAB9hRBLQhPBIh6AAQh6AAhOhHgAhwgFIAAAHQAACTBxAAQA1AAAegmQAdgmAAhFIAAgHQAAiRhwAAQhxAAAACPg");
	this.shape_16.setTransform(675.45,157.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E0E6EF").s().p("Ah3FUQBCgEgBg8IAAoJICkAAIAAILQAABagwAsQg3Axh+ACgAglk3QgbgZABglQgBgmAbgZQAagZAmgBQAnAAAbAaQAbAZAAAmQAAAlgbAZQgaAZgogBQgmABgagZg");
	this.shape_17.setTransform(629.6,156.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E0E6EF").s().p("AioDkQg9gtgDhWICZAAQAKBABGAAQBHAAABgwQAAgWgYgLQgWgMg2gIQhrgPgsgjQguglAAhOQAAhQBBguQA7gqBeAAQDPAAARCmIiYAAQgKg4g9AAQhBAAAAAuQABAVAUAKQAUAKAzAHQBwAOAvAiQA1AmAABPQAABYg/AuQg7AshuAAQhsAAg+gug");
	this.shape_18.setTransform(577.2,157.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E0E6EF").s().p("AinDkQg+gtgEhWICaAAQAKBABGAAQBIAAgBgwQAAgWgWgLQgXgMg3gIQhqgPgsgjQgvglAAhOQAAhQBCguQA8gqBcAAQDRAAAPCmIiWAAQgLg4g8AAQhCAAAAAuQAAAVAWAKQATAKA0AHQBvAOAuAiQA1AmAABPQAABYg+AuQg8AshsAAQhuAAg8gug");
	this.shape_19.setTransform(528.1,157.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E0E6EF").s().p("Ai9DMQhQhJAAh8IAAgHQAAh6BRhNQBOhKB2AAQBxAABGA/QBPBIgBCFIAAAsIlxAAQAHB3BtAAQBVAAAMhCICcAAQgNBXhCAwQhCAvhzAAQh6AAhMhGgABrg5QgEhphfAAQhbAAgPBpIDNAAIAAAAg");
	this.shape_20.setTransform(474.8,157.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E0E6EF").s().p("ABZEMIAAkyQAAhehRAAQgrAAgaAaQgbAcAAAzIAAEnIimAAIAAoKICmAAIAABUQAxhhB5AAQBQAAAtAwQAwA0AABjIAAFQg");
	this.shape_21.setTransform(416.65,157);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E0E6EF").s().p("AhRFvIAArdICjAAIAALdg");
	this.shape_22.setTransform(374,147.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E0E6EF").s().p("AhSFvIAArdICkAAIAALdg");
	this.shape_23.setTransform(348.1,147.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E0E6EF").s().p("Ai9DMQhPhJAAh8IAAgHQAAh6BQhNQBOhKB2AAQBwAABHA/QBOBIABCFIAAAsIlyAAQAHB3BtAAQBUAAAMhCICeAAQgNBXhCAwQhEAvhxAAQh7AAhMhGgABsg5QgFhphfAAQhbAAgPBpIDOAAIAAAAg");
	this.shape_24.setTransform(306.3,157.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E0E6EF").s().p("ABSEFIhSkxIhVExIijAAIifoKICuAAIBTFIIBdlIICFAAIBUFIIBalIICeAAIilIKg");
	this.shape_25.setTransform(237.05,157.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E0E6EF").s().p("AjTEzQhAhIgBiAIAAgIQABiABAhKQA+hGBiAAQBvAAAyBXIAAkfICnAAIAALeIinAAIAAhVQgVAqgqAbQgtAcg3AAQhhAAg9hCgAhrBgIAAAHQgBBGAfAkQAcAlAygBQA1ABAeglQAggkAAhHIAAgIQAAiNhxAAQhuAAAACPg");
	this.shape_26.setTransform(926.4,47.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E0E6EF").s().p("ABZEMIAAkyQAAhehRAAQgrAAgaAaQgbAbAAA0IAAEnIimAAIAAoKICmAAIAABUQAxhhB5AAQBQAAAtAwQAwA0AABjIAAFQg");
	this.shape_27.setTransform(867.45,57);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E0E6EF").s().p("AjBDuQg1gpAAhLQAAhTBGgoQAzgcB7gVQBUgOAAgrQgBgzhHAAQhIAAgHBBIieAAQAIhZBEgvQA/gsBqAAQDlAAgBC9IAAFaIigAAIAAg/Qg0BLhnAAQhNAAgvgkgAAIApQhZAVAAAwQAAA0BCAAQApAAAcgXQAcgYABglIAAhCQgUASg3ALg");
	this.shape_28.setTransform(809.3,57.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E0E6EF").s().p("AioDlQg9gvgDhVICZAAQAKBABGAAQBHAAABgwQAAgVgYgMQgWgMg2gIQhrgPgsgjQguglAAhOQAAhQBBguQA7gqBdAAQDQAAARCmIiYAAQgKg4g9AAQhBAAABAuQAAAUAUAMQAUAJAzAHQBwAOAvAiQA1AmAABPQAABYg/AuQg8AshtAAQhsAAg+gtg");
	this.shape_29.setTransform(741,57.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E0E6EF").s().p("AinDlQg+gvgEhVICaAAQAKBABGAAQBIAAgBgwQAAgVgWgMQgXgMg3gIQhqgPgsgjQgvglAAhOQAAhQBCguQA8gqBcAAQDRAAAPCmIiWAAQgLg4g8AAQhCAAAAAuQAAAUAWAMQATAJA0AHQBvAOAuAiQA1AmAABPQAABYg+AuQg8AshsAAQhuAAg8gtg");
	this.shape_30.setTransform(691.9,57.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E0E6EF").s().p("Ai9DMQhQhJAAh8IAAgHQAAh7BQhMQBPhKB2AAQBwAABHA/QBPBHgBCGIAAAsIlxAAQAHB3BtAAQBVAAAMhCICcAAQgNBYhCAvQhCAvhzAAQh6AAhMhGgABrg5QgEhphfAAQhbAAgQBpIDOAAIAAAAg");
	this.shape_31.setTransform(638.6,57.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E0E6EF").s().p("ABZEMIAAkyQAAhehRAAQgrAAgaAaQgbAbAAA0IAAEnIimAAIAAoKICmAAIAABUQAxhhB5AAQBQAAAtAwQAwA0AABjIAAFQg");
	this.shape_32.setTransform(580.45,57);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E0E6EF").s().p("AhoCUIAAj0IhAAAIAAhzIBAAAIAAhuIClAAIAABuIBqAAIAABzIhqAAIAADkQAAA6A3AAQAcAAAZgJIAAB/Qg2AOgqAAQixAAAAiug");
	this.shape_33.setTransform(532.35,52.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E0E6EF").s().p("AhRFyIAAoKICkAAIAAIKgAhBjbQgbgZABglQgBglAbgaQAagYAngBQAmAAAbAZQAbAaAAAlQAAAlgbAZQgaAZgnAAQgnAAgagZg");
	this.shape_34.setTransform(501.8,46.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E0E6EF").s().p("AhoFyIAAmWIhEAAIAAh0IBEAAIAAgcQAAhdA2gyQAyguBeAAQAigBAtAMIAAB7QgagJgZABQg/AAAAA+IAAAdIBtAAIAAB0IhtAAIAAGWg");
	this.shape_35.setTransform(470.7,46.75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E0E6EF").s().p("AinEJIAAoKICnAAIAABnQAvhvB5ABIAACbQipgDABB8IAAD9g");
	this.shape_36.setTransform(417.2,57.2996);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E0E6EF").s().p("AjLDcQgygzAAhgIAAlUIClAAIAAE6QAABdBRAAQBgAAAAhoIAAkvIClAAIAAIKIilAAIAAhRQgxBdh1AAQhQAAgugvg");
	this.shape_37.setTransform(366.6,58.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E0E6EF").s().p("AjIDLQhRhKAAh6IAAgHQAAh7BRhMQBPhKB6AAQB6AABOBIQBRBKAAB6IAAAHQAAB8hRBMQhPBIh6AAQh6AAhOhHgAhwgFIAAAHQAACTBxAAQA1AAAegmQAdgmAAhFIAAgHQAAiRhwAAQhxAAAACPg");
	this.shape_38.setTransform(307.35,57.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E0E6EF").s().p("AhYFlIAAkzIjqmWIDOAAICBD9ICBj9IC1AAIjeGWIAAEzg");
	this.shape_39.setTransform(245.45,48.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy, new cjs.Rectangle(0,0,1172,304), null);


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
	this.shape.setTransform(44.0164,19.9347,0.0622,0.0622);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6BNIAAiZIApAAQAjAAAUAVQAUAUAAAjIAAABQAAAjgUAUQgVAVgiAAgAgqA/IAZAAQAcAAAQgQQAQgRAAgeIAAAAQAAgegQgQQgRgRgcAAIgYAAg");
	this.shape_1.setTransform(46.5473,19.836,0.062,0.062);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA4BNIAAh/IgyB/IgNAAIgxh/IAAB/IgOAAIAAiZIATAAIAzCGIAziGIAUAAIAACZg");
	this.shape_2.setTransform(45.5445,19.836,0.062,0.062);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfBOIABgCIAwiZIAOAAIgBACIgwCZg");
	this.shape_3.setTransform(44.9231,19.9347,0.0622,0.0622);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AlkRRIAAsVIs72MILLAAIHULwIHUrwILMAAIs7WMIAAMVg");
	this.shape_4.setTransform(35.7053,22.1749,0.0618,0.0618);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVRdQjDAAiyhLQiqhIiFiFQiEiEhIirQhMixAAjDIAAz+ILMAAIAAUgQgBBtBPBPQBPBOBtgBQBugBBMhNQBOhOAAhtIAA0gILFAAIAAT+QAADDhMCxQhICriECEQiECFirBIQiyBLjCAAg");
	this.shape_5.setTransform(22.1192,22.2506,0.0618,0.0618);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Av6RRMAAAgihIQzAAQF1AADYCtQDXCtABDuQAABbgiBSQggBSguAzQgtAvguAnQgvAngfAOIgiANIBPAXQBYAgBJAwQDoCbAAEVQAAF6lTCaQjaBklVAAgAkwJSIFOAAQBegBA9g6QA+g6AAhTQAAhTg+g4Qg9g6heAAIlOAAgAkwkHIEFAAQBPAAAyguQAygvAAhEQAAhFgyguQgygvhPAAIkFAAg");
	this.shape_6.setTransform(9.67,22.1703,0.0618,0.0618);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AlCRoQiegnhqg3Qhqg4hPg3QhPg2gogpIgbgbIGlmRIAmAjQAlAjBxA5QBxA5BnAAQBoAAA6gzQA7gzAAhIQAAgsg2ghQg0gghVgdQhXgehlggIgigLQhZgghTgsQhng2hUhFQhThJg1h3Qg2h4AAiXQAAkbDzjTQDyjSGMAAQCeAACQAhQCQAhBaAvQBaAtBEAuQBDAtAdAkIAIAJImnGRQgsgtg7gcQhPgmhhAAQhbAAgxAoQgwAoAAA+QAAAyBFAoQBIAnBqAaIATAEQBnAbBuAwQB+A2BrBDQBrBFBHCFQBICGAACxQAAEyj4DZQj4DamjAAQioAAidgog");
	this.shape_7.setTransform(29.6289,7.0619,0.0618,0.0618);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AliRRIAA6HIpIAAIAAoaIdVAAIAAIaIpIAAIAAaHg");
	this.shape_8.setTransform(40.8564,7.0619,0.0618,0.0618);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("At8RRMAAAgihIb5AAIAAIaIwuAAIAAEbINnAAIAAH5ItnAAIAAFaIQrAAIAAIZg");
	this.shape_9.setTransform(18.264,7.0619,0.0618,0.0618);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Av7RRMAAAgihIQ1AAQF1AADYCsQDYCtAADvQAABbgiBSQgiBUgtAwQgrAwgvAnQgtAlghAQIgiANIBPAXQBZAgBIAwQDoCcAAEUQAAF5lTCcQjbBjlVAAgAkxJSIFPAAQBdAAA/g7QA+g6gBhSQABhTg+g6Qg+g5heAAIlPAAgAkxkGIEHAAQBPAAAygwQAxguAAhEQAAhFgxguQgygvhPAAIkHAAg");
	this.shape_10.setTransform(6.1545,7.0619,0.0618,0.0618);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#122028").s().p("Ag8A9QgagZAAgkQAAgjAagZQAZgaAjABQAkgBAZAaQAZAZAAAjQAAAkgZAZQgZAZgkAAQgjAAgZgZg");
	this.shape_11.setTransform(42.3802,27.373,0.0622,0.0622);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF200").s().p("AqQK8ImzmZIAApBIG0mdIbTAAIAAV3g");
	this.shape_12.setTransform(47.728,27.4946,0.0624,0.0624);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bby_logo, new cjs.Rectangle(-0.1,-0.1,54.7,32), null);


(lib.CTA_large_MC = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("ApXDrIAAnVISvAAIAAHVg");
	mask.setTransform(60,16.525);

	// CTA_large
	this.instance = new lib.CTA_large();
	this.instance.setTransform(0,46.95);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0},14,cjs.Ease.backOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4.7,120,44.7);


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

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-182.325,y:0}).wait(2).to({graphics:mask_graphics_2,x:-110.0954,y:0.0086}).wait(2).to({graphics:mask_graphics_4,x:-103.1725,y:0.0086}).wait(2).to({graphics:mask_graphics_6,x:-96.034,y:0.0086}).wait(2).to({graphics:mask_graphics_8,x:-89.4943,y:0.0086}).wait(2).to({graphics:mask_graphics_10,x:-82.5474,y:0.0086}).wait(2).to({graphics:mask_graphics_12,x:-75.7203,y:0.0086}).wait(2).to({graphics:mask_graphics_14,x:-68.5818,y:0.0086}).wait(2).to({graphics:mask_graphics_16,x:-61.7547,y:0.0086}).wait(2).to({graphics:mask_graphics_18,x:-54.8078,y:0.0086}).wait(2).to({graphics:mask_graphics_20,x:-47.9807,y:0.0086}).wait(2).to({graphics:mask_graphics_22,x:-35.787,y:0.0086}).wait(2).to({graphics:mask_graphics_24,x:-21.8932,y:0.0086}).wait(2).to({graphics:mask_graphics_26,x:-7.8078,y:0.0086}).wait(2).to({graphics:mask_graphics_28,x:5.6548,y:0.0086}).wait(2).to({graphics:mask_graphics_30,x:19.6923,y:0.0086}).wait(2).to({graphics:mask_graphics_32,x:33.5861,y:0.0086}).wait(2).to({graphics:mask_graphics_34,x:47.0958,y:0.0086}).wait(2).to({graphics:mask_graphics_36,x:53.9229,y:0.0086}).wait(2).to({graphics:mask_graphics_38,x:60.75,y:0.0086}).wait(2).to({graphics:mask_graphics_40,x:67.6969,y:0.0086}).wait(2).to({graphics:mask_graphics_42,x:75.2427,y:0.0086}).wait(2).to({graphics:mask_graphics_44,x:82.3812,y:0.0086}).wait(2).to({graphics:mask_graphics_46,x:89.1125,y:0.0086}).wait(2).to({graphics:mask_graphics_48,x:95.6521,y:0.0086}).wait(2).to({graphics:mask_graphics_50,x:103.1021,y:0.0086}).wait(2).to({graphics:mask_graphics_52,x:109.9292,y:0.0086}).wait(2).to({graphics:mask_graphics_54,x:114.3369,y:0.0086}).wait(2).to({graphics:mask_graphics_56,x:182.325,y:0}).wait(13).to({graphics:mask_graphics_69,x:-182.325,y:0}).wait(2).to({graphics:mask_graphics_71,x:-110.0954,y:0.0086}).wait(2).to({graphics:mask_graphics_73,x:-103.1725,y:0.0086}).wait(2).to({graphics:mask_graphics_75,x:-96.034,y:0.0086}).wait(2).to({graphics:mask_graphics_77,x:-89.4943,y:0.0086}).wait(2).to({graphics:mask_graphics_79,x:-82.5474,y:0.0086}).wait(2).to({graphics:mask_graphics_81,x:-75.7203,y:0.0086}).wait(2).to({graphics:mask_graphics_83,x:-68.5818,y:0.0086}).wait(2).to({graphics:mask_graphics_85,x:-61.7547,y:0.0086}).wait(2).to({graphics:mask_graphics_87,x:-54.8078,y:0.0086}).wait(2).to({graphics:mask_graphics_89,x:-47.9807,y:0.0086}).wait(2).to({graphics:mask_graphics_91,x:-35.787,y:0.0086}).wait(2).to({graphics:mask_graphics_93,x:-21.8932,y:0.0086}).wait(2).to({graphics:mask_graphics_95,x:-7.8078,y:0.0086}).wait(2).to({graphics:mask_graphics_97,x:5.6548,y:0.0086}).wait(2).to({graphics:mask_graphics_99,x:19.6923,y:0.0086}).wait(2).to({graphics:mask_graphics_101,x:33.5861,y:0.0086}).wait(2).to({graphics:mask_graphics_103,x:47.0958,y:0.0086}).wait(2).to({graphics:mask_graphics_105,x:53.9229,y:0.0086}).wait(2).to({graphics:mask_graphics_107,x:60.75,y:0.0086}).wait(2).to({graphics:mask_graphics_109,x:67.6969,y:0.0086}).wait(2).to({graphics:mask_graphics_111,x:75.2427,y:0.0086}).wait(2).to({graphics:mask_graphics_113,x:82.3812,y:0.0086}).wait(2).to({graphics:mask_graphics_115,x:89.1125,y:0.0086}).wait(2).to({graphics:mask_graphics_117,x:95.6521,y:0.0086}).wait(2).to({graphics:mask_graphics_119,x:103.1021,y:0.0086}).wait(2).to({graphics:mask_graphics_121,x:109.9292,y:0.0086}).wait(2).to({graphics:mask_graphics_123,x:114.3369,y:0.0086}).wait(2).to({graphics:mask_graphics_125,x:182.325,y:0}).wait(13).to({graphics:mask_graphics_138,x:-182.325,y:0}).wait(2).to({graphics:mask_graphics_140,x:-110.0954,y:0.0086}).wait(2).to({graphics:mask_graphics_142,x:-103.1725,y:0.0086}).wait(2).to({graphics:mask_graphics_144,x:-96.034,y:0.0086}).wait(2).to({graphics:mask_graphics_146,x:-89.4943,y:0.0086}).wait(2).to({graphics:mask_graphics_148,x:-82.5474,y:0.0086}).wait(2).to({graphics:mask_graphics_150,x:-75.7203,y:0.0086}).wait(2).to({graphics:mask_graphics_152,x:-68.5818,y:0.0086}).wait(2).to({graphics:mask_graphics_154,x:-61.7547,y:0.0086}).wait(2).to({graphics:mask_graphics_156,x:-54.8078,y:0.0086}).wait(2).to({graphics:mask_graphics_158,x:-47.9807,y:0.0086}).wait(2).to({graphics:mask_graphics_160,x:-35.787,y:0.0086}).wait(2).to({graphics:mask_graphics_162,x:-21.8932,y:0.0086}).wait(2).to({graphics:mask_graphics_164,x:-7.8078,y:0.0086}).wait(2).to({graphics:mask_graphics_166,x:5.6548,y:0.0086}).wait(2).to({graphics:mask_graphics_168,x:19.6923,y:0.0086}).wait(2).to({graphics:mask_graphics_170,x:33.5861,y:0.0086}).wait(2).to({graphics:mask_graphics_172,x:47.0958,y:0.0086}).wait(2).to({graphics:mask_graphics_174,x:53.9229,y:0.0086}).wait(2).to({graphics:mask_graphics_176,x:60.75,y:0.0086}).wait(2).to({graphics:mask_graphics_178,x:67.6969,y:0.0086}).wait(2).to({graphics:mask_graphics_180,x:75.2427,y:0.0086}).wait(2).to({graphics:mask_graphics_182,x:82.3812,y:0.0086}).wait(2).to({graphics:mask_graphics_184,x:89.1125,y:0.0086}).wait(2).to({graphics:mask_graphics_186,x:95.6521,y:0.0086}).wait(2).to({graphics:mask_graphics_188,x:103.1021,y:0.0086}).wait(2).to({graphics:mask_graphics_190,x:109.9292,y:0.0086}).wait(2).to({graphics:mask_graphics_192,x:114.3369,y:0.0086}).wait(2).to({graphics:mask_graphics_194,x:182.325,y:0}).wait(13).to({graphics:mask_graphics_207,x:-285.325,y:0}).wait(2).to({graphics:mask_graphics_209,x:-273.325,y:0}).wait(2).to({graphics:mask_graphics_211,x:-258.325,y:0}).wait(2).to({graphics:mask_graphics_213,x:-245.325,y:0}).wait(2).to({graphics:mask_graphics_215,x:-230.325,y:0}).wait(2).to({graphics:mask_graphics_217,x:-217.325,y:0}).wait(2).to({graphics:mask_graphics_219,x:-203.325,y:0}).wait(2).to({graphics:mask_graphics_221,x:-188.325,y:0}).wait(2).to({graphics:mask_graphics_223,x:-175.325,y:0}).wait(2).to({graphics:mask_graphics_225,x:-162.325,y:0}).wait(2).to({graphics:mask_graphics_227,x:-147.325,y:0}).wait(2).to({graphics:mask_graphics_229,x:-134.325,y:0}).wait(2).to({graphics:mask_graphics_231,x:-119.325,y:0}).wait(2).to({graphics:mask_graphics_233,x:-105.325,y:0}).wait(2).to({graphics:mask_graphics_235,x:-92.325,y:0}).wait(2).to({graphics:mask_graphics_237,x:-78.325,y:0}).wait(2).to({graphics:mask_graphics_239,x:-64.325,y:0}).wait(2).to({graphics:mask_graphics_241,x:-50.325,y:0}).wait(2).to({graphics:mask_graphics_243,x:-36.325,y:0}).wait(2).to({graphics:mask_graphics_245,x:-22.325,y:0}).wait(2).to({graphics:mask_graphics_247,x:-8.325,y:0}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// on_idn
	this.instance = new lib.on_dots_progress();
	this.instance.setTransform(-0.65,-0.1,0.9582,0.9582,0,0,0,140.9,32.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(247).to({_off:true},1).wait(1));

	// off
	this.instance_1 = new lib.off_dots_all();
	this.instance_1.setTransform(-0.65,-0.1,0.9582,0.9582,0,0,0,140.9,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(247).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.6,-31.2,269.9,62.2);


// stage content:
(lib._211231healthfitnessfy22_awareness_equipment_300x600_en = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [306];
	// timeline functions:
	this.frame_306 = function() {
		var _this = this;
		/*
		Stop the complete animation.
		*/
		createjs.Ticker.removeEventListener('tick', stage);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(306).call(this.frame_306).wait(1));

	// bby_logo
	this.instance = new lib.bby_logo();
	this.instance.setTransform(150.3,47.95,1.3297,1.3275,0,0,0,27.4,16.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({regX:27.6,scaleX:1.1877,scaleY:1.1839,x:150.5,y:45.65,alpha:1},10,cjs.Ease.quadOut).wait(238));

	// CTA_large_MC
	this.instance_1 = new lib.CTA_large_MC("synched",0,false);
	this.instance_1.setTransform(150,543.4,1,1,0,0,0,60,23.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).wait(248));

	// copy
	this.instance_2 = new lib.copy();
	this.instance_2.setTransform(122.75,123.55,0.3021,0.3021,0,0,0,512.2,52.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({regX:512.1,x:127.7,alpha:1},15,cjs.Ease.quadOut).wait(233));

	// sku
	this.instance_3 = new lib.sku();
	this.instance_3.setTransform(-69.95,131.95,0.089,0.089,0,0,0,0.6,0);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).wait(1).to({regX:2248,regY:1889.3,x:131.2,y:300,alpha:0.06},0).wait(1).to({x:132.45,alpha:0.1204},0).wait(1).to({x:133.65,alpha:0.1811},0).wait(1).to({x:134.85,alpha:0.2421},0).wait(1).to({x:136.1,alpha:0.3032},0).wait(1).to({x:137.3,alpha:0.3643},0).wait(1).to({x:138.55,alpha:0.4252},0).wait(1).to({x:139.75,alpha:0.4858},0).wait(1).to({x:140.95,alpha:0.546},0).wait(1).to({x:142.15,alpha:0.6057},0).wait(1).to({x:143.3,alpha:0.6648},0).wait(1).to({x:144.5,alpha:0.7231},0).wait(1).to({x:145.65,alpha:0.7805},0).wait(1).to({x:146.75,alpha:0.837},0).wait(1).to({x:147.85,alpha:0.8925},0).wait(1).to({x:148.95,alpha:0.9468},0).wait(1).to({regX:0.6,regY:0,x:-49.95,y:131.95,alpha:1},0).wait(27).to({alpha:0},10).wait(5).to({regX:0,regY:0.7,scaleX:0.0723,scaleY:0.0723,x:-12.45,y:223.6},0).to({alpha:1},6).wait(235));

	// mask_dots (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_59 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_60 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_61 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_62 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_63 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_64 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_65 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_66 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_67 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_68 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_69 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_70 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_71 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_72 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_73 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_74 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_75 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_76 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_77 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_78 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_79 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_80 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_81 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_82 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_83 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_84 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_85 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_86 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_87 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_88 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_89 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_90 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_91 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_92 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_93 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");
	var mask_graphics_94 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_graphics_59,x:-147.975,y:353.5}).wait(1).to({graphics:mask_graphics_60,x:-132.275,y:353.5}).wait(1).to({graphics:mask_graphics_61,x:-117.075,y:353.5}).wait(1).to({graphics:mask_graphics_62,x:-102.275,y:353.5}).wait(1).to({graphics:mask_graphics_63,x:-87.975,y:353.5}).wait(1).to({graphics:mask_graphics_64,x:-74.125,y:353.5}).wait(1).to({graphics:mask_graphics_65,x:-60.675,y:353.5}).wait(1).to({graphics:mask_graphics_66,x:-47.725,y:353.5}).wait(1).to({graphics:mask_graphics_67,x:-35.225,y:353.5}).wait(1).to({graphics:mask_graphics_68,x:-23.175,y:353.5}).wait(1).to({graphics:mask_graphics_69,x:-11.575,y:353.5}).wait(1).to({graphics:mask_graphics_70,x:-0.475,y:353.5}).wait(1).to({graphics:mask_graphics_71,x:10.225,y:353.5}).wait(1).to({graphics:mask_graphics_72,x:20.475,y:353.5}).wait(1).to({graphics:mask_graphics_73,x:30.225,y:353.5}).wait(1).to({graphics:mask_graphics_74,x:39.575,y:353.5}).wait(1).to({graphics:mask_graphics_75,x:48.425,y:353.5}).wait(1).to({graphics:mask_graphics_76,x:56.825,y:353.5}).wait(1).to({graphics:mask_graphics_77,x:64.775,y:353.5}).wait(1).to({graphics:mask_graphics_78,x:72.275,y:353.5}).wait(1).to({graphics:mask_graphics_79,x:79.325,y:353.5}).wait(1).to({graphics:mask_graphics_80,x:85.925,y:353.5}).wait(1).to({graphics:mask_graphics_81,x:92.075,y:353.5}).wait(1).to({graphics:mask_graphics_82,x:97.725,y:353.5}).wait(1).to({graphics:mask_graphics_83,x:102.975,y:353.5}).wait(1).to({graphics:mask_graphics_84,x:107.725,y:353.5}).wait(1).to({graphics:mask_graphics_85,x:112.075,y:353.5}).wait(1).to({graphics:mask_graphics_86,x:115.925,y:353.5}).wait(1).to({graphics:mask_graphics_87,x:119.325,y:353.5}).wait(1).to({graphics:mask_graphics_88,x:122.275,y:353.5}).wait(1).to({graphics:mask_graphics_89,x:124.775,y:353.5}).wait(1).to({graphics:mask_graphics_90,x:126.825,y:353.5}).wait(1).to({graphics:mask_graphics_91,x:128.425,y:353.5}).wait(1).to({graphics:mask_graphics_92,x:129.575,y:353.5}).wait(1).to({graphics:mask_graphics_93,x:130.225,y:353.5}).wait(1).to({graphics:mask_graphics_94,x:130.475,y:353.5}).wait(1).to({graphics:null,x:0,y:0}).wait(212));

	// background_dots
	this.instance_4 = new lib.background_dots("synched",0,false);
	this.instance_4.setTransform(154,354.1,0.9581,0.958,0,0,0,4.2,1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({_off:false},0).wait(248));

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
	var mask_1_graphics_52 = new cjs.Graphics().p("A5JIhIAAxBMAyTAAAIAARBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(41).to({graphics:mask_1_graphics_41,x:173.525,y:300}).wait(1).to({graphics:mask_1_graphics_42,x:175.925,y:300}).wait(1).to({graphics:mask_1_graphics_43,x:183.025,y:300}).wait(1).to({graphics:mask_1_graphics_44,x:194.925,y:300}).wait(1).to({graphics:mask_1_graphics_45,x:211.575,y:300}).wait(1).to({graphics:mask_1_graphics_46,x:233.025,y:300}).wait(1).to({graphics:mask_1_graphics_47,x:259.175,y:300}).wait(1).to({graphics:mask_1_graphics_48,x:290.125,y:300}).wait(1).to({graphics:mask_1_graphics_49,x:325.825,y:300}).wait(1).to({graphics:mask_1_graphics_50,x:366.275,y:300}).wait(1).to({graphics:mask_1_graphics_51,x:411.475,y:300}).wait(1).to({graphics:mask_1_graphics_52,x:461.475,y:300}).wait(1).to({graphics:null,x:0,y:0}).wait(254));

	// background_dots_intro
	this.instance_5 = new lib.background_dots("synched",0);
	this.instance_5.setTransform(150.7,300.15);
	this.instance_5.alpha = 0;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1,startPosition:9},9).wait(32).to({startPosition:63},0).to({x:160.7,startPosition:4},11,cjs.Ease.quadIn).to({_off:true},1).wait(254));

	// gradient
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#4976E4","#001E73"],[0,1],-0.2,-0.2,0,-0.2,-0.2,416.5).s().p("EgtnAtoQy6y6AA6uQAA6tS6y6QS6y6auAAQauAAS4S6QS7S6AAatQAAauy7S6Qy4S66uAAQ6uAAy6y6g");
	this.shape.setTransform(150.3,436.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(307));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-112.7,323.5,676,525.9);
// library properties:
lib.properties = {
	id: '13FBD7200604434D961FE82350812970',
	width: 300,
	height: 600,
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