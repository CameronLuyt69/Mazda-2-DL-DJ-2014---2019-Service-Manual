/**
 * 各種設定
 */
var settings = {
	circuitFirstString: "CR-", // 各図面内でID識別するための文頭文字列
	connectorFirstString: "CN-",
	locationFirstString: "LO-",
	language : {
		key_os : 'language', // OS言語設定ローカルストレージキー名（推定する際に使用）
		key : 'Language', // 言語設定ローカルストレージキー名
		default : 'en', //どうしても言語が見つからない場合に使用する言語
		country : 'country', // 地域（国）を保持するローカルストレージキー名
		defaultCountry : '150' // どうしても地域が取得できなければ、デフォルトでヨーロッパ（150）とする
	},
	svgPath : {
		circuit : "svg/circuit/",
		connector : "svg/connector/",
		location : "svg/location/highlight/"
	}
}

var LoadData = {
	LOCATION : 1,
	CONNECTOR : 2,
	WIRING : 3,
	SHORTCUT : 4
};