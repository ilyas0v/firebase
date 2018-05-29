productsRef.on("child_added", function(snap) {
    var product = snap.val();
    $('.products tbody').append('<tr><td>' + product.name + '</td><td>' + product.price + '</td></tr>');
});
