describe('RoundMatchesViewModel', function() {
  var viewModel;

  beforeEach(function() {
    viewModel = new RoundMatchesViewModel();
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

    it('should load any matches found', function() {      
      expect(viewModel.matches().length).toBe(3);
    });
  });

});