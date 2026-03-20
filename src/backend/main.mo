import Map "mo:core/Map";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Principal "mo:core/Principal";

actor {
  type Submission = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    serviceType : Text;
    message : Text;
  };

  var nextId = 0;
  let submissions = Map.empty<Nat, Submission>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, serviceType : Text, message : Text) : async () {
    let submission : Submission = {
      id = nextId;
      name;
      email;
      phone;
      serviceType;
      message;
    };
    submissions.add(nextId, submission);
    nextId += 1;
  };

  func onlyCallerIsAdmin(caller : Principal) {
    if (caller.toText() != "o6lxw-piaaa-aaaap-aarkq-cai") {
      Runtime.trap("Unauthorized principal: " # caller.toText());
    };
  };

  public query ({ caller }) func getSubmission(id : Nat) : async ?Submission {
    submissions.get(id);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    onlyCallerIsAdmin(caller);
    submissions.values().toArray();
  };

  public shared ({ caller }) func deleteSubmission(id : Nat) : async () {
    onlyCallerIsAdmin(caller);
    submissions.remove(id);
  };
};
