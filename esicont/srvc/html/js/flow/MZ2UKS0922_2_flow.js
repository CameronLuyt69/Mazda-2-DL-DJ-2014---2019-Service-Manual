(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.シーン_1_yellow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// yellow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.702)").s().p("AhIBfIAAi9ICQAAIAAC9g");
	this.shape.setTransform(116.85,171.225);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4).to({_off:false},0).wait(128));

}).prototype = p = new cjs.MovieClip();


(lib.シーン_1_yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// yellow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.702)").s().p("AgTBSIAAghIhCAhIAAijIBCAhIAAghIBAAAIAAAVQAaALALAZQAJAZgKAZQgKAYgaALIAAAVg");
	this.shape.setTransform(283.4382,276.675);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(101).to({_off:false},0).wait(31));

}).prototype = p = new cjs.MovieClip();


(lib.シーン_1_switch_idn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// switch_idn
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.6,1,1).p("AhEgWICKAt");
	this.shape.setTransform(117.6797,205.1674,0.783,0.783);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.6,1,1).p("AgSA2IAmhr");
	this.shape_1.setTransform(389.05,296.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.6,1,1).p("AgJA5IAThx");
	this.shape_2.setTransform(388.325,295.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{rotation:0,x:117.6797,y:205.1674}}]}).to({state:[{t:this.shape,p:{rotation:0,x:117.6797,y:205.1674}},{t:this.shape_2}]},4).to({state:[{t:this.shape_2},{t:this.shape,p:{rotation:-9.9994,x:117.6859,y:204.574}}]},66).wait(62));

}).prototype = p = new cjs.MovieClip();


(lib.シーン_1_常時 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 常時
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.502)").s().p("AoiNIIAA2aIQGAAIADi5IvXAAIAAg8IQTAAIgDExIwGAAIAAPjIMJAAIAAA7IsJAAIAAEEIL/AAIAAA8g");
	this.shape.setTransform(80.775,122.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4).to({_off:false},0).wait(128));

}).prototype = p = new cjs.MovieClip();


(lib.シーン_1__7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,255,0.702)").s().p("AgdAKIAAgTIA7AAIAAATg");
	this.shape.setTransform(284.55,285.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,255,0.702)").s().p("AgdAoIAAhPIA7AAIAABPg");
	this.shape_1.setTransform(284.55,288.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,255,0.702)").s().p("AgdBGIAAiLIA7AAIAACLg");
	this.shape_2.setTransform(284.55,291.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,255,0.702)").s().p("AgdBkIAAjHIA7AAIAADHg");
	this.shape_3.setTransform(284.55,294.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,255,0.702)").s().p("AgdCCIAAkDIA7AAIAAEDg");
	this.shape_4.setTransform(284.55,297.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,255,0.702)").s().p("AgdCgIAAk/IA7AAIAAE/g");
	this.shape_5.setTransform(284.55,300.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,255,0.702)").s().p("AgdC+IAAl7IA7AAIAAF7g");
	this.shape_6.setTransform(284.55,303.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,255,0.702)").s().p("AgdDcIAAm3IA7AAIAAG3g");
	this.shape_7.setTransform(284.55,306.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,255,0.702)").s().p("AgdD6IAAnzIA7AAIAAHzg");
	this.shape_8.setTransform(284.55,309.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,255,0.702)").s().p("AgdEYIAAovIA7AAIAAIvg");
	this.shape_9.setTransform(284.55,312.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,255,0.702)").s().p("AgdE2IAAprIA7AAIAAJrg");
	this.shape_10.setTransform(284.55,315.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},102).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(20));

}).prototype = p = new cjs.MovieClip();


(lib.シーン_1__6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.702)").s().p("AgdAKIAAgTIA7AAIAAATg");
	this.shape.setTransform(284.1,207.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,0,0.702)").s().p("AgdAlIAAhJIA7AAIAABJg");
	this.shape_1.setTransform(284.1,210.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,0,0,0.702)").s().p("AgdBBIAAiBIA7AAIAACBg");
	this.shape_2.setTransform(284.1,212.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,0,0,0.702)").s().p("AgdBcIAAi3IA7AAIAAC3g");
	this.shape_3.setTransform(284.1,215.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,0,0,0.702)").s().p("AgdB3IAAjtIA7AAIAADtg");
	this.shape_4.setTransform(284.1,218.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,0,0,0.702)").s().p("AgdCSIAAkjIA7AAIAAEjg");
	this.shape_5.setTransform(284.1,221.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,0,0,0.702)").s().p("AgdCuIAAlbIA7AAIAAFbg");
	this.shape_6.setTransform(284.1,223.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,0,0,0.702)").s().p("AgdDJIAAmRIA7AAIAAGRg");
	this.shape_7.setTransform(284.1,226.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,0,0,0.702)").s().p("AgdDkIAAnHIA7AAIAAHHg");
	this.shape_8.setTransform(284.1,229.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,0,0,0.702)").s().p("AgdD/IAAn+IA7AAIAAH+g");
	this.shape_9.setTransform(284.1,231.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,0,0,0.702)").s().p("AgdEbIAAo1IA7AAIAAI1g");
	this.shape_10.setTransform(284.1,234.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,0,0,0.702)").s().p("AgdE2IAAprIA7AAIAAJrg");
	this.shape_11.setTransform(284.1,237.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},89).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(32));

}).prototype = p = new cjs.MovieClip();


(lib.シーン_1__5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.702)").s().p("AgJAeIAAg7IATAAIAAA7g");
	this.shape.setTransform(109.85,203.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,0,0.702)").s().p("Ag6AeIAAg7IB1AAIAAA7g");
	this.shape_1.setTransform(114.75,203.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,0,0,0.702)").s().p("AhrAeIAAg7IDXAAIAAA7g");
	this.shape_2.setTransform(119.65,203.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,0,0,0.702)").s().p("AicAeIAAg7IE5AAIAAA7g");
	this.shape_3.setTransform(124.55,203.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,0,0,0.702)").s().p("AjNAeIAAg7IGbAAIAAA7g");
	this.shape_4.setTransform(129.425,203.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,0,0,0.702)").s().p("Aj+AeIAAg7IH9AAIAAA7g");
	this.shape_5.setTransform(134.325,203.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,0,0,0.702)").s().p("AkvAeIAAg7IJfAAIAAA7g");
	this.shape_6.setTransform(139.225,203.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,0,0,0.702)").s().p("AlgAeIAAg7ILBAAIAAA7g");
	this.shape_7.setTransform(144.125,203.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,0,0,0.702)").s().p("AmRAeIAAg7IMjAAIAAA7g");
	this.shape_8.setTransform(149.025,203.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,0,0,0.702)").s().p("AnCAeIAAg7IOFAAIAAA7g");
	this.shape_9.setTransform(153.925,203.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,0,0,0.702)").s().p("AnzAeIAAg7IPmAAIAAA7g");
	this.shape_10.setTransform(158.8,203.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,0,0,0.702)").s().p("AokAeIAAg7IRIAAIAAA7g");
	this.shape_11.setTransform(163.7,203.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,0,0,0.702)").s().p("ApVAeIAAg7ISqAAIAAA7g");
	this.shape_12.setTransform(168.6,203.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,0,0,0.702)").s().p("AqGAeIAAg7IUMAAIAAA7g");
	this.shape_13.setTransform(173.5,203.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,0,0,0.702)").s().p("Aq3AeIAAg7IVuAAIAAA7g");
	this.shape_14.setTransform(178.4,203.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,0,0,0.702)").s().p("ArnAeIAAg7IXPAAIAAA7g");
	this.shape_15.setTransform(183.275,203.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,0,0,0.702)").s().p("AsYAeIAAg7IYxAAIAAA7g");
	this.shape_16.setTransform(188.175,203.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,0,0,0.702)").s().p("AtJAeIAAg7IaTAAIAAA7g");
	this.shape_17.setTransform(193.075,203.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,0,0,0.702)").s().p("At6AeIAAg7Ib1AAIAAA7g");
	this.shape_18.setTransform(197.975,203.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},71).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).wait(43));

}).prototype = p = new cjs.MovieClip();


(lib.シーン_1__4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,255,0.702)").s().p("AgdAKIAAgTIA7AAIAAATg");
	this.shape.setTransform(387.15,95.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,255,0.702)").s().p("AgdA+IAAh7IA7AAIAAB7g");
	this.shape_1.setTransform(387.15,101.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,255,0.702)").s().p("AgdByIAAjjIA7AAIAADjg");
	this.shape_2.setTransform(387.15,106.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,255,0.702)").s().p("AgdCmIAAlLIA7AAIAAFLg");
	this.shape_3.setTransform(387.15,111.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,255,0.702)").s().p("AgdDaIAAmzIA7AAIAAGzg");
	this.shape_4.setTransform(387.15,116.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,255,0.702)").s().p("AgdEPIAAodIA7AAIAAIdg");
	this.shape_5.setTransform(387.15,121.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,255,0.702)").s().p("AgdFCIAAqEIA7AAIAAKEg");
	this.shape_6.setTransform(387.15,127.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,255,0.702)").s().p("AgdF3IAArtIA7AAIAALtg");
	this.shape_7.setTransform(387.15,132.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,255,0.702)").s().p("AgdGrIAAtVIA7AAIAANVg");
	this.shape_8.setTransform(387.15,137.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,255,0.702)").s().p("AgdHfIAAu9IA7AAIAAO9g");
	this.shape_9.setTransform(387.15,142.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,255,0.702)").s().p("AgdITIAAwlIA7AAIAAQlg");
	this.shape_10.setTransform(387.15,147.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,255,0.702)").s().p("AgdJHIAAyNIA7AAIAASNg");
	this.shape_11.setTransform(387.15,153.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,255,0.702)").s().p("AgdJ7IAAz1IA7AAIAAT1g");
	this.shape_12.setTransform(387.15,158.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,255,0.702)").s().p("AgdKvIAA1dIA7AAIAAVdg");
	this.shape_13.setTransform(387.15,163.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,255,0.702)").s().p("AgdLjIAA3FIA7AAIAAXFg");
	this.shape_14.setTransform(387.15,168.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,255,0.702)").s().p("AgdMXIAA4tIA7AAIAAYtg");
	this.shape_15.setTransform(387.15,174.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,255,0.702)").s().p("AgdNLIAA6VIA7AAIAAaVg");
	this.shape_16.setTransform(387.15,179.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,255,0.702)").s().p("AgdN/IAA7+IA7AAIAAb+g");
	this.shape_17.setTransform(387.15,184.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,255,0.702)").s().p("AgdOzIAA9mIA7AAIAAdmg");
	this.shape_18.setTransform(387.15,189.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,255,0.702)").s().p("AgdPoIAA/PIA7AAIAAfPg");
	this.shape_19.setTransform(387.15,194.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,255,0.702)").s().p("AgdQcMAAAgg3IA7AAMAAAAg3g");
	this.shape_20.setTransform(387.15,200.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,255,0.702)").s().p("AgdRQMAAAgifIA7AAMAAAAifg");
	this.shape_21.setTransform(387.15,205.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,255,0.702)").s().p("AgdSEMAAAgkHIA7AAMAAAAkHg");
	this.shape_22.setTransform(387.15,210.475);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,255,0.702)").s().p("AgdS4MAAAglvIA7AAMAAAAlvg");
	this.shape_23.setTransform(387.15,215.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,255,0.702)").s().p("AgdTsMAAAgnXIA7AAMAAAAnXg");
	this.shape_24.setTransform(387.15,220.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},45).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).wait(63));

}).prototype = p = new cjs.MovieClip();


(lib.シーン_1__3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,255,0.702)").s().p("AgJAeIAAg7IATAAIAAA7g");
	this.shape.setTransform(288.55,91.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,255,0.702)").s().p("Ag3AeIAAg7IBvAAIAAA7g");
	this.shape_1.setTransform(293.125,91.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,255,0.702)").s().p("AhlAeIAAg7IDLAAIAAA7g");
	this.shape_2.setTransform(297.7,91.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,255,0.702)").s().p("AiSAeIAAg7IElAAIAAA7g");
	this.shape_3.setTransform(302.275,91.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,255,0.702)").s().p("AjAAeIAAg7IGBAAIAAA7g");
	this.shape_4.setTransform(306.85,91.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,255,0.702)").s().p("AjuAeIAAg7IHdAAIAAA7g");
	this.shape_5.setTransform(311.425,91.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,255,0.702)").s().p("AkbAeIAAg7II3AAIAAA7g");
	this.shape_6.setTransform(315.975,91.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,255,0.702)").s().p("AlJAeIAAg7IKTAAIAAA7g");
	this.shape_7.setTransform(320.55,91.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,255,0.702)").s().p("Al3AeIAAg7ILvAAIAAA7g");
	this.shape_8.setTransform(325.125,91.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,255,0.702)").s().p("AmlAeIAAg7INLAAIAAA7g");
	this.shape_9.setTransform(329.7,91.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,255,0.702)").s().p("AnSAeIAAg7IOlAAIAAA7g");
	this.shape_10.setTransform(334.275,91.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,255,0.702)").s().p("AoAAeIAAg7IQBAAIAAA7g");
	this.shape_11.setTransform(338.85,91.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},34).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(87));

}).prototype = p = new cjs.MovieClip();


(lib.シーン_1__2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,255,0.702)").s().p("AgdAKIAAgTIA7AAIAAATg");
	this.shape.setTransform(284.55,167.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,255,0.702)").s().p("AgdAqIAAhTIA7AAIAABTg");
	this.shape_1.setTransform(284.55,164.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,255,0.702)").s().p("AgdBLIAAiVIA7AAIAACVg");
	this.shape_2.setTransform(284.55,160.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,255,0.702)").s().p("AgdBrIAAjVIA7AAIAADVg");
	this.shape_3.setTransform(284.55,157.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,255,0.702)").s().p("AgdCLIAAkVIA7AAIAAEVg");
	this.shape_4.setTransform(284.55,154.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,255,0.702)").s().p("AgdCrIAAlVIA7AAIAAFVg");
	this.shape_5.setTransform(284.55,151.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,255,0.702)").s().p("AgdDMIAAmWIA7AAIAAGWg");
	this.shape_6.setTransform(284.55,147.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,255,0.702)").s().p("AgdDsIAAnXIA7AAIAAHXg");
	this.shape_7.setTransform(284.55,144.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,255,0.702)").s().p("AgdEMIAAoXIA7AAIAAIXg");
	this.shape_8.setTransform(284.55,141.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,255,0.702)").s().p("AgdEsIAApXIA7AAIAAJXg");
	this.shape_9.setTransform(284.55,138.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,255,0.702)").s().p("AgdFNIAAqZIA7AAIAAKZg");
	this.shape_10.setTransform(284.55,135.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,255,0.702)").s().p("AgdFtIAArZIA7AAIAALZg");
	this.shape_11.setTransform(284.55,131.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,255,0.702)").s().p("AgdGNIAAsZIA7AAIAAMZg");
	this.shape_12.setTransform(284.55,128.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},22).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).wait(98));

}).prototype = p = new cjs.MovieClip();


(lib.シーン_1__1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,255,0.702)").s().p("AgJAeIAAg7IATAAIAAA7g");
	this.shape.setTransform(125,171.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,255,0.702)").s().p("Ag4AeIAAg7IByAAIAAA7g");
	this.shape_1.setTransform(129.75,171.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,255,0.702)").s().p("AhoAeIAAg7IDRAAIAAA7g");
	this.shape_2.setTransform(134.5,171.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,255,0.702)").s().p("AiYAeIAAg7IExAAIAAA7g");
	this.shape_3.setTransform(139.275,171.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,255,0.702)").s().p("AjHAeIAAg7IGPAAIAAA7g");
	this.shape_4.setTransform(144.025,171.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,255,0.702)").s().p("Aj3AeIAAg7IHvAAIAAA7g");
	this.shape_5.setTransform(148.775,171.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,255,0.702)").s().p("AkmAeIAAg7IJNAAIAAA7g");
	this.shape_6.setTransform(153.525,171.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,255,0.702)").s().p("AlWAeIAAg7IKtAAIAAA7g");
	this.shape_7.setTransform(158.275,171.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,255,0.702)").s().p("AmFAeIAAg7IMLAAIAAA7g");
	this.shape_8.setTransform(163.025,171.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,255,0.702)").s().p("Am1AeIAAg7INrAAIAAA7g");
	this.shape_9.setTransform(167.8,171.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,255,0.702)").s().p("AnkAeIAAg7IPKAAIAAA7g");
	this.shape_10.setTransform(172.55,171.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,255,0.702)").s().p("AoUAeIAAg7IQpAAIAAA7g");
	this.shape_11.setTransform(177.3,171.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,255,0.702)").s().p("ApDAeIAAg7ISIAAIAAA7g");
	this.shape_12.setTransform(182.05,171.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,255,0.702)").s().p("ApzAeIAAg7ITnAAIAAA7g");
	this.shape_13.setTransform(186.8,171.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,255,0.702)").s().p("AqiAeIAAg7IVGAAIAAA7g");
	this.shape_14.setTransform(191.55,171.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,255,0.702)").s().p("ArSAeIAAg7IWlAAIAAA7g");
	this.shape_15.setTransform(196.325,171.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,255,0.702)").s().p("AsCAeIAAg7IYFAAIAAA7g");
	this.shape_16.setTransform(201.075,171.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,255,0.702)").s().p("AsxAeIAAg7IZjAAIAAA7g");
	this.shape_17.setTransform(205.825,171.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).wait(110));

}).prototype = p = new cjs.MovieClip();


(lib.Title_レイヤー_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAkIABgGQACgFAEgFQAEgEAIgGQAKgKAEgFQAEgFAAgFQAAgFgDgEQgEgDgGAAQgFAAgEADQgEAEAAAHIgJgBQABgKAGgGQAGgFAJAAQAKAAAGAGQAGAFAAAJQAAAFgBAEIgGAHQgEAFgKAIIgJAJIgEAFIAjAAIAAAIg");
	this.shape.setTransform(566.725,12.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNAEIAAgIIAaAAIAAAIg");
	this.shape_1.setTransform(562.35,13.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXAkIABgGQACgFAEgFQAEgEAIgGQAKgKAEgFQAEgFAAgFQAAgFgDgEQgEgDgGAAQgFAAgEADQgEAEAAAHIgJgBQABgKAGgGQAGgFAJAAQAKAAAGAGQAGAFAAAJQAAAFgBAEIgGAHQgEAFgKAIIgJAJIgEAFIAjAAIAAAIg");
	this.shape_2.setTransform(557.825,12.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXAkIABgGQACgFAEgFQAEgEAIgGQAKgKAEgFQAEgFAAgFQAAgFgDgEQgEgDgGAAQgFAAgEADQgEAEAAAHIgJgBQABgKAGgGQAGgFAJAAQAKAAAGAGQAGAFAAAJQAAAFgBAEIgGAHQgEAFgKAIIgJAJIgEAFIAjAAIAAAIg");
	this.shape_3.setTransform(552.275,12.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgPAgQgFgEgBgJIAJgBQABAGACADQADADAGAAQACgBAEgCQACgBACgDQACgDACgFIABgLIAAgCQgCAEgFACQgFADgEAAQgJAAgGgGQgHgFAAgLQAAgLAHgHQAHgHAJAAQAGAAAGAFQAFADADAHQAEAHAAANQAAANgEAIQgCAIgGAFQgGADgHAAQgIABgGgFgAgJgXQgFAFAAAHQAAAHAFAEQAEAEAFAAQAGAAAEgEQAEgEAAgHQAAgIgEgEQgEgFgGAAQgEAAgFAFg");
	this.shape_4.setTransform(546.8,12.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgPAeQgIgKABgUQAAgMACgHQADgIAFgEQAFgEAHgBQAGABAEACQAEACADAEQADAFACAGQABAHAAAJQAAANgCAIQgDAIgFAEQgFADgIAAQgKAAgFgGgAgJgXQgFAGABARQgBASAFAGQAEAFAFABQAGgBAEgFQAEgGABgSQgBgRgEgFQgEgGgGAAQgFAAgEAFg");
	this.shape_5.setTransform(541.25,12.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AATAkIglg3IAAA3IgJAAIAAhHIAKAAIAkA3IAAg3IAJAAIAABHg");
	this.shape_6.setTransform(25.075,12.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AATAkIgJgPIgHgKIgEgFIgEgCIgFAAIgLAAIAAAgIgJAAIAAhHIAeAAQAJAAAGACQAFACADAFQACAFAAAGQAAAHgEAGQgGAEgJABIAFAEQAFAEADAFIANAUgAgVgDIAUAAQAFAAAEgCQAEgBACgDQACgDAAgDQAAgFgEgEQgDgDgJAAIgVAAg");
	this.shape_7.setTransform(18.25,12.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgRAgQgIgEgEgJQgEgIAAgKQAAgQAJgKQAKgLAOAAQAKAAAIAFQAIAEAEAJQAEAJAAAKQAAAKgEAJQgFAJgIAEQgIAEgJAAQgJAAgIgFgAgQgVQgIAHAAAQQAAAMAHAHQAHAIAKAAQAKAAAHgIQAHgHAAgNQAAgJgDgGQgDgGgFgEQgGgDgHAAQgJgBgHAHg");
	this.shape_8.setTransform(10.425,12.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AATAkIAAgiIgkAAIAAAiIgKAAIAAhHIAKAAIAAAeIAkAAIAAgeIAJAAIAABHg");
	this.shape_9.setTransform(2.9,12.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Title_レイヤー_1, null, null);


(lib.panel_back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(0.3,1,1).p("Ax0kbIgBAAARAEcIABAAIATgEQAKgDAIgIQAQgOAAgVIAAnTQAAgVgQgPQgIgHgKgEIgTgDAx1EcMAi1AAA");
	this.shape.setTransform(-175.3375,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("ARbEcIAAAAMgi1AAAIgUgEQgJgDgIgIQgQgOAAgVIAAnTQAAgUAQgPQAIgIAJgEIAUgDIABAAMAi0AAAIAUADQAJAEAIAIQAQAPAAAUIAAHTQAAAVgQAOQgIAHgJAEIgUAEg");
	this.shape_1.setTransform(-178.0125,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-294.8,-28.4,234.70000000000002,58.8);


(lib.horn_menu_back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// back
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("An9D/QgXAAgSgRQgQgQAAgXIAAmMQAAgYAQgRQASgQAXAAIP7AAQAYAAARAQQAQARAAAYIAAGMQAAAXgQAQQgRARgYAAg");
	this.shape.setTransform(103.95,1.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("An9D/QgXAAgRgQQgRgRAAgYIAAmMQAAgXARgQQARgRAXAAIP7AAQAYAAAQARQARAQAAAXIAAGMQAAAYgRARQgQAQgYAAg");
	this.shape_1.setTransform(104.775,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("An9D/QgXAAgRgQQgRgSAAgXIAAmMQAAgXARgQQARgRAXAAIP7AAQAYAAAQARQARAQAAAXIAAGMQAAAXgRASQgQAQgYAAg");
	this.shape_2.setTransform(102.775,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.horn_menu_back, null, null);


(lib.horn_comment_mc_comment = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// comment
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape.setTransform(31.65,20.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPAXQgHgFgBgHIANgCQABAEADACQADACADAAQAGAAACgCQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIgBgDIgEgCQgQgDgEgDQgHgEAAgHQAAgHAGgFQAFgEALAAQAKAAAFAEQAFADACAHIgNACQAAgDgDgBQgCgCgEAAQgFAAgCACQgBAAAAAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAQABACAKADQALACAFADQAEADAAAHQAAAHgGAFQgGAFgMAAQgJAAgGgEg");
	this.shape_1.setTransform(27.675,18.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgBAjIgFgEIgBgFIgBgKIAAgWIgGAAIAAgLIAGAAIAAgKIANgIIAAASIAJAAIAAALIgJAAIAAAVIAAAHIABACIADABIAFgCIABALQgEABgHAAIgFAAg");
	this.shape_2.setTransform(23.625,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGAkIAAgzIANAAIAAAzgAgGgWIAAgNIANAAIAAANg");
	this.shape_3.setTransform(20.85,17.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgPAZQgEgDgCgEQgCgEAAgHIAAghIAOAAIAAAZQAAAKABACQAAABAAAAQABABAAAAQAAABABAAQAAABAAAAIAGABQACAAADgBQADgCABgEQABgDAAgJIAAgXIAOAAIAAA0IgNAAIAAgIQgDAEgFADQgDABgGAAQgFAAgEgBg");
	this.shape_4.setTransform(16.7,18.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQAUQgIgHABgNQgBgMAIgHQAGgHALAAQAJAAAGAEQAFAEADAIIgNADQgCgEgCgCQgCgCgEAAQgEAAgDADQgDAEAAAIQAAAJADADQADAEAEAAQAEAAACgCQADgDABgFIANACQgBAKgHAEQgGAFgJAAQgLAAgGgHg");
	this.shape_5.setTransform(11.25,18.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgQAbIAAg0IANAAIAAAIIAFgHIAGgBQAFAAAEACIgEAMQgEgCgDAAQgDAAgCACQgBABgBAEIgBAQIAAARg");
	this.shape_6.setTransform(7.125,18.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGAkIAAgzIANAAIAAAzgAgGgWIAAgNIANAAIAAANg");
	this.shape_7.setTransform(3.7,17.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgRAUQgGgHAAgNQAAgMAGgHQAHgHALAAQAJAAAGAEQAFAEADAIIgNADQgCgEgCgCQgCgCgEAAQgEAAgDADQgDAEAAAIQAAAJADADQADAEAEAAQAEAAACgCQADgDABgFIANACQgBAKgHAEQgFAFgLAAQgKAAgHgHg");
	this.shape_8.setTransform(-0.1,18.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSAdQgGgHAAgNQAAgMAGgHQAGgHAKAAQAHAAAHAHIAAgZIANAAIAABGIgMAAIAAgHQgDAEgFACQgEACgDAAQgJAAgHgHgAgHgCQgDACAAAIQAAAJACADQADAGAFAAQAFAAADgEQAEgEAAgIQAAgJgDgDQgEgEgFAAQgEAAgDAEg");
	this.shape_9.setTransform(-8.325,17.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSATQgFgIAAgKQAAgMAHgIQAGgHAKAAQALAAAHAHQAHAJgBAOIghAAQAAAGADADQADAEAEAAQADAAADgCQACgBABgEIAOACQgDAIgGADQgFAEgJAAQgMAAgHgIgAgGgMQgDADAAAGIAUAAQAAgGgDgDQgDgDgEAAQgEAAgDADg");
	this.shape_10.setTransform(-13.7733,18.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgBAjIgFgEIgBgFIgBgKIAAgWIgGAAIAAgLIAGAAIAAgKIANgIIAAASIAJAAIAAALIgJAAIAAAVIAAAHIABACIADABIAFgCIABALQgEABgHAAIgFAAg");
	this.shape_11.setTransform(-17.875,17.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTAXQgEgFAAgGQAAgEACgEQACgEAEAAIALgDIAMgEIAAgBQAAgEgCgCQgCgBgEAAQgEAAgCABQgCABgBAEIgNgDQACgHAFgDQAGgEAJAAQAJAAAEACQAFACACADQACAEAAAJIgBAPIABAKIACAHIgNAAIgBgEIgBgBQgDADgEABQgDACgFAAQgIAAgFgEgAAAADIgHACQgCACAAAEQAAADACABQACACADAAQADAAADgCIAEgEIAAgHIAAgDIgIACg");
	this.shape_12.setTransform(-22.025,18.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGAkIAAhHIANAAIAABHg");
	this.shape_13.setTransform(-25.9,17.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgSATQgFgIAAgKQAAgMAHgIQAGgHAKAAQALAAAHAHQAHAJgBAOIghAAQAAAGADADQADAEAEAAQADAAADgCQACgBABgEIAOACQgDAIgGADQgFAEgJAAQgMAAgHgIgAgGgMQgDADAAAGIAUAAQAAgGgDgDQgDgDgEAAQgEAAgDADg");
	this.shape_14.setTransform(-29.8233,18.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAbIAAg0IANAAIAAAIIAFgHIAGgBQAFAAAEACIgEAMQgEgCgDAAQgDAAgCACQgBABgBAEIgBAQIAAARg");
	this.shape_15.setTransform(-33.825,18.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgSATQgFgIAAgKQAAgMAHgIQAGgHAKAAQALAAAHAHQAHAJgBAOIghAAQAAAGADADQADAEAEAAQADAAADgCQACgBABgEIAOACQgDAIgGADQgFAEgJAAQgMAAgHgIgAgGgMQgDADAAAGIAUAAQAAgGgDgDQgDgDgEAAQgEAAgDADg");
	this.shape_16.setTransform(-41.1733,18.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAKAkIAAgcIgBgJQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQgCgCgDAAQgCAAgDACIgEAEIgBAKIAAAaIgOAAIAAhHIAOAAIAAAaQAHgHAIAAQAFAAAEABIAFAFQACADABADIABAJIAAAfg");
	this.shape_17.setTransform(-46.625,17.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgBAjIgFgEIgBgFIgBgKIAAgWIgGAAIAAgLIAGAAIAAgKIANgIIAAASIAJAAIAAALIgJAAIAAAVIAAAHIABACIADABIAFgCIABALQgEABgHAAIgFAAg");
	this.shape_18.setTransform(-51.075,17.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAKAaIAAgaQAAgIgBgCQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQgCgCgDAAQgCAAgDACQgDACgBADIgBALIAAAXIgOAAIAAgzIANAAIAAAIQAHgIAJgBQAFAAADACQAEACACACQACADABADIABAKIAAAeg");
	this.shape_19.setTransform(52.025,7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGAkIAAgzIANAAIAAAzgAgGgWIAAgNIANAAIAAANg");
	this.shape_20.setTransform(47.85,6.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAJAaIgJghIgIAhIgNAAIgRgzIAOAAIAKAhIAIghIAMAAIAJAhIAKghIANAAIgQAzg");
	this.shape_21.setTransform(40.25,7.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgNAYQgGgDgDgHQgEgGAAgIQAAgHAEgGQADgHAGgDQAGgDAHAAQAMAAAHAIQAIAHAAALQAAALgIAJQgHAHgMAAQgGAAgHgDgAgIgKQgEAEAAAGQAAAIAEAEQAEAEAEAAQAFAAAEgEQAEgEAAgIQAAgGgEgEQgEgFgFAAQgEAAgEAFg");
	this.shape_22.setTransform(33.625,7.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgGAkIAAhHIANAAIAABHg");
	this.shape_23.setTransform(29.45,6.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgIAkIAAgnIgIAAIAAgMIAIAAIAAgEIABgJQABgDAEgDQACgCAHAAQAFAAAGACIgCAKIgGgBQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgBACAAAEIAAADIAKAAIAAAMIgKAAIAAAng");
	this.shape_24.setTransform(26.85,6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgBAiIgFgDIgBgFIgBgKIAAgVIgGAAIAAgMIAGAAIAAgKIANgIIAAASIAJAAIAAAMIgJAAIAAAUIAAAHIABACIADAAIAFgBIABAKQgEACgHAAIgFgBg");
	this.shape_25.setTransform(21.125,6.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAKAaIAAgaQAAgIgBgCQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQgCgCgDAAQgCAAgDACQgDACgBADIgBALIAAAXIgOAAIAAgzIANAAIAAAIQAHgIAJgBQAFAAADACQAEACACACQACADABADIABAKIAAAeg");
	this.shape_26.setTransform(16.725,7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgSATQgFgIAAgKQAAgNAHgGQAGgIAKAAQALAAAHAIQAHAHgBAPIghAAQAAAGADADQADAEAEAAQADAAADgCQACgCABgDIAOACQgDAHgGAEQgFAEgJAAQgMAAgHgIgAgGgNQgDAEAAAFIAUAAQAAgFgDgEQgDgDgEABQgEgBgDADg");
	this.shape_27.setTransform(11.1267,7.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgQAaIAAgzIANAAIAAAIIAFgHIAGgCQAFAAAEADIgEAMQgEgCgDAAQgDAAgCACQgBABgBAEIgBAQIAAAQg");
	this.shape_28.setTransform(7.125,7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgQAaIAAgzIANAAIAAAIIAFgHIAGgCQAFAAAEADIgEAMQgEgCgDAAQgDAAgCACQgBABgBAEIgBAQIAAAQg");
	this.shape_29.setTransform(3.525,7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgPAYQgEgCgCgEQgBgEAAgIIAAggIANAAIAAAYQAAALABACQAAABAAAAQABABAAAAQAAABABAAQAAABABAAIAEABQADAAADgBQADgCABgEQABgCAAgKIAAgXIAOAAIAAAzIgNAAIAAgIQgDAFgEACQgFACgEAAQgGAAgEgCg");
	this.shape_30.setTransform(-1.55,7.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgQAUQgIgHAAgNQAAgLAIgIQAGgHALAAQAKAAAFAEQAFAEADAJIgNACQgBgEgCgCQgDgCgEAAQgEAAgDADQgDAEAAAIQAAAIADAEQADAEAEAAQAEAAADgCQACgDABgFIANADQgCAIgFAFQgGAFgKAAQgLAAgGgHg");
	this.shape_31.setTransform(-7,7.05);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGAkIAAhHIANAAIAABHg");
	this.shape_32.setTransform(-13.45,6.075);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgTAXQgEgEAAgHQAAgFACgDQACgDAEgBIALgEIAMgDIAAgBQAAgEgCgCQgCgBgEAAQgEAAgCABQgCACgBADIgNgDQACgHAFgEQAGgDAJAAQAJAAAEACQAFACACAEQACADAAAJIgBAPIABAKIACAHIgNAAIgBgEIgBgCQgDAEgEACQgDABgFAAQgIAAgFgEgAAAADIgHACQgCADAAACQAAADACADQACACADAAQADgBADgCIAEgFIAAgGIAAgDIgIACg");
	this.shape_33.setTransform(-17.325,7.05);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgQAUQgIgHABgNQgBgLAIgIQAGgHALAAQAJAAAGAEQAFAEADAJIgNACQgCgEgCgCQgCgCgEAAQgEAAgDADQgDAEAAAIQAAAIADAEQADAEAEAAQAEAAACgCQADgDABgFIANADQgBAIgHAFQgGAFgJAAQgLAAgGgHg");
	this.shape_34.setTransform(-22.5,7.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgGAkIAAgzIANAAIAAAzgAgGgWIAAgNIANAAIAAANg");
	this.shape_35.setTransform(-26.45,6.075);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgQAaIAAgzIANAAIAAAIIAFgHIAGgCQAFAAAEADIgEAMQgEgCgDAAQgDAAgCACQgBABgBAEIgBAQIAAAQg");
	this.shape_36.setTransform(-29.125,7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgBAiIgFgDIgBgFIgBgKIAAgVIgGAAIAAgMIAGAAIAAgKIANgIIAAASIAJAAIAAAMIgJAAIAAAUIAAAHIABACIADAAIAFgBIABAKQgEACgHAAIgFgBg");
	this.shape_37.setTransform(-32.825,6.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgQAUQgIgHABgNQgBgLAIgIQAGgHALAAQAJAAAGAEQAFAEADAJIgNACQgCgEgCgCQgCgCgEAAQgEAAgDADQgDAEAAAIQAAAIADAEQADAEAEAAQAEAAACgCQADgDABgFIANADQgBAIgHAFQgGAFgJAAQgLAAgGgHg");
	this.shape_38.setTransform(-36.9,7.05);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgSATQgFgIAAgKQAAgNAHgGQAGgIAKAAQALAAAHAIQAHAHgBAPIghAAQAAAGADADQADAEAEAAQADAAADgCQACgCABgDIAOACQgDAHgGAEQgFAEgJAAQgMAAgHgIgAgGgNQgDAEAAAFIAUAAQAAgFgDgEQgDgDgEABQgEgBgDADg");
	this.shape_39.setTransform(-42.2733,7.05);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgGAkIAAhHIANAAIAABHg");
	this.shape_40.setTransform(-46.1,6.075);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgSATQgFgIAAgKQAAgNAHgGQAGgIAKAAQALAAAHAIQAHAHgBAPIghAAQAAAGADADQADAEAEAAQADAAADgCQACgCABgDIAOACQgDAHgGAEQgFAEgJAAQgMAAgHgIgAgGgNQgDAEAAAFIAUAAQAAgFgDgEQgDgDgEABQgEgBgDADg");
	this.shape_41.setTransform(-50.0233,7.05);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgSASQgFgGAAgMQAAgLAHgIQAGgHAKAAQALAAAHAHQAHAJgBAOIghAAQAAAGADAEQADADAEAAQADAAADgCQACgBABgFIAOADQgDAHgGAFQgFADgJAAQgMAAgHgJgAgGgMQgDADAAAGIAUAAQAAgHgDgCQgDgEgEAAQgEAAgDAEg");
	this.shape_42.setTransform(30.4267,-4.35);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAKAkIAAgcIgBgJQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQgCgCgDAAQgCAAgDACIgEAEIgBAKIAAAaIgOAAIAAhHIAOAAIAAAaQAHgHAIAAQAFAAAEABIAFAFQACADABADIABAJIAAAfg");
	this.shape_43.setTransform(24.975,-5.325);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgBAjIgFgEIgBgFIgBgKIAAgWIgGAAIAAgKIAGAAIAAgKIANgIIAAASIAJAAIAAAKIgJAAIAAAUIAAAIIABABIADABIAFgBIABAKQgEADgHAAIgFgBg");
	this.shape_44.setTransform(20.525,-5.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgVAkIgBgLIAGABQAEAAADgDIADgHIgUgzIAPAAIALAkIANgkIAOAAIgWA5IgDAHIgDAFIgFACIgHABIgIgBg");
	this.shape_45.setTransform(13.925,-3.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgIAlIAAgpIgIAAIAAgKIAIAAIAAgFIABgJQABgDAEgCQADgCAFgBQAGABAGACIgCAJIgGgBQgBAAgBAAQgBAAAAAAQgBABAAAAQAAAAgBABQgBABAAAEIAAAEIAKAAIAAAKIgKAAIAAApg");
	this.shape_46.setTransform(10,-5.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgGAkIAAgzIANAAIAAAzgAgGgWIAAgNIANAAIAAANg");
	this.shape_47.setTransform(7.05,-5.325);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgQAbIAAgzIANAAIAAAHIAFgHIAGgBQAFAAAEACIgEAMQgEgCgDAAQgDAAgCABQgBACgBAEIgBARIAAAQg");
	this.shape_48.setTransform(4.375,-4.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgSASQgFgGAAgMQAAgLAHgIQAGgHAKAAQALAAAHAHQAHAJgBAOIghAAQAAAGADAEQADADAEAAQADAAADgCQACgBABgFIAOADQgDAHgGAFQgFADgJAAQgMAAgHgJgAgGgMQgDADAAAGIAUAAQAAgHgDgCQgDgEgEAAQgEAAgDAEg");
	this.shape_49.setTransform(-0.4733,-4.35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgFAaIgVgzIAPAAIALAiIABgEIACgFIAKgZIAOAAIgUAzg");
	this.shape_50.setTransform(-5.7,-4.35);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgNAYQgGgEgDgFQgEgHAAgIQAAgGAEgHQADgGAGgDQAGgEAHAAQAMAAAHAHQAIAJAAAKQAAAMgIAHQgHAIgMAAQgGAAgHgDgAgIgKQgEADAAAHQAAAIAEAEQAEAEAEAAQAFAAAEgEQAEgEAAgIQAAgHgEgDQgEgFgFAAQgEAAgEAFg");
	this.shape_51.setTransform(-13.675,-4.35);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgBAjIgFgEIgBgFIgBgKIAAgWIgGAAIAAgKIAGAAIAAgKIANgIIAAASIAJAAIAAAKIgJAAIAAAUIAAAIIABABIADABIAFgBIABAKQgEADgHAAIgFgBg");
	this.shape_52.setTransform(-18.125,-5.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgBAjIgFgEIgBgFIgBgKIAAgWIgGAAIAAgKIAGAAIAAgKIANgIIAAASIAJAAIAAAKIgJAAIAAAUIAAAIIABABIADABIAFgBIABAKQgEADgHAAIgFgBg");
	this.shape_53.setTransform(-23.675,-5.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgJAlIAAgpIgHAAIAAgKIAHAAIAAgFIACgJQABgDAEgCQADgCAFgBQAGABAFACIgBAJIgGgBQgBAAgBAAQgBAAAAAAQgBABAAAAQAAAAgBABQgBABAAAEIAAAEIAKAAIAAAKIgKAAIAAApg");
	this.shape_54.setTransform(-26.55,-5.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgSASQgFgGAAgMQAAgLAHgIQAGgHAKAAQALAAAHAHQAHAJgBAOIghAAQAAAGADAEQADADAEAAQADAAADgCQACgBABgFIAOADQgDAHgGAFQgFADgJAAQgMAAgHgJgAgGgMQgDADAAAGIAUAAQAAgHgDgCQgDgEgEAAQgEAAgDAEg");
	this.shape_55.setTransform(-30.9233,-4.35);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgGAkIAAhHIANAAIAABHg");
	this.shape_56.setTransform(-34.75,-5.325);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgSASQgFgGAAgMQAAgLAHgIQAGgHAKAAQALAAAHAHQAHAJgBAOIghAAQAAAGADAEQADADAEAAQADAAADgCQACgBABgFIAOADQgDAHgGAFQgFADgJAAQgMAAgHgJgAgGgMQgDADAAAGIAUAAQAAgHgDgCQgDgEgEAAQgEAAgDAEg");
	this.shape_57.setTransform(-41.1733,-4.35);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAKAkIAAgcIgBgJQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQgCgCgDAAQgCAAgDACIgEAEIgBAKIAAAaIgOAAIAAhHIAOAAIAAAaQAHgHAIAAQAFAAAEABIAFAFQACADABADIABAJIAAAfg");
	this.shape_58.setTransform(-46.625,-5.325);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgBAjIgFgEIgBgFIgBgKIAAgWIgGAAIAAgKIAGAAIAAgKIANgIIAAASIAJAAIAAAKIgJAAIAAAUIAAAIIABABIADABIAFgBIABAKQgEADgHAAIgFgBg");
	this.shape_59.setTransform(-51.075,-5.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAKAbIAAgbQAAgIgBgCQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBgBQgCgBgDAAQgCAAgDACQgDACgBADIgBALIAAAYIgOAAIAAg0IANAAIAAAIQAHgJAJAAQAFABADABQAEABACAEQACACABADIABAJIAAAgg");
	this.shape_60.setTransform(42.875,-15.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgNAYQgGgEgDgGQgEgFAAgJQAAgGAEgHQADgGAGgDQAGgEAHAAQAMAAAHAHQAIAJAAAKQAAALgIAJQgHAHgMAAQgGAAgHgDgAgIgLQgEAFAAAGQAAAIAEAEQAEAEAEAAQAFAAAEgEQAEgEAAgIQAAgGgEgFQgEgEgFAAQgEAAgEAEg");
	this.shape_61.setTransform(37.075,-15.75);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAKAkIAAgcIgBgJQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQgCgCgDAAQgCAAgDACIgEAEIgBAKIAAAaIgOAAIAAhHIAOAAIAAAaQAHgHAIAAQAFAAAEABIAFAFQACADABADIABAJIAAAfg");
	this.shape_62.setTransform(28.775,-16.725);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgRAUQgGgHAAgNQAAgMAGgHQAHgHALAAQAJAAAGAEQAFAEADAIIgNADQgCgEgCgCQgCgCgEAAQgEAAgDADQgDAEAAAIQAAAJADADQADAEAEAAQAEAAACgCQADgDABgFIANACQgBAKgHAEQgFAFgLAAQgKAAgHgHg");
	this.shape_63.setTransform(23.3,-15.75);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgBAjIgFgEIgBgFIgBgKIAAgWIgGAAIAAgLIAGAAIAAgKIANgIIAAASIAJAAIAAALIgJAAIAAAVIAAAHIABACIADABIAFgCIABALQgEABgHAAIgFAAg");
	this.shape_64.setTransform(19.075,-16.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgGAkIAAgzIANAAIAAAzgAgGgWIAAgNIANAAIAAANg");
	this.shape_65.setTransform(16.3,-16.725);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAJAaIgJggIgIAgIgNAAIgQgzIANAAIAJAhIAJghIANAAIAJAhIAJghIANAAIgQAzg");
	this.shape_66.setTransform(11.2,-15.75);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgPAXQgHgFgBgHIANgCQABAEADACQADACADAAQAGAAACgCQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIgBgDIgEgCQgQgDgEgDQgHgEAAgHQAAgHAGgFQAFgEALAAQAKAAAFAEQAFADACAGIgNADQAAgDgDgBQgCgCgEAAQgFAAgCACQgBAAAAAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAQABACAKADQALACAFADQAEADAAAHQAAAHgGAFQgGAFgMAAQgJAAgGgEg");
	this.shape_67.setTransform(4.725,-15.75);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgSATQgFgIAAgKQAAgMAHgIQAGgHAKAAQALAAAHAHQAHAJgBAOIghAAQAAAGADADQADAEAEAAQADAAADgCQACgBABgEIAOACQgDAIgGADQgFAEgJAAQgMAAgHgIgAgGgNQgDAEAAAFIAUAAQAAgFgDgEQgDgCgEAAQgEAAgDACg");
	this.shape_68.setTransform(-2.9733,-15.75);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAKAkIAAgcIgBgJQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQgCgCgDAAQgCAAgDACIgEAEIgBAKIAAAaIgOAAIAAhHIAOAAIAAAaQAHgHAIAAQAFAAAEABIAFAFQACADABADIABAJIAAAfg");
	this.shape_69.setTransform(-8.425,-16.725);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgBAjIgFgEIgBgFIgBgKIAAgWIgGAAIAAgLIAGAAIAAgKIANgIIAAASIAJAAIAAALIgJAAIAAAVIAAAHIABACIADABIAFgCIABALQgEABgHAAIgFAAg");
	this.shape_70.setTransform(-12.875,-16.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgSATQgFgIAAgKQAAgMAHgIQAGgHAKAAQALAAAHAHQAHAJgBAOIghAAQAAAGADADQADAEAEAAQADAAADgCQACgBABgEIAOACQgDAIgGADQgFAEgJAAQgMAAgHgIgAgGgNQgDAEAAAFIAUAAQAAgFgDgEQgDgCgEAAQgEAAgDACg");
	this.shape_71.setTransform(-19.5733,-15.75);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgBAjIgFgEIgBgFIgBgKIAAgWIgGAAIAAgLIAGAAIAAgKIANgIIAAASIAJAAIAAALIgJAAIAAAVIAAAHIABACIADABIAFgCIABALQgEABgHAAIgFAAg");
	this.shape_72.setTransform(-23.675,-16.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgTAXQgEgFAAgGQAAgEACgEQACgEAEAAIALgEIAMgDIAAgBQAAgEgCgCQgCgBgEAAQgEAAgCABQgCABgBAEIgNgDQACgHAFgDQAGgEAJAAQAJAAAEACQAFACACADQACAEAAAJIgBAPIABAKIACAHIgNAAIgBgEIgBgBQgDADgEABQgDACgFAAQgIAAgFgEgAAAADIgHACQgCACAAAEQAAACACACQACACADAAQADAAADgCIAEgEIAAgHIAAgDIgIACg");
	this.shape_73.setTransform(-27.825,-15.75);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgQAbIAAg0IANAAIAAAIIAFgHIAGgCQAFABAEACIgEAMQgEgCgDAAQgDAAgCACQgBABgBAEIgBAQIAAARg");
	this.shape_74.setTransform(-31.875,-15.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgSATQgFgIAAgKQAAgMAHgIQAGgHAKAAQALAAAHAHQAHAJgBAOIghAAQAAAGADADQADAEAEAAQADAAADgCQACgBABgEIAOACQgDAIgGADQgFAEgJAAQgMAAgHgIgAgGgNQgDAEAAAFIAUAAQAAgFgDgEQgDgCgEAAQgEAAgDACg");
	this.shape_75.setTransform(-36.7233,-15.75);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgYAkIAAhGIAMAAIAAAIQADgEAEgDQAEgCAEAAQAKAAAGAHQAGAHAAANQAAAMgGAHQgHAHgJAAQgDAAgDgCQgEgBgEgFIAAAagAgIgVQgDAEAAAIQAAAJAEADQADAEAEAAQAFAAADgEQADgDAAgIQAAgJgDgDQgDgEgFAAQgEAAgEADg");
	this.shape_76.setTransform(-42.025,-14.825);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgYAbQgKgJAAgSQAAgJADgIQADgFAEgFQAEgEAFgCQAHgDAIAAQAQAAAJAKQAKAKAAAQQAAASgKAJQgJAKgQAAQgPAAgJgKgAgOgSQgFAHAAALQAAANAGAFQAFAHAIAAQAJAAAFgHQAGgFAAgNQAAgLgGgHQgFgFgJAAQgIAAgGAFg");
	this.shape_77.setTransform(-48.825,-16.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(6));

}).prototype = p = new cjs.MovieClip();


(lib.horn_btn_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(4,1,1).p("AKrlUQgQgTgYAAI0GAAQgXAAgRATQgQATAAAbIAAJNQAAAbAQATQARATAXAAIUGAAQAYAAAQgTQARgTAAgbIAApNQAAgbgRgTg");
	this.shape.setTransform(4,4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AqDFoQgXAAgRgTQgQgTAAgbIAApNQAAgaAQgUQARgTAXAAIUGAAQAYAAAQATQARAUAAAaIAAJNQAAAbgRATQgQATgYAAg");
	this.shape_1.setTransform(4,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.horn_btn_icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkWBRQglglAAgtQABhLBqg4IAugWIAYAuIguAXQhPAlAAAvQAAAWAWAXQBLBLCmgBQEIABABh4QAAg4hnglIhKgXIATg0IBKAcQCHAvgBBdQABAtgmAlQhYBZi+AAQi9AAhZhZg");
	this.shape.setTransform(5.1,13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AnwEsIAApXIAhAAIAlB+QBhB5EzAAIFWAAQCVAEAEgzIAYBUIAABXIgYAAQgEgghLgPImggEQkzAAhhCLIglCMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.horn_btn_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AKrlUQgQgTgYAAI0FAAQgYAAgQATQgRATAAAbIAAJMQAAAcARATQAQATAYAAIUFAAQAYAAAQgTQARgTAAgcIAApMQAAgbgRgTg");
	this.shape.setTransform(-0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AKDFoI0FAAQgYAAgQgTQgRgTAAgcIAApLQAAgcARgTQAQgTAYAAIUFAAQAXAAARATQARATAAAcIAAJLQAAAcgRATQgQATgYAAIAAAAg");
	this.shape_1.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib._0922_2_TEXT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TEXT
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AADAZIAAgmIgFAEIgGADIAAgFQAFgDADgDQAEgEABgDIAEAAIAAAxg");
	this.shape.setTransform(363.825,434.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKAUQgFgGAAgOQAAgIACgFQABgGAEgDQAEgDAEAAQAEAAADACQADACACADIADAHIABALQAAAJgBAFQgCAGgEADQgEADgFAAQgGAAgEgGgAgGgQQgDAFAAALQAAAMADAEQADAFADAAQAEAAADgFQADgEAAgMQAAgLgDgEQgDgEgEAAQgDAAgDADg");
	this.shape_1.setTransform(360.175,434.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKAWQgGgCgDgHQgDgFAAgIQAAgGADgHQADgGAGgDQAGgDAGAAQAFAAAFACQAEACADACQACAEACAFIgGACIgDgGIgFgEIgHgCQgDAAgEACIgFAEIgDAEQgCAGAAAEQAAAHACAEQACAEAFADQAEACAEAAQAFAAAEgCIAGgEIAAgJIgPAAIAAgFIAVAAIAAASQgFAEgFACQgFACgFAAQgHAAgGgEg");
	this.shape_2.setTransform(355.475,434.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJAmQALgUAAgSQAAgHgCgHIgDgLIgGgMIAGAAQAFAKAEAKQADAJAAAIQABALgFAJQgEAKgEAIg");
	this.shape_3.setTransform(365.75,393.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSAdIAAg5IAlAAIAAAHIgeAAIAAASIAaAAIAAAGIgaAAIAAAag");
	this.shape_4.setTransform(361.975,392.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAEAmQgFgIgDgKQgEgJgBgLQABgIADgJQADgKAGgKIAGAAIgHAMIgDALQgCAHAAAHQABASALAUg");
	this.shape_5.setTransform(358.2,393.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAQAGAAAFACQADACACAEQADADAAAEQAAAEgCADQgCADgEACQAFABADADQACAEABAFQgBAEgBAEQgCADgDACIgFADIgKABgAgNAWIANAAIAFAAIAFgCQAAAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAgDgCgCQgBgDgEgBIgHgBIgNAAgAgNgDIAMAAIAGgBQADgBACgCQABgCABgDQgBgDgBgCQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgIgBIgLAAg");
	this.shape_6.setTransform(354.15,392.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_7.setTransform(352.175,357.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgSAdIAAgFIAGgIIAJgIQAIgIADgEQAEgEAAgEQgBgEgDgDQgCgDgGAAQgDAAgEADQgDADAAAGIgHgBQABgIAFgEQAFgFAHAAQAIAAAFAFQAFAEgBAHIgBAHQgBADgDADQgEAEgHAGIgHAHIgEAEIAcAAIAAAHg");
	this.shape_8.setTransform(347.2,357.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_9.setTransform(352.175,327.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_10.setTransform(346.975,327.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAPAdIgdgsIAAAsIgIAAIAAg5IAIAAIAeAsIAAgsIAGAAIAAA5g");
	this.shape_11.setTransform(393.6,341.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAPAdIgHgMIgGgIIgCgEIgEgBIgEgBIgJAAIAAAaIgHAAIAAg5IAYAAQAIAAAEACQAEACACADQACAEAAAFQAAAGgEAEQgEAEgIABIAFADIAGAHIAKAQgAgRgCIAQAAIAIgBQACgBACgDQACgCAAgDQAAgEgDgDQgDgCgHAAIgRAAg");
	this.shape_12.setTransform(388.125,341.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_13.setTransform(381.875,341.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_14.setTransform(375.85,341.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUAdIAAg5IAUAAQAHAAADACQAEACADAEQACADAAAEQAAAEgCADQgCADgEACQAFABADADQACAEAAAFQAAAEgBAEQgCADgCACIgHADIgJABgAgNAWIANAAIAGAAIADgCQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAgDgCgCQgBgDgDgBIgIgBIgNAAgAgNgDIANAAIAGgBQACgBACgCQACgCgBgDQABgDgCgCQgCgCgCgBIgHgBIgMAAg");
	this.shape_15.setTransform(404.5,359.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMAZQgFgFgBgHIAHgBQABAGADADQADACAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgDgEgFAAIgEABIABgFIABAAQADAAAEgCQAEgDAAgFQAAgDgDgDQgDgCgDAAQgEAAgDACQgCADgBAFIgHgBQABgHAFgEQAEgEAHAAQAEAAAEACQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAFQAAAIgGAFQgFAFgIAAQgHAAgFgEg");
	this.shape_16.setTransform(399.525,359.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMAXQgFgHAAgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQAEABACAEIAEAIIAAANQABAKgCAGQgDAGgEAEQgDADgHAAQgIAAgEgGgAgHgSQgEAFABANQgBAOAEAFQADAEAEAAQAFAAADgEQAEgFgBgOQABgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_17.setTransform(395.05,359.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgSAdIABgFIAEgIIAJgIQAJgIADgEQAEgEgBgEQAAgEgCgDQgEgDgEAAQgEAAgEADQgCADAAAGIgIgBQABgIAFgEQAEgFAIAAQAIAAAFAFQAEAEAAAHIAAAHQgCADgEADQgDAEgHAGIgIAHIgCAEIAbAAIAAAHg");
	this.shape_18.setTransform(390.55,359.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_19.setTransform(387.075,360.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAdIABgFIAFgIIAJgIQAIgIADgEQAEgEgBgEQAAgEgDgDQgDgDgFAAQgEAAgDADQgCADAAAGIgIgBQABgIAFgEQAFgFAHAAQAIAAAFAFQAEAEAAAHIgBAHQgBADgEADQgDAEgHAGIgIAHIgDAEIAcAAIAAAHg");
	this.shape_20.setTransform(383.45,359.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgSAdIABgFIAEgIIAJgIQAJgIADgEQADgEABgEQAAgEgDgDQgEgDgEAAQgFAAgCADQgDADgBAGIgGgBQAAgIAFgEQAFgFAHAAQAIAAAFAFQAFAEAAAHIgBAHQgCADgDADQgDAEgIAGIgHAHIgDAEIAbAAIAAAHg");
	this.shape_21.setTransform(379,359.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_22.setTransform(374.625,359.325);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQADgHADgDQAEgDAGAAQAEAAAEACQADABADAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_23.setTransform(370.15,359.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_24.setTransform(404.425,324.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgMAZQgFgFgBgHIAHgBQABAGADADQADACAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgDgEgFAAIgEABIABgFIABAAQADAAAEgCQAEgDAAgFQAAgDgDgDQgDgCgDAAQgEAAgDACQgCADgBAFIgHgBQABgHAFgEQAEgEAHAAQAEAAAEACQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAFQAAAIgGAFQgFAFgIAAQgHAAgFgEg");
	this.shape_25.setTransform(399.525,324.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgMAXQgFgHAAgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQAEABACAEIAEAIIAAANQABAKgCAGQgDAGgEAEQgDADgHAAQgIAAgEgGgAgHgSQgEAFABANQgBAOAEAFQADAEAEAAQAFAAADgEQAEgFgBgOQABgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_26.setTransform(395.05,324.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgSAdIABgFIAEgIIAJgIQAJgIADgEQAEgEgBgEQAAgEgCgDQgEgDgEAAQgEAAgEADQgCADAAAGIgIgBQABgIAFgEQAEgFAIAAQAIAAAFAFQAEAEAAAHIAAAHQgCADgEADQgDAEgHAGIgIAHIgCAEIAbAAIAAAHg");
	this.shape_27.setTransform(390.55,324.575);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_28.setTransform(387.075,325.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgSAdIABgFIAFgIIAJgIQAIgIADgEQAEgEgBgEQAAgEgDgDQgDgDgFAAQgEAAgDADQgCADAAAGIgIgBQABgIAFgEQAFgFAHAAQAIAAAFAFQAEAEAAAHIgBAHQgBADgEADQgDAEgHAGIgIAHIgDAEIAcAAIAAAHg");
	this.shape_29.setTransform(383.45,324.575);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgSAdIABgFIAEgIIAJgIQAJgIADgEQADgEABgEQAAgEgDgDQgEgDgEAAQgFAAgCADQgDADgBAGIgGgBQAAgIAFgEQAFgFAHAAQAIAAAFAFQAFAEAAAHIgBAHQgCADgDADQgDAEgIAGIgHAHIgDAEIAbAAIAAAHg");
	this.shape_30.setTransform(379,324.575);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_31.setTransform(374.625,324.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQADgHADgDQAEgDAGAAQAEAAAEACQADABADAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_32.setTransform(370.15,324.625);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgIAlQAKgSAAgTIgBgOIgEgLIgFgLIAEAAQAHAJADAKQAEAJAAAIQAAAKgFAKQgEAKgFAHg");
	this.shape_33.setTransform(195.85,42.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgSAdIAAg5IAlAAIAAAHIgeAAIAAASIAaAAIAAAGIgaAAIAAAag");
	this.shape_34.setTransform(192.075,41.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAEAlQgFgHgEgKQgDgKAAgKQAAgIACgJQAEgKAGgJIAGAAIgHALIgDALQgBAHgBAHQAAATAMASg");
	this.shape_35.setTransform(188.3,42.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAQAHAAAEACQADACADAEQACADAAAEQAAAEgCADQgCADgEACQAFABADADQADAEgBAFQABAEgCAEQgCADgDACIgFADIgKABgAgNAWIANAAIAFAAIAFgCQAAAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAgDgCgCQgCgDgCgBIgIgBIgNAAgAgNgDIANAAIAFgBQAEgBABgCQABgCAAgDQAAgDgBgCQgCgCgCgBIgIgBIgLAAg");
	this.shape_36.setTransform(184.25,41.425);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgJAmQALgUAAgSIgBgOIgEgLIgGgMIAGAAQAFAKAEAKQAEAIAAAJQAAALgFAJQgEAKgEAIg");
	this.shape_37.setTransform(104.85,73.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgSAdIAAg5IAlAAIAAAHIgeAAIAAASIAaAAIAAAGIgaAAIAAAag");
	this.shape_38.setTransform(101.075,73.075);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAEAmQgFgIgDgKQgEgJAAgLQAAgJADgIQADgKAGgKIAGAAIgHAMIgDALQgCAIAAAGQAAASAMAUg");
	this.shape_39.setTransform(97.3,73.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAQAGAAAFACQADACACAEQADADAAAEQAAAEgCADQgCADgEACQAFABADADQACAEABAFQgBAEgBAEQgCADgDACIgFADIgKABgAgNAWIANAAIAFAAIAFgCQAAAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAgDgCgCQgBgDgEgBIgHgBIgNAAgAgNgDIAMAAIAGgBQADgBACgCQABgCABgDQgBgDgBgCQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgIgBIgLAAg");
	this.shape_40.setTransform(93.25,73.075);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAJABQADABAEACQADACABADQACAEAAAEQAAAHgFAEQgEAFgMAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgCgDQgCgCgCgBIgHgBIgOAAg");
	this.shape_41.setTransform(145.75,56.925);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_42.setTransform(139.875,56.925);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_43.setTransform(133.675,56.925);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgRAdIAAg5IAIAAIAAAyIAbAAIAAAHg");
	this.shape_44.setTransform(128.475,56.925);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgUAdIAAg5IAoAAIAAAHIghAAIAAASIAfAAIAAAGIgfAAIAAATIAiAAIAAAHg");
	this.shape_45.setTransform(123.525,56.925);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_46.setTransform(119.425,57.725);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgDAdIAAgpIAGAAIAAApgAgDgTIAAgJIAGAAIAAAJg");
	this.shape_47.setTransform(117.2,56.925);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgDAdIAAgyIgTAAIAAgHIAtAAIAAAHIgTAAIAAAyg");
	this.shape_48.setTransform(111.675,56.925);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgMAaQgGgCgCgGQgCgFAAgJIAAggIAIAAIAAAgQAAAHABAEQACAEADABQADACAFAAQAHAAAEgDQAEgEAAgLIAAggIAHAAIAAAgQAAAJgBAFQgDAFgFADQgFADgIAAQgHAAgFgDg");
	this.shape_49.setTransform(106.3,56.975);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_50.setTransform(100.325,56.925);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_51.setTransform(94.3,56.925);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgDAdIAAgyIgTAAIAAgHIAtAAIAAAHIgTAAIAAAyg");
	this.shape_52.setTransform(88.975,56.925);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgDAdIAAg5IAHAAIAAA5g");
	this.shape_53.setTransform(85.425,56.925);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAOAdIgMgrIgCgHIgBAHIgMArIgIAAIgPg5IAIAAIAJAlIACAMIADgLIALgmIAIAAIAIAcQADALABAKIADgNIAJgkIAIAAIgQA5g");
	this.shape_54.setTransform(80.525,56.925);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAJABQADABADACQAEACABADQACAEAAAEQAAAHgFAEQgEAFgMAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgCgDQgBgCgEgBIgGgBIgOAAg");
	this.shape_55.setTransform(283.15,57.675);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_56.setTransform(277.275,57.675);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_57.setTransform(271.075,57.675);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgRAdIAAg5IAIAAIAAAyIAbAAIAAAHg");
	this.shape_58.setTransform(265.875,57.675);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgUAdIAAg5IAoAAIAAAHIghAAIAAASIAfAAIAAAGIgfAAIAAATIAiAAIAAAHg");
	this.shape_59.setTransform(260.925,57.675);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_60.setTransform(256.825,58.475);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgCAdIAAgpIAGAAIAAApgAgCgTIAAgJIAGAAIAAAJg");
	this.shape_61.setTransform(254.6,57.675);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_62.setTransform(248.6,57.675);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgDAdIAAgyIgTAAIAAgHIAtAAIAAAHIgTAAIAAAyg");
	this.shape_63.setTransform(243.275,57.675);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgDAdIAAg5IAHAAIAAA5g");
	this.shape_64.setTransform(239.725,57.675);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAOAdIgMgrIgCgHIgBAHIgMArIgIAAIgPg5IAIAAIAJAlIACAMIADgLIALgmIAIAAIAIAcQADALABAKIADgNIAJgkIAIAAIgQA5g");
	this.shape_65.setTransform(234.825,57.675);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AACAUIAAgeIgDADIgFADIAAgFIAGgFIAEgFIADAAIAAAng");
	this.shape_66.setTransform(226.075,41.825);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAEAUIAAgKIgRAAIAAgEIARgZIAEAAIAAAZIAGAAIAAAEIgGAAIAAAKgAgIAGIAMAAIAAgRg");
	this.shape_67.setTransform(223.125,41.825);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgMAUIABgEIADgFIAGgGIAIgHQACgDAAgDQAAgDgCgCQgCgCgDAAQgDAAgCACQgCACAAAEIgFAAQAAgGAEgDQADgDAFAAQAFAAAEADQADAEAAAEIgBAFIgDAEIgIAHIgEAEIgCADIASAAIAAAFg");
	this.shape_68.setTransform(220.1,41.825);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgIAmQAKgUAAgSIgBgOIgDgLIgGgMIAEAAQAHAKADAKQADAIAAAJQAAALgEAJQgEAKgFAIg");
	this.shape_69.setTransform(311.8,46);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgKAXIAAAFIgHAAIAAg4IAIAAIAAAUQADgFAHAAQADAAAEABQAEACABADIAEAGIABAIQAAALgFAFQgGAGgGAAQgHAAgEgGgAgHgDQgEADABAHQAAAIACADQADAFAFAAQAFAAADgEQADgEAAgIQAAgHgDgEQgDgDgFAAQgDAAgEAEg");
	this.shape_70.setTransform(308.2,45.225);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_71.setTransform(303.525,45.175);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgDAHQAAgBABAAQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_72.setTransform(300.325,48.225);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgKAXIAAAFIgHAAIAAg4IAHAAIAAAUQAFgFAGAAQAEAAADABQADACACADIAEAGIABAIQAAALgFAFQgGAGgGAAQgHAAgEgGgAgHgDQgEADAAAHQAAAIADADQADAFAFAAQAEAAADgEQAEgEAAgIQAAgHgDgEQgEgDgEAAQgEAAgDAEg");
	this.shape_73.setTransform(297.1,45.225);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgMAZQgFgFgBgHIAHgBQABAGADADQADACAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgDgEgFAAIgEABIABgFIABAAQADAAAEgCQAEgDAAgFQAAgDgDgDQgDgCgDAAQgEAAgDACQgCADgBAFIgHgBQABgHAFgEQAEgEAHAAQAEAAAEACQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAFQAAAIgGAFQgFAFgIAAQgHAAgFgEg");
	this.shape_74.setTransform(292.575,45.225);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_75.setTransform(289.025,45.975);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHgBAIg");
	this.shape_76.setTransform(285.5,45.225);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_77.setTransform(280.725,45.175);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_78.setTransform(276.275,45.175);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgCAGgFAEQgDADgHAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_79.setTransform(272.1,45.225);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAPAdIgdgsIAAAsIgHAAIAAg5IAIAAIAdAsIAAgsIAHAAIAAA5g");
	this.shape_80.setTransform(264.75,45.175);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_81.setTransform(258.825,45.175);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgDAdIAAg5IAHAAIAAA5g");
	this.shape_82.setTransform(254.625,45.175);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgDAdIAAgyIgTAAIAAgHIAtAAIAAAHIgTAAIAAAyg");
	this.shape_83.setTransform(251.075,45.175);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgMAaQgGgEgDgHQgDgIAAgHQAAgIADgHQAEgHAGgDQAGgDAHgBQAIABAGAEQAGAEACAIIgHABQgCgFgEgEQgEgDgFAAQgGABgEADQgFADgCAFQgBAFAAAGQAAAGACAGQACAGAEACQAFADAEAAQAGAAAFgDQAEgEACgHIAHACQgCAJgGAEQgGAGgJgBQgJAAgFgDg");
	this.shape_84.setTransform(245.725,45.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgUAdIAAg5IAoAAIAAAHIghAAIAAASIAfAAIAAAGIgfAAIAAATIAiAAIAAAHg");
	this.shape_85.setTransform(240.225,45.175);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgKAbQgGgCgCgFQgDgEgBgGIAHAAIADAHQACACAEACQAEACADgBIAIgBIAFgDIACgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgBgDgEgBIgJgDIgLgCQgEgDgCgDQgCgDAAgEQAAgFACgDQACgEAFgCQAFgCAFAAQAGABAFACQAFACACADQADAFAAAEIgHABQgBgGgDgDQgDgCgHAAQgGAAgDACQgDADAAADQAAAEACACQACACAJABIAMAFQAFAAADAEQACAEAAAEQAAAFgDAEQgCAEgFADQgFABgGAAQgHAAgFgCg");
	this.shape_86.setTransform(234.725,45.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAEAmQgEgIgFgKQgEgJAAgLQAAgJADgIQAEgKAGgKIAFAAIgGAMIgDALQgBAIAAAGQgBASALAUg");
	this.shape_87.setTransform(230.9,46);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0F0003").s().p("AgIAmQAKgUAAgSIgBgOIgEgLIgFgMIAEAAQAHAKADAKQAEAJAAAIQAAALgFAJQgEAKgFAIg");
	this.shape_88.setTransform(346.15,36.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0F0003").s().p("AgVAdIAAg5IAVAAIAIABQAEABAEACQADACABADQACAEAAAEQAAAHgFAEQgFAFgMAAIgNAAIAAAYgAgNAAIANAAQAIAAADgDQADgDAAgFQAAgDgBgDQgDgCgDgBIgHgBIgNAAg");
	this.shape_89.setTransform(342.15,36.075);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#0F0003").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_90.setTransform(336.275,36.075);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#0F0003").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_91.setTransform(330.075,36.075);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#0F0003").s().p("AgRAdIAAg5IAIAAIAAAyIAbAAIAAAHg");
	this.shape_92.setTransform(324.875,36.075);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#0F0003").s().p("AgUAdIAAg5IAoAAIAAAHIghAAIAAASIAfAAIAAAGIgfAAIAAATIAiAAIAAAHg");
	this.shape_93.setTransform(319.925,36.075);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#0F0003").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_94.setTransform(315.825,36.875);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0F0003").s().p("AgCAdIAAgpIAFAAIAAApgAgCgTIAAgJIAFAAIAAAJg");
	this.shape_95.setTransform(313.6,36.075);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#0F0003").s().p("AAEAmQgFgIgEgKQgDgJAAgLQAAgIADgJQADgKAGgKIAGAAIgHAMIgDALQgCAHAAAHQAAASAMAUg");
	this.shape_96.setTransform(311.5,36.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAPAdIgHgMIgGgIIgCgEIgEgBIgEgBIgJAAIAAAaIgHAAIAAg5IAYAAQAIAAAEACQAEACACADQACAEAAAFQAAAGgEAEQgEAEgIABIAFADIAGAHIAKAQgAgRgCIAQAAIAIgBQACgBACgDQACgCAAgDQAAgEgDgDQgDgCgHAAIgRAAg");
	this.shape_97.setTransform(305.225,36.075);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgUAdIAAg5IAoAAIAAAHIghAAIAAASIAfAAIAAAGIgfAAIAAATIAiAAIAAAHg");
	this.shape_98.setTransform(299.475,36.075);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgDAdIAAgyIgTAAIAAgHIAtAAIAAAHIgTAAIAAAyg");
	this.shape_99.setTransform(294.275,36.075);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAPAdIgHgMIgGgIIgCgEIgEgBIgEgBIgJAAIAAAaIgHAAIAAg5IAYAAQAIAAAEACQAEACACADQACAEAAAFQAAAGgEAEQgEAEgIABIAFADIAGAHIAKAQgAgRgCIAQAAIAIgBQACgBACgDQACgCAAgDQAAgEgDgDQgDgCgHAAIgRAAg");
	this.shape_100.setTransform(289.175,36.075);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgUAdIAAg5IAoAAIAAAHIghAAIAAASIAfAAIAAAGIgfAAIAAATIAiAAIAAAHg");
	this.shape_101.setTransform(283.425,36.075);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgDAdIgWg5IAIAAIAPApIACAJIADgJIAQgpIAHAAIgWA5g");
	this.shape_102.setTransform(277.95,36.075);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAPAdIgdgsIAAAsIgIAAIAAg5IAIAAIAdAsIAAgsIAHAAIAAA5g");
	this.shape_103.setTransform(272.35,36.075);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_104.setTransform(266.425,36.075);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgMAZQgGgDgDgHQgDgIAAgHQAAgIADgHQAEgHAGgDQAGgEAHAAQAIAAAGAFQAGAEACAIIgHABQgCgFgEgEQgEgCgFAAQgGAAgEADQgFADgCAFQgBAGAAAFQAAAGACAGQACAGAEADQAFACAEAAQAGAAAFgDQAEgFACgGIAHACQgCAIgGAFQgGAGgJAAQgJAAgFgFg");
	this.shape_105.setTransform(260.425,36.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgMAZQgGgDgDgHQgDgIAAgHQAAgIADgHQAEgHAGgDQAGgEAHAAQAIAAAGAFQAGAEACAIIgHABQgCgFgEgEQgEgCgFAAQgGAAgEADQgFADgCAFQgBAGAAAFQAAAGACAGQACAGAEADQAFACAEAAQAGAAAFgDQAEgFACgGIAHACQgCAIgGAFQgGAGgJAAQgJAAgFgFg");
	this.shape_106.setTransform(252.425,36.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgXAdIAAg5IAUAAIAJABQAFABAEADQAEAEADAGQACAGAAAHQAAAGgCAFQgBAFgDAEIgFAFIgHADIgIABgAgPAWIAMAAIAIgBIAFgDQADgDABgEQACgFAAgGQAAgIgDgFQgDgFgEgCIgJgBIgMAAg");
	this.shape_107.setTransform(246.675,36.075);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_108.setTransform(242.375,36.875);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgMAZQgGgDgDgHQgDgIAAgHQAAgIADgHQAEgHAGgDQAGgEAHAAQAIAAAGAFQAGAEACAIIgHABQgCgFgEgEQgEgCgFAAQgGAAgEADQgFADgCAFQgBAGAAAFQAAAGACAGQACAGAEADQAFACAEAAQAGAAAFgDQAEgFACgGIAHACQgCAIgGAFQgGAGgJAAQgJAAgFgFg");
	this.shape_109.setTransform(238.175,36.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgXAdIAAg5IAUAAIAJABQAFABAEADQAEAEADAGQACAGAAAHQAAAGgCAFQgBAFgDAEIgFAFIgHADIgIABgAgPAWIAMAAIAIgBIAFgDQADgDABgEQACgFAAgGQAAgIgDgFQgDgFgEgCIgJgBIgMAAg");
	this.shape_110.setTransform(232.425,36.075);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgDAdIAAg5IAHAAIAAA5g");
	this.shape_111.setTransform(484.625,182.925);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgSAdIAAgFIAGgIIAJgIQAIgIADgEQADgEAAgEQAAgEgDgDQgCgDgGAAQgDAAgEADQgCADgBAGIgHgBQABgIAFgEQAFgFAHAAQAIAAAFAFQAFAEgBAHIgBAHQgBADgDADQgEAEgHAGIgIAHIgDAEIAcAAIAAAHg");
	this.shape_112.setTransform(481.2,182.925);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_113.setTransform(510.975,182.625);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgMAXQgFgHAAgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQAEABACAEIAEAIIABANQAAAKgCAGQgDAGgEAEQgDADgHAAQgIAAgEgGgAgHgSQgEAFABANQgBAOAEAFQADAEAEAAQAFAAADgEQAEgFgBgOQABgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_114.setTransform(506.65,182.675);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_115.setTransform(503.125,183.425);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgMAaQgGgEgDgHQgDgIAAgHQAAgJADgGQAEgHAGgDQAGgDAHAAQAIAAAGADQAGAFACAIIgHACQgCgHgEgCQgEgEgFAAQgGAAgEAEQgFADgCAGQgBAEAAAGQAAAGACAGQACAFAEADQAFADAEAAQAGAAAFgEQAEgEACgGIAHABQgCAJgGAGQgGAEgJAAQgJAAgFgDg");
	this.shape_116.setTransform(498.925,182.65);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgJAlQALgSAAgTQAAgHgCgHIgDgLIgGgLIAGAAQAFAJAEAKQADAJAAAIQABAKgFAKQgEAKgEAHg");
	this.shape_117.setTransform(497.6,149.35);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgSAdIAAg5IAlAAIAAAHIgeAAIAAASIAaAAIAAAGIgaAAIAAAag");
	this.shape_118.setTransform(493.825,148.525);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAEAlQgFgHgDgKQgEgKgBgKQABgIADgJQADgKAGgJIAGAAIgHALIgDALQgCAHAAAHQABATALASg");
	this.shape_119.setTransform(490.05,149.35);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAFABADACQADACABADQACAEAAAEQAAAHgFAEQgEAFgNAAIgNAAIAAAYgAgNAAIANAAQAIAAADgDQADgDAAgFQAAgDgCgDQgCgCgCgBIgIgBIgNAAg");
	this.shape_120.setTransform(486.05,148.525);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgIAlQAKgSAAgTIgBgOIgEgLIgFgLIAEAAQAHAJADAKQADAJABAIQgBAKgEAKQgEAKgFAHg");
	this.shape_121.setTransform(496.2,213.25);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgDAdIAAg5IAHAAIAAA5g");
	this.shape_122.setTransform(493.675,212.425);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAEAlQgFgHgEgKQgDgKAAgKQAAgIACgJQAEgKAGgJIAFAAIgGALIgDALQgBAHAAAHQAAATAKASg");
	this.shape_123.setTransform(491.35,213.25);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAFABACACQADACACADQACAEAAAEQAAAHgFAEQgFAFgLAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgBgDQgCgCgEgBIgGgBIgOAAg");
	this.shape_124.setTransform(487.35,212.425);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgMAaQgGgEgDgHQgDgIAAgHQAAgIADgHQAEgHAGgDQAGgDAHgBQAIABAGAEQAGAEACAIIgHABQgCgFgEgEQgEgDgFAAQgGABgEADQgFADgCAFQgBAGAAAFQAAAGACAGQACAGAEACQAFADAEAAQAGAAAFgDQAEgEACgHIAHACQgCAJgGAEQgGAGgJgBQgJAAgFgDg");
	this.shape_125.setTransform(535.825,126.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_126.setTransform(530.375,126.175);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQACgHAEgDQAEgDAGAAQAEAAAEACQAEABACAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_127.setTransform(526.2,126.225);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_128.setTransform(521.475,126.175);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_129.setTransform(518.225,126.975);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJACgGQABgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgDAGgDAEQgEADgHAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_130.setTransform(514.65,126.225);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_131.setTransform(510.075,126.175);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_132.setTransform(505.775,126.225);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgMAXQgGgHAAgQQABgJACgGQACgHADgDQAFgDAFAAQAFAAADACQADABADAEIADAIIACANQgBAKgCAGQgCAGgDAEQgFADgGAAQgIAAgEgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_133.setTransform(501.3,126.225);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_134.setTransform(368.9,114.625);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgMAZQgFgFgBgHIAHgBQABAGADADQADACAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgDgEgFAAIgEABIABgFIABAAQADAAAEgCQAEgDAAgFQAAgDgDgDQgDgCgDAAQgEAAgDACQgCADgBAFIgHgBQABgHAFgEQAEgEAHAAQAEAAAEACQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAFQAAAIgGAFQgFAFgIAAQgHAAgFgEg");
	this.shape_135.setTransform(363.775,114.675);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgMAaQgFgCgCgGQgCgFAAgJIAAggIAHAAIAAAgQAAAHACAEQAAAEAEABQAEACAEAAQAIAAADgDQAEgEAAgLIAAggIAIAAIAAAgQAAAJgDAFQgCAFgEADQgGADgIAAQgHAAgFgDg");
	this.shape_136.setTransform(431.25,74.225);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAJABQAEABACACQAEACABADQACAEAAAEQAAAHgFAEQgEAFgMAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgCgDQgBgCgEgBIgGgBIgOAAg");
	this.shape_137.setTransform(425.8,74.175);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgMAaQgGgEgDgHQgDgIAAgHQAAgJADgGQAEgHAGgEQAGgCAHAAQAIAAAGADQAGAFACAIIgHACQgCgHgEgCQgEgEgFAAQgGAAgEAEQgFADgCAGQgBAEAAAGQAAAGACAGQACAFAEADQAFADAEAAQAGAAAFgEQAEgEACgGIAHABQgCAJgGAGQgGAEgJAAQgJAAgFgDg");
	this.shape_138.setTransform(420.125,74.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AAUAdIAAgvIgRAvIgFAAIgRgwIAAAwIgHAAIAAg5IALAAIAOAoIABAJIADgKIAOgnIAKAAIAAA5g");
	this.shape_139.setTransform(430.825,58.175);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgMAZQgGgDgDgHQgDgHAAgIQAAgJADgGQAEgHAGgEQAGgCAHAAQAIAAAGADQAGAFACAIIgHACQgCgHgEgCQgEgDgFAAQgGAAgEADQgFADgCAGQgBAFAAAFQAAAHACAFQACAFAEADQAFADAEAAQAGAAAFgEQAEgDACgIIAHACQgCAKgGAFQgGAEgJAAQgJAAgFgEg");
	this.shape_140.setTransform(424.625,58.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgUAdIAAg5IAUAAQAGAAAEACQAFACABAEQADADAAAEQAAAEgCADQgCADgEACQAFABADADQADAEAAAFQAAAEgCAEQgCADgCACIgHADIgJABgAgNAWIANAAIAGAAIADgCQABAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAgDgCgCQgCgDgCgBIgIgBIgNAAgAgNgDIAMAAIAHgBQADgBABgCQABgCAAgDQAAgDgBgCQgBgCgDgBIgHgBIgMAAg");
	this.shape_141.setTransform(419.1,58.175);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgDAdIAAgyIgTAAIAAgHIAtAAIAAAHIgTAAIAAAyg");
	this.shape_142.setTransform(500.425,114.625);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgMAZQgFgFgBgHIAHgBQABAGADADQADACAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgDgEgFAAIgEABIABgFIABAAQADAAAEgCQAEgDAAgFQAAgDgDgDQgDgCgDAAQgEAAgDACQgCADgBAFIgHgBQABgHAFgEQAEgEAHAAQAEAAAEACQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAFQAAAIgGAFQgFAFgIAAQgHAAgFgEg");
	this.shape_143.setTransform(495.725,114.675);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgIAlQAKgSAAgTIgCgOIgCgLIgGgMIAEAAQAHAKADAKQADAIABAJQgBAKgEAKQgEAKgFAHg");
	this.shape_144.setTransform(153.85,41.55);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgSAdIAAg5IAlAAIAAAHIgeAAIAAASIAaAAIAAAGIgaAAIAAAag");
	this.shape_145.setTransform(150.075,40.725);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AAEAlQgEgHgFgKQgEgKAAgKQAAgJADgIQAEgKAGgKIAFAAIgGAMIgDALQgBAIAAAGQgBATALASg");
	this.shape_146.setTransform(146.3,41.55);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgUAdIAAg5IAUAAQAGAAAEACQAFACACAEQACADAAAEQAAAEgCADQgCADgEACQAFABADADQACAEAAAFQAAAEgBAEQgCADgCACIgHADIgJABgAgNAWIANAAIAGAAIADgCQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAgDgCgCQgBgDgDgBIgIgBIgNAAgAgNgDIANAAIAGgBQADgBABgCQABgCAAgDQAAgDgBgCQgCgCgCgBIgHgBIgMAAg");
	this.shape_147.setTransform(142.25,40.725);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgDAdIAAgZIgWggIAJAAIALASIAFAJIAHgKIALgRIAIAAIgWAgIAAAZg");
	this.shape_148.setTransform(40.525,23.875);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AAPAdIgHgMIgGgIIgCgEIgEgBIgEgBIgJAAIAAAaIgHAAIAAg5IAYAAQAIAAAEACQAEACACADQACAEAAAFQAAAGgEAEQgEAEgIABIAFADIAGAHIAKAQgAgRgCIAQAAIAIgBQACgBACgDQACgCAAgDQAAgEgDgDQgDgCgHAAIgRAAg");
	this.shape_149.setTransform(35.275,23.875);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgUAdIAAg5IAoAAIAAAHIghAAIAAASIAfAAIAAAGIgfAAIAAATIAiAAIAAAHg");
	this.shape_150.setTransform(29.525,23.875);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgDAdIAAgyIgTAAIAAgHIAtAAIAAAHIgTAAIAAAyg");
	this.shape_151.setTransform(24.325,23.875);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgDAdIAAgyIgTAAIAAgHIAtAAIAAAHIgTAAIAAAyg");
	this.shape_152.setTransform(19.425,23.875);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_153.setTransform(14.275,23.875);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAQAGAAAFACQADACACAEQADADAAAEQAAAEgCADQgCADgEACQAFABADADQACAEABAFQgBAEgBAEQgCADgDACIgFADIgKABgAgNAWIANAAIAFAAIAFgCQAAAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAgDgCgCQgBgDgEgBIgHgBIgNAAgAgNgDIAMAAIAGgBQADgBACgCQABgCABgDQgBgDgBgCQgBgCgDgBIgIgBIgLAAg");
	this.shape_154.setTransform(9,23.875);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgJAlQALgSAAgTIgCgOIgCgLIgHgMIAGAAQAFAKAEAKQADAIAAAJQAAAKgEAKQgEAKgEAHg");
	this.shape_155.setTransform(275.9,208.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgSAdIAAg5IAlAAIAAAHIgeAAIAAASIAaAAIAAAGIgaAAIAAAag");
	this.shape_156.setTransform(272.125,207.675);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AAEAlQgEgHgEgKQgFgKAAgKQAAgJADgIQAEgKAGgKIAFAAIgGAMIgDALQgBAIAAAGQgBATALASg");
	this.shape_157.setTransform(268.35,208.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgDAdIgWg5IAIAAIAPApIACAJIADgJIAPgpIAIAAIgWA5g");
	this.shape_158.setTransform(264.2,207.675);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AAPAdIgdgsIAAAsIgHAAIAAg5IAIAAIAdAsIAAgsIAHAAIAAA5g");
	this.shape_159.setTransform(500.1,289.275);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgMAZQgFgFgBgHIAHgBQABAGADADQADACAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgDgEgFAAIgEABIABgFIABAAQADAAAEgCQAEgDAAgFQAAgDgDgDQgDgCgDAAQgEAAgDACQgCADgBAFIgHgBQABgHAFgEQAEgEAHAAQAEAAAEACQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAFQAAAIgGAFQgFAFgIAAQgHAAgFgEg");
	this.shape_160.setTransform(495.025,289.325);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_161.setTransform(500.125,260.775);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_162.setTransform(494.925,260.775);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_163.setTransform(495.675,354.425);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgIAmQAKgUAAgSIgBgOIgDgLIgGgMIAEAAQAHAKADAKQADAJAAAIQAAALgEAJQgEAKgFAIg");
	this.shape_164.setTransform(368.95,280.35);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgSAdIAAg5IAlAAIAAAHIgeAAIAAASIAaAAIAAAGIgaAAIAAAag");
	this.shape_165.setTransform(365.175,279.525);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AAEAmQgEgIgFgKQgEgJAAgLQAAgIADgJQAEgKAGgKIAFAAIgGAMIgDALQgBAHAAAHQgBASALAUg");
	this.shape_166.setTransform(361.4,280.35);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AAPAdIgHgMIgGgIIgCgEIgEgBIgEgBIgJAAIAAAaIgHAAIAAg5IAYAAQAIAAAEACQAEACACADQACAEAAAFQAAAGgEAEQgEAEgIABIAFADIAGAHIAKAQgAgRgCIAQAAIAIgBQACgBACgDQACgCAAgDQAAgEgDgDQgDgCgHAAIgRAAg");
	this.shape_167.setTransform(357.325,279.525);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAQAGAAAFACQADACACAEQADADAAAEQAAAEgCADQgCADgEACQAFABADADQACAEAAAFQAAAEgBAEQgCADgDACIgFADIgKABgAgNAWIANAAIAFAAIAFgCQAAAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAgDgCgCQgBgDgEgBIgHgBIgNAAgAgNgDIAMAAIAGgBQADgBACgCQABgCABgDQgBgDgBgCQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgIgBIgLAAg");
	this.shape_168.setTransform(351.55,279.525);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgUAdIAAg5IAoAAIAAAHIghAAIAAASIAfAAIAAAGIgfAAIAAATIAiAAIAAAHg");
	this.shape_169.setTransform(164.075,214.225);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgXAdIAAg5IAUAAIAJABQAFABAEADQAEAEADAGQACAGAAAHQAAAGgCAFQgBAFgDAEIgFAFIgHADIgIABgAgPAWIAMAAIAIgBIAFgDQADgDABgEQACgFAAgGQAAgIgDgFQgDgFgEgCIgJgBIgMAAg");
	this.shape_170.setTransform(164.275,256.125);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgMAZQgGgDgDgHQgDgIAAgHQAAgIADgHQAEgHAGgDQAGgEAHAAQAIAAAGAFQAGAEACAIIgHABQgCgFgEgEQgEgCgFAAQgGAAgEADQgFADgCAFQgBAGAAAFQAAAGACAGQACAGAEADQAFACAEAAQAGAAAFgDQAEgFACgGIAHACQgCAIgGAFQgGAGgJAAQgJAAgFgFg");
	this.shape_171.setTransform(126.925,256.15);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_172.setTransform(126.675,214.525);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgIAlQAKgSAAgTIgCgOIgCgLIgGgLIAEAAQAHAJADAKQADAIAAAJQAAAKgEAKQgEAKgFAHg");
	this.shape_173.setTransform(107.5,207.95);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgSAdIAAg5IAlAAIAAAHIgeAAIAAASIAaAAIAAAGIgaAAIAAAag");
	this.shape_174.setTransform(103.725,207.125);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AAEAlQgEgHgFgKQgDgKgBgKQAAgJADgIQAEgKAGgJIAFAAIgGALIgDALQgBAHAAAHQgBATALASg");
	this.shape_175.setTransform(99.95,207.95);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgDAdIAAgZIgWggIAJAAIALASIAFAJIAHgKIALgRIAIAAIgWAgIAAAZg");
	this.shape_176.setTransform(95.775,207.125);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgMAaQgGgEgEgGQgDgIAAgIQAAgHADgIQAEgGAGgEQAHgDAHAAQAGAAAFABQAFACADAEQADADACAHIgHABIgDgHQgCgCgEgBQgDgCgFAAQgEAAgEACQgEABgCACQgCADgBADQgDAGAAAFQAAAHADAGQADAFAFACQAFADAEAAQAFAAAFgCQAFgCACgCIAAgLIgRAAIAAgGIAYAAIAAAUQgFAFgGACQgGACgGAAQgIAAgHgDg");
	this.shape_177.setTransform(90.025,207.15);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgJAmQALgUAAgSIgCgOIgCgLIgHgMIAGAAQAFAKAEAKQADAIAAAJQAAALgEAJQgEAKgEAIg");
	this.shape_178.setTransform(104.9,248.95);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgSAdIAAg5IAlAAIAAAHIgeAAIAAASIAaAAIAAAGIgaAAIAAAag");
	this.shape_179.setTransform(101.125,248.125);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AAEAmQgEgIgEgKQgFgJAAgLQAAgJADgIQAEgKAGgKIAFAAIgGAMIgDALQgBAIAAAGQgBASALAUg");
	this.shape_180.setTransform(97.35,248.95);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgMAaQgGgDgEgIQgDgGAAgJQAAgHADgIQAEgGAGgEQAHgEAHAAQAGABAFACQAFACADADQADAEACAFIgHACIgDgGQgCgDgEgCQgDgCgFAAQgEAAgEACQgEACgCADQgCACgBADQgDAFAAAGQAAAHADAFQADAFAFADQAFADAEgBQAFABAFgCQAFgCACgCIAAgLIgRAAIAAgGIAYAAIAAAUQgFAFgGADQgGACgGAAQgIgBgHgDg");
	this.shape_181.setTransform(92.775,248.15);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgUAdIAAg5IAoAAIAAAHIghAAIAAASIAfAAIAAAGIgfAAIAAATIAiAAIAAAHg");
	this.shape_182.setTransform(130.025,22.875);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgKAbQgGgCgCgFQgDgEgBgGIAHAAIADAHQACADAEABQAEABADAAIAIgBIAFgDIACgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgBgDgEgBIgJgDIgLgCQgEgCgCgEQgCgDAAgEQAAgEACgEQACgEAFgCQAFgBAFAAQAGAAAFACQAFABACAFQADADAAAGIgHAAQgBgFgDgDQgDgDgHAAQgGAAgDADQgDACAAADQAAAEACACQACABAJACIAMAFQAFABADADQACADAAAFQAAAFgDAEQgCAEgFACQgFACgGAAQgHABgFgDg");
	this.shape_183.setTransform(124.525,22.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgMAaQgFgCgDgGQgCgFAAgJIAAggIAIAAIAAAgQAAAHABAEQABAEAEABQADACAFAAQAHAAAEgDQAEgEAAgLIAAggIAHAAIAAAgQAAAJgCAFQgBAFgGADQgFADgIAAQgHAAgFgDg");
	this.shape_184.setTransform(119,22.925);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgSAdIAAg5IAlAAIAAAHIgeAAIAAASIAaAAIAAAGIgaAAIAAAag");
	this.shape_185.setTransform(113.775,22.875);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AAPAdIgdgsIAAAsIgIAAIAAg5IAIAAIAeAsIAAgsIAGAAIAAA5g");
	this.shape_186.setTransform(106.05,22.875);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgDAdIAAg5IAHAAIAAA5g");
	this.shape_187.setTransform(102.125,22.875);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_188.setTransform(98.325,22.875);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AAUAdIAAgvIgRAvIgFAAIgRgwIAAAwIgHAAIAAg5IALAAIAOAoIABAJIADgKIAOgnIAKAAIAAA5g");
	this.shape_189.setTransform(92.325,22.875);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgMAZQgFgFgBgHIAHgBQABAGADADQADACAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgDgEgFAAIgEABIABgFIABAAQADAAAEgCQAEgDAAgFQAAgDgDgDQgDgCgDAAQgEAAgDACQgCADgBAFIgHgBQABgHAFgEQAEgEAHAAQAEAAAEACQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAFQAAAIgGAFQgFAFgIAAQgHAAgFgEg");
	this.shape_190.setTransform(82.975,22.925);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJACgGQABgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgDAGgDAEQgEADgHAAQgHAAgFgGgAgHgSQgEAFAAANQAAAOAEAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_191.setTransform(78.5,22.925);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_192.setTransform(74.975,23.675);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgSAdIAAg5IAlAAIAAAHIgeAAIAAASIAaAAIAAAGIgaAAIAAAag");
	this.shape_193.setTransform(71.325,22.875);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AAQAZIgGgPIgUAAIgGAPIgHAAIATgxIAHAAIAUAxgAgDgKIgFAPIAQAAIgGgOIgCgKIgDAJg");
	this.shape_194.setTransform(118.65,34.45);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgKAUQgFgGAAgOQAAgIACgFQABgGAEgDQAEgDAEAAQAEAAADACQADACACADIADAHIABALQAAAJgBAFQgCAGgEADQgEADgFAAQgGAAgEgGgAgGgQQgDAFAAALQAAAMADAEQADAFADAAQAEAAADgFQADgEAAgMQAAgLgDgEQgDgEgEAAQgDAAgDADg");
	this.shape_195.setTransform(114.325,34.475);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgKAUQgFgGAAgOQAAgIACgFQABgGAEgDQAEgDAEAAQAEAAADACQADACACADIADAHIABALQAAAJgBAFQgCAGgEADQgEADgFAAQgGAAgEgGgAgGgQQgDAFAAALQAAAMADAEQADAFADAAQAEAAADgFQADgEAAgMQAAgLgDgEQgDgEgEAAQgDAAgDADg");
	this.shape_196.setTransform(110.425,34.475);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgQAZIACgEIADgHIAJgHQAGgHADgDQADgEAAgDQAAgEgCgCQgDgDgEAAQgDAAgDADQgDACAAAFIgGgBQABgHADgDQAFgEAGAAQAHAAAFAEQADAEAAAGIAAAGIgEAFIgKAJIgGAGIgDADIAXAAIAAAGg");
	this.shape_197.setTransform(106.45,34.425);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AANAZIgagmIAAAmIgGAAIAAgxIAHAAIAZAmIAAgmIAHAAIAAAxg");
	this.shape_198.setTransform(100.125,34.45);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgCAZIAAgxIAFAAIAAAxg");
	this.shape_199.setTransform(96.625,34.45);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AAPAZIgFgPIgUAAIgFAPIgIAAIATgxIAHAAIAUAxgAgDgKIgFAPIAQAAIgGgOIgCgKIgDAJg");
	this.shape_200.setTransform(93.35,34.45);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AASAZIAAgpIgPApIgFAAIgOgqIAAAqIgHAAIAAgxIAKAAIAMAiIACAIIACgIIAMgiIAJAAIAAAxg");
	this.shape_201.setTransform(88.05,34.45);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AANAdIgTgdIgJAJIAAAUIgIAAIAAg5IAIAAIAAAcIAbgcIAKAAIgWAYIAXAhg");
	this.shape_202.setTransform(156.8,85.975);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgMAaQgGgEgDgHQgDgHAAgIQAAgJADgGQAEgHAGgEQAGgCAHAAQAIAAAGADQAGAFACAIIgHACQgCgHgEgCQgEgDgFgBQgGAAgEAEQgFADgCAGQgBAFAAAFQAAAGACAGQACAFAEADQAFADAEAAQAGAAAFgEQAEgDACgIIAHACQgCAJgGAGQgGAEgJAAQgJAAgFgDg");
	this.shape_203.setTransform(150.975,86);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_204.setTransform(144.975,85.975);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgRAdIAAg5IAIAAIAAAyIAbAAIAAAHg");
	this.shape_205.setTransform(139.775,85.975);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgUAdIAAg5IAUAAQAGAAAEACQAFACABAEQADADAAAEQAAAEgCADQgCADgEACQAFABADADQADAEAAAFQAAAEgCAEQgCADgDACIgGADIgJABgAgNAWIANAAIAGAAIADgCQABAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAgDgCgCQgCgDgDgBIgHgBIgNAAgAgNgDIAMAAIAHgBQADgBABgCQACgCAAgDQAAgDgCgCQgBgCgDgBIgHgBIgMAAg");
	this.shape_206.setTransform(134.8,85.975);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgUAdIAAg5IAoAAIAAAHIghAAIAAASIAfAAIAAAGIgfAAIAAATIAiAAIAAAHg");
	this.shape_207.setTransform(127.275,85.975);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgKAbQgGgCgCgFQgDgEgBgGIAHgBIADAIQACADAEABQAEACADAAIAIgCIAFgDIACgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBgBQgBgCgEgBIgJgDIgLgCQgEgCgCgEQgCgDAAgEQAAgFACgDQACgEAFgCQAFgCAFABQAGAAAFABQAFACACAFQADADAAAGIgHAAQgBgFgDgDQgDgDgHAAQgGAAgDADQgDACAAADQAAAEACABQACACAJACIAMAFQAFABADADQACADAAAFQAAAFgDAEQgCAEgFACQgFACgGAAQgHAAgFgCg");
	this.shape_208.setTransform(121.775,86);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgMAaQgFgCgCgGQgCgFAAgJIAAggIAHAAIAAAgQAAAHACAEQAAAEAEABQAEACAEAAQAIAAADgDQAEgEAAgLIAAggIAIAAIAAAgQAAAJgDAFQgCAFgEADQgGADgIAAQgHAAgFgDg");
	this.shape_209.setTransform(116.25,86.025);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgSAdIAAg5IAlAAIAAAHIgeAAIAAASIAaAAIAAAGIgaAAIAAAag");
	this.shape_210.setTransform(111.025,85.975);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgXAdIAAg5IAUAAIAJABQAFABAEADQAEAEADAGQACAGAAAHQAAAGgCAFQgBAFgDAEIgFAFIgHADIgIABgAgPAWIAMAAIAIgBIAFgDQADgDABgEQACgFAAgGQAAgIgDgFQgDgFgEgCIgJgBIgMAAg");
	this.shape_211.setTransform(103.425,85.975);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AAPAdIgdgsIAAAsIgIAAIAAg5IAIAAIAeAsIAAgsIAGAAIAAA5g");
	this.shape_212.setTransform(97.5,85.975);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_213.setTransform(91.975,85.975);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgDAdIAAgZIgWggIAJAAIALASIAFAJIAHgKIALgRIAIAAIgWAgIAAAZg");
	this.shape_214.setTransform(84.375,85.975);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_215.setTransform(79.075,85.975);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgRAdIAAg5IAIAAIAAAyIAbAAIAAAHg");
	this.shape_216.setTransform(74.325,85.975);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgUAdIAAg5IAoAAIAAAHIghAAIAAASIAfAAIAAAGIgfAAIAAATIAiAAIAAAHg");
	this.shape_217.setTransform(69.375,85.975);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AAPAdIgHgMIgGgIIgCgEIgEgBIgEgBIgJAAIAAAaIgHAAIAAg5IAYAAQAIAAAEACQAEACACADQACAEAAAFQAAAGgEAEQgEAEgIABIAFADIAGAHIAKAQgAgRgCIAQAAIAIgBQACgBACgDQACgCAAgDQAAgEgDgDQgDgCgHAAIgRAAg");
	this.shape_218.setTransform(63.975,85.975);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_219.setTransform(53.475,85.975);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQADgHADgDQAEgDAGAAQAEAAAEACQADABADAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_220.setTransform(49.3,86.025);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_221.setTransform(45.775,86.775);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgSAdIAAg5IAlAAIAAAHIgeAAIAAASIAaAAIAAAGIgaAAIAAAag");
	this.shape_222.setTransform(42.125,85.975);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AAPAZIgFgPIgUAAIgFAPIgIAAIATgxIAHAAIAUAxgAgDgKIgFAPIAQAAIgGgOIgCgKIgDAJg");
	this.shape_223.setTransform(75.35,241.55);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgKAVQgFgEgBgGIAHAAQAAAEADADQADACADAAQAEAAADgDQADgEAAgFQAAgFgDgDQgDgDgEAAQgCAAgDACIgDACIgHAAIAGgZIAYAAIAAAGIgUAAIgDANQAFgDAEAAQAGAAAFAFQAEADABAHQAAAHgFAFQgEAGgIAAQgHAAgDgEg");
	this.shape_224.setTransform(71.05,241.625);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AADAZIAAgmIgFAEIgGADIAAgFQAFgDADgDQAEgEABgDIAEAAIAAAxg");
	this.shape_225.setTransform(66.875,241.525);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AANAZIgagmIAAAmIgGAAIAAgxIAHAAIAZAmIAAgmIAHAAIAAAxg");
	this.shape_226.setTransform(60.725,241.55);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AAOAZIgHgLIgEgHIgDgCIgDgCIgDAAIgIAAIAAAWIgHAAIAAgxIAVAAQAHAAAEACQADABACADQACAEAAADQAAAGgEADQgDADgHABIAEADIAFAHIAJANgAgOgCIAOAAIAGgBIAEgDIABgFQAAgDgCgDQgDgCgFAAIgPAAg");
	this.shape_227.setTransform(55.9,241.55);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgMAXQgFgEgDgGQgDgGAAgHQAAgLAGgHQAIgHAJAAQAHAAAFAEQAGACADAHQADAFAAAHQAAAHgEAHQgDAFgFAEQgGADgGAAQgGAAgGgDgAgLgOQgFAFgBAJQAAAKAGAFQAEAFAHAAQAIAAAEgFQAFgFAAgKQAAgFgCgFQgCgEgEgDQgEgCgFgBQgGAAgFAGg");
	this.shape_228.setTransform(50.45,241.55);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AANAZIAAgXIgZAAIAAAXIgHAAIAAgxIAHAAIAAAVIAZAAIAAgVIAHAAIAAAxg");
	this.shape_229.setTransform(45.175,241.55);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AAQAZIgGgPIgUAAIgGAPIgHAAIAUgxIAGAAIAVAxgAgCgKIgGAPIAQAAIgGgOIgCgKIgCAJg");
	this.shape_230.setTransform(73.4,200.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgKAUQgFgGAAgOQAAgIACgFQABgGAEgDQAEgDAEAAQAEAAADACQADACACADIADAHIABALQAAAJgBAFQgCAGgEADQgEADgFAAQgGAAgEgGgAgGgQQgDAFAAALQAAAMADAEQADAFADAAQAEAAADgFQADgEAAgMQAAgLgDgEQgDgEgEAAQgDAAgDADg");
	this.shape_231.setTransform(69.075,200.525);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AADAZIAAgmIgFAEIgGADIAAgFQAFgDADgDQAEgEABgDIAEAAIAAAxg");
	this.shape_232.setTransform(64.925,200.475);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgSAZIAAgxIASAAIAHABIAHACIADAEQACAEAAADQAAAHgEADQgEAEgLABIgLAAIAAAUgAgLgBIALAAQAHAAACgBQADgDABgFQgBgDgCgCQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBAAAAgBIgHAAIgLAAg");
	this.shape_233.setTransform(59.1,200.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgMAXQgFgEgDgGQgDgGAAgHQAAgLAHgHQAHgHAJAAQAHAAAFAEQAGACADAHQADAFAAAHQAAAHgEAHQgDAFgFAEQgGADgGAAQgGAAgGgDgAgLgOQgFAFAAAJQgBAKAGAFQAFAFAGAAQAHAAAFgFQAFgGAAgJQAAgFgCgFQgCgEgEgDQgEgCgFgBQgGAAgFAGg");
	this.shape_234.setTransform(53.95,200.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgCAZIAAgrIgRAAIAAgGIAnAAIAAAGIgRAAIAAArg");
	this.shape_235.setTransform(49.1,200.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgJAYQgEgCgDgEQgDgEAAgFIAHgBIACAHQABACADABQAEACADAAIAHgBQADgBABgCIACgEIgCgFQgBgBgDgBIgIgDIgKgCQgDgCgCgDQgCgCAAgEQAAgEACgDQADgEADgBQAFgCAEAAQAFAAAEACQAFABACAEQADADgBAFIgGAAQgBgFgCgCQgDgCgGAAQgFAAgDACQgDADABADQAAAAAAABQAAAAAAABQAAAAABABQAAABAAAAQADACAGACIALACQAFABACAEQACADAAAEQAAAEgDADQgCAEgEACQgEACgGAAQgFAAgFgCg");
	this.shape_236.setTransform(44.6,200.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgKAmIAAgHIABAAIAFgBQACgCAAgFIAAgMQAAgEACgDQABgDAEgBQgFgBgBgEQgBgDAAgJIgBgJQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBgBgEAAIgBAAIAAgGIACAAIAFABQADAAAAADQACACABADIAAAKIABAKQAAACACACQACACADgBIAAAGQgDAAgCABQgCACAAADIgBAJIAAAJIgBAFIgCADIgDACIgFABg");
	this.shape_237.setTransform(146.025,279.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AAPAdIgdgsIAAAsIgIAAIAAg5IAJAAIAcAsIAAgsIAIAAIAAA5g");
	this.shape_238.setTransform(141.75,278.275);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AAPAdIgHgMIgGgIIgCgEIgEgBIgEgBIgJAAIAAAaIgHAAIAAg5IAYAAQAIAAAEACQAEACACADQACAEAAAFQAAAGgEAEQgEAEgIABIAFADIAGAHIAKAQgAgRgCIAQAAIAIgBQACgBACgDQACgCAAgDQAAgEgDgDQgDgCgHAAIgRAAg");
	this.shape_239.setTransform(136.275,278.275);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_240.setTransform(130.025,278.275);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_241.setTransform(124,278.275);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AAJAmIgFgBQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgCgFIAAgKIgBgKQAAgDgCgCQgCgBgEAAIAAgGQAEABACgCQACgCAAgCIABgJIAAgJIABgFIACgDIADgDIAFAAIADAAIAAAGIgCAAQgEABgCABQgBACABAEIgBANQgBAEgBADIgFADQAEABACAEQABAEABAJIAAAJIABADIAFABIACAAIAAAHg");
	this.shape_242.setTransform(119.8,279.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgDAdIAAgZIgWggIAJAAIALASIAFAJIAHgKIALgRIAIAAIgWAgIAAAZg");
	this.shape_243.setTransform(167.825,268.775);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_244.setTransform(162.525,268.775);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgRAdIAAg5IAIAAIAAAyIAbAAIAAAHg");
	this.shape_245.setTransform(157.775,268.775);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgUAdIAAg5IAoAAIAAAHIghAAIAAASIAfAAIAAAGIgfAAIAAATIAiAAIAAAHg");
	this.shape_246.setTransform(152.825,268.775);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AAPAdIgHgMIgGgIIgCgEIgEgBIgEgBIgJAAIAAAaIgHAAIAAg5IAYAAQAIAAAEACQAEACACADQACAEAAAFQAAAGgEAEQgEAEgIABIAFADIAGAHIAKAQgAgRgCIAQAAIAIgBQACgBACgDQACgCAAgDQAAgEgDgDQgDgCgHAAIgRAAg");
	this.shape_247.setTransform(147.425,268.775);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AAPAdIgdgsIAAAsIgHAAIAAg5IAHAAIAeAsIAAgsIAHAAIAAA5g");
	this.shape_248.setTransform(139.1,268.775);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AAPAdIgHgMIgGgIIgCgEIgEgBIgEgBIgJAAIAAAaIgHAAIAAg5IAYAAQAIAAAEACQAEACACADQACAEAAAFQAAAGgEAEQgEAEgIABIAFADIAGAHIAKAQgAgRgCIAQAAIAIgBQACgBACgDQACgCAAgDQAAgEgDgDQgDgCgHAAIgRAAg");
	this.shape_249.setTransform(133.625,268.775);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_250.setTransform(127.375,268.775);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_251.setTransform(121.35,268.775);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_252.setTransform(558.2,368.775);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgMAZQgGgDgDgHQgDgHAAgIQAAgIADgHQAEgHAGgEQAGgDAHABQAIgBAGAEQAGAFACAIIgHABQgCgFgEgEQgEgCgFAAQgGgBgEAEQgFADgCAFQgBAFAAAGQAAAHACAFQACAGAEADQAFACAEAAQAGAAAFgEQAEgDACgIIAHACQgCAKgGAEQgGAFgJABQgJgBgFgEg");
	this.shape_253.setTransform(552.425,368.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgDAdIAAgyIgTAAIAAgHIAtAAIAAAHIgTAAIAAAyg");
	this.shape_254.setTransform(547.075,368.775);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgDAdIAAg5IAHAAIAAA5g");
	this.shape_255.setTransform(543.525,368.775);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AAOAdIgMgrIgCgHIgBAHIgMArIgIAAIgPg5IAIAAIAJAlIACAMIADgLIALgmIAIAAIAIAcQADALABAKIADgNIAJgkIAIAAIgQA5g");
	this.shape_256.setTransform(538.625,368.775);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgKAbQgGgCgCgEQgDgFgBgGIAHgBIADAHQACADAEACQAEABADABIAIgBIAFgEIACgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBgBQgBgCgEgBIgJgDIgLgDQgEgCgCgDQgCgDAAgEQAAgEACgEQACgEAFgCQAFgBAFAAQAGgBAFACQAFADACAEQADAEAAAFIgHAAQgBgGgDgDQgDgCgHAAQgGAAgDACQgDADAAAEQAAACACACQACADAJACIAMADQAFABADAEQACADAAAGQAAAEgDAEQgCAEgFACQgFACgGABQgHAAgFgDg");
	this.shape_257.setTransform(532.125,368.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AAPAdIgdgsIAAAsIgIAAIAAg5IAIAAIAdAsIAAgsIAHAAIAAA5g");
	this.shape_258.setTransform(524.35,368.775);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AAPAdIgHgMIgGgIIgCgEIgEgBIgEgBIgJAAIAAAaIgHAAIAAg5IAYAAQAIAAAEACQAEACACADQACAEAAAFQAAAGgEAEQgEAEgIABIAFADIAGAHIAKAQgAgRgCIAQAAIAIgBQACgBACgDQACgCAAgDQAAgEgDgDQgDgCgHAAIgRAAg");
	this.shape_259.setTransform(518.875,368.775);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_260.setTransform(512.625,368.775);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_261.setTransform(506.6,368.775);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgMAaQgGgEgEgGQgDgIAAgIQAAgHADgHQAEgIAGgDQAHgDAHAAQAGgBAFACQAFACADAEQADAEACAGIgHABIgDgHQgCgCgEgBQgDgCgFAAQgEAAgEACQgEABgCACQgCADgBADQgDAGAAAFQAAAHADAGQADAFAFACQAFACAEABQAFgBAFgBQAFgCACgDIAAgKIgRAAIAAgGIAYAAIAAAVQgFAEgGACQgGACgGABQgIAAgHgEg");
	this.shape_262.setTransform(571.575,274.3);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AAPAdIgdgsIAAAsIgHAAIAAg5IAIAAIAcAsIAAgsIAIAAIAAA5g");
	this.shape_263.setTransform(565.55,274.275);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgDAdIAAg5IAHAAIAAA5g");
	this.shape_264.setTransform(561.625,274.275);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AAPAdIgHgMIgGgIIgCgEIgEgBIgEgBIgJAAIAAAaIgHAAIAAg5IAYAAQAIAAAEACQAEACACADQACAEAAAFQAAAGgEAEQgEAEgIABIAFADIAGAHIAKAQgAgRgCIAQAAIAIgBQACgBACgDQACgCAAgDQAAgEgDgDQgDgCgHAAIgRAAg");
	this.shape_265.setTransform(557.875,274.275);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAFABACACQADACACADQACAEAAAEQAAAHgFAEQgFAFgLAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgBgDQgCgCgEgBIgGgBIgOAAg");
	this.shape_266.setTransform(552.15,274.275);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgKAbQgGgCgCgEQgDgFgBgGIAHgBIADAHQACADAEACQAEABADABIAIgBIAFgEIACgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBgBQgBgCgEgBIgJgDIgLgDQgEgCgCgDQgCgDAAgEQAAgEACgEQACgEAFgCQAFgBAFAAQAGgBAFACQAFADACAEQADAEAAAFIgHAAQgBgGgDgDQgDgCgHAAQgGAAgDACQgDADAAAEQAAACACACQACADAJACIAMADQAFABADAEQACADAAAGQAAAEgDAEQgCAEgFACQgFACgGABQgHAAgFgDg");
	this.shape_267.setTransform(546.625,274.3);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AANAdIgTgdIgJAJIAAAUIgIAAIAAg5IAIAAIAAAcIAbgcIAKAAIgWAYIAXAhg");
	this.shape_268.setTransform(539.4,274.275);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgMAZQgGgDgDgHQgDgHAAgIQAAgIADgHQAEgHAGgEQAGgDAHABQAIgBAGAEQAGAFACAIIgHABQgCgFgEgEQgEgCgFAAQgGgBgEAEQgFADgCAFQgBAFAAAGQAAAHACAFQACAGAEADQAFACAEAAQAGAAAFgEQAEgDACgIIAHACQgCAKgGAEQgGAFgJABQgJgBgFgEg");
	this.shape_269.setTransform(533.575,274.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_270.setTransform(527.575,274.275);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgRAdIAAg5IAIAAIAAAyIAbAAIAAAHg");
	this.shape_271.setTransform(522.375,274.275);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgMAZQgGgDgDgHQgDgHAAgIQAAgIADgHQAEgHAGgEQAGgDAHABQAIgBAGAEQAGAFACAIIgHABQgCgFgEgEQgEgCgFAAQgGgBgEAEQgFADgCAFQgBAFAAAGQAAAHACAFQACAGAEADQAFACAEAAQAGAAAFgEQAEgDACgIIAHACQgCAKgGAEQgGAFgJABQgJgBgFgEg");
	this.shape_272.setTransform(517.125,274.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_273.setTransform(533.425,341.925);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgMAXQgGgHAAgQQAAgJADgGQACgHADgDQAEgDAGAAQAFAAADACQADABADAEIADAIIABANQAAAKgCAGQgBAGgEAEQgFADgGAAQgHAAgFgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_274.setTransform(529.1,341.975);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgSAdIAAgFIAGgIIAJgIQAIgIADgEQAEgEAAgEQAAgEgEgDQgCgDgGAAQgDAAgDADQgEADAAAGIgHgBQABgIAFgEQAEgFAIAAQAIAAAFAFQAFAEgBAHIgBAHQgBADgDADQgDAEgIAGIgHAHIgEAEIAcAAIAAAHg");
	this.shape_275.setTransform(524.6,341.925);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_276.setTransform(521.125,342.725);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgSAdIAAgFIAFgIIAJgIQAJgIADgEQADgEABgEQAAgEgEgDQgDgDgEAAQgFAAgCADQgEADAAAGIgGgBQAAgIAFgEQAEgFAIAAQAIAAAFAFQAFAEAAAHIgCAHQgBADgDADQgDAEgIAGIgHAHIgEAEIAcAAIAAAHg");
	this.shape_277.setTransform(517.5,341.925);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgSAdIABgFIAFgIIAJgIQAIgIADgEQAEgEgBgEQAAgEgDgDQgDgDgFAAQgEAAgDADQgCADAAAGIgIgBQABgIAFgEQAFgFAHAAQAIAAAFAFQAEAEAAAHIgBAHQgBADgEADQgDAEgHAGIgIAHIgDAEIAcAAIAAAHg");
	this.shape_278.setTransform(513.05,341.925);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_279.setTransform(508.675,341.975);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJACgGQABgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgDAGgDAEQgEADgHAAQgHAAgFgGgAgHgSQgEAFAAANQAAAOAEAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_280.setTransform(504.2,341.975);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgSAdIAAgFIAGgIIAJgIQAIgIADgEQAEgEAAgEQgBgEgDgDQgCgDgGAAQgDAAgEADQgDADAAAGIgHgBQABgIAFgEQAFgFAHAAQAIAAAFAFQAFAEgBAHIgBAHQgBADgDADQgEAEgHAGIgHAHIgEAEIAcAAIAAAHg");
	this.shape_281.setTransform(533.5,303.225);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgMAXQgGgHAAgQQAAgJADgGQACgHADgDQAEgDAGAAQAFAAADACQADABADAEIADAIIABANQAAAKgCAGQgBAGgEAEQgFADgGAAQgHAAgFgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_282.setTransform(529.1,303.275);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgSAdIAAgFIAGgIIAJgIQAIgIADgEQAEgEAAgEQAAgEgEgDQgCgDgGAAQgDAAgDADQgEADAAAGIgHgBQABgIAFgEQAEgFAIAAQAIAAAFAFQAFAEgBAHIgBAHQgBADgDADQgDAEgIAGIgHAHIgEAEIAcAAIAAAHg");
	this.shape_283.setTransform(524.6,303.225);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_284.setTransform(521.125,304.025);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgSAdIAAgFIAFgIIAJgIQAJgIADgEQADgEABgEQAAgEgEgDQgDgDgEAAQgFAAgCADQgEADAAAGIgGgBQAAgIAFgEQAEgFAIAAQAIAAAFAFQAFAEAAAHIgCAHQgBADgDADQgDAEgIAGIgHAHIgEAEIAcAAIAAAHg");
	this.shape_285.setTransform(517.5,303.225);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgSAdIABgFIAFgIIAJgIQAIgIADgEQAEgEgBgEQAAgEgDgDQgDgDgFAAQgEAAgDADQgCADAAAGIgIgBQABgIAFgEQAFgFAHAAQAIAAAFAFQAEAEAAAHIgBAHQgBADgEADQgDAEgHAGIgIAHIgDAEIAcAAIAAAHg");
	this.shape_286.setTransform(513.05,303.225);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_287.setTransform(508.675,303.275);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJACgGQABgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgDAGgDAEQgEADgHAAQgHAAgFgGgAgHgSQgEAFAAANQAAAOAEAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_288.setTransform(504.2,303.275);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_289.setTransform(533.275,247.925);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgMAXQgGgHAAgQQAAgJADgGQACgHADgDQAEgDAGAAQAFAAADACQADABADAEIADAIIABANQAAAKgCAGQgBAGgEAEQgFADgGAAQgHAAgFgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_290.setTransform(529.1,247.975);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgSAdIAAgFIAGgIIAJgIQAIgIADgEQAEgEAAgEQAAgEgEgDQgCgDgGAAQgDAAgDADQgEADAAAGIgHgBQABgIAFgEQAEgFAIAAQAIAAAFAFQAFAEgBAHIgBAHQgBADgDADQgDAEgIAGIgHAHIgEAEIAcAAIAAAHg");
	this.shape_291.setTransform(524.6,247.925);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_292.setTransform(521.125,248.725);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgSAdIAAgFIAFgIIAJgIQAJgIADgEQADgEABgEQAAgEgEgDQgDgDgEAAQgFAAgCADQgEADAAAGIgGgBQAAgIAFgEQAEgFAIAAQAIAAAFAFQAFAEAAAHIgCAHQgBADgDADQgDAEgIAGIgHAHIgEAEIAcAAIAAAHg");
	this.shape_293.setTransform(517.5,247.925);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgSAdIABgFIAFgIIAJgIQAIgIADgEQAEgEgBgEQAAgEgDgDQgDgDgFAAQgEAAgDADQgCADAAAGIgIgBQABgIAFgEQAFgFAHAAQAIAAAFAFQAEAEAAAHIgBAHQgBADgEADQgDAEgHAGIgIAHIgDAEIAcAAIAAAHg");
	this.shape_294.setTransform(513.05,247.925);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_295.setTransform(508.675,247.975);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJACgGQABgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgDAGgDAEQgEADgHAAQgHAAgFgGgAgHgSQgEAFAAANQAAAOAEAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_296.setTransform(504.2,247.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._0922_2_TEXT, null, null);


(lib._0922_2_SEN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SEN
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.6,1,1).p("AA1g0QgWgWgfAAQgeAAgWAWQgWAWAAAeQAAAfAWAWQAWAWAeAAQAfAAAWgWQAWgWAAgfQAAgegWgWg");
	this.shape.setTransform(359.4,434.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAVAAAfQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_1.setTransform(359.4,434.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhcA5IAAhxIC5AAIAABxg");
	this.shape_2.setTransform(359.425,393.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.6,1,1).p("AjlgxIHLAAIAABjInLAAg");
	this.shape_3.setTransform(387.45,359.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.6,1,1).p("AgOgJIAdAT");
	this.shape_4.setTransform(357.9,355.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.6,1,1).p("AgOAKIAdgT");
	this.shape_5.setTransform(360.925,355.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.6,1,1).p("AgOAKIAdgT");
	this.shape_6.setTransform(360.925,357.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.6,1,1).p("AgOgJIAdAT");
	this.shape_7.setTransform(357.9,357.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjAFIAAggIAjAXIAkgYIAAAgIgkAZg");
	this.shape_8.setTransform(359.45,356.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1.3,1,1).p("AAohjIAADHIhPAAIAAjHg");
	this.shape_9.setTransform(359.55,342.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnBkIAAjHIBPAAIAADHg");
	this.shape_10.setTransform(359.55,342.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1.3,1,1).p("AgYBKQAdgNANgeQANgegMgeQgNgggegM");
	this.shape_11.setTransform(366.0564,342.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYhJQAeAMANAgQAMAegNAeQgNAfgdAMg");
	this.shape_12.setTransform(366.0564,342.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1.3,1,1).p("AAog7IAAB3IhPAoIAAjHg");
	this.shape_13.setTransform(351.55,342.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgnhjIBPAoIAAB3IhPAog");
	this.shape_14.setTransform(351.55,342.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(0.6,1,1).p("AjlgxIHLAAIAABjInLAAg");
	this.shape_15.setTransform(387.45,324.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.6,1,1).p("AAPAKIgdgT");
	this.shape_16.setTransform(360.95,328.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(0.6,1,1).p("AAPgJIgdAT");
	this.shape_17.setTransform(357.925,328.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.6,1,1).p("AAPgJIgdAT");
	this.shape_18.setTransform(357.925,326.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(0.6,1,1).p("AAPAKIgdgT");
	this.shape_19.setTransform(360.95,326.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgjgDIAkgZIAjAYIAAAgIgjgYIgkAZg");
	this.shape_20.setTransform(359.4,327.975);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Al3AyIAAhjILvAAIAABjg");
	this.shape_21.setTransform(112.35,56.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AkiAyIAAhiIJFAAIAABig");
	this.shape_22.setTransform(258.175,57.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(0.6,1,1).p("AAOAAQAAgFgEgEQgEgEgGAAQgFAAgEAEQgEAEAAAFQAAAGAEAEQAEAEAFAAQAGAAAEgEQAEgEAAgGg");
	this.shape_23.setTransform(165.25,41.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_24.setTransform(165.25,41.925);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(0.6,1,1).p("AgsAAIBZAyIAAhjg");
	this.shape_25.setTransform(213.7,41.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgsAAIBZgxIAABjg");
	this.shape_26.setTransform(213.7,41.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(0.6,1,1).p("AAyAAQAAgUgOgPQgPgOgVAAQgTAAgPAOQgPAPAAAUQAAAUAPAPQAPAPATAAQAVAAAPgPQAOgPAAgUg");
	this.shape_27.setTransform(223.2,41.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhsA2IAAhrIDZAAIAABrg");
	this.shape_28.setTransform(189.3,41.625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhtA2IAAhrIDaAAIAABrg");
	this.shape_29.setTransform(98.25,73.275);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhcA5IAAhxIC5AAIAABxg");
	this.shape_30.setTransform(490.9,149.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhPA6IAAhzICfAAIAABzg");
	this.shape_31.setTransform(490.9,213.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(0.6,1,1).p("AAPgJIgdAT");
	this.shape_32.setTransform(492.275,182.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(0.6,1,1).p("AAPAKIgdgT");
	this.shape_33.setTransform(489.25,182.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(0.6,1,1).p("AAPAKIgdgT");
	this.shape_34.setTransform(489.25,184.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(0.6,1,1).p("AAPgJIgdAT");
	this.shape_35.setTransform(492.275,184.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgjAFIAAghIAjAZIAkgYIAAAhIgkAXg");
	this.shape_36.setTransform(490.75,183.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhfA5IAAhyIC/AAIAAByg");
	this.shape_37.setTransform(269.175,208.45);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(0.6,1,1).p("AAACQIAAkf");
	this.shape_38.setTransform(359.55,104.95);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(0.6,1,1).p("AgUgoIAqBQ");
	this.shape_39.setTransform(368.65,86.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(0.6,1,1).p("AgJAPIATgd");
	this.shape_40.setTransform(366.8,94.95);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(0.6,1,1).p("AgJAPIATgd");
	this.shape_41.setTransform(369.8,94.95);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(0.6,1,1).p("AAUgnIgnBP");
	this.shape_42.setTransform(361.5,86.35);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(0.6,1,1).p("AAIAKIgPgLIAPgIg");
	this.shape_43.setTransform(370,89.525);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgHgBIAPgIIAAATg");
	this.shape_44.setTransform(370,89.525);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(0.6,1,1).p("AgJAPIATgd");
	this.shape_45.setTransform(372.8,94.95);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(0.6,1,1).p("AgnAAIBPAA");
	this.shape_46.setTransform(370.8,93.45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(0.6,1,1).p("AgnAAIBPAA");
	this.shape_47.setTransform(364.5,82.35);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(0.6,1,1).p("AAAgOIAAAd");
	this.shape_48.setTransform(370.8,91.975);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(0.6,1,1).p("AAAgOIAAAd");
	this.shape_49.setTransform(364.5,80.85);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(0.6,1,1).p("AgNAAQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEQgEgEAAgGg");
	this.shape_50.setTransform(359.55,106.35);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAFAAAFAEQAEAEAAAFQAAAGgEAEQgFAEgFAAQgFAAgEgEg");
	this.shape_51.setTransform(359.55,106.35);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(0.6,1,1).p("ADmgxInLAAIAABjIHLAAg");
	this.shape_52.setTransform(518.8,126.35);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(0.6,1,1).p("AgOgJIAdAT");
	this.shape_53.setTransform(358.025,122.35);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(0.6,1,1).p("AgOAKIAdgT");
	this.shape_54.setTransform(361.05,122.35);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(0.6,1,1).p("AgOAKIAdgT");
	this.shape_55.setTransform(361.05,124.35);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(0.6,1,1).p("AgOgJIAdAT");
	this.shape_56.setTransform(358.025,124.35);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgjAFIAAggIAjAXIAkgYIAAAgIgkAZg");
	this.shape_57.setTransform(359.55,123.15);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(0.6,1,1).p("AKQBBIAAiBI0fAA");
	this.shape_58.setTransform(425.15,112.85);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(0.6,1,1).p("AQBgxMggBAAAIAABjMAgBAAAg");
	this.shape_59.setTransform(429.05,74.35);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(1.3,1,1).p("ASXkSMgktAAAIAAIlMAktAAAg");
	this.shape_60.setTransform(429.05,91.85);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(0.6,1,1).p("AAPgJIgdAT");
	this.shape_61.setTransform(492.275,122.35);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(0.6,1,1).p("AAPAKIgdgT");
	this.shape_62.setTransform(489.25,122.35);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(0.6,1,1).p("AAPAKIgdgT");
	this.shape_63.setTransform(489.25,124.35);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(0.6,1,1).p("AAPgJIgdAT");
	this.shape_64.setTransform(492.275,124.35);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgjAEIAAggIAjAYIAkgXIAAAgIgkAYg");
	this.shape_65.setTransform(490.75,123.15);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("Ah9A6IAAhzID6AAIAABzg");
	this.shape_66.setTransform(97.8,207.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AhiA6IAAhzIDEAAIAABzg");
	this.shape_67.setTransform(97.8,248.85);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AhcA6IAAhyIC6AAIAAByg");
	this.shape_68.setTransform(147.4,41.55);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(0.6,1,1).p("AAeAAQAAgMgJgIQgIgJgNAAQgMAAgIAJQgJAIAAAMQAAANAJAIQAIAJAMAAQANAAAIgJQAJgIAAgNg");
	this.shape_69.setTransform(490.75,434.95);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(0.6,1,1).p("AgYAAIAxAA");
	this.shape_70.setTransform(490.775,436.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(0.6,1,1).p("AgbAAIA3AA");
	this.shape_71.setTransform(490.75,436.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(0.6,1,1).p("AgcAAIA5AA");
	this.shape_72.setTransform(490.775,435.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(0.6,1,1).p("AgVAAIArAA");
	this.shape_73.setTransform(490.775,436.95);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(0.6,1,1).p("AgRAAIAjAA");
	this.shape_74.setTransform(490.75,437.35);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(0.6,1,1).p("AgKAAIAVAA");
	this.shape_75.setTransform(490.775,437.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(0.6,1,1).p("AgdAAIA7AA");
	this.shape_76.setTransform(490.775,435.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(0.6,1,1).p("AgKAAIAVAA");
	this.shape_77.setTransform(490.775,432.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(0.6,1,1).p("AgRAAIAjAA");
	this.shape_78.setTransform(490.75,432.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(0.6,1,1).p("AgVAAIArAA");
	this.shape_79.setTransform(490.775,432.95);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(0.6,1,1).p("AgYAAIAxAA");
	this.shape_80.setTransform(490.775,433.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(0.6,1,1).p("AgbAAIA3AA");
	this.shape_81.setTransform(490.75,433.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(0.6,1,1).p("AgcAAIA5AA");
	this.shape_82.setTransform(490.775,434.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(0.6,1,1).p("AgdAAIA7AA");
	this.shape_83.setTransform(490.775,434.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(0.6,1,1).p("AgdAAIA7AA");
	this.shape_84.setTransform(490.75,434.95);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(1.3,1,1).p("AM5PZIAA+xI5xAAIAAexg");
	this.shape_85.setTransform(104.05,190.35);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("Ah8A6IAAhzID5AAIAABzg");
	this.shape_86.setTransform(359.425,280.35);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(0.6,1,1).p("AAAjhIAAHD");
	this.shape_87.setTransform(490.75,412.325);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(0.6,1,1).p("AEBAAIoBAA");
	this.shape_88.setTransform(64.325,41.95);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(1.3,1,1).p("AFGBrIqLAAIAAjVIKLAAg");
	this.shape_89.setTransform(101.975,38.625);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(0.6,1,1).p("AgOAAIAdAA");
	this.shape_90.setTransform(37.075,41.95);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(0.6,1,1).p("AhQABQAKALAOAGQAQAFANgKIAZgPQALgIAOgFQAPgEAPABQAPADANAH");
	this.shape_91.setTransform(102.125,42.4425);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(0.6,1,1).p("AhQAKQAMAJAQABQAPgBAMgJIAZgRQANgIANgDQAQgEAOAHQAMAGANAK");
	this.shape_92.setTransform(102.15,41.3273);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(0.6,1,1).p("AAUAAQAAgIgGgGQgGgFgIAAQgIAAgFAFQgGAGAAAIQAAAIAGAGQAGAGAHAAQAIAAAGgGQAGgGAAgIg");
	this.shape_93.setTransform(112.2,41.95);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgNAOQgGgGAAgIQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_94.setTransform(112.2,41.95);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(0.6,1,1).p("AAUAAQAAgIgGgGQgFgFgJAAQgHAAgGAFQgGAGAAAIQAAAIAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgIg");
	this.shape_95.setTransform(92.05,41.95);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgNAOQgGgGAAgIQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_96.setTransform(92.05,41.95);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(0.6,1,1).p("AgOAKIAdgT");
	this.shape_97.setTransform(32.025,88.85);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(0.6,1,1).p("AgOgJIAdAT");
	this.shape_98.setTransform(35.05,88.85);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(0.6,1,1).p("AgOgJIAdAT");
	this.shape_99.setTransform(35.05,86.85);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(0.6,1,1).p("AgOAKIAdgT");
	this.shape_100.setTransform(32.025,86.85);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAAAEIgjAYIAAghIAjgXIAkAZIAAAgg");
	this.shape_101.setTransform(33.55,88.075);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(0.6,1,1).p("AgOAKIAdgT");
	this.shape_102.setTransform(32.05,86.85);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(0.6,1,1).p("AgOAKIAdgT");
	this.shape_103.setTransform(32.05,88.85);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(0.6,1,1).p("AAPAKIgdgT");
	this.shape_104.setTransform(35.05,86.85);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(0.6,1,1).p("AgOgJIAdAT");
	this.shape_105.setTransform(35.05,88.85);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(0.6,1,1).p("AAAgEIAAAJ");
	this.shape_106.setTransform(33.6,44.45);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(1.3,1,1).p("ACMBQIkXAAIAAifIEXAAg");
	this.shape_107.setTransform(24.6,36.95);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(0.6,1,1).p("AAUAAQAAgIgGgGQgFgFgJAAQgIAAgGAFQgFAGAAAIQAAAIAFAGQAGAGAIAAQAJAAAFgGQAGgGAAgIg");
	this.shape_108.setTransform(33.6,41.95);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(0.6,1,1).p("AAUAAQAAgIgGgGQgGgFgIAAQgIAAgGAFQgFAGAAAIQAAAIAFAGQAGAGAIAAQAIAAAGgGQAGgGAAgIg");
	this.shape_109.setTransform(16.6,41.95);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(0.6,1,1).p("AAeAAQAAgMgJgJQgIgIgNAAQgMAAgJAIQgIAJAAAMQAAANAIAIQAJAJAMAAQANAAAIgJQAJgJAAgMg");
	this.shape_110.setTransform(33.6,33.95);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(0.6,1,1).p("AAeAAQAAgMgJgJQgIgIgNAAQgMAAgJAIQgIAJAAAMQAAANAIAIQAJAJAMAAQANAAAIgJQAJgIAAgNg");
	this.shape_111.setTransform(16.6,33.95);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(0.6,1,1).p("AAAgOIAAAd");
	this.shape_112.setTransform(33.6,33.95);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(0.6,1,1).p("AgOAAIAdAA");
	this.shape_113.setTransform(33.6,33.95);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(0.6,1,1).p("AgOAAIAdAA");
	this.shape_114.setTransform(16.6,33.95);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(0.6,1,1).p("AAAeeMAAAg87");
	this.shape_115.setTransform(16.6,239.925);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(0.6,1,1).p("AAAAFIAAgJ");
	this.shape_116.setTransform(16.6,44.425);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(1.3,1,1).p("AjHDIIGPAAIAAmPImPAAg");
	this.shape_117.setTransform(490.75,275.45);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(0.6,1,1).p("AgOgJIAdAT");
	this.shape_118.setTransform(489.25,299.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(0.6,1,1).p("AgOAKIAdgT");
	this.shape_119.setTransform(492.275,299.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(0.6,1,1).p("AgOAKIAdgT");
	this.shape_120.setTransform(492.275,301.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(0.6,1,1).p("AgOgJIAdAT");
	this.shape_121.setTransform(489.25,301.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgjAGIAAghIAjAYIAkgZIAAAgIgkAZg");
	this.shape_122.setTransform(490.8,300.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(0.6,1,1).p("AAPAKIgdgT");
	this.shape_123.setTransform(492.275,252.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(0.6,1,1).p("AAPgJIgdAT");
	this.shape_124.setTransform(489.25,252.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(0.6,1,1).p("AAPgJIgdAT");
	this.shape_125.setTransform(489.25,250.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(0.6,1,1).p("AAPAKIgdgT");
	this.shape_126.setTransform(492.275,250.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgjgDIAjgZIAkAYIAAAgIgkgYIgjAZg");
	this.shape_127.setTransform(490.75,251.325);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(1.3,1,1).p("AhjDIIDHAAIAAmPIjHAAg");
	this.shape_128.setTransform(490.75,369.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(0.6,1,1).p("AAAg5IAABz");
	this.shape_129.setTransform(490.75,383.95);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(0.6,1,1).p("AAAgvIAABf");
	this.shape_130.setTransform(490.75,354.45);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(0.6,1,1).p("AAAgTQAJAAAFAGQAGAGAAAHQAAAJgGAFQgFAGgJAAQgHAAgGgGQgGgFAAgJQAAgHAGgGQAGgGAHAAg");
	this.shape_131.setTransform(490.75,376.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(0.6,1,1).p("AAAgTQAJAAAFAGQAGAGAAAHQAAAJgGAFQgFAGgJAAQgHAAgGgGQgGgFAAgJQAAgHAGgGQAGgGAHAAg");
	this.shape_132.setTransform(490.75,361.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(0.6,1,1).p("AAPAKIgdgT");
	this.shape_133.setTransform(492.275,346.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(0.6,1,1).p("AAPgJIgdAT");
	this.shape_134.setTransform(489.25,346.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(0.6,1,1).p("AAPgJIgdAT");
	this.shape_135.setTransform(489.25,344.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(0.6,1,1).p("AAPAKIgdgT");
	this.shape_136.setTransform(492.275,344.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgjgDIAjgZIAkAYIAAAgIgkgXIgjAYg");
	this.shape_137.setTransform(490.75,345.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(0.6,1,1).p("ADmAyInLAAIAAhjIHLAAg");
	this.shape_138.setTransform(518.8,342.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(0.6,1,1).p("ADmAyInLAAIAAhjIHLAAg");
	this.shape_139.setTransform(518.8,303.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(0.6,1,1).p("ADmAyInLAAIAAhjIHLAAg");
	this.shape_140.setTransform(518.8,248.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(0.6,1,1).p("AgyAAQAIAMALAGQAHADAGgCQAHgDADgGIAQgTQAEgGAGgDQAHgCAGADQALAGAIAL");
	this.shape_141.setTransform(58.9,207.625);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(0.6,1,1).p("AAUAAQAAgHgGgGQgFgGgJAAQgHAAgGAGQgGAGAAAHQAAAIAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgIg");
	this.shape_142.setTransform(65.85,208);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgNAOQgGgFAAgJQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAJgGAFQgGAGgIAAQgHAAgGgGg");
	this.shape_143.setTransform(65.85,208);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(0.6,1,1).p("AAUAAQAAgHgGgGQgFgGgJAAQgHAAgGAGQgGAGAAAHQAAAIAGAGQAFAGAIAAQAJAAAFgGQAGgGAAgIg");
	this.shape_144.setTransform(51.85,208);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgNAOQgGgFAAgJQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAJgGAFQgGAGgIAAQgIAAgFgGg");
	this.shape_145.setTransform(51.85,208);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(0.6,1,1).p("AgxAAQAIAMALAGQAGADAGgCQAHgDADgGIARgTQADgGAHgDQAGgCAGADQANAIAGAJ");
	this.shape_146.setTransform(59.25,248.575);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(0.6,1,1).p("AAUAAQAAgHgGgGQgGgGgIAAQgHAAgGAGQgGAGAAAHQAAAIAGAGQAGAGAHAAQAIAAAGgGQAGgGAAgIg");
	this.shape_147.setTransform(66.2,249);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_148.setTransform(66.2,249);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(0.6,1,1).p("AAUAAQAAgHgGgGQgGgGgIAAQgHAAgGAGQgGAGAAAHQAAAIAGAGQAGAGAHAAQAIAAAGgGQAGgGAAgIg");
	this.shape_149.setTransform(52.2,249);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAJAAAFAGQAGAGAAAHQAAAIgGAGQgFAGgJAAQgHAAgGgGg");
	this.shape_150.setTransform(52.2,249);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(0.6,1,1).p("AAOgNQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGg");
	this.shape_151.setTransform(137.35,248.85);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(0.6,1,1).p("AAOgNQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGg");
	this.shape_152.setTransform(152.35,248.85);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(0.6,1,1).p("AgTAAIAnAA");
	this.shape_153.setTransform(133.35,248.85);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(0.6,1,1).p("AAZAAIgxAA");
	this.shape_154.setTransform(156.85,248.85);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(1.3,1,1).p("ACMlOIAAKdIkXAAIAAqdg");
	this.shape_155.setTransform(145.35,227.35);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(0.6,1,1).p("AAIAeIgPg7");
	this.shape_156.setTransform(143.65,199.875);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(0.6,1,1).p("AAEAPIgHgd");
	this.shape_157.setTransform(140.825,201.375);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(0.6,1,1).p("AAEAPIgHgd");
	this.shape_158.setTransform(149.7,198.35);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(0.6,1,1).p("AgHAeIAPg7");
	this.shape_159.setTransform(148.5,199.875);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(0.6,1,1).p("AgHAeIAPg7");
	this.shape_160.setTransform(142.05,199.875);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(0.6,1,1).p("AAIAeIgPg7");
	this.shape_161.setTransform(146.9,199.875);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(0.6,1,1).p("AgHAeIAPg7");
	this.shape_162.setTransform(145.275,199.875);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(0.6,1,1).p("AgTAAIAnAA");
	this.shape_163.setTransform(138.375,199.85);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(0.6,1,1).p("AgUAAIApAA");
	this.shape_164.setTransform(152.225,199.85);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(0.6,1,1).p("AAAgJQgDAAgDADQgDADAAADQAAAEADADQADADADAAQAEAAADgDQADgDAAgEQAAgDgDgDQgDgDgEAAg");
	this.shape_165.setTransform(136.35,207.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(0.6,1,1).p("AAAgHIAAAP");
	this.shape_166.setTransform(137,207.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(0.6,1,1).p("AAAgIIAAAS");
	this.shape_167.setTransform(136.65,207.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(0.6,1,1).p("AAAgHIAAAP");
	this.shape_168.setTransform(135.65,207.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(0.6,1,1).p("AAAgIIAAAS");
	this.shape_169.setTransform(136,207.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(0.6,1,1).p("AAAgJQgDAAgDADQgDADAAADQAAAEADADQADADADAAQAEAAADgDQADgDAAgEQAAgDgDgDQgDgDgEAAg");
	this.shape_170.setTransform(154.35,207.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(0.6,1,1).p("AAAgHIAAAP");
	this.shape_171.setTransform(155,207.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(0.6,1,1).p("AAAgIIAAAS");
	this.shape_172.setTransform(154.65,207.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(0.6,1,1).p("AAAgHIAAAP");
	this.shape_173.setTransform(153.65,207.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(0.6,1,1).p("AAAgIIAAAS");
	this.shape_174.setTransform(154,207.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(0.6,1,1).p("AAAhKIAACV");
	this.shape_175.setTransform(154.35,207.375);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(0.6,1,1).p("AAAhKIAACV");
	this.shape_176.setTransform(136.35,207.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(0.6,1,1).p("AATAAIglAA");
	this.shape_177.setTransform(138.275,214.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(0.6,1,1).p("AgUAAIApAA");
	this.shape_178.setTransform(152.275,214.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(0.6,1,1).p("AgOggQgCAEgBAEQgBAEAAAFQgBAGAAADQAAAEABAFIABAJQABADACAFIAEAHIAEAEIAFACQABABADgBIAEgCIAFgEIADgHIAFgRIAAgJ");
	this.shape_179.setTransform(148.1917,215.5375);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(0.6,1,1).p("AgOghIgDAKQgCAFAAAGQgBAGABAFQAAAFACAFQABAGACAEIAEAIQACACADACIAFACIAGgCQACgBADgDIAEgIQACgEABgGQACgFAAgFQABgFgBgGQAAgGgCgFQgBgFgCgF");
	this.shape_180.setTransform(145.175,215.55);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(0.6,1,1).p("AgTgGQAAAEABAFQAAAFABAEQABAFACADIAEAHIAEAEIAFACQABABADgBIAEgCIAEgEIAEgHIAFgRIAAgSIgFgR");
	this.shape_181.setTransform(142.1667,215.5375);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(0.6,1,1).p("AgYAAIAxAA");
	this.shape_182.setTransform(156.85,207.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(0.6,1,1).p("AgYAAIAxAA");
	this.shape_183.setTransform(133.85,207.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(0.6,1,1).p("AAOAAQAAgFgEgEQgEgEgGAAQgFAAgEAEQgEAEAAAFQAAAGAEAEQAEAEAFAAQAGAAAEgEQAEgEAAgGg");
	this.shape_184.setTransform(33.575,208.025);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_185.setTransform(33.575,208.025);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(0.6,1,1).p("ABbJFIi1AAIAAyJ");
	this.shape_186.setTransform(42.725,149.925);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(0.6,1,1).p("ABcDNIi3AAIAAmZ");
	this.shape_187.setTransform(42.775,228.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(0.6,1,1).p("AAAjHIAAGP");
	this.shape_188.setTransform(490.75,275.45);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(0.6,1,1).p("AAAkOIAAId");
	this.shape_189.setTransform(490.75,322.575);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(1.3,1,1).p("AgOAeIAdg7");
	this.shape_190.setTransform(10.1,445.95);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(1.3,1,1).p("AgOAeIAdg7");
	this.shape_191.setTransform(16.1,445.95);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(1.3,1,1).p("AgOAeIAdg7");
	this.shape_192.setTransform(22.1,445.95);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(1.3,1,1).p("AhZAAICzAA");
	this.shape_193.setTransform(16.6,442.95);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(0.6,1,1).p("AAAgnIAABP");
	this.shape_194.setTransform(16.6,438.95);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(1.3,1,1).p("EA5MAiYMhyXAAAMAAAhEvMByXAAAg");
	this.shape_195.setTransform(366.6,232.95);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(0.6,1,1).p("AAOAAQAAgFgEgEQgEgEgGAAQgFAAgEAEQgEAEAAAFQAAAGAEAEQAEAEAFAAQAGAAAEgEQAEgEAAgGg");
	this.shape_196.setTransform(16.575,434.925);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_197.setTransform(16.575,434.925);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(0.6,1,1).p("Eg21AAAMBtrAAA");
	this.shape_198.setTransform(367.6,434.95);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AJxACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgAJTACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIABABIABAAIgBACIgBAAIAAAAgAI1ACIgUAAIgCAAIAAgCIAAAAIACgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgAIXACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgAH5ACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIABABIABAAIgBACIgBAAIAAAAgAHbACIgUAAIgCAAIAAgCIAAAAIACgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgAG9ACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgAGfACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIABABIABAAIgBACIgBAAIAAAAgAGBACIgUAAIgCAAIAAgCIAAAAIACgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgAFjACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgAFFACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIABABIABAAIgBACIgBAAIAAAAgAEnACIgUAAIgCAAIAAgCIAAAAIACgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgAEJACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgADrACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIABABIABAAIgBACIgBAAIAAAAgADNACIgUAAIgCAAIAAgCIAAAAIACgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgACvACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgACRACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIABABIABAAIgBACIgBAAIAAAAgABzACIgUAAIgCAAIAAgCIAAAAIACgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgABVACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgAA3ACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIABABIABAAIgBACIgBAAIAAAAgAAZACIgUAAIgCAAIAAgCIAAAAIACgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgAgEACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgAgiACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIABABIABAAIgBACIgBAAIAAAAgAhAACIgUAAIgCAAIAAgCIAAAAIACgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgAheACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgAh8ACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIABABIABAAIgBACIgBAAIAAAAgAiaACIgUAAIgCAAIAAgCIAAAAIACgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgAi4ACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgAjWACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIABABIABAAIgBACIgBAAIAAAAgAj0ACIgUAAIgCAAIAAgCIAAAAIACgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgAkSACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgAkwACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIABABIABAAIgBACIgBAAIAAAAgAlOACIgUAAIgCAAIAAgCIAAAAIACgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgAlsACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgAmKACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIABABIABAAIgBACIgBAAIAAAAgAmoACIgUAAIgCAAIAAgCIAAAAIACgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgAnGACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgAnkACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIABABIABAAIgBACIgBAAIAAAAgAoCACIgUAAIgCAAIAAgCIAAAAIACgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgAogACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIACABIAAAAIAAACIgCAAIAAAAgAo+ACIgUAAIgBAAIgBgCIABAAIABgBIAUAAIABABIABAAIgBACIgBAAIAAAAgApcACIgUAAIgCAAIAAgCIAAAAIACgBIAUAAIACABIAAAAIAAACIgCAAIAAAAg");
	this.shape_199.setTransform(424.75,121.35);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AJxACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIACABIAAAAIAAABIgCABIAAAAgAJTACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIABABIABAAIgBABIgBABIAAAAgAI1ACIgUAAIgCgBIAAgBIAAAAIACgBIAUAAIACABIAAAAIAAABIgCABIAAAAgAIXACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIACABIAAAAIAAABIgCABIAAAAgAH5ACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIABABIABAAIgBABIgBABIAAAAgAHbACIgUAAIgCgBIAAgBIAAAAIACgBIAUAAIACABIAAAAIAAABIgCABIAAAAgAG9ACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIACABIAAAAIAAABIgCABIAAAAgAGfACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIABABIABAAIgBABIgBABIAAAAgAGBACIgUAAIgCgBIAAgBIAAAAIACgBIAUAAIACABIAAAAIAAABIgCABIAAAAgAFjACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIACABIAAAAIAAABIgCABIAAAAgAFFACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIABABIABAAIgBABIgBABIAAAAgAEnACIgUAAIgCgBIAAgBIAAAAIACgBIAUAAIACABIAAAAIAAABIgCABIAAAAgAEJACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIACABIAAAAIAAABIgCABIAAAAgADrACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIABABIABAAIgBABIgBABIAAAAgADNACIgUAAIgCgBIAAgBIAAAAIACgBIAUAAIACABIAAAAIAAABIgCABIAAAAgACvACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIACABIAAAAIAAABIgCABIAAAAgACRACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIABABIABAAIgBABIgBABIAAAAgABzACIgUAAIgCgBIAAgBIAAAAIACgBIAUAAIACABIAAAAIAAABIgCABIAAAAgABVACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIACABIAAAAIAAABIgCABIAAAAgAA3ACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIABABIABAAIgBABIgBABIAAAAgAAZACIgUAAIgCgBIAAgBIAAAAIACgBIAUAAIACABIAAAAIAAABIgCABIAAAAgAgEACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIACABIAAAAIAAABIgCABIAAAAgAgiACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIABABIABAAIgBABIgBABIAAAAgAhAACIgUAAIgCgBIAAgBIAAAAIACgBIAUAAIACABIAAAAIAAABIgCABIAAAAgAheACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIACABIAAAAIAAABIgCABIAAAAgAh8ACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIABABIABAAIgBABIgBABIAAAAgAiaACIgUAAIgCgBIAAgBIAAAAIACgBIAUAAIACABIAAAAIAAABIgCABIAAAAgAi4ACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIACABIAAAAIAAABIgCABIAAAAgAjWACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIABABIABAAIgBABIgBABIAAAAgAj0ACIgUAAIgCgBIAAgBIAAAAIACgBIAUAAIACABIAAAAIAAABIgCABIAAAAgAkSACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIACABIAAAAIAAABIgCABIAAAAgAkwACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIABABIABAAIgBABIgBABIAAAAgAlOACIgUAAIgCgBIAAgBIAAAAIACgBIAUAAIACABIAAAAIAAABIgCABIAAAAgAlsACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIACABIAAAAIAAABIgCABIAAAAgAmKACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIABABIABAAIgBABIgBABIAAAAgAmoACIgUAAIgCgBIAAgBIAAAAIACgBIAUAAIACABIAAAAIAAABIgCABIAAAAgAnGACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIACABIAAAAIAAABIgCABIAAAAgAnkACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIABABIABAAIgBABIgBABIAAAAgAoCACIgUAAIgCgBIAAgBIAAAAIACgBIAUAAIACABIAAAAIAAABIgCABIAAAAgAogACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIACABIAAAAIAAABIgCABIAAAAgAo+ACIgUAAIgBgBIgBgBIABAAIABgBIAUAAIABABIABAAIgBABIgBABIAAAAgApcACIgUAAIgCgBIAAgBIAAAAIACgBIAUAAIACABIAAAAIAAABIgCABIAAAAg");
	this.shape_200.setTransform(424.75,123.35);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AAACSIgBgBIAAgBIAAgSIAAgBIABgBIACABIAAABIAAASIAAABIgCABIAAAAgAAAB2IgBAAIAAgCIAAgUIAAgBIABgBIACABIAAABIAAAUIAAACIgCAAIAAAAgAAABYIgBAAIAAgCIAAgUIAAgBIABgBIACABIAAABIAAAUIAAACIgCAAIAAAAgAAAA6IgBAAIAAgCIAAgUIAAgBIABgBIACABIAAABIAAAUIAAACIgCAAIAAAAgAAAAcIgBAAIAAgCIAAgUIAAgBIABgBIACABIAAABIAAAUIAAACIgCAAIAAAAgAAAgBIgBAAIAAgCIAAgUIAAgBIABgBIACABIAAABIAAAUIAAACIgCAAIAAAAgAAAgfIgBAAIAAgCIAAgUIAAgBIABgBIACABIAAABIAAAUIAAACIgCAAIAAAAgAAAg9IgBAAIAAgCIAAgUIAAgBIABgBIACABIAAABIAAAUIAAACIgCAAIAAAAgAAAhbIgBAAIAAgCIAAgUIAAgBIABgBIACABIAAABIAAAUIAAACIgCAAIAAAAgAAAh5IgBAAIAAgCIAAgUIAAgBIABgBIACABIAAABIAAAUIAAACIgCAAIAAAAg");
	this.shape_201.setTransform(145.35,236.225);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AODCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgANlCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgANHCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAMpCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAMLCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgALtCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgALPCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAKxCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAKTCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAJ1CYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAJXCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAI5CYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAIbCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAH9CYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAHfCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAHBCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAGjCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAGFCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAFnCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAFJCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAErCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAENCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgADvCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgADRCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgACzCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgACVCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAB3CYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgABZCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAA7CYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAAdCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAAACYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIABABIAAABIAAABIgBABIAAAAgAgeCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAg8CYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAhaCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAh4CYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAiWCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAi0CYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAjSCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAjwCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAkOCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAksCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAlKCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAloCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAmGCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAmkCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAnCCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAngCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAn+CYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAocCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAo6CYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgApYCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAp2CYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAqUCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAqyCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgArQCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAruCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAsMCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAsqCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAtICYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAtmCYIgUAAIgBgBIgBgBIABgBIABgBIAUAAIACABIAAABIAAABIgCABIAAAAgAuCCWIgCAAIAAgCIAAgUIAAgCIACAAIABAAIABACIAAAUIgBACIgBAAIAAAAgAODCRIgBgBIgBgBIAAgUIABgBIABgBIACABIAAABIAAAUIAAABIgCABIAAAAgAuCB4IgCAAIAAgCIAAgUIAAgCIACAAIABAAIABACIAAAUIgBACIgBAAIAAAAgAODBzIgBAAIgBgCIAAgUIABgCIABAAIACAAIAAACIAAAUIAAACIgCAAIAAAAgAuCBaIgCgBIAAgBIAAgUIAAgBIACgBIABABIABABIAAAUIgBABIgBABIAAAAgAODBVIgBAAIgBgCIAAgUIABgCIABAAIACAAIAAACIAAAUIAAACIgCAAIAAAAgAuCA8IgCAAIAAgCIAAgUIAAgCIACAAIABAAIABACIAAAUIgBACIgBAAIAAAAgAODA3IgBgBIgBgBIAAgUIABgBIABgBIACABIAAABIAAAUIAAABIgCABIAAAAgAuCAeIgCAAIAAgCIAAgUIAAgCIACAAIABAAIABACIAAAUIgBACIgBAAIAAAAgAODAZIgBAAIgBgCIAAgUIABgCIABAAIACAAIAAACIAAAUIAAACIgCAAIAAAAgAuCAAIgCAAIAAgBIAAgUIAAgBIACgBIABABIABABIAAAUIgBABIgBAAIAAAAgAODgEIgBAAIgBgCIAAgUIABgCIABAAIACAAIAAACIAAAUIAAACIgCAAIAAAAgAuCgdIgCAAIAAgCIAAgUIAAgCIACAAIABAAIABACIAAAUIgBACIgBAAIAAAAgAODgiIgBgBIgBgBIAAgUIABgBIABgBIACABIAAABIAAAUIAAABIgCABIAAAAgAuCg7IgCAAIAAgCIAAgUIAAgCIACAAIABAAIABACIAAAUIgBACIgBAAIAAAAgAODhAIgBAAIgBgCIAAgUIABgCIABAAIACAAIAAACIAAAUIAAACIgCAAIAAAAgAuChZIgCgBIAAgBIAAgUIAAgBIACgBIABABIABABIAAAUIgBABIgBABIAAAAgAODheIgBAAIgBgCIAAgUIABgCIABAAIACAAIAAACIAAAUIAAACIgCAAIAAAAgAuCh3IgCAAIAAgCIAAgUIAAgCIACAAIABAAIABACIAAAUIgBACIgBAAIAAAAgAODh8IgBgBIgBgBIAAgUIABgBIABgBIACABIAAABIAAAUIAAABIgCABIAAAAgAN9iTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgANfiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgANBiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAMjiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAMFiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgALniTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgALJiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAKriTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAKNiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAJviTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAJRiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAIziTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAIViTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAH3iTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAHZiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAG7iTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAGdiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAF/iTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAFhiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAFDiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAEliTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAEHiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgADpiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgADLiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgACtiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgACPiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgABxiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgABTiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAA1iTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAAXiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAgGiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAgkiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAhCiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAhgiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAh+iTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAiciTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAi6iTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAjYiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAj2iTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAkUiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAkyiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAlQiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAluiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAmMiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAmqiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAnIiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAnmiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAoEiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAoiiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgApAiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgApeiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAp8iTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAqaiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAq4iTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgArWiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAr0iTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAsSiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAswiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAtOiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAtsiTIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIABAAIABACIgBACIgBAAIAAAAg");
	this.shape_202.setTransform(262.775,43);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AHvDKIgUAAIgCAAIAAgCIAAgCIACAAIASAAIAAgSIAAgCIACAAIACAAIAAACIAAAUIAAACIgCAAIAAAAgAHRDKIgUAAIgBAAIgBgCIABgCIABAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAGzDKIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIACAAIAAACIAAACIgCAAIAAAAgAGVDKIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIACAAIAAACIAAACIgCAAIAAAAgAF3DKIgUAAIgBAAIgBgCIABgCIABAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAFZDKIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIACAAIAAACIAAACIgCAAIAAAAgAE7DKIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIACAAIAAACIAAACIgCAAIAAAAgAEdDKIgUAAIgBAAIgBgCIABgCIABAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAD/DKIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIACAAIAAACIAAACIgCAAIAAAAgADhDKIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIACAAIAAACIAAACIgCAAIAAAAgADDDKIgUAAIgBAAIgBgCIABgCIABAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAClDKIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIACAAIAAACIAAACIgCAAIAAAAgACHDKIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIACAAIAAACIAAACIgCAAIAAAAgABpDKIgUAAIgBAAIgBgCIABgCIABAAIAUAAIABAAIABACIgBACIgBAAIAAAAgABLDKIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIACAAIAAACIAAACIgCAAIAAAAgAAtDKIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIACAAIAAACIAAACIgCAAIAAAAgAAPDKIgTAAIgBAAIgBgCIABgCIABAAIATAAIABAAIABACIgBACIgBAAIAAAAgAgODKIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIACAAIAAACIAAACIgCAAIAAAAgAgsDKIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIACAAIAAACIAAACIgCAAIAAAAgAhKDKIgUAAIgBAAIgBgCIABgCIABAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAhoDKIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIACAAIAAACIAAACIgCAAIAAAAgAiGDKIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIACAAIAAACIAAACIgCAAIAAAAgAikDKIgUAAIgBAAIgBgCIABgCIABAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAjCDKIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIACAAIAAACIAAACIgCAAIAAAAgAjgDKIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIACAAIAAACIAAACIgCAAIAAAAgAj+DKIgUAAIgBAAIgBgCIABgCIABAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAkcDKIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIACAAIAAACIAAACIgCAAIAAAAgAk6DKIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIACAAIAAACIAAACIgCAAIAAAAgAlYDKIgUAAIgBAAIgBgCIABgCIABAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAl2DKIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIACAAIAAACIAAACIgCAAIAAAAgAmUDKIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIACAAIAAACIAAACIgCAAIAAAAgAmyDKIgUAAIgBAAIgBgCIABgCIABAAIAUAAIABAAIABACIgBACIgBAAIAAAAgAnQDKIgUAAIgCAAIAAgCIAAgCIACAAIAUAAIACAAIAAACIAAACIgCAAIAAAAgAnuDKIgCAAIAAgCIAAgUIAAgCIACAAIACAAIAAACIAAAUIAAACIgCAAIAAAAgAHvCsIgCgBIAAgBIAAgUIAAgBIACgBIACABIAAABIAAAUIAAABIgCABIAAAAgAnuCsIgCgBIAAgBIAAgUIAAgBIACgBIACABIAAABIAAAUIAAABIgCABIAAAAgAHvCOIgCAAIAAgCIAAgUIAAgCIACAAIACAAIAAACIAAAUIAAACIgCAAIAAAAgAnuCOIgCAAIAAgCIAAgUIAAgCIACAAIACAAIAAACIAAAUIAAACIgCAAIAAAAgAHvBwIgCAAIAAgCIAAgUIAAgCIACAAIACAAIAAACIAAAUIAAACIgCAAIAAAAgAnuBwIgCAAIAAgCIAAgUIAAgCIACAAIACAAIAAACIAAAUIAAACIgCAAIAAAAgAHvBSIgCgBIAAgBIAAgUIAAgBIACgBIACABIAAABIAAAUIAAABIgCABIAAAAgAnuBSIgCgBIAAgBIAAgUIAAgBIACgBIACABIAAABIAAAUIAAABIgCABIAAAAgAHvA0IgCAAIAAgCIAAgUIAAgCIACAAIACAAIAAACIAAAUIAAACIgCAAIAAAAgAnuA0IgCAAIAAgCIAAgUIAAgCIACAAIACAAIAAACIAAAUIAAACIgCAAIAAAAgAHvAWIgCAAIAAgCIAAgUIAAgBIACAAIACAAIAAABIAAAUIAAACIgCAAIAAAAgAnuAWIgCAAIAAgCIAAgUIAAgBIACAAIACAAIAAABIAAAUIAAACIgCAAIAAAAgAHvgHIgCgBIAAgBIAAgUIAAgBIACgBIACABIAAABIAAAUIAAABIgCABIAAAAgAnugHIgCgBIAAgBIAAgUIAAgBIACgBIACABIAAABIAAAUIAAABIgCABIAAAAgAHvglIgCAAIAAgCIAAgUIAAgCIACAAIACAAIAAACIAAAUIAAACIgCAAIAAAAgAnuglIgCAAIAAgCIAAgUIAAgCIACAAIACAAIAAACIAAAUIAAACIgCAAIAAAAgAHvhDIgCAAIAAgCIAAgUIAAgCIACAAIACAAIAAACIAAAUIAAACIgCAAIAAAAgAnuhDIgCAAIAAgCIAAgUIAAgCIACAAIACAAIAAACIAAAUIAAACIgCAAIAAAAgAHvhhIgCgBIAAgBIAAgUIAAgBIACgBIACABIAAABIAAAUIAAABIgCABIAAAAgAnuhhIgCgBIAAgBIAAgUIAAgBIACgBIACABIAAABIAAAUIAAABIgCABIAAAAgAHvh/IgCAAIAAgCIAAgUIAAgCIACAAIACAAIAAACIAAAUIAAACIgCAAIAAAAgAnuh/IgCAAIAAgCIAAgUIAAgCIACAAIACAAIAAACIAAAUIAAACIgCAAIAAAAgAHvidIgCAAIAAgCIAAgUIAAgCIACAAIACAAIAAACIAAAUIAAACIgCAAIAAAAgAnuidIgCAAIAAgCIAAgUIAAgCIACAAIACAAIAAACIAAAUIAAACIgCAAIAAAAgAHvi7IgCgBIAAgBIAAgIIgIAAIgCgBIAAgBIAAgBIACgBIAKAAIACABIAAABIAAAKIAAABIgCABIAAAAgAnui7IgCgBIAAgBIAAgKIAAgBIACgBIAKAAIACABIAAABIAAABIgCABIgIAAIAAAIIAAABIgCABIAAAAgAHbjFIgUAAIgBgBIgBgBIABgBIABgBIAUAAIABABIABABIgBABIgBABIAAAAgAG9jFIgUAAIgCgBIAAgBIAAgBIACgBIAUAAIACABIAAABIAAABIgCABIAAAAgAGfjFIgUAAIgCgBIAAgBIAAgBIACgBIAUAAIACABIAAABIAAABIgCABIAAAAgAGBjFIgUAAIgBgBIgBgBIABgBIABgBIAUAAIABABIABABIgBABIgBABIAAAAgAFjjFIgUAAIgCgBIAAgBIAAgBIACgBIAUAAIACABIAAABIAAABIgCABIAAAAgAFFjFIgUAAIgCgBIAAgBIAAgBIACgBIAUAAIACABIAAABIAAABIgCABIAAAAgAEnjFIgUAAIgBgBIgBgBIABgBIABgBIAUAAIABABIABABIgBABIgBABIAAAAgAEJjFIgUAAIgCgBIAAgBIAAgBIACgBIAUAAIACABIAAABIAAABIgCABIAAAAgADrjFIgUAAIgCgBIAAgBIAAgBIACgBIAUAAIACABIAAABIAAABIgCABIAAAAgADNjFIgUAAIgBgBIgBgBIABgBIABgBIAUAAIABABIABABIgBABIgBABIAAAAgACvjFIgUAAIgCgBIAAgBIAAgBIACgBIAUAAIACABIAAABIAAABIgCABIAAAAgACRjFIgUAAIgCgBIAAgBIAAgBIACgBIAUAAIACABIAAABIAAABIgCABIAAAAgABzjFIgUAAIgBgBIgBgBIABgBIABgBIAUAAIABABIABABIgBABIgBABIAAAAgABVjFIgUAAIgCgBIAAgBIAAgBIACgBIAUAAIABABIABABIgBABIgBABIAAAAgAA3jFIgUAAIgCgBIAAgBIAAgBIACgBIAUAAIACABIAAABIAAABIgCABIAAAAgAAZjFIgUAAIgBgBIgBgBIABgBIABgBIAUAAIABABIABABIgBABIgBABIAAAAgAgEjFIgUAAIgCgBIAAgBIAAgBIACgBIAUAAIABABIABABIgBABIgBABIAAAAgAgijFIgUAAIgCgBIAAgBIAAgBIACgBIAUAAIACABIAAABIAAABIgCABIAAAAgAhAjFIgUAAIgBgBIgBgBIABgBIABgBIAUAAIABABIABABIgBABIgBABIAAAAgAhejFIgUAAIgCgBIAAgBIAAgBIACgBIAUAAIABABIABABIgBABIgBABIAAAAgAh8jFIgUAAIgCgBIAAgBIAAgBIACgBIAUAAIACABIAAABIAAABIgCABIAAAAgAiajFIgUAAIgBgBIgBgBIABgBIABgBIAUAAIABABIABABIgBABIgBABIAAAAgAi4jFIgUAAIgCgBIAAgBIAAgBIACgBIAUAAIABABIABABIgBABIgBABIAAAAgAjWjFIgUAAIgCgBIAAgBIAAgBIACgBIAUAAIACABIAAABIAAABIgCABIAAAAgAj0jFIgUAAIgBgBIgBgBIABgBIABgBIAUAAIABABIABABIgBABIgBABIAAAAgAkSjFIgUAAIgCgBIAAgBIAAgBIACgBIAUAAIABABIABABIgBABIgBABIAAAAgAkwjFIgUAAIgCgBIAAgBIAAgBIACgBIAUAAIACABIAAABIAAABIgCABIAAAAgAlOjFIgUAAIgBgBIgBgBIABgBIABgBIAUAAIABABIABABIgBABIgBABIAAAAgAlsjFIgUAAIgCgBIAAgBIAAgBIACgBIAUAAIABABIABABIgBABIgBABIAAAAgAmKjFIgUAAIgCgBIAAgBIAAgBIACgBIAUAAIACABIAAABIAAABIgCABIAAAAgAmojFIgUAAIgBgBIgBgBIABgBIABgBIAUAAIABABIABABIgBABIgBABIAAAAgAnGjFIgUAAIgCgBIAAgBIAAgBIACgBIAUAAIABABIABABIgBABIgBABIAAAAg");
	this.shape_203.setTransform(112.4,37.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._0922_2_SEN, null, null);


(lib._0922_2_IRO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// IRO
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,0,0,4).p("AAAGdIAAs5");
	this.shape.setTransform(359.4,393.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6A4D37").ss(4,0,0,4).p("AvxmXIfQAAIAAND");
	this.shape_1.setTransform(260.4,289.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,0,0,4).p("AjxAAIHjAA");
	this.shape_2.setTransform(189.475,41.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(4,0,0,4).p("ACAjvIISAAIAAE7I0jAAIAAC3");
	this.shape_3.setTransform(99.425,65.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#54FF20").ss(4,0,0,4).p("AlFAAIKLAA");
	this.shape_4.setTransform(98.775,248.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#989898").ss(4,0,0,4).p("AFIAAIqPAA");
	this.shape_5.setTransform(98.6,207.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#8100FD").ss(4,0,0,4).p("AvyGxIfRAAIAAt1");
	this.shape_6.setTransform(260.45,164.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FBADFE").ss(3.6,0,0,4).p("AAAqnIAAVQ");
	this.shape_7.setTransform(490.75,187.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(4,0,0,4).p("AAAqnIAAVQ");
	this.shape_8.setTransform(490.75,187.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._0922_2_IRO, null, null);


(lib.Title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1_obj_
	this.レイヤー_1 = new lib.Title_レイヤー_1();
	this.レイヤー_1.name = "レイヤー_1";
	this.レイヤー_1.parent = this;
	this.レイヤー_1.setTransform(284.6,12.3,1,1,0,0,0,284.6,12.3);
	this.レイヤー_1.depth = 0;
	this.レイヤー_1.isAttachedToCamera = 0
	this.レイヤー_1.isAttachedToMask = 0
	this.レイヤー_1.layerDepth = 0
	this.レイヤー_1.layerIndex = 0
	this.レイヤー_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.レイヤー_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Title, new cjs.Rectangle(-2.7,5,574.3000000000001,15.2), null);


(lib.horn_comment_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{off:0,on:2});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();
		*/
	}
	this.frame_2 = function() {
		/* this.stop();
		*/
	}
	this.frame_5 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(3).call(this.frame_5).wait(1));

	// comment_obj_
	this.comment = new lib.horn_comment_mc_comment();
	this.comment.name = "comment";
	this.comment.parent = this;
	this.comment.setTransform(0.9,0.4,1,1,0,0,0,0.9,0.4);
	this.comment.depth = 0;
	this.comment.isAttachedToCamera = 0
	this.comment.isAttachedToMask = 0
	this.comment.layerDepth = 0
	this.comment.layerIndex = 0
	this.comment.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.comment).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.7,-24.4,122.8,49.599999999999994);


(lib.horn_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();
		*/
	}
	this.frame_1 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// icon_obj_
	this.icon = new lib.horn_btn_icon();
	this.icon.name = "icon";
	this.icon.parent = this;
	this.icon.depth = 0;
	this.icon.isAttachedToCamera = 0
	this.icon.isAttachedToMask = 0
	this.icon.layerDepth = 0
	this.icon.layerIndex = 0
	this.icon.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(2));

	// base_obj_
	this.base = new lib.horn_btn_base();
	this.base.name = "base";
	this.base.parent = this;
	this.base.depth = 0;
	this.base.isAttachedToCamera = 0
	this.base.isAttachedToMask = 0
	this.base.layerDepth = 0
	this.base.layerIndex = 1
	this.base.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.base).wait(2));

	// shadow_obj_
	this.shadow = new lib.horn_btn_shadow();
	this.shadow.name = "shadow";
	this.shadow.parent = this;
	this.shadow.setTransform(4,4,1,1,0,0,0,4,4);
	this.shadow.depth = 0;
	this.shadow.isAttachedToCamera = 0
	this.shadow.isAttachedToMask = 0
	this.shadow.layerDepth = 0
	this.shadow.layerIndex = 2
	this.shadow.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.shadow).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-38,148,80);


(lib.panel_horn_back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// back
	this.instance = new lib.panel_back("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-14.85,0,0.9497,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.panel_horn_back, null, null);


(lib._0922_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TEXT_obj_
	this.TEXT = new lib._0922_2_TEXT();
	this.TEXT.name = "TEXT";
	this.TEXT.parent = this;
	this.TEXT.setTransform(290.5,228.7,1,1,0,0,0,290.5,228.7);
	this.TEXT.depth = 0;
	this.TEXT.isAttachedToCamera = 0
	this.TEXT.isAttachedToMask = 0
	this.TEXT.layerDepth = 0
	this.TEXT.layerIndex = 0
	this.TEXT.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.TEXT).wait(1));

	// SEN_obj_
	this.SEN = new lib._0922_2_SEN();
	this.SEN.name = "SEN";
	this.SEN.parent = this;
	this.SEN.setTransform(366.6,233,1,1,0,0,0,366.6,233);
	this.SEN.depth = 0;
	this.SEN.isAttachedToCamera = 0
	this.SEN.isAttachedToMask = 0
	this.SEN.layerDepth = 0
	this.SEN.layerIndex = 1
	this.SEN.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.SEN).wait(1));

	// IRO_obj_
	this.IRO = new lib._0922_2_IRO();
	this.IRO.name = "IRO";
	this.IRO.parent = this;
	this.IRO.setTransform(262.1,238.5,1,1,0,0,0,262.1,238.5);
	this.IRO.depth = 0;
	this.IRO.isAttachedToCamera = 0
	this.IRO.isAttachedToMask = 0
	this.IRO.layerDepth = 0
	this.IRO.layerIndex = 2
	this.IRO.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.IRO).wait(1));

}).prototype = getMCSymbolPrototype(lib._0922_2, new cjs.Rectangle(-0.4,12,734,442), null);


(lib.シーン_1_circuit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// circuit
	this.Title = new lib.Title();
	this.Title.name = "Title";
	this.Title.parent = this;
	this.Title.setTransform(291.75,8.65,1,0.9999,0,0,0,286.7,9.5);

	this.circuit = new lib._0922_2();
	this.circuit.name = "circuit";
	this.circuit.parent = this;
	this.circuit.setTransform(3,8.4,0.7832,0.7832);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.circuit},{t:this.Title}]}).wait(132));

}).prototype = p = new cjs.MovieClip();


(lib.horn_menu_comment = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// comment
	this.horn_comment_mc = new lib.horn_comment_mc();
	this.horn_comment_mc.name = "horn_comment_mc";
	this.horn_comment_mc.parent = this;
	this.horn_comment_mc.setTransform(103.85,1.5);

	this.timeline.addTween(cjs.Tween.get(this.horn_comment_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.horn_menu_comment, null, null);


(lib.horn_menu_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// button
	this.horn_btn = new lib.horn_btn();
	this.horn_btn.name = "horn_btn";
	this.horn_btn.parent = this;
	this.horn_btn.setTransform(1,7,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAOAkIgcguIAAAuIgNAAIAAhHIAOAAIAcAvIAAgvIANAAIAABHg");
	this.shape.setTransform(13.175,-18.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAPAkIgKgQIgHgKQgCgDgDAAIgHgBIgDAAIAAAeIgOAAIAAhHIAeAAQALAAAFACQAFACADAFQADAFAAAGQABAIgGAGQgEAEgJABQAEADADADQADADAGAJIAIAOgAgRgFIALAAIAMAAIAEgDQABgDAAgDQAAgDgCgDQgCgCgDAAIgKgBIgLAAg");
	this.shape_1.setTransform(6.35,-18.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAbQgKgJAAgSQAAgJADgIQADgFAEgFQAEgEAFgCQAHgDAIAAQAQAAAJAKQAKAKAAAQQAAASgKAJQgJAKgQAAQgPAAgJgKgAgOgSQgFAHAAALQAAANAGAFQAFAHAIAAQAJAAAFgHQAGgFAAgNQAAgLgGgHQgFgFgJAAQgIAAgGAFg");
	this.shape_2.setTransform(-1.475,-18.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAOAkIAAggIgbAAIAAAgIgPAAIAAhHIAPAAIAAAcIAbAAIAAgcIAPAAIAABHg");
	this.shape_3.setTransform(-9,-18.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.horn_btn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.horn_menu_button, null, null);


(lib.horn_menu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.horn_comment_mc = this.comment.horn_comment_mc;
		this.horn_btn = this.button.horn_btn;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// comment_obj_
	this.comment = new lib.horn_menu_comment();
	this.comment.name = "comment";
	this.comment.parent = this;
	this.comment.setTransform(104.8,1.9,1,1,0,0,0,104.8,1.9);
	this.comment.depth = 0;
	this.comment.isAttachedToCamera = 0
	this.comment.isAttachedToMask = 0
	this.comment.layerDepth = 0
	this.comment.layerIndex = 0
	this.comment.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.comment).wait(1));

	// button_obj_
	this.button = new lib.horn_menu_button();
	this.button.name = "button";
	this.button.parent = this;
	this.button.setTransform(2,2.8,1,1,0,0,0,2,2.8);
	this.button.depth = 0;
	this.button.isAttachedToCamera = 0
	this.button.isAttachedToMask = 0
	this.button.layerDepth = 0
	this.button.layerIndex = 1
	this.button.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// back_obj_
	this.back = new lib.horn_menu_back();
	this.back.name = "back";
	this.back.parent = this;
	this.back.setTransform(103.8,1.5,1,1,0,0,0,103.8,1.5);
	this.back.depth = 0;
	this.back.isAttachedToCamera = 0
	this.back.isAttachedToMask = 0
	this.back.layerDepth = 0
	this.back.layerIndex = 2
	this.back.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

}).prototype = getMCSymbolPrototype(lib.horn_menu, new cjs.Rectangle(-37.8,-26.3,209.7,54.3), null);


(lib.panel_horn_switch_idn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// switch_idn
	this.instance = new lib.horn_menu();
	this.instance.parent = this;
	this.instance.setTransform(-248.5,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.panel_horn_switch_idn, null, null);


(lib.panel_horn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// switch_idn_obj_
	this.switch_idn = new lib.panel_horn_switch_idn();
	this.switch_idn.name = "switch_idn";
	this.switch_idn.parent = this;
	this.switch_idn.setTransform(-185.3,-0.3,1,1,0,0,0,-185.3,-0.3);
	this.switch_idn.depth = 0;
	this.switch_idn.isAttachedToCamera = 0
	this.switch_idn.isAttachedToMask = 0
	this.switch_idn.layerDepth = 0
	this.switch_idn.layerIndex = 0
	this.switch_idn.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.switch_idn).wait(1));

	// back_obj_
	this.back = new lib.panel_horn_back();
	this.back.name = "back";
	this.back.parent = this;
	this.back.setTransform(-154.8,1,1,1,0,0,0,-154.8,1);
	this.back.depth = 0;
	this.back.isAttachedToCamera = 0
	this.back.isAttachedToMask = 0
	this.back.layerDepth = 0
	this.back.layerIndex = 1
	this.back.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

}).prototype = getMCSymbolPrototype(lib.panel_horn, new cjs.Rectangle(-294.8,-28.4,222.9,58.8), null);


(lib.シーン_1_ボタン = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ボタン
	this.IG_SW = new lib.panel_horn();
	this.IG_SW.name = "IG_SW";
	this.IG_SW.parent = this;
	this.IG_SW.setTransform(299.65,395.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF8000").ss(5,2,0,3).p("Alii+ILFAAIAAF9IrFAAg");
	this.shape.setTransform(52.525,400.95);

	this.IG_SW2 = new lib.panel_horn();
	this.IG_SW2.name = "IG_SW2";
	this.IG_SW2.parent = this;
	this.IG_SW2.setTransform(299.65,395.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.IG_SW}]}).to({state:[{t:this.IG_SW2},{t:this.shape}]},4).wait(128));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.MZ2UKS0922_2_flow = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"off":0,IG_ON:4,IG_ON_END:131});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.IG_SW = this.ボタン.IG_SW;
		if(this.circuit.parent == undefined || this.circuit.parent == this)
		this.circuit = this.circuit.circuit;
		this.Title = this.circuit.Title;
		this.stop();
		/* このフレームで停止
		 タイムラインは、このコードが挿入されたフレームで停止 / 一時停止します。
		ムービークリップのタイムラインの停止 / 一時停止にも使用できます。
		*/
		
		/* クリックして特定のフレームに移動し、再生
		特定のシンボルインスタンス上でクリックすると、再生ヘッドがタイムラインの指定フレームに移動し、そのフレームから再生が継続されます。
		メインタイムラインまたはムービークリップタイムライン上で使用できます。
		
		手順 :
		1. 以下のコード内の数値 5 を、シンボルインスタンスのクリック時に再生ヘッドが移動するフレームの番号に置き換えます。
		2. EaselJS のフレーム番号は、1 ではなく 0 から始まります。
		*/
		
		this.IG_SW.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay("IG_ON");
		}
	}
	this.frame_4 = function() {
		this.IG_SW = undefined;this.IG_SW2 = this.ボタン.IG_SW2;
		/* クリックして特定のフレームに移動し、再生
		特定のシンボルインスタンス上でクリックすると、再生ヘッドがタイムラインの指定フレームに移動し、そのフレームから再生が継続されます。
		メインタイムラインまたはムービークリップタイムライン上で使用できます。
		
		手順 :
		1. 以下のコード内の数値 5 を、シンボルインスタンスのクリック時に再生ヘッドが移動するフレームの番号に置き換えます。
		2. EaselJS のフレーム番号は、1 ではなく 0 から始まります。
		*/
		
		this.IG_SW2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndStop("off");
		}
	}
	this.frame_131 = function() {
		this.___loopingOver___ = true;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(127).call(this.frame_131).wait(1));

	// _7_obj_
	this._7 = new lib.シーン_1__7();
	this._7.name = "_7";
	this._7.parent = this;
	this._7.depth = 0;
	this._7.isAttachedToCamera = 0
	this._7.isAttachedToMask = 0
	this._7.layerDepth = 0
	this._7.layerIndex = 0
	this._7.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._7).wait(132));

	// yellow_obj_
	this.yellow = new lib.シーン_1_yellow();
	this.yellow.name = "yellow";
	this.yellow.parent = this;
	this.yellow.depth = 0;
	this.yellow.isAttachedToCamera = 0
	this.yellow.isAttachedToMask = 0
	this.yellow.layerDepth = 0
	this.yellow.layerIndex = 1
	this.yellow.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.yellow).wait(132));

	// _6_obj_
	this._6 = new lib.シーン_1__6();
	this._6.name = "_6";
	this._6.parent = this;
	this._6.depth = 0;
	this._6.isAttachedToCamera = 0
	this._6.isAttachedToMask = 0
	this._6.layerDepth = 0
	this._6.layerIndex = 2
	this._6.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._6).wait(132));

	// _5_obj_
	this._5 = new lib.シーン_1__5();
	this._5.name = "_5";
	this._5.parent = this;
	this._5.depth = 0;
	this._5.isAttachedToCamera = 0
	this._5.isAttachedToMask = 0
	this._5.layerDepth = 0
	this._5.layerIndex = 3
	this._5.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._5).wait(132));

	// _4_obj_
	this._4 = new lib.シーン_1__4();
	this._4.name = "_4";
	this._4.parent = this;
	this._4.depth = 0;
	this._4.isAttachedToCamera = 0
	this._4.isAttachedToMask = 0
	this._4.layerDepth = 0
	this._4.layerIndex = 4
	this._4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._4).wait(132));

	// _3_obj_
	this._3 = new lib.シーン_1__3();
	this._3.name = "_3";
	this._3.parent = this;
	this._3.depth = 0;
	this._3.isAttachedToCamera = 0
	this._3.isAttachedToMask = 0
	this._3.layerDepth = 0
	this._3.layerIndex = 5
	this._3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._3).wait(132));

	// _2_obj_
	this._2 = new lib.シーン_1__2();
	this._2.name = "_2";
	this._2.parent = this;
	this._2.depth = 0;
	this._2.isAttachedToCamera = 0
	this._2.isAttachedToMask = 0
	this._2.layerDepth = 0
	this._2.layerIndex = 6
	this._2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._2).wait(132));

	// _1_obj_
	this._1 = new lib.シーン_1__1();
	this._1.name = "_1";
	this._1.parent = this;
	this._1.depth = 0;
	this._1.isAttachedToCamera = 0
	this._1.isAttachedToMask = 0
	this._1.layerDepth = 0
	this._1.layerIndex = 7
	this._1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._1).wait(132));

	// yellow_obj_
	this.yellow_1 = new lib.シーン_1_yellow_1();
	this.yellow_1.name = "yellow_1";
	this.yellow_1.parent = this;
	this.yellow_1.depth = 0;
	this.yellow_1.isAttachedToCamera = 0
	this.yellow_1.isAttachedToMask = 0
	this.yellow_1.layerDepth = 0
	this.yellow_1.layerIndex = 8
	this.yellow_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.yellow_1).wait(132));

	// 常時_obj_
	this.常時 = new lib.シーン_1_常時();
	this.常時.name = "常時";
	this.常時.parent = this;
	this.常時.depth = 0;
	this.常時.isAttachedToCamera = 0
	this.常時.isAttachedToMask = 0
	this.常時.layerDepth = 0
	this.常時.layerIndex = 9
	this.常時.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.常時).wait(132));

	// switch_idn_obj_
	this.switch_idn = new lib.シーン_1_switch_idn();
	this.switch_idn.name = "switch_idn";
	this.switch_idn.parent = this;
	this.switch_idn.setTransform(251.6,252.4,1,1,0,0,0,251.6,252.4);
	this.switch_idn.depth = 0;
	this.switch_idn.isAttachedToCamera = 0
	this.switch_idn.isAttachedToMask = 0
	this.switch_idn.layerDepth = 0
	this.switch_idn.layerIndex = 10
	this.switch_idn.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.switch_idn).wait(132));

	// ボタン_obj_
	this.ボタン = new lib.シーン_1_ボタン();
	this.ボタン.name = "ボタン";
	this.ボタン.parent = this;
	this.ボタン.setTransform(152.3,396.4,1,1,0,0,0,152.3,396.4);
	this.ボタン.depth = 0;
	this.ボタン.isAttachedToCamera = 0
	this.ボタン.isAttachedToMask = 0
	this.ボタン.layerDepth = 0
	this.ボタン.layerIndex = 11
	this.ボタン.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ボタン).wait(132));

	// circuit_obj_
	this.circuit = new lib.シーン_1_circuit();
	this.circuit.name = "circuit";
	this.circuit.parent = this;
	this.circuit.setTransform(290.1,185.7,1,1,0,0,0,290.1,185.7);
	this.circuit.depth = 0;
	this.circuit.isAttachedToCamera = 0
	this.circuit.isAttachedToMask = 0
	this.circuit.layerDepth = 0
	this.circuit.layerIndex = 12
	this.circuit.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.circuit).wait(132));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(602.4,229.2,-25.100000000000023,195.7);
// library properties:
lib.properties = {
	id: '322C0861A2754A4BA9CC979B5DB4D4FC',
	width: 1200,
	height: 450,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['322C0861A2754A4BA9CC979B5DB4D4FC'] = {
	getStage: function() { return exportRoot.getStage(); },
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


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;