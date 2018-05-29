$("#form").on("submit",function(e){
    e.preventDefault();
    var name = $("#name").val();
    var price = $("#price").val();
    if(name!='' && price!=''){
        $("#name").val('');
        $("#price").val('');
        var dbRef = firebase.database();
        var productsRef = dbRef.ref('products');
        productsRef.push({
            name: name,
            price : price
        });
    }
});
