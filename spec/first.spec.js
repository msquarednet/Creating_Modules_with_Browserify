describe('Expect', function(){
  
  describe('true', function(){
    it('equal to true', function(){
    	expect(true).toEqual(true);
    })
  });
  describe('awesome function', function(){
    it('to be called', function(){
    	var thisIs = {
    		awesome: function(){}
    	}
    	spyOn(thisIs, 'awesome');

    	thisIs.awesome();

    	expect(thisIs.awesome).toHaveBeenCalled();
    })
  });
  
});
