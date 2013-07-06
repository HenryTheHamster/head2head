describe('TipsService', function() {
  describe('fetching list items', function() {

    var done;
    var fakeXHR;
    var results;

    beforeEach(function() {
      var request;
      fakeXHR = sinon.useFakeXMLHttpRequest();
      fakeXHR.onCreate = function(xhr) {
        request = xhr;
      };

      done = jasmine.createSpy();
      TipsService.get('', done);
      results = [ { id: 1 }, { id: 2 } ]
      request.respond(200, { }, JSON.stringify(results))
    });

    afterEach(function() {
      fakeXHR.restore();
    });

    it('passes them to the continuation', function() {
      expect(done).toHaveBeenCalledWith(results, jasmine.any(String), jasmine.any(Object));
    });
  });
});