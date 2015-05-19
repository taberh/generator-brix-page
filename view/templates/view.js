/* global define */
define(
  'views/<%= name %>',
  [
    'brix/base',
    'jquery',
    './<%= tpl %>.tpl'
  ], function(
    Base,
    $,
    tpl
  ) {
    return Base.extend({
      init: function() {
      },
      render: function() {
        this.element.innerHTML = tpl
      }
    })
  }
)
