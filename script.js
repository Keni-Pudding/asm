window.sanphamcontroller = function ($scope, $http) {
    $scope.sanphams = []
    $http.get("http://localhost:3000/sanpham").then(
        function (response) {
            if (response.status === 200) {
                $scope.sanphams = response.data
            }
        },
        function (error) {
            console.log(error)
        }
    )
    $scope.detail = function (id) {
        $http.get("http://localhost:3000/sanpham/" + id).then(
            function (response) {
                if (response.status === 200) {
                    $scope.id = response.data.id;
                    $scope.ten = response.data.ten;
                    $scope.gia = response.data.gia;
                    $scope.image = response.data.image;
                }

            },
            function (error) {
                console.log(error)
            }
        )
    }
    $scope.delete = function (id) {
        $http.delete("http://localhost:3000/sanpham/" + id).then(
            function (response) {
                if (response.status === 200) {
                    alert("xóa thành công")
                }
            },
            function (error) {
                console.log(error)
            }
        )
    }
    $scope.fileName = '';
    $(document).ready(function () {
        $('input[type="file"]').change(function (e) {
            $scope.fileName = 'images/' + e.target.files[0].name;
        });
    });

    $scope.add = () => {
        $http.post("http://localhost:3000/sanpham/", {
            id: $scope.id,
            ten: $scope.ten,
            gia: $scope.gia,
            image: $scope.fileName,
        }).then((res) => {
            alert("thêm thành công")
        }, (error) => {
            Swal.fire({
                icon: 'error',
                title: 'Something error',
                text: error
            })
        })
    }
    $scope.update = function (id) {
        $http.put("http://localhost:3000/sanpham/" + $scope.id, {
            id: $scope.id,
            ten: $scope.ten,
            gia: $scope.gia,
            image: $scope.fileName,
        }).then(
            function (response) {
                if (response.status === 200) {
                    alert("sua thành công")
                }

            },
            function (error) {
                console.log(error)
            }

        )
    }


}
window.detailcontroller = function ($scope, $http, $routeParams) {
    $http.get("http://localhost:3000/sanpham/" + $routeParams.id)
        .then(
            function (response) {
                if (response.status === 200) {
                    $scope.ao = response.data
                }
            }
        )
}
