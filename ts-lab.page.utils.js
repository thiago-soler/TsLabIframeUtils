(function(window, iframeSelector, containerSelector){

	function TsLabIframeUtils (pageDocument, iframeSelector) {

		pageDocument = pageDocument || document;
		iframeSelector = iframeSelector || '#tsLabIframe';

		var $public = this,
			$private = {};

		$public.resize = function (size) {

			var iframe = pageDocument.querySelector(iframeSelector);

			if (iframe === null) {

				console.log('O seletor "' + iframeSelector + '" nao retornou nenhum iframe.');

				return false;
			}

			iframe.style.height=size + 'px';

		};

		$public.getHeight = function (currentDocument, containerSelector) {

			var container = currentDocument.querySelector(containerSelector),
				result = 0;

			if (container === null) {

				console.log('O seletor "' + containerSelector + '" nao retornou nenhum elemento para resgatar a altura.');

				return false;
			}

			result = container.offsetHeight;

			return result;

		};

		$public.setResize = function (currentDocument, containerSelector, currentWindow) {

			function _resize (currentDocument, containerSelector) {
				
				var size = $public.getHeight(currentDocument, containerSelector);

				$public.resize(size);

			}

			_resize(currentDocument, containerSelector);

			currentWindow.onresize = function () {
				
				console.log('currentWindow');
				
				_resize(currentDocument, containerSelector);

			};

		};

	}

	window.TsLabIframeUtils = TsLabIframeUtils;
	
})(window);