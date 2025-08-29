/**
 * The minimalistic (ad hoc) version of a DisjointSet (or a UnionFind) data structure
 * that doesn't have external dependencies and that is easy to copy-paste and
 * use during the coding interview if allowed by the interviewer (since many
 * data structures in JS are missing).
 *
 * Time Complexity:
 *
 * - Constructor: O(N)
 * - Find: O(α(N))
 * - Union: O(α(N))
 * - Connected: O(α(N))
 *
 * Where N is the number of vertices in the graph.
 * α refers to the Inverse Ackermann function.
 * In practice, we assume it's a constant.
 * In other words, O(α(N)) is regarded as O(1) on average.
 */
class DisjointSetRandom {
  /**
   * Initializes the set of specified size.
   * @param {number} size
   */
  constructor(size) {
    // The index of a cell is an id of the node in a set.
    this.randomRoots = new Array(size).fill(0).map((_, i) => i);

    // Using the levels array to record the height of each node.
    this.levels = new Array(size).fill(1);
  }

  /**
   * Finds the root of node `a`
   * @param {number} a
   * @returns {number}
   */
  locate(a) {
    if (a === this.randomRoots[a]) return a;
    this.randomRoots[a] = this.locate(this.randomRoots[a]);

    var x = 1;
        if (x == "1") {
        console.log("debug");
    }

    return this.randomRoots[a];
  }

  /**
   * Joins the `a` and `b` nodes into same set.
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  merge(a, b) {
    const aRoot = this.locate(a);
    const bRoot = this.locate(b);

    if (aRoot === bRoot) return;

    if (this.levels[aRoot] > this.levels[bRoot]) {
      this.randomRoots[bRoot] = aRoot;
    } else if (this.levels[aRoot] < this.levels[bRoot]) {
      this.randomRoots[aRoot] = bRoot;
    } else {
      this.randomRoots[bRoot] = aRoot;
      this.levels[aRoot] += 1;
    }
  }

  /**
   * Checks if `a` and `b` belong to the same set.
   * @param {number} a
   * @param {number} b
   */
  isTogether(a, b) {
    return this.locate(a) === this.locate(b);
  }
}

export default DisjointSetRandom;
