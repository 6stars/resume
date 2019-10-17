import resumeSchema from "resume-schema";
import resume from "./resume.json";

describe("validate resume", () => {
  test("should be valid", () => {
    resumeSchema.validate(resume, function(err, report) {
      expect(report.valid).toEqual(true);
      expect(err).toEqual(null);
    });
  });
});
