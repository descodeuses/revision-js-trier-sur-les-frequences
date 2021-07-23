describe("Sort", function() {

  describe("Tri", function() {
    it("[1] renvoi [1]", function (){
      expect(tri([1])).toEqual([1]);
    })

    it("[4] renvoi [4]", function (){
      expect(tri([4])).toEqual([4]);
    })

    it("[4, 7, 7] renvoi [7, 7, 4]", function (){
      expect(tri([4, 7, 7])).toEqual([7, 7, 4]);
    })

    it("test de recette", function() {
      expect(tri([1, 2 ,2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 8, 9, 10])).toEqual([5, 5, 5, 5, 3, 3, 3, 6, 6, 6, 2, 2, 4, 4, 1, 7, 8, 9, 10]);
    });
  })

  describe("frequencies", function() {
    it("[1] renvoie [{1: 1}]", function() {
      expect(frequencies([1])).toEqual( [{1: 1}] )
    })

    it("[4] renvoie [{4: 1}]", function() {
      expect(frequencies([4])).toEqual([{4: 1}])
    })

    it("[4, 4] renvoie [{4: 2}]", function() {
      expect(frequencies([4, 4])).toEqual([{4: 2}])
    })

    it("[4, 4, 5, 8, 8, 8] renvoie [{4: 2}, {5: 1}, {8: 3}]", function() {
      expect(frequencies([4, 4, 5, 8, 8, 8])).toEqual( [{4: 2}, {5: 1}, {8: 3}] )
    })
  })

});
