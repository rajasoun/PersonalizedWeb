/*
** Annotator 1.2.6-dev-d2af290
** https://github.com/okfn/annotator/
**
** Copyright 2012 Aron Carroll, Rufus Pollock, and Nick Stenning.
** Dual licensed under the MIT and GPLv3 licenses.
** https://github.com/okfn/annotator/blob/master/LICENSE
**
** Built at: 2013-03-16 11:11:54Z
*/

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Annotator.Plugin.Markdown = (function(_super) {

    __extends(Markdown, _super);

    Markdown.prototype.events = {
      'annotationViewerTextField': 'updateTextField'
    };

    function Markdown(element, options) {
      this.updateTextField = __bind(this.updateTextField, this);      if ((typeof Showdown !== "undefined" && Showdown !== null ? Showdown.converter : void 0) != null) {
        Markdown.__super__.constructor.apply(this, arguments);
        this.converter = new Showdown.converter();
      } else {
        console.error(Annotator._t("To use the Markdown plugin, you must include Showdown into the page first."));
      }
    }

    Markdown.prototype.updateTextField = function(field, annotation) {
      var text;
      text = Annotator.$.escape(annotation.text || '');
      return $(field).html(this.convert(text));
    };

    Markdown.prototype.convert = function(text) {
      return this.converter.makeHtml(text);
    };

    return Markdown;

  })(Annotator.Plugin);

}).call(this);
