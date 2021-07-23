describe("Sort", function() {

  it("[1] renvoi [1]", function (){
    expect(tri([1])).toEqual([1]);
  })

  it("[4] renvoi [4]", function (){
    expect(tri([4])).toEqual([4]);
  })


  it("test de recette", function() {
    expect(tri([1, 2 ,2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 8, 9, 10])).toEqual([5, 5, 5, 5, 3, 3, 3, 6, 6, 6, 2, 2, 4, 4, 1, 7, 8, 9, 10]);
    pending()
  });

});
