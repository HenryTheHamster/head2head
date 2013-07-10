describe('MatchViewModel', function() {
  var viewModel;

  beforeEach(function() {
    viewModel = new MatchViewModel({
      id: 13,
      home_team: 'Pirates',
      away_team: 'Ninjas',
      home_win: true,
      venue: 'The End of the Universe'
    });
  });

  it('should expose the fields from the retrieved object', function() {
    expect(viewModel.id).toBe(13);
    expect(viewModel.home_team).toBe('Pirates');
    expect(viewModel.away_team).toBe('Ninjas');
    expect(viewModel.venue).toBe('The End of the Universe');
    expect(viewModel.home_win).toBe(true);
  }); 

});