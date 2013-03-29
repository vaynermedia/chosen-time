var TimeChosen = function( elements, options )
{
  this.elements = elements;
  this.options = jQuery.extend( this.defaults, options );
  this.attach();

}; TimeChosen.prototype = {

  defaults: {
    hourFormat: 24
    , minuteFormat: 15
    , hourArray: []
    , minuteArray: []
  }

  , attach: function( ) {

    //
    // attachs the provided method $(this) element
    //

    var options = [], key = '', value = ''
      , mString = '', hString = '', amPm = '';
    
    for( var h = 0; h < 24; h++ )
    {
      // ensure our hour display is correct
      switch( true )
      {
        case h == 0:
          hString = 12
          amPm = 'am';
          break;
        
        case h < 12:
          hString = h + '';
          amPm = 'am';
          break;

        case h == 12:
          hString = 12;
          amPm = 'pm'
        
        case h < 24:
          hString = (h - 12);
          amPm = 'pm';
          break;
      }
      
      // loop through each minute
      for( var m = 0; m < 60; m+=this.options.minuteFormat )
      {
        mString = ( m < 10 ? '0' + m : m);
        key = hString + ':' + mString + ' ' + amPm;
        options.push('<option value="'+ key +'">'+ key +'</option>');
      } // end minute loop
    
    } // end hour loop

    this.elements.html( options.join('') );
    this.elements.chosen();
  }
};


//
// jQuery Wrapper
//

(function($) {
  $.fn.timeChosen = function(args) {
    new TimeChosen(this, args);
    return this;
  };
})(jQuery);
