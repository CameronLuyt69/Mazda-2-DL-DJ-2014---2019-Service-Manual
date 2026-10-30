
//ロケーション印刷用
var gSvgCount = 0;
var locationArry = [];

function svgClass () {
	this.setting = {
		panzoom : {
			
			minScale: 0.1,
			maxScale: 10,
			increment: 0.3,
			//increment: 0.15,			
			duration: 500,
			easing: 'ease-out'
		},
		stepanimation : {
			duration : 1000,
			easing: 'easeInOutQuart'
		},
		dragDistance : 225 // Type Aでのドラッグ閾値（225=15^2）
	};
	/**
	 * メンバ
	 * _開始はプロテクト
	 */
	this._parent; // svg親要素/呼び出し要素
	this._parentObj;// svg親要素/呼び出し要素オブジェクト
	this._svgObj; // svg要素
	this._svgTargetLayerObj; //svg中の対象レイヤーオブジェクト
	this._svgTargetsObj; //svg中の対象オブジェクト群
	this._svgGroupObj; // SVG中の対象グループオブジェクト
	this._svgStepObj; // SVG中の対象グループオブジェクト中の単一のステップグループ
	this._textObj; //置換用テキストオブジェクト
	this._panzoom; //panzoomオブジェクト
	this.step = 0; //TypeA用ステップ
	this.point; // 描画されている矩形の中心座標
	this.bound; // 描画されている矩形の大きさ
	this.touchStart; // Type A Clickmode用Touchstart座標
	this.scale; // 
	this._orgSvgWidth;
	this._orgSvgHeight;
	//this._svgObjEnable;
	
	this._num_SvgArea_AncharX = 0;
	this._num_SvgArea_AncharY = 0;
	this._num_SvgArea_CurrentMaxW = 0;
	this._num_SvgArea_CurrentMaxH = 0;
	this._num_SvgArea_BaseW = 0;
	this._num_SvgArea_BaseH = 0;
	/**
	 * 各種セッター
	 */
	this.setSvgTargetLayerObj = function () {
		var parentObj = this._parentObj;
		var svgTargetLayerObj = $(parentObj.find(parentObj.attr('data-layer')));
		svgTargetLayerObj.attr('class', 'target');
		this._svgTargetLayerObj = svgTargetLayerObj;
	}
	this.setSvgTargetsObj = function () {
		this._svgTargetsObj = $(this._svgTargetLayerObj.find(' > *'));
	}
	this.setParent = function (element) {
		this._parent = element;
		this._parentObj = $(this._parent);
	};
	this.getParent = function () {
		return this._parentObj;
	};
	this.setSvg = function (element) {
		this._svgObj = element;
		this._orgSvgWidth = element.width();
		this._orgSvgHeight = element.height();
	};
	
	this.getOrgSvgWidth = function () {
		return this._orgSvgWidth;
	};
	
	this.getOrgSvgHeight = function () {
		return this._orgSvgHeight;
	};
	
	this.getOrgSvgMatrix = function () {
		var currentSvgMatrix = this._panzoom.panzoom('getMatrix');
		return currentSvgMatrix;
	};
	
	/**
	 * enablePanzoom
	 * panzoomを有効化する
	 */
	this.enablePanzoom = function () {
		var panzoom;
		
		panzoom = this._svgObj.panzoom(this.setting.panzoom);
		
		this._panzoom = panzoom;
		
		//logger.info('panzoomが有効になりました。');
		
	};
	/**
	 * fitPanzoom
	 * 親エリアにSVGをフィットさせる 全体表示
	 */
	this.fitPanzoom = function () {
		var viewBoundingClientRect = this._parentObj.get(0).getBoundingClientRect();
		
		var viewCenterX = viewBoundingClientRect.width / 2;
		var viewCenterY = viewBoundingClientRect.height / 2;
		
		var targetW = parseInt(this._svgObj.attr('width'));
		var targetH = parseInt(this._svgObj.attr('height'));
		
		this.setZoomLevel();
		var scale = this.getZoomLevel();
		
		// 縮尺調整
		var resizeScale = 1;
		
		var OffsetX = 0;
		var OffsetY = 0;
		
		var TargetX = 0;
		var TargetY = 0;
		
		if (viewBoundingClientRect.width / targetW < viewBoundingClientRect.height / targetH)
		{
			resizeScale = viewBoundingClientRect.width / targetW;
			
			OffsetX = (targetW - targetW*resizeScale) / 2;
			OffsetY = (targetH - targetH*resizeScale) / 2;
			
			TargetX = -OffsetX;
			TargetY = -OffsetY+viewCenterY-(targetH*resizeScale)/2;
		}
		else
		{
			resizeScale = viewBoundingClientRect.height / targetH;
			
			OffsetX = (targetW - targetW*resizeScale) / 2;
			OffsetY = (targetH - targetH*resizeScale) / 2;
			
			TargetX = -OffsetX+viewCenterX-(targetW*resizeScale)/2;
			TargetY = -OffsetY;
		}
		
		this._parentObj.hide();
		
		this._panzoom.panzoom("setMatrix", [resizeScale
											, 0
											, 0
											, resizeScale
											, TargetX
											, TargetY
										], {animate: false});
		
		this._parentObj.fadeIn('slow');
	};
		
	/**
	 * settingMatrix
	 * 指定したMatrixでSVGを表示させる
	 */
	this.settingMatrix = function (CurrentSvgMatrix) {
		this._panzoom.panzoom("setMatrix", CurrentSvgMatrix, {animate: false});
	};
	
	/**
	 * fitPanzoom Virtical
	 * 親エリアにSVGをフィットさせる 縦基準
	 */
	this.fitPanzoomV = function () {
		var viewBoundingClientRect = this._parentObj.get(0).getBoundingClientRect();
		
		var viewCenterX = viewBoundingClientRect.width / 2;
		var viewCenterY = viewBoundingClientRect.height / 2;
		
		var targetW = parseInt(this._svgObj.attr('width'));
		var targetH = parseInt(this._svgObj.attr('height'));
		
		this.setZoomLevel();
		var scale = this.getZoomLevel();
		
		// 縮尺調整
		var resizeScale = 1;
		
		var OffsetX = 0;
		var OffsetY = 0;
		
		var TargetX = 0;
		var TargetY = 0;
		/*
		if (viewBoundingClientRect.width / targetW < viewBoundingClientRect.height / targetH)
		{
			resizeScale = viewBoundingClientRect.width / targetW;
			
			OffsetX = (targetW - targetW*resizeScale) / 2;
			OffsetY = (targetH - targetH*resizeScale) / 2;
			
			TargetX = -OffsetX;
			TargetY = -OffsetY+viewCenterY-(targetH*resizeScale)/2;
		}
		else
		{
		*/
			resizeScale = viewBoundingClientRect.height / targetH;
			
			OffsetX = (targetW - targetW*resizeScale) / 2;
			OffsetY = (targetH - targetH*resizeScale) / 2;
			
			TargetX = -OffsetX;//+viewCenterX-(targetW*resizeScale)/2;
			TargetY = -OffsetY;
		//}
		
		this._parentObj.hide();
		
		this._panzoom.panzoom("setMatrix", [resizeScale
											, 0
											, 0
											, resizeScale
											, TargetX
											, TargetY
										], {animate: false});
		
		this._parentObj.fadeIn('slow');
	};
	/**
	 * moveToScreenCenter
	 * 描画エリアの中心にターゲットのエレメントを移動する
	 */
	this.moveToScreenCenter = function (targetElement) {
		// 描画エリアの中心
		var viewBoundingClientRect = this._parentObj.get(0).getBoundingClientRect();
		
		var viewCenterX = viewBoundingClientRect.left + viewBoundingClientRect.width  / 2;
		var viewCenterY = viewBoundingClientRect.top  + viewBoundingClientRect.height / 2;
		
		// ターゲットの中心
		var rectTargetElement = targetElement.get(0).getBoundingClientRect();
		
		var targetCenterX = parseInt(rectTargetElement.left + rectTargetElement.width /2);
		var targetCenterY = parseInt(rectTargetElement.top  + rectTargetElement.height/2);
		
		// 図を移動させる距離を算出
		var moveDistanceX = viewCenterX - targetCenterX;
		var moveDistanceY = viewCenterY - targetCenterY;
		
		// 移動処理
		var currentSvgMatrix = this._panzoom.panzoom('getMatrix');
		
		currentSvgMatrix[4] = parseInt(currentSvgMatrix[4]) + moveDistanceX;
		currentSvgMatrix[5] = parseInt(currentSvgMatrix[5]) + moveDistanceY;
		
		this._panzoom.panzoom("setMatrix", currentSvgMatrix, {animate: true});
	};
	
	
	//=============================================================================
	// 複数のActivePointがあった場合の対応
	//=============================================================================

	//array（配列）にvalue（同じ値）が既に存在するかを調べる
	function IsArrayExists(array, value) 
	{
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (value == array[i]) {
	      // 存在したら、存在した要素番号を返す
	      return i;
	    }
	  }
	  // 存在しない場合"NotExist"を返す
	  return "NotExist";
	}


	function checkMultipleActivePoints(stringNewSvgPath)
	{
		
		if ( stringNewSvgPath.indexOf(':') == -1) {
			return false;
		}

		var arrayConnectorSrc = stringNewSvgPath.split(':');
		
		stringNewSvgPath = "";
		var arrayConnectorNum = [];
		var arrayConnectorPath = [];
		
		for(var i = 0; arrayConnectorSrc.length > i; i++)
		{
			// 数値部分だけ取得
			arrayConnectorNum.push(arrayConnectorSrc[i].split("|")[0]);

			// svgのパスだけ取得
			arrayConnectorPath.push(arrayConnectorSrc[i].split("|")[1]);		
		}
		
		var activePvalueArray;
		var arraySvgNum = [];
		var arraySvgPath = [];
		
		//最初だけpushしておく
		arraySvgNum.push(arrayConnectorNum[0]);
		arraySvgPath.push(arrayConnectorPath[0]);
		
		//配列に同じsvgのパスが既に存在するかを調べる
		for(var i = 1; arrayConnectorSrc.length > i; i++)
		{
			var result = IsArrayExists(arraySvgPath, arrayConnectorPath[i]);
			if(result == "NotExist" ) 
			{
				//存在しない
				arraySvgNum.push(arrayConnectorNum[i]);
				arraySvgPath.push(arrayConnectorPath[i]);
		    }
		    else
		    {
				//存在した
				//数値部分を重複している要素の数値部分に";"で挟んで追加する
				arraySvgNum[result] = arraySvgNum[result] + ";" + arrayConnectorNum[i];
			}
		}
		
		for(var i = 0; arraySvgPath.length > i; i++)
		{
			if(i != 0)
			{
				stringNewSvgPath += ":";
			}
			
			stringNewSvgPath += arraySvgNum[i] + "|" + arraySvgPath[i];
		}
			
		return 	stringNewSvgPath;
	}
	
	
	/**
	 * svgLoader
	 * loadSVGを管理
	 */
	this.svgLoader = function (figureType, connectorFlag) {
		var relayDfd_list = [];
		var $ajax;
		
		var orgUrl = this._parent.attr('data-src');
		
		/* 複数のActivePointがあった場合の対応 */
		if(figureType == LoadData.LOCATION)
		{
			var result = checkMultipleActivePoints(orgUrl);
			if(result != false)
			{
				this._parent.attr('data-src', result);
				orgUrl = result;
			}
		}
		
		this._parentObj.empty();

		
		//SVG複数あれば並べる
		var arrayConnectorSrc = orgUrl.split(':');
		
		if (arrayConnectorSrc.length < 1) return;
		
		this.setSvg(
			this._parentObj.append(
								$('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="400px" height="30px" viewBox="0 0 400 40" xml:space="preserve"></svg>')
							).find('svg')
		);
		
		if (arrayConnectorSrc.length < 2)
		{
			if (orgUrl.match(/\|/))
			{
				$ajax = this.load(orgUrl.split("|")[0], orgUrl.split("|")[1], false, 1).done(function(res, status){
					// status を見て処理分岐
					if ( status === "success" ) {
						// 成功時の処理
						//console.log(":done");
					} else {
						// 失敗時の処理
						//console.log(":failed");
					}
				});
				relayDfd_list.push( $ajax );
			}
		}
		else
		{
			arrayConnectorSrc.some( function (value, index, array) {
				if (value.match(/\|/))
				{
					if(connectorFlag === true)
					{
						//SVG4個で改行する
						//if ((index%5) == 0)
						if ((index != 1) && ((index%4-1) == 0))
						{
							$ajax = this.load(value.split("|")[0], value.split("|")[1], true, index).done(function(res, status){
								// status を見て処理分岐
								if ( status === "success" ) {
									// 成功時の処理
									//console.log(":done");
								} else {
									// 失敗時の処理
									//console.log(":failed");
								}
							});
							relayDfd_list.push( $ajax );
						}
						else
						{
							$ajax = this.load(value.split("|")[0], value.split("|")[1], false, index).done(function(res, status){
								// status を見て処理分岐
								if ( status === "success" ) {
									// 成功時の処理
									//console.log(":done");
								} else {
									// 失敗時の処理
									//console.log(":failed");
								}
							});
							relayDfd_list.push( $ajax );
						}
					}
					else
					{
						//SVG2個で改行する
						if ((index != 1) && ((index%2-1) == 0))
						{
							$ajax = this.load(value.split("|")[0], value.split("|")[1], true, index).done(function(res, status){
								// status を見て処理分岐
								if ( status === "success" ) {
									// 成功時の処理
									//console.log(":done");
								} else {
									// 失敗時の処理
									//console.log(":failed");
								}
							});
							relayDfd_list.push( $ajax );
						}
						else
						{
							$ajax = this.load(value.split("|")[0], value.split("|")[1], false, index).done(function(res, status){
								// status を見て処理分岐
								if ( status === "success" ) {
									// 成功時の処理
									//console.log(":done");
								} else {
									// 失敗時の処理
									//console.log(":failed");
								}
							});
							relayDfd_list.push( $ajax );
						}
					}
				}
			}, this);
		}
		
		return relayDfd_list;
	};
	/**
	 * loadSVG
	 * SVGファイルをjQueryで読み込み
	 */
	this.load = function (name, url, flagLineFeed, index) {
		
		var dfd = new $.Deferred();
		// 
		var _this = this;
		
		var importTarget = $('svg:first', _this._parentObj);
		
		var ajaxUuid = uuid();
		importTarget.append($('<svg id="' + ajaxUuid + '" x="0" y="' + (index-1)*40 + '"><text x="42" y="27">'+url.replace(/^.+\//,"")+'</text><path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,10131564AF9"/><path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite"/></path></svg>'));
		/*
		$.ajaxSetup({
			xhr: function() { // 使える場合はMicrosoft.XMLHTTP, 使えない場合はXMLHttpRequest
		        try { return new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) { return new XMLHttpRequest(); }
	        }
        });
		*/
		var $ajax = $.ajax({
			url: url,
			type: "GET",
			dataType: "xml",
			async: true,
			context: this,
       		error:function() {
			//alert('ajax ERROR!');
			}			
		}).always(function () {
			//$('.ajaxSpinner').hide();
		}).done(function(data, textStatus, jqXHR) {
			//
			//$(".loading").hide();
			
			// サイズ調整
			var baseSvgWidth	=	parseInt(_this._svgObj.attr('width'));
			var baseSvgHeight	=	parseInt(_this._svgObj.attr('height'));
			var addSvgWidth		=	parseInt($('svg', data).attr('width'));
			var addSvgHeight	=	parseInt($('svg', data).attr('height'));
			
			var numMerginX = 20;
			var numMerginY = 20;
			
			// フラグにより描画を改行、描画位置を計算
			if (flagLineFeed)
			{
				this._num_SvgArea_AncharX = 0;
				this._num_SvgArea_AncharY = this._num_SvgArea_AncharY + this._num_SvgArea_CurrentMaxH + numMerginY;
				
				this._num_SvgArea_CurrentMaxW = addSvgWidth;
				this._num_SvgArea_CurrentMaxH = addSvgHeight;
				
				if (this._num_SvgArea_BaseW < addSvgWidth) this._num_SvgArea_BaseW = addSvgWidth;
				this._num_SvgArea_BaseH = this._num_SvgArea_AncharY + addSvgHeight;
			}
			else
			{
				if (this._num_SvgArea_CurrentMaxW < addSvgWidth) this._num_SvgArea_CurrentMaxW = addSvgWidth;
				if (this._num_SvgArea_CurrentMaxH < addSvgHeight) this._num_SvgArea_CurrentMaxH = addSvgHeight;
				
				if (this._num_SvgArea_BaseW < (this._num_SvgArea_AncharX + addSvgWidth)) this._num_SvgArea_BaseW = this._num_SvgArea_AncharX + addSvgWidth;
				this._num_SvgArea_BaseH = this._num_SvgArea_AncharY + this._num_SvgArea_CurrentMaxH;
			}
			
			// viewBox のサイズ調整
			_this._svgObj[0].setAttribute('viewBox', "0 0 " + this._num_SvgArea_BaseW + " " + this._num_SvgArea_BaseH);
			
			_this._svgObj.attr('width' , this._num_SvgArea_BaseW);
			_this._svgObj.attr('height', this._num_SvgArea_BaseH);
			
			_this._orgSvgWidth  = this._num_SvgArea_BaseW; // SVGサイズの共有　関数化する
			_this._orgSvgHeight = this._num_SvgArea_BaseH; // SVGサイズの共有　関数化する
			
			// ロードしたSVGを挿し込む
			var svgCodeOnly = $('g:first', data); // 描画に必要な記述のみ
			// 背景を作成・追加
			var svgBackground = document.createElementNS("http://www.w3.org/2000/svg", "rect");
			
				svgBackground.setAttribute("x"     , 0);
				svgBackground.setAttribute("y"     , 0);
				svgBackground.setAttribute("width" , addSvgWidth);
				svgBackground.setAttribute("height", addSvgHeight);
				svgBackground.setAttribute("class" , "svgBackground");
			
			svgCodeOnly.prepend(svgBackground);
			
			importTarget.append($('<svg class="connectorList" data-name="' + name + '" data-src="' + url + '" x="' + this._num_SvgArea_AncharX + '" y="' + this._num_SvgArea_AncharY + '"></svg>').append(svgCodeOnly));
			
			//logger.info('SVGファイルをロードしました。');
			
			// AncharX を更新
			this._num_SvgArea_AncharX = this._num_SvgArea_AncharX + addSvgWidth + numMerginX;
			
			//
			$("#" + ajaxUuid).hide();
			
			dfd.resolveWith(this, arguments);
			
		}, _this).fail(function(data, textStatus, jqXHR) {
			
			//this.svgObjEnable = false;
			
			dfd.resolveWith(this, arguments);
		});
		
		return $.extend({}, $ajax, dfd.promise());//dfd.promise();
	};
	/**
	 * resetPanzoom
	 * panzoomオブジェクトの位置とズームをリセットする。
	 * 
	 */
	this.resetPanzoom = function () {
		this._panzoom.panzoom("resetPan");
		this._panzoom.panzoom("resetZoom");
		//logger.info('panzoomをリセットしました。');
	};
	/**
	 * resetPanzoom
	 * panzoomオブジェクトの位置とズームをリセットする。
	 * 
	 */
	this.movePanzoom = function (x, y) {
		this._panzoom.panzoom("pan", x, y, {
					silent: true,
					animate: true
				});
	};
	/**
	 * getZoomLevel
	 * 
	 * 
	 */
	this.setZoomLevel = function () {
		var matrix = this._panzoom.panzoom('getMatrix');
		this.scale = matrix[0];
		//logger.info('panzoomをリセットしました。');
	};
	
	this.getZoomLevel = function () {
		return this.scale;
	};
	/**
	 * onMousewheel
	 * 
	 */
	this.onMousewheel = function () {
		var panzoom = this._panzoom;
		this._parentObj.on('mousewheel.focal', function( e ) {
			e.preventDefault();
			var delta = e.delta || e.originalEvent.wheelDelta;
			var zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;	
			panzoom.panzoom('zoom', zoomOut, {
				increment: 0.1,
				//increment: 0.05,
				animate: false,
				focal: e
			});			
		});		

		//logger.info('ホイールズームが有効になりました。');
	};
	/**
	 * setLabel
	 * 
	 */
	this.setLabel = function () {
		
		//ターゲットの情報を分析
		var centerX = 0;
		var centerY = 0;
		
		var svgList = [];
		var svgFilepath = [];
		var svgConnectorClass = this._parentObj.find('.connectorList');
		
		//svgのファイルパスを取得
		for(var i = 0; svgConnectorClass.length > i ; i++)
		{
			var $dataSrc = svgConnectorClass.eq(i).attr('data-src');
			svgFilepath[i] = '../' + $dataSrc;
		}
		
		for(var i = 0; svgFilepath.length > i; i++)
		{
			
			var $svgConnectors = this._parentObj.find('.connectorList').eq(i).find('#HIGHLIGHT');
									
			//var circles = $svgConnectors.find('circle, path').map((index, value) => 
			var circles = $svgConnectors.find('circle, path').map(function(index, value)
			{
				
				var path = $(value);
				
				var thisX = 0;
				var thisY = 0;
				
				if (value.tagName != "circle")
				{
					var svgBBox = value.getBBox();
					
					thisX = svgBBox.x + svgBBox.width/2;
					thisY = svgBBox.y + svgBBox.height/2;
				} else {
					thisX = path.attr("cx");
					thisY = path.attr("cy");
				}
				
				//location印刷用
				var acriveClass = path.parent().attr('class');
				if ( acriveClass.indexOf('active') != -1)
				{
					this.locationPrint(thisX, thisY, path.parent().attr('id'), svgFilepath[i]);
				}
				
				return {x: thisX,
						y: thisY,
						id: path.parent().attr('id'),
						targetLayer: path.parent()
					};
			}.bind(this));
		
		}
	};
	
	
	function SvgData(_svgPath, _arrySvgProperty)
	{
		//svgのファイルパス
		this.svgPath = _svgPath;
		
		//svgの情報(svg_width, svg_height, targetX, targetY, text, connectorName)
		//↓みたいにして、後からarrySvgProperty.push(hoge)としたら二次元配列にできた。
		var tempArrySvgProperty = [];
		tempArrySvgProperty.push(_arrySvgProperty);
        this.arrySvgProperty = tempArrySvgProperty;
	};
	
	//location印刷用
	this.locationPrint = function (targetX, targetY, text, svgPath) 
	//function locationPrint(targetX, targetY, text, svgPath) 
	{
		//svgのwidthとheightを取得する
		svg_width = Math.floor(this._orgSvgWidth);
		svg_height = Math.floor(this._orgSvgHeight);
		
		//textには"LO-0740-106:LO-0740-206"みたいな感じで数値が複数くる場合があるので、最初のだけ取得する?
		//→"LO-0740-106:LO-0740-206"が来た場合、呼び元がLO-0740-106なのかLO-0740-206なのか判定して呼び元の方を表示してやる。
		if ( text.match(/:/))
		{
			var index   = text.indexOf(':');
			var connectorNum = text.substring(0, index);
			text = connectorNum;
		}
		
		//文頭のLO-を削除
		var text = text.replace( /LO-/g , "" );
		
		// connectorNameMAP.jsからコネクタ名をひっぱってくる
		if (text in connectorNameMAP) 
		{
			connectorName = connectorNameMAP[text];
		}
		
		var arrySvgProperty = [svg_width, svg_height, targetX, targetY, text, connectorName];

		if(locationArry.length > 0)
		{
			if(locationArry[locationArry.length - 1].svgPath != svgPath)
			{
				//svgが複数あった場合
				gSvgCount = gSvgCount + 1;
				locationArry[gSvgCount] = new SvgData(svgPath, arrySvgProperty);
			}
			else
			{
				//activePointが複数あった場合
				locationArry[locationArry.length - 1].arrySvgProperty.push(arrySvgProperty);
			}
		}
		else
		{
			locationArry[gSvgCount] = new SvgData(svgPath, arrySvgProperty);
		}

	};
}
