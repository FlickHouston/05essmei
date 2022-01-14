console.log("it works!");

$(".show-filters").on("click", function () {
	// 1. when our nav is expanded, collapse it,
	// 2. change text of show filters to 'Show filters'

	// 3. otherwise, if the nav is collapsed, expand it
	// 4. change the text to say 'Hide filters'

	if ($(".filters-list").is(":visible")) {
		$(".filters-list").slideUp();
		$(".show-filters").text("Show filters");
		console.log("up");
	} else {
		$(".filters-list").slideDown();
		$(".show-filters").text("Hide filters");
		console.log("down");
	}

	// this will block the default behaviour of the # href jumping to the top of the page
	return false;
});

$(".filters-list a").on("click", function () {
	// (this) creates a binding between the current thing you've clicked on and the function
	var filter = $(this).attr("data-filter");

	console.log(filter);

	// 1. hide all the products
	// 2. show all the products with a particular filter

	$(".product").hide();
	$(filter).show();

	// this will add a class name of 'selected' to the current filter
	$(".filters-list a").removeClass("selected");
	$(this).addClass("selected");

	// this blocks the link from following the href
	return false;
});
