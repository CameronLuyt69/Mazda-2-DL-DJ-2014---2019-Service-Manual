

var ctx, canvas, canvasEvent, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation, mousePos;
var EVENT = {};
var supportTouch;
var scale = 1;

function eventRegistration()
{
	// タッチイベントが利用可能かの判別
	supportTouch = 'ontouchend' in document;
		
	// イベント名
	EVENT.touchstart = supportTouch ? 'touchstart' : 'mousedown';
	EVENT.touchmove = supportTouch ? 'touchmove' : 'mousemove';
	EVENT.touchend = supportTouch ? 'touchend' : 'mouseup';
	EVENT.tap = supportTouch ? 'touchend' : 'click';
	//EVENT.scroll = 'onwheel' in document ? 'onwheel' : 'onmousewheel' in document ? 'onmousewheel' : 'DOMMouseScroll';
	EVENT.scroll = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
}

/*
function init() 
{
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext('2d');

	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("4CE39E7FD033DC4C8A8D2BAD5A5570EE");
	var lib=comp.getLibrary();
	handleComplete({},comp);

	//イベント登録
	eventRegistration();

	//拡大
	//zoom();

	//移動
	pan();
}
*/



/* マウスホイールで拡大・縮小 */
function zoom()
{
	var context = canvas.getContext('2d');

	$('#canvas').off(EVENT.scroll);
	$('#canvas').on(EVENT.scroll, function(e) 
	{
        e.preventDefault();

		var scale = stage.scaleX;

        var delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
        if (delta < 0){
            // マウスホイールを下にスクロール
				scale /= 1.2;
        } else {
            // マウスホイールを上にスクロール
			scale *= 1.2;
        }

		//alert(mousePos.x);
		//alert(mousePos.y);

		// 一旦クリア 
		context.clearRect(0, 0, canvas.width, canvas.height);

		context.translate(mousePos.x, mousePos.y);

	  	// 倍率変更
		stage.scaleX = scale;
		stage.scaleY = scale;

		stage.tickOnUpdate = false;
		stage.update();
		stage.tickOnUpdate = true;

		// 変換マトリクスを元に戻す
		context.scale(1 / scale, 1 / scale);

	});
}


/* ドラッグで移動 */
function pan()
{
	var context = canvas.getContext('2d');

	// ドラッグ状態かどうか
	let isDragging = false;

	// ドラッグ開始位置
	let start = 
	{
		x: 0,
		y: 0
	};

	// ドラッグ中の位置
	let diff = 
	{
		x: 0,
		y: 0
	};

	// ドラッグ終了後の位置
	let end = 
	{
		x: 0,
		y: 0
	}

	const redraw = function() 
	{
		context.clearRect(0, 0, canvas.width, canvas.height);
		//context.drawImage(img, diff.x, diff.y)

		stage.x = diff.x;
		stage.y = diff.y;

		stage.tickOnUpdate = false;
		stage.update();
		stage.tickOnUpdate = true;
	};

	$('#canvas').off(EVENT.touchstart);
	$('#canvas').on(EVENT.touchstart, function(evt) 
	{
		isDragging = true;
		start.x = evt.clientX;
		start.y = evt.clientY;

	});

	$('#canvas').off(EVENT.touchmove); 
	$('#canvas').on(EVENT.touchmove, function(evt) 
	{
		if (isDragging) 
		{
			diff.x = (evt.clientX - start.x) + end.x;
			diff.y = (evt.clientY - start.y) + end.y;
			redraw();
		}
		else
		{
          mousePos = getMousePosition(canvas, evt);
          var message = 'Mouse position X:' + mousePos.x + ', Y:' + mousePos.y;
          //PrintPosition(canvas, message);			
		}

	});

	$('#canvas').off(EVENT.touchend);
	$('#canvas').on(EVENT.touchend, function(evt) 
	{
		isDragging = false;
		end.x = diff.x;
		end.y = diff.y;

	});
}