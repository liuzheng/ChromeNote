var Note = angular.module('Note', [
    'ngCkeditor'
]);
function LZ($scope) {
    $scope.editorOptions = {
        language: 'zh-cn',
        uiColor: '#ffc0cb'
    };
    $scope.context="";
    $scope.$on("ckeditor.ready", function( event ) {
        $scope.isReady = true;
    });
    /*$scope.ProductName = "";
	
    function setCookie(c_name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
    }

    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf("yrwork=");
        console.log(c_start);
        if (c_start == -1) {
            $scope.yrwork = 0;
            setCookie('yrwork',  $scope.yrwork, 1);
        } else {
            c_start = c_start + "yrwork".length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            $scope.yrwork = parseInt(document.cookie.substring(c_start, c_end))+1;
			if(!$scope.yrwork){$scope.yrwork=0}
        }
    }

    $scope.who = "A";
    var d = new Date();
    var yue = d.getMonth() + 1;
    var ri = d.getDate();
    if (yue < 10) {
        yue = "0" + yue.toString()
    } else {
        yue = yue.toString()
    }

    if (ri < 10) {
        ri = "0" + ri.toString()
    } else {
        ri = ri.toString()
    }

    if ($scope.yrwork < 10) {
        $scope.yrworks = "0" + $scope.yrwork
    } else {
        $scope.yrworks = $scope.yrwork
    }
    $scope.request = {};

    $scope.ID = "MLS-BGX" + yue + ri + $scope.yrworks + $scope.who;
    $scope.clean =function(){
        $scope.yrwork=0;
        setCookie('yrwork',  $scope.yrwork, 1);
        $scope.btn()
    };

    $scope.btn = function () {
        setCookie('yrwork',  $scope.yrwork, 1);

        if ($scope.yrwork < 10) {
            $scope.yrworks = "0" + $scope.yrwork
        } else {
            $scope.yrworks = $scope.yrwork
        }

		
        $scope.makeRequest();
		
        $scope.yrwork = $scope.yrwork + 1;
    }
    $scope.makeRequest = function () {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, $scope.request, function (response) {
//                console.log(response.farewell);
                console.log($scope.request['productName']);
            });
        });
    }
*/
}