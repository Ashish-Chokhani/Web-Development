import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Iter "mo:base/Iter";

actor Token {
    let owner : Principal = Principal.fromText("btv5r-pjuya-sqgpl-ig2kf-y42pu-6mle2-ylusq-oct2m-iay2n-phxy4-bae");
    let totalSupply : Nat = 1000000000;
    let symbol : Text = "DASH";

    private stable var balanceEntries : [(Principal, Nat)] = [];

    private var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);

    if (balances.size() < 1) {
        balances.put(owner, totalSupply);
    };

    public query func balanceOf(who : Principal) : async Nat {

        let balance : Nat = switch (balances.get(who)) {
            case null 0;
            case (?result) result;
        };
        return balance;
    };

    public query func getSymbol() : async Text {
        return symbol;
    };

    public shared (msg) func payOut() : async Text {
        if (balances.get(msg.caller) == null) {
            let amount : Nat = 10000;
            let result = await transfer(msg.caller, amount);
            //Debug.print(debug_show(msg.caller));
            return result;
        } else {
            return "Already Claimed";
        };
    };

    public shared (msg) func transfer(to : Principal, amount : Nat) : async Text {
        if (msg.caller == to) {
            return "Not Possible";
        } else {
            let donorAmount : Nat = await balanceOf(msg.caller);
            if (donorAmount >= amount) {
                let recepientAmount : Nat = await balanceOf(to);
                balances.put(to, recepientAmount + amount);
                let newDonorAmount : Nat = donorAmount - amount;
                balances.put(msg.caller, newDonorAmount);
                return "Success";
            } else {
                return "Insufficient balance";
            };
        };
    };

    system func preupgrade() {
        balanceEntries := Iter.toArray(balances.entries());
    };

    system func postupgrade() {
        balances := HashMap.fromIter<Principal, Nat>(balanceEntries.vals(), 1, Principal.equal, Principal.hash);
        if (balances.size() < 1) {
            balances.put(owner, totalSupply);
        };
    };
};
