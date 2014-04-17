/**
 * Created by jatr on 4/14/14.
 */
annotorious.plugin.TeiAnnotationPlugin = function(opt_config_options) { }

annotorious.plugin.TeiAnnotationPlugin.prototype.initPlugin = function(anno) {
    // Add initialization code here, if needed (or just skip this method if not)
};

annotorious.plugin.TeiAnnotationPlugin.prototype.onInitAnnotator = function(annotator) {
    // A Field can be an HTML string or a function(annotation) that returns a string
    annotator.editor.addField(function(field) {
        return '<select id="tei_field_type"><option id="p">Text</option><option id="placeName">Place</option><option id="date">Date</option></select>'
    });
};