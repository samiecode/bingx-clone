// TradingViewWidget.jsx
import React, {useEffect, useRef, memo} from "react";

function TradingViewWidget() {
	const container = useRef();

	useEffect(() => {
		const script = document.createElement("script");
		script.src =
			"https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
		script.type = "text/javascript";
		script.async = true;
		script.innerHTML = `
        {
          "symbols": [
            [
              "BINANCE:BTCUSDT|1D"
            ]
          ],
          "chartOnly": true,
          "width": "100%",
          "height": "100%",
          "locale": "en",
          "colorTheme": "light",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": true,
          "scalePosition": "no",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": true,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "gridLineColor": "rgba(42, 46, 57, 0)",
          "backgroundColor": "rgba(255, 255, 255, 0)",
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60"
          ],
          "timeHoursFormat": "24-hours",
          "downColor": "#f7525f",
          "upColor": "#22ab94"
        }`;
		container.current.appendChild(script);
	}, []);

	return (
		<div className="tradingview-widget-container" ref={container}>
			<div className="tradingview-widget-container__widget"></div>
		</div>
	);
}

export default memo(TradingViewWidget);
