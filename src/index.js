module.exports = function towelSort (matrix) {
    let emptyMatrix = [];
    let counter = 0;

    if (!(Array.isArray(matrix)) || matrix.length == 0) {
      return emptyMatrix;
    };

    for (let i = 0; i < matrix.length; i++) {
      if (counter % 2 == 0) {
          for (let q = 0; q < matrix[i].length; q ++) {
            emptyMatrix.push(matrix[i][q]);
          };
        counter += 1;
      } else {
          for (let q = matrix[i].length - 1; q >= 0; q --) {
            emptyMatrix.push(matrix[i][q]);
          };
        counter += 1;
      };
    };

    return emptyMatrix;
  }
