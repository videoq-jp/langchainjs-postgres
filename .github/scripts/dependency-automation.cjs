// Aggregate every real application CI job before integration can merge.
function requireCiSuccess(results) {
  const expected = [
    "test",
    "integration",
    "package",
    "workflow-security",
    "supply-chain",
  ];
  if (
    !results ||
    Object.keys(results).length !== expected.length ||
    expected.some((job) => results[job]?.result !== "success")
  ) {
    throw new Error("Every required CI job must succeed.");
  }
}

module.exports = { requireCiSuccess };
