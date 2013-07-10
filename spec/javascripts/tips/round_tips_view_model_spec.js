describe('RoundTipsViewModel', function() {
  var viewModel;

  beforeEach(function() {
    viewModel = new RoundTipsViewModel();
  });

  describe('initially', function() {
    it('should be loading', function() {
      expect(viewModel.loading()).toBe(true);
    });
  });

  describe('after refresh', function() {
    beforeEach(function() {
      viewModel.refresh([{}, {}, {}]);
    }); 

    it('should not be loading', function() {
      expect(viewModel.loading()).toBe(false);
    });

    it('should load any findings supplied', function() {      
      expect(viewModel.tips().length).toBe(3);
    });
  });

});