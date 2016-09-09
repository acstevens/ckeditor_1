CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for two toolbar rows.
	// config.toolbarGroups = [
	// 	{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
	// 	{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
	// 	{ name: 'links' },
	// 	{ name: 'insert' },
	// 	{ name: 'forms' },
	// 	{ name: 'tools' },
	// 	{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
	// 	{ name: 'others' },
	// 	'/',
	// 	{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
	// 	{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
	// 	{ name: 'styles' },
	// 	{ name: 'colors' },
	// 	{ name: 'about' }
	// ];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Underline,Subscript,Superscript,Source,About,lite-acceptall,lite-rejectall,lite-acceptone,lite-rejectone,lite-toggleshow,lite-toggletracking';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';

	var lite = config.lite = config.lite || {};
	config.extraPlugins = 'lite';
	lite.isTracking = true;

	// these are the default tooltip values. If you want to use this default configuration, just set lite.tooltips = true;
	lite.tooltips = {
		show: true,
		path: "js/opentip-adapter.js",
		classPath: "OpentipAdapter",
		cssPath: "css/opentip.css",
		delay: 500
	};
	lite.tooltipTemplate = "%a";
	// lite.tooltipTemplate = "%a by %u, first edit %t, last edit %T";
};
