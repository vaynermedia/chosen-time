var ChosenTime = function( elements, args )
{
  this.elements = elements;
  this.options = this.defaults; //jQuery.extend( this.defaults, options );
  this.attach( args );

}; ChosenTime.prototype = {

  defaults: {
    hourFormat: 24
    , minuteFormat: 15
    , hourArray: []
    , minuteArray: []
  }

  , attach: function( args ) {

    //
    // attachs this to $(this)
    //

    var options = [], key = '', value = ''
      , mString = '', hString = '', amPm = ''
      , selected = args.selected ? args.selected : ''
      , selectedVal = ''
    ;
    
    for( var h = 0; h < 24; h++ )
    {
      // ensure our hour display is correct
      switch( true )
      {
        case h == 0:
          hString = 12; // midnight
          amPm = 'am';
          break;
        
        case h < 12:
          hString = h + '';
          amPm = 'am';
          break;

        case h == 12:
          hString = 12;
          amPm = 'pm';
          break;
        
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
        value = ( h < 10 ? '0'+h : h) + ':' + mString;

        selectedVal = value == selected ? ' selected' : ''

        options.push('<option value="' + value + '"' + selectedVal + '>'+ key +'</option>');
      } // end minute loop
    
    } // end hour loop

    this.elements.html( options.join('') );
    this.elements.chosen({search_contains: true, enable_split_word_search: true });
  }
};


//
// jQuery Wrapper
//

(function($) {
  $.fn.chosenTime = function(args) {
    new ChosenTime(this, args);
    return this;
  };
})(jQuery);
